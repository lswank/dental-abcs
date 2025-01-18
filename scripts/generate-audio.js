#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const yaml = require('js-yaml');
const axios = require('axios');
const { program } = require('commander');

// Parse command line arguments
program
  .option('--api-key <key>', 'ElevenLabs API key')
  .option('--lang <language>', 'Language to generate (all for all languages)')
  .option('--config <path>', 'Path to voice preferences config')
  .option('--metadata <path>', 'Path to metadata file')
  .option('--output-dir <path>', 'Output directory for audio files')
  .parse(process.argv);

const options = program.opts();

// Load configuration
async function loadConfig() {
  const configFile = await fs.readFile(options.config, 'utf8');
  return yaml.load(configFile);
}

// Load or initialize metadata
async function loadMetadata() {
  try {
    const data = await fs.readFile(options.metadata, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return {};
  }
}

// Save metadata
async function saveMetadata(metadata) {
  await fs.writeFile(options.metadata, JSON.stringify(metadata, null, 2));
}

// Load alphabet content
async function loadAlphabetContent() {
  const contentPath = path.join(process.cwd(), 'src', 'content', 'alphabet.ts');
  const content = await fs.readFile(contentPath, 'utf8');
  
  // Create a temporary file with just the content we need
  const tempContent = `
    const content = ${content.match(/export const alphabetContent[^=]*=\s*(\[[\s\S]*?\n\];)/)[1]};
    console.log(JSON.stringify(content));
  `;
  
  const tempPath = path.join(process.cwd(), 'temp-content.js');
  await fs.writeFile(tempPath, tempContent);
  
  try {
    // Execute the temporary file and capture its output
    const { execSync } = require('child_process');
    const output = execSync(`node "${tempPath}"`).toString();
    
    // Parse the output
    const alphabetContent = JSON.parse(output);
    
    // Clean up
    await fs.unlink(tempPath);
    
    return alphabetContent;
  } catch (error) {
    // Clean up on error
    try {
      await fs.unlink(tempPath);
    } catch {}
    throw error;
  }
}

// Generate audio using ElevenLabs API
async function generateAudio(text, voiceId) {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;
  const response = await axios({
    method: 'POST',
    url,
    headers: {
      'Accept': 'audio/mpeg',
      'Content-Type': 'application/json',
      'xi-api-key': options.apiKey
    },
    data: {
      text,
      model_id: 'eleven_multilingual_v2',
      voice_settings: {
        stability: 0.75,
        similarity_boost: 0.75,
        style: 0.5,
        use_speaker_boost: true
      }
    },
    responseType: 'arraybuffer'
  });
  return response.data;
}

// Main function
async function main() {
  try {
    // Load configuration and metadata
    const config = await loadConfig();
    const metadata = await loadMetadata();
    
    // Determine which languages to process
    const languages = options.lang === 'all' 
      ? Object.keys(config.voices)
      : [options.lang];

    // Process each language
    for (const lang of languages) {
      const voiceConfig = config.voices[lang];
      if (!voiceConfig) {
        console.error(`No voice configuration found for language: ${lang}`);
        continue;
      }

      // Create language directory
      const langDir = path.join(options.outputDir, lang);
      await fs.mkdir(langDir, { recursive: true });

      // Get content from alphabetContent
      const alphabetContent = await loadAlphabetContent();

      // Process each letter
      for (const entry of alphabetContent) {
        const letter = entry.letter.toLowerCase();
        const word = entry.word[lang];
        const sentence = entry.sentence[lang];
        
        // Skip if no translation available
        if (!word || !sentence) {
          console.warn(`Missing translation for letter ${letter} in ${lang}`);
          continue;
        }

        const text = `${word}. ${sentence}`;
        const audioPath = path.join(langDir, `${letter}.mp3`);
        
        // Check if we need to generate new audio
        const metadataKey = `${lang}/${letter}`;
        if (metadata[metadataKey] && metadata[metadataKey].text === text) {
          console.log(`Skipping ${lang}/${letter} - already up to date`);
          continue;
        }

        console.log(`Generating audio for ${lang}/${letter}`);
        
        try {
          const audioData = await generateAudio(text, voiceConfig.voice_id);
          await fs.writeFile(audioPath, audioData);
          
          // Update metadata
          metadata[metadataKey] = {
            text,
            generated: new Date().toISOString(),
            voice: voiceConfig.name
          };
          
          // Save metadata after each successful generation
          await saveMetadata(metadata);
          
          // Add delay to respect rate limits
          await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
          console.error(`Error generating audio for ${lang}/${letter}:`, error.message);
        }
      }
    }

    console.log('Audio generation complete!');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main(); 