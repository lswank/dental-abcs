import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dental: {
          blue: {
            light: '#E3F2FD',
            DEFAULT: '#2196F3',
            dark: '#1976D2'
          },
          mint: {
            light: '#E0F2F1',
            DEFAULT: '#26A69A',
            dark: '#00796B'
          },
          coral: {
            light: '#FFEBEE',
            DEFAULT: '#FF5252',
            dark: '#D32F2F'
          }
        },
        dark: {
          bg: {
            primary: '#1A1B1E',
            secondary: '#2A2B2E',
            tertiary: '#3A3B3E'
          },
          text: {
            primary: '#E8E9EA',
            secondary: '#C8C9CA',
            tertiary: '#A8A9AA'
          },
          dental: {
            blue: {
              light: '#1E293B',
              DEFAULT: '#3B82F6',
              dark: '#60A5FA'
            },
            mint: {
              light: '#1E312D',
              DEFAULT: '#34D399',
              dark: '#6EE7B7'
            },
            coral: {
              light: '#312428',
              DEFAULT: '#F87171',
              dark: '#FCA5A5'
            }
          }
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dental': 'linear-gradient(to right bottom, #E3F2FD, #E0F2F1)',
        'dark-gradient-dental': 'linear-gradient(to right bottom, #1E293B, #1E312D)'
      }
    },
  },
  plugins: [],
} satisfies Config;
