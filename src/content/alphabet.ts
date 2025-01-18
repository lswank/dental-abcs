import { Translation } from '../types/content';

export interface AlphabetEntry {
  letter: string;
  word: Translation;
  sentence: Translation;
  animation?: string;
}

export const alphabetContent: AlphabetEntry[] = [
  {
    letter: "A",
    word: {
      en: "Alignment",
      es: "Alineación",
      fr: "Alignement",
      zh: "排列",
      ja: "歯並び",
      ko: "치아배열",
      vi: "Sắp xếp"
    },
    sentence: {
      en: "Aligning your teeth helps create a beautiful and healthy smile!",
      es: "¡Alinear tus dientes ayuda a crear una sonrisa hermosa y saludable!",
      fr: "L'alignement des dents aide à créer un sourire beau et sain !",
      zh: "整齐的牙齿帮助你拥有美丽健康的笑容！",
      ja: "歯並びを整えることで、美しく健康的な笑顔になります！",
      ko: "치아를 바르게 정렬하면 아름답고 건강한 미소를 만들 수 있어요!",
      vi: "Sắp xếp răng đều giúp tạo nên nụ cười đẹp và khỏe mạnh!"
    },
    animation: "teeth-straightening"
  },
  {
    letter: "B",
    word: {
      en: "Brushing",
      es: "Cepillado",
      fr: "Brossage",
      zh: "刷牙",
      ja: "歯磨き",
      ko: "칫솔질",
      vi: "Đánh răng"
    },
    sentence: {
      en: "Brushing twice a day keeps the cavities away!",
      es: "¡Cepillarse dos veces al día mantiene las caries alejadas!",
      fr: "Se brosser les dents deux fois par jour éloigne les caries !",
      zh: "每天刷牙两次，远离蛀牙！",
      ja: "一日二回の歯磨きで、むし歯を予防しましょう！",
      ko: "하루에 두 번 칫솔질하면 충치를 예방할 수 있어요!",
      vi: "Đánh răng hai lần mỗi ngày giúp phòng tránh sâu răng!"
    },
    animation: "toothbrush-motion"
  },
  {
    letter: "C",
    word: {
      en: "Cavity",
      es: "Caries",
      fr: "Carie",
      zh: "蛀牙",
      ja: "虫歯",
      ko: "충치",
      vi: "Sâu răng"
    },
    sentence: {
      en: "Cavities are tiny holes in teeth that we need to prevent.",
      es: "Las caries son pequeños agujeros en los dientes que debemos prevenir.",
      fr: "Les caries sont de petits trous dans les dents qu'il faut prévenir.",
      zh: "蛀牙是牙齿上的小洞，我们需要预防它。",
      ja: "虫歯は歯に空く小さな穴です。予防が大切ですよ。",
      ko: "충치는 치아에 생기는 작은 구멍이에요. 예방해야 해요.",
      vi: "Sâu răng là những lỗ nhỏ trên răng mà chúng ta cần phòng ngừa."
    },
    animation: "cavity-prevention"
  },
  {
    letter: "D",
    word: {
      en: "Dentist",
      es: "Dentista",
      fr: "Dentiste",
      zh: "牙医",
      ja: "歯医者",
      ko: "치과의사",
      vi: "Nha sĩ"
    },
    sentence: {
      en: "Dentists are friendly doctors who help keep our teeth healthy.",
      es: "Los dentistas son médicos amigables que ayudan a mantener nuestros dientes sanos.",
      fr: "Les dentistes sont des médecins sympathiques qui aident à garder nos dents en bonne santé.",
      zh: "牙医是帮助我们保持牙齿健康的友好医生。",
      ja: "歯医者さんは私たちの歯を健康に保つ優しい先生です。",
      ko: "치과 선생님은 우리의 치아를 건강하게 지켜주는 친절한 의사예요.",
      vi: "Nha sĩ là những bác sĩ thân thiện giúp giữ cho răng của chúng ta khỏe mạnh."
    },
    animation: "friendly-dentist"
  },
  {
    letter: "E",
    word: {
      en: "Enamel",
      es: "Esmalte",
      fr: "Émail",
      zh: "牙釉质",
      ja: "エナメル質",
      ko: "법랑질",
      vi: "Men răng"
    },
    sentence: {
      en: "Enamel is the strong outer layer that protects our teeth.",
      es: "El esmalte es la capa exterior fuerte que protege nuestros dientes.",
      fr: "L'émail est la couche extérieure solide qui protège nos dents.",
      zh: "牙釉质是保护牙齿的坚硬外层。",
      ja: "エナメル質は歯を守る強い外側の層です。",
      ko: "법랑질은 우리 치아를 보호하는 단단한 겉층이에요.",
      vi: "Men răng là lớp bảo vệ cứng bên ngoài của răng."
    },
    animation: "tooth-layers"
  },
  {
    letter: "F",
    word: {
      en: "Flossing",
      es: "Hilo Dental",
      fr: "Fil Dentaire",
      zh: "牙线",
      ja: "デンタルフロス",
      ko: "치실질",
      vi: "Chỉ nha khoa"
    },
    sentence: {
      en: "Flossing helps clean between teeth where brushes can't reach.",
      es: "El hilo dental ayuda a limpiar entre los dientes donde los cepillos no pueden llegar.",
      fr: "Le fil dentaire aide à nettoyer entre les dents là où les brosses ne peuvent pas atteindre.",
      zh: "使用牙线可以清洁牙刷够不到的牙缝。",
      ja: "デンタルフロスは歯ブラシが届かない歯と歯の間を掃除します。",
      ko: "치실은 칫솔이 닿지 않는 치아 사이를 깨끗하게 해줘요.",
      vi: "Chỉ nha khoa giúp làm sạch kẽ răng mà bàn chải không thể chạm tới."
    },
    animation: "flossing-motion"
  },
  {
    letter: "G",
    word: {
      en: "Gums",
      es: "Encías",
      fr: "Gencives",
      zh: "牙龈",
      ja: "歯茎",
      ko: "잇몸",
      vi: "Nướu răng"
    },
    sentence: {
      en: "Gums are the pink tissue that holds our teeth in place.",
      es: "Las encías son el tejido rosado que mantiene nuestros dientes en su lugar.",
      fr: "Les gencives sont le tissu rose qui maintient nos dents en place.",
      zh: "牙龈是固定牙齿的粉红色组织。",
      ja: "歯茎は歯を支えているピンク色の組織です。",
      ko: "잇몸은 우리의 치아를 제자리에 잡아주는 분홍색 조직이에요.",
      vi: "Nướu răng là mô hồng giữ cho răng chắc chắn."
    },
    animation: "healthy-gums"
  },
  {
    letter: "H",
    word: {
      en: "Hygiene",
      es: "Higiene",
      fr: "Hygiène",
      zh: "卫生",
      ja: "衛生",
      ko: "위생",
      vi: "Vệ sinh"
    },
    sentence: {
      en: "Hygiene habits help keep our mouth clean and fresh.",
      es: "Los hábitos de higiene ayudan a mantener nuestra boca limpia y fresca.",
      fr: "Les habitudes d'hygiène aident à garder notre bouche propre et fraîche.",
      zh: "良好的卫生习惯让口腔保持清洁和清新。",
      ja: "衛生習慣は口の中を清潔で爽やかに保ちます。",
      ko: "위생 습관은 우리의 입을 깨끗하고 상쾌하게 유지해줘요.",
      vi: "Thói quen vệ sinh giúp giữ miệng sạch sẽ và thơm tho."
    },
    animation: "dental-routine"
  },
  {
    letter: "I",
    word: {
      en: "Incisor",
      es: "Incisivo",
      fr: "Incisive",
      zh: "门牙",
      ja: "切歯",
      ko: "앞니",
      vi: "Răng cửa"
    },
    sentence: {
      en: "Incisors are the front teeth we use to bite our food.",
      es: "Los incisivos son los dientes frontales que usamos para morder nuestra comida.",
      fr: "Les incisives sont les dents de devant que nous utilisons pour mordre nos aliments.",
      zh: "门牙是我们用来咬食物的前面的牙齿。",
      ja: "切歯は食べ物を噛むための前歯です。",
      ko: "앞니는 음식을 깨물 때 사용하는 앞쪽 치아예요.",
      vi: "Răng cửa là những chiếc răng phía trước dùng để cắn thức ăn."
    },
    animation: "tooth-types"
  },
  {
    letter: "J",
    word: {
      en: "Jaw",
      es: "Mandíbula",
      fr: "Mâchoire",
      zh: "下颌",
      ja: "顎",
      ko: "턱",
      vi: "Hàm"
    },
    sentence: {
      en: "Jaws help us chew food and speak clearly.",
      es: "Las mandíbulas nos ayudan a masticar la comida y hablar claramente.",
      fr: "Les mâchoires nous aident à mâcher les aliments et à parler clairement.",
      zh: "下颌帮助我们咀嚼食物和清晰地说话。",
      ja: "顎は食べ物を噛んだり、はっきりと話したりするのを助けます。",
      ko: "턱은 음식을 씹고 또렷하게 말할 수 있게 도와줘요.",
      vi: "Hàm giúp chúng ta nhai thức ăn và nói rõ ràng."
    },
    animation: "jaw-movement"
  },
  {
    letter: "K",
    word: {
      en: "Kindness",
      es: "Kindness",
      fr: "Kindness",
      zh: "友善",
      ja: "親切",
      ko: "친절",
      vi: "Tử tế"
    },
    sentence: {
      en: "Kind smiles make everyone feel happy and welcome!",
      es: "¡Las sonrisas amables hacen que todos se sientan felices y bienvenidos!",
      fr: "Les sourires gentils font que tout le monde se sent heureux et bienvenu !",
      zh: "友善的微笑让每个人都感到快乐和受欢迎！",
      ja: "優しい笑顔は、みんなを幸せで温かい気持ちにします！",
      ko: "친절한 미소는 모든 사람을 행복하고 환영받는 기분이 들게 해요!",
      vi: "Nụ cười tử tế làm cho mọi người cảm thấy vui vẻ và được chào đón!"
    },
    animation: "smiling-faces"
  },
  {
    letter: "L",
    word: {
      en: "Lips",
      es: "Labios",
      fr: "Lèvres",
      zh: "嘴唇",
      ja: "唇",
      ko: "입술",
      vi: "Môi"
    },
    sentence: {
      en: "Lips help us speak, smile, and keep food in our mouth.",
      es: "Los labios nos ayudan a hablar, sonreír y mantener la comida en nuestra boca.",
      fr: "Les lèvres nous aident à parler, sourire et garder la nourriture dans notre bouche.",
      zh: "嘴唇帮助我们说话、微笑，并保持食物在口中。",
      ja: "唇は話したり、笑ったり、食べ物を口の中に入れておくのを助けます。",
      ko: "입술은 말하고, 웃고, 음식을 입 안에 잘 담아두는 것을 도와줘요.",
      vi: "Môi giúp chúng ta nói chuyện, cười và giữ thức ăn trong miệng."
    },
    animation: "lip-movements"
  },
  {
    letter: "M",
    word: {
      en: "Molar",
      es: "Molar",
      fr: "Molaire",
      zh: "臼齿",
      ja: "奥歯",
      ko: "어금니",
      vi: "Răng hàm"
    },
    sentence: {
      en: "Molars are the big teeth at the back that grind our food.",
      es: "Los molares son los dientes grandes en la parte posterior que muelen nuestra comida.",
      fr: "Les molaires sont les grosses dents à l'arrière qui broient notre nourriture.",
      zh: "臼齿是后面的大牙齿，用来研磨食物。",
      ja: "奥歯は食べ物を細かく砕く後ろの大きな歯です。",
      ko: "어금니는 음식을 잘게 부수는 뒤쪽의 큰 치아예요.",
      vi: "Răng hàm là những chiếc răng to ở phía sau dùng để nghiền nát thức ăn."
    },
    animation: "molar-grinding"
  },
  {
    letter: "N",
    word: {
      en: "Nutrition",
      es: "Nutrición",
      fr: "Nutrition",
      zh: "营养",
      ja: "栄養",
      ko: "영양",
      vi: "Dinh dưỡng"
    },
    sentence: {
      en: "Nutritious foods help build strong teeth and bones.",
      es: "Los alimentos nutritivos ayudan a construir dientes y huesos fuertes.",
      fr: "Les aliments nutritifs aident à construire des dents et des os solides.",
      zh: "营养丰富的食物帮助建立强壮的牙齿和骨骼。",
      ja: "栄養のある食べ物は丈夫な歯と骨を作ります。",
      ko: "영양가 있는 음식은 튼튼한 치아와 뼈를 만드는 데 도움을 줘요.",
      vi: "Thực phẩm giàu dinh dưỡng giúp xây dựng răng và xương chắc khỏe."
    },
    animation: "healthy-foods"
  },
  {
    letter: "O",
    word: {
      en: "Orthodontist",
      es: "Ortodoncista",
      fr: "Orthodontiste",
      zh: "正畸医生",
      ja: "矯正歯科医",
      ko: "치아교정전문의",
      vi: "Bác sĩ chỉnh nha"
    },
    sentence: {
      en: "Orthodontists help straighten teeth for perfect smiles.",
      es: "Los ortodoncistas ayudan a enderezar los dientes para sonrisas perfectas.",
      fr: "Les orthodontistes aident à redresser les dents pour des sourires parfaits.",
      zh: "正畸医生帮助矫正牙齿，让笑容更完美。",
      ja: "矯正歯科医は歯並びを整えて、完璧な笑顔を作ります。",
      ko: "치아교정전문의는 완벽한 미소를 위해 치아를 반듯하게 해줘요.",
      vi: "Bác sĩ chỉnh nha giúp làm răng thẳng để có nụ cười hoàn hảo."
    },
    animation: "braces-adjustment"
  },
  {
    letter: "P",
    word: {
      en: "Plaque",
      es: "Placa",
      fr: "Plaque",
      zh: "牙菌斑",
      ja: "歯垢",
      ko: "치태",
      vi: "Cao răng"
    },
    sentence: {
      en: "Plaque is sticky stuff we need to brush away.",
      es: "La placa es una sustancia pegajosa que necesitamos cepillar.",
      fr: "La plaque est une substance collante qu'il faut brosser.",
      zh: "牙菌斑是需要刷掉的粘性物质。",
      ja: "歯垢は歯ブラシで落とさなければならない粘着物です。",
      ko: "치태는 칫솔로 닦아내야 하는 끈적끈적한 것이에요.",
      vi: "Cao răng là chất dính cần được đánh răng để loại bỏ."
    },
    animation: "plaque-removal"
  },
  {
    letter: "Q",
    word: {
      en: "Quick",
      es: "Rápido",
      fr: "Rapide",
      zh: "快速",
      ja: "早期",
      ko: "빠른",
      vi: "Nhanh chóng"
    },
    sentence: {
      en: "Quick check-ups help catch problems early!",
      es: "¡Los chequeos rápidos ayudan a detectar problemas temprano!",
      fr: "Les contrôles rapides aident à détecter les problèmes tôt !",
      zh: "及时检查有助于早期发现问题！",
      ja: "早期の検査で問題を早く見つけることができます！",
      ko: "빠른 검진은 문제를 일찍 발견하는 데 도움이 돼요!",
      vi: "Kiểm tra nhanh giúp phát hiện sớm các vấn đề!"
    },
    animation: "dental-checkup"
  },
  {
    letter: "R",
    word: {
      en: "Rinse",
      es: "Enjuague",
      fr: "Rincer",
      zh: "漱口",
      ja: "うがい",
      ko: "양치",
      vi: "Súc miệng"
    },
    sentence: {
      en: "Rinsing with water helps keep our mouth clean.",
      es: "Enjuagarse con agua ayuda a mantener nuestra boca limpia.",
      fr: "Se rincer avec de l'eau aide à garder notre bouche propre.",
      zh: "用水漱口有助于保持口腔清洁。",
      ja: "水でうがいをすると口の中を清潔に保てます。",
      ko: "물로 양치하면 입안을 깨끗하게 유지할 수 있어요.",
      vi: "Súc miệng bằng nước giúp giữ miệng sạch sẽ."
    },
    animation: "rinsing-motion"
  },
  {
    letter: "S",
    word: {
      en: "Smile",
      es: "Sonrisa",
      fr: "Sourire",
      zh: "微笑",
      ja: "笑顔",
      ko: "미소",
      vi: "Nụ cười"
    },
    sentence: {
      en: "Smiles are the best way to share happiness!",
      es: "¡Las sonrisas son la mejor manera de compartir felicidad!",
      fr: "Les sourires sont la meilleure façon de partager le bonheur !",
      zh: "微笑是分享快乐的最好方式！",
      ja: "笑顔は幸せを分かち合う一番いい方法です！",
      ko: "미소는 행복을 나누는 가장 좋은 방법이에요!",
      vi: "Nụ cười là cách tốt nhất để chia sẻ niềm vui!"
    },
    animation: "bright-smile"
  },
  {
    letter: "T",
    word: {
      en: "Tongue",
      es: "Lengua",
      fr: "Langue",
      zh: "舌头",
      ja: "舌",
      ko: "혀",
      vi: "Lưỡi"
    },
    sentence: {
      en: "Tongues help us taste food and keep our mouth clean.",
      es: "La lengua nos ayuda a saborear la comida y mantener nuestra boca limpia.",
      fr: "La langue nous aide à goûter les aliments et à garder notre bouche propre.",
      zh: "舌头帮助我们品尝食物并保持口腔清洁。",
      ja: "舌は食べ物の味を感じたり、口の中を清潔に保ったりします。",
      ko: "혀는 음식의 맛을 느끼고 입안을 깨끗하게 유지하는 것을 도와줘요.",
      vi: "Lưỡi giúp chúng ta nếm thức ăn và giữ miệng sạch sẽ."
    },
    animation: "tongue-cleaning"
  },
  {
    letter: "U",
    word: {
      en: "Ultrasonic",
      es: "Ultrasónico",
      fr: "Ultrasonique",
      zh: "超声波",
      ja: "超音波",
      ko: "초음파",
      vi: "Siêu âm"
    },
    sentence: {
      en: "Ultrasonic cleaning helps make teeth sparkly clean!",
      es: "¡La limpieza ultrasónica ayuda a dejar los dientes brillantes y limpios!",
      fr: "Le nettoyage ultrasonique aide à rendre les dents étincelantes !",
      zh: "超声波清洁帮助牙齿变得闪亮干净！",
      ja: "超音波クリーニングで歯がピカピカになります！",
      ko: "초음파 세척은 치아를 반짝반짝 깨끗하게 만들어줘요!",
      vi: "Làm sạch bằng siêu âm giúp răng sạch bóng!"
    },
    animation: "cleaning-tool"
  },
  {
    letter: "V",
    word: {
      en: "Vitamins",
      es: "Vitaminas",
      fr: "Vitamines",
      zh: "维生素",
      ja: "ビタミン",
      ko: "비타민",
      vi: "Vitamin"
    },
    sentence: {
      en: "Vitamins help our teeth stay strong and healthy.",
      es: "Las vitaminas ayudan a mantener nuestros dientes fuertes y saludables.",
      fr: "Les vitamines aident nos dents à rester fortes et saines.",
      zh: "维生素帮助我们的牙齿保持强壮和健康。",
      ja: "ビタミンは歯を丈夫で健康に保ちます。",
      ko: "비타민은 우리의 치아를 튼튼하고 건강하게 유지해줘요.",
      vi: "Vitamin giúp răng chúng ta chắc khỏe."
    },
    animation: "vitamin-sources"
  },
  {
    letter: "W",
    word: {
      en: "Wisdom",
      es: "Sabiduría",
      fr: "Sagesse",
      zh: "智齿",
      ja: "親知らず",
      ko: "사랑니",
      vi: "Răng khôn"
    },
    sentence: {
      en: "Wisdom teeth are the last teeth to grow in our mouth.",
      es: "Las muelas del juicio son los últimos dientes en crecer en nuestra boca.",
      fr: "Les dents de sagesse sont les dernières dents à pousser dans notre bouche.",
      zh: "智齿是最后长出来的牙齿。",
      ja: "親知らずは最後に生えてくる歯です。",
      ko: "사랑니는 우리 입에서 마지막으로 나는 치아예요.",
      vi: "Răng khôn là những chiếc răng mọc sau cùng trong miệng chúng ta."
    },
    animation: "wisdom-teeth"
  },
  {
    letter: "X",
    word: {
      en: "X-ray",
      es: "Rayos X",
      fr: "Rayon X",
      zh: "X光",
      ja: "レントゲン",
      ko: "엑스레이",
      vi: "Tia X"
    },
    sentence: {
      en: "X-rays help dentists see inside our teeth.",
      es: "Los rayos X ayudan a los dentistas a ver dentro de nuestros dientes.",
      fr: "Les rayons X aident les dentistes à voir à l'intérieur de nos dents.",
      zh: "X光帮助牙医看到牙齿内部。",
      ja: "レントゲンで歯医者さんは歯の中を見ることができます。",
      ko: "엑스레이는 치과 선생님이 우리 치아 속을 볼 수 있게 해줘요.",
      vi: "Tia X giúp nha sĩ nhìn được bên trong răng của chúng ta."
    },
    animation: "dental-xray"
  },
  {
    letter: "Y",
    word: {
      en: "Yearly",
      es: "Anual",
      fr: "Annuel",
      zh: "年度",
      ja: "年一回",
      ko: "연간",
      vi: "Hàng năm"
    },
    sentence: {
      en: "Yearly visits to the dentist keep our smiles bright!",
      es: "¡Las visitas anuales al dentista mantienen nuestras sonrisas brillantes!",
      fr: "Les visites annuelles chez le dentiste gardent nos sourires éclatants !",
      zh: "每年看牙医让我们的笑容保持灿烂！",
      ja: "年一回の歯医者さん検診で笑顔を輝かせましょう！",
      ko: "일 년에 한 번 치과 검진으로 우리의 미소를 밝게 유지해요!",
      vi: "Thăm khám nha sĩ hàng năm giúp nụ cười của chúng ta tươi sáng!"
    },
    animation: "calendar-checkup"
  },
  {
    letter: "Z",
    word: {
      en: "Zinc",
      es: "Zinc",
      fr: "Zinc",
      zh: "锌",
      ja: "亜鉛",
      ko: "아연",
      vi: "Kẽm"
    },
    sentence: {
      en: "Zinc is a mineral that helps keep our teeth strong.",
      es: "El zinc es un mineral que ayuda a mantener nuestros dientes fuertes.",
      fr: "Le zinc est un minéral qui aide à garder nos dents fortes.",
      zh: "锌是帮助保持牙齿强壮的矿物质。",
      ja: "亜鉛は歯を丈夫に保つミネラルです。",
      ko: "아연은 우리의 치아를 튼튼하게 유지하는 데 도움을 주는 미네랄이에요.",
      vi: "Kẽm là khoáng chất giúp răng chúng ta chắc khỏe."
    },
    animation: "mineral-benefits"
  }
]; 