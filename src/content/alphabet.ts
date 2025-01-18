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
      en: "Appointment",
      es: "Cita",
      fr: "Rendez-vous",
      zh: "排列",
      ja: "歯並び",
      ko: "치아배열",
      vi: "Sắp xếp"
    },
    sentence: {
      en: "A special time when you visit the dentist to check your teeth",
      es: "Un momento especial cuando visitas al dentista para revisar tus dientes",
      fr: "Un moment spécial où tu visites le dentiste pour vérifier tes dents",
      zh: "整齐的牙齿帮助你拥有美丽健康的笑容！",
      ja: "歯並びを整えることで、美しく健康的な笑顔になります！",
      ko: "치아를 바르게 정렬하면 아름답고 건강한 미소를 만들 수 있어요!",
      vi: "Sắp xếp răng đều giúp tạo nên nụ cười đẹp và khỏe mạnh!"
    },
    animation: "dentist-visit"
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
      en: "Using a toothbrush to clean your teeth to keep them healthy and shiny",
      es: "Usar un cepillo de dientes para limpiar tus dientes y mantenerlos sanos y brillantes",
      fr: "Utiliser une brosse à dents pour nettoyer tes dents et les garder saines et brillantes",
      zh: "每天刷牙两次，远离蛀牙！",
      ja: "一日二回の歯磨きで、むし歯を予防しましょう！",
      ko: "하루에 두 번 칫솔질하면 충치를 예방할 수 있어요!",
      vi: "Đánh răng hai lần mỗi ngày giúp phòng tránh sâu răng!"
    },
    animation: "brushing"
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
      en: "A small hole in your tooth caused by sugar bugs (germs)",
      es: "Un pequeño agujero en tu diente causado por los bichitos del azúcar (gérmenes)",
      fr: "Un petit trou dans ta dent causé par les microbes du sucre (germes)",
      zh: "蛀牙是牙齿上的小洞，我们需要预防它。",
      ja: "虫歯は歯に空く小さな穴です。予防が大切ですよ。",
      ko: "충치는 치아에 생기는 작은 구멍이에요. 예방해야 해요.",
      vi: "Sâu răng là những lỗ nhỏ trên răng mà chúng ta cần phòng ngừa."
    },
    animation: "cavity"
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
      en: "A tooth doctor who helps keep your smile bright and healthy",
      es: "Un doctor de dientes que ayuda a mantener tu sonrisa brillante y saludable",
      fr: "Un docteur des dents qui aide à garder ton sourire éclatant et en bonne santé",
      zh: "牙医是帮助我们保持牙齿健康的友好医生。",
      ja: "歯医者さんは私たちの歯を健康に保つ優しい先生です。",
      ko: "치과 선생님은 우리의 치아를 건강하게 지켜주는 친절한 의사예요.",
      vi: "Nha sĩ là những bác sĩ thân thiện giúp giữ cho răng của chúng ta khỏe mạnh."
    },
    animation: "dentist"
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
      en: "The hard, shiny outer layer that protects your teeth",
      es: "La capa externa dura y brillante que protege tus dientes",
      fr: "La couche extérieure dure et brillante qui protège tes dents",
      zh: "牙釉质是保护牙齿的坚硬外层。",
      ja: "エナメル質は歯を守る強い外側の層です。",
      ko: "법랑질은 우리 치아를 보호하는 단단한 겉층이에요.",
      vi: "Men răng là lớp bảo vệ cứng bên ngoài của răng."
    },
    animation: "enamel"
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
      en: "Using a special string to clean between your teeth",
      es: "Usar un hilo especial para limpiar entre tus dientes",
      fr: "Utiliser un fil spécial pour nettoyer entre tes dents",
      zh: "使用牙线可以清洁牙刷够不到的牙缝。",
      ja: "デンタルフロスは歯ブラシが届かない歯と歯の間を掃除します。",
      ko: "치실은 칫솔이 닿지 않는 치아 사이를 깨끗하게 해줘요.",
      vi: "Chỉ nha khoa giúp làm sạch kẽ răng mà bàn chải không thể chạm tới."
    },
    animation: "flossing"
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
      en: "The pink part of your mouth that holds your teeth in place",
      es: "La parte rosada de tu boca que mantiene tus dientes en su lugar",
      fr: "La partie rose de ta bouche qui maintient tes dents en place",
      zh: "牙龈是固定牙齿的粉红色组织。",
      ja: "歯茎は歯を支えているピンク色の組織です。",
      ko: "잇몸은 우리의 치아를 제자리에 잡아주는 분홍색 조직이에요.",
      vi: "Nướu răng là mô hồng giữ cho răng chắc chắn."
    },
    animation: "gums"
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
      en: "Keeping your teeth and mouth clean and healthy",
      es: "Mantener tus dientes y boca limpios y saludables",
      fr: "Garder tes dents et ta bouche propres et en bonne santé",
      zh: "良好的卫生习惯让口腔保持清洁和清新。",
      ja: "衛生習慣は口の中を清潔で爽やかに保ちます。",
      ko: "위생 습관은 우리의 입을 깨끗하고 상쾌하게 유지해줘요.",
      vi: "Thói quen vệ sinh giúp giữ miệng sạch sẽ và thơm tho."
    },
    animation: "hygiene"
  },
  {
    letter: "I",
    word: {
      en: "Incisors",
      es: "Incisivos",
      fr: "Incisives",
      zh: "门牙",
      ja: "切歯",
      ko: "앞니",
      vi: "Răng cửa"
    },
    sentence: {
      en: "Your front teeth that help you bite into food",
      es: "Tus dientes delanteros que te ayudan a morder la comida",
      fr: "Tes dents de devant qui t'aident à mordre dans les aliments",
      zh: "门牙是我们用来咬食物的前面的牙齿。",
      ja: "切歯は食べ物を噛むための前歯です。",
      ko: "앞니는 음식을 깨물 때 사용하는 앞쪽 치아예요.",
      vi: "Răng cửa là những chiếc răng phía trước dùng để cắn thức ăn."
    },
    animation: "incisors"
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
      en: "The part of your face that holds your teeth and helps you chew",
      es: "La parte de tu cara que sostiene tus dientes y te ayuda a masticar",
      fr: "La partie de ton visage qui tient tes dents et t'aide à mâcher",
      zh: "下颌帮助我们咀嚼食物和清晰地说话。",
      ja: "顎は食べ物を噛んだり、はっきりと話したりするのを助けます。",
      ko: "턱은 음식을 씹고 또렷하게 말할 수 있게 도와줘요.",
      vi: "Hàm giúp chúng ta nhai thức ăn và nói rõ ràng."
    },
    animation: "jaw"
  },
  {
    letter: "K",
    word: {
      en: "Kids",
      es: "Niños",
      fr: "Enfants",
      zh: "友善",
      ja: "親切",
      ko: "친절",
      vi: "Tử tế"
    },
    sentence: {
      en: "Young people like you who are learning to take care of their teeth",
      es: "Personas jóvenes como tú que están aprendiendo a cuidar sus dientes",
      fr: "Les jeunes comme toi qui apprennent à prendre soin de leurs dents",
      zh: "友善的微笑让每个人都感到快乐和受欢迎！",
      ja: "優しい笑顔は、みんなを幸せで温かい気持ちにします！",
      ko: "친절한 미소는 모든 사람을 행복하고 환영받는 기분이 들게 해요!",
      vi: "Nụ cười tử tế làm cho mọi người cảm thấy vui vẻ và được chào đón!"
    },
    animation: "kids"
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
      en: "The soft part around your mouth that helps you smile and talk",
      es: "La parte suave alrededor de tu boca que te ayuda a sonreír y hablar",
      fr: "La partie douce autour de ta bouche qui t'aide à sourire et à parler",
      zh: "嘴唇帮助我们说话、微笑，并保持食物在口中。",
      ja: "唇は話したり、笑ったり、食べ物を口の中に入れておくのを助けます。",
      ko: "입술은 말하고, 웃고, 음식을 입 안에 잘 담아두는 것을 도와줘요.",
      vi: "Môi giúp chúng ta nói chuyện, cười và giữ thức ăn trong miệng."
    },
    animation: "lips"
  },
  {
    letter: "M",
    word: {
      en: "Molars",
      es: "Molares",
      fr: "Molaires",
      zh: "臼齿",
      ja: "奥歯",
      ko: "어금니",
      vi: "Răng hàm"
    },
    sentence: {
      en: "Your big teeth in the back that help you chew food",
      es: "Tus dientes grandes en la parte de atrás que te ayudan a masticar la comida",
      fr: "Tes grosses dents à l'arrière qui t'aident à mâcher les aliments",
      zh: "臼齿是后面的大牙齿，用来研磨食物。",
      ja: "奥歯は食べ物を細かく砕く後ろの大きな歯です。",
      ko: "어금니는 음식을 잘게 부수는 뒤쪽의 큰 치아예요.",
      vi: "Răng hàm là những chiếc răng to ở phía sau dùng để nghiền nát thức ăn."
    },
    animation: "molars"
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
      en: "Eating healthy foods that make your teeth strong",
      es: "Comer alimentos saludables que hacen tus dientes fuertes",
      fr: "Manger des aliments sains qui rendent tes dents fortes",
      zh: "营养丰富的食物帮助建立强壮的牙齿和骨骼。",
      ja: "栄養のある食べ物は丈夫な歯と骨を作ります。",
      ko: "영양가 있는 음식은 튼튼한 치아와 뼈를 만드는 데 도움을 줘요.",
      vi: "Thực phẩm giàu dinh dưỡng giúp xây dựng răng và xương chắc khỏe."
    },
    animation: "nutrition"
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
      en: "A special dentist who helps make crooked teeth straight",
      es: "Un dentista especial que ayuda a enderezar los dientes torcidos",
      fr: "Un dentiste spécial qui aide à redresser les dents tordues",
      zh: "正畸医生帮助矫正牙齿，让笑容更完美。",
      ja: "矯正歯科医は歯並びを整えて、完璧な笑顔を作ります。",
      ko: "치아교정전문의는 완벽한 미소를 위해 치아를 반듯하게 해줘요.",
      vi: "Bác sĩ chỉnh nha giúp làm răng thẳng để có nụ cười hoàn hảo."
    },
    animation: "orthodontist"
  },
  {
    letter: "P",
    word: {
      en: "Patient",
      es: "Paciente",
      fr: "Patient",
      zh: "患者",
      ja: "患者",
      ko: "환자",
      vi: "Bệnh nhân"
    },
    sentence: {
      en: "Someone who visits the dentist for tooth care",
      es: "Alguien que visita al dentista para el cuidado de sus dientes",
      fr: "Quelqu'un qui visite le dentiste pour prendre soin de ses dents",
      zh: "患者是去看牙医的人。",
      ja: "患者は歯医者さんに訪れる人です。",
      ko: "환자는 치과 선생님에게 방문하는 사람입니다.",
      vi: "Bệnh nhân là người đến khám răng."
    },
    animation: "patient"
  },
  {
    letter: "Q",
    word: {
      en: "Quadrant",
      es: "Cuadrante",
      fr: "Quadrant",
      zh: "象限",
      ja: "象限",
      ko: "사분면",
      vi: "Góc phần tư"
    },
    sentence: {
      en: "One of the four parts of your mouth (top right, top left, bottom right, bottom left)",
      es: "Una de las cuatro partes de tu boca (arriba derecha, arriba izquierda, abajo derecha, abajo izquierda)",
      fr: "Une des quatre parties de ta bouche (haut droite, haut gauche, bas droite, bas gauche)",
      zh: "口腔的四个部分（上右、上左、下右、下左）",
      ja: "口の四つの部分（上右、上左、下右、下左）",
      ko: "입의 네 부분 (위 우측, 위 좌측, 아래 우측, 아래 좌측)",
      vi: "Một trong bốn phần của miệng (trên phải, trên trái, dưới phải, dưới trái)"
    },
    animation: "quadrant"
  },
  {
    letter: "R",
    word: {
      en: "Root canal",
      es: "Conducto radicular",
      fr: "Traitement de racine",
      zh: "根管治疗",
      ja: "根管治療",
      ko: "뿌리 치료",
      vi: "Chụp răng"
    },
    sentence: {
      en: "A special way to fix a tooth that has a big cavity",
      es: "Una forma especial de arreglar un diente que tiene una caries grande",
      fr: "Une façon spéciale de réparer une dent qui a une grosse carie",
      zh: "根管治疗是治疗牙齿深部蛀牙的特殊方法。",
      ja: "根管治療は深いむし歯を治療する特殊な方法です。",
      ko: "뿌리 치료는 깊은 충치를 치료하는 특별한 방법입니다.",
      vi: "Chụp răng là phương pháp đặc biệt để điều trị răng có sâu răng."
    },
    animation: "root-canal"
  },
  {
    letter: "S",
    word: {
      en: "Sugar Bugs",
      es: "Bichitos del Azúcar",
      fr: "Microbes du Sucre",
      zh: "糖虫",
      ja: "糖虫",
      ko: "설탕 벌레",
      vi: "Ruồi đường"
    },
    sentence: {
      en: "Tiny germs that can hurt your teeth if you don't brush them away",
      es: "Pequeños gérmenes que pueden dañar tus dientes si no los cepillas",
      fr: "Des petits microbes qui peuvent abîmer tes dents si tu ne les brosses pas",
      zh: "糖虫是微小的昆虫，如果你不刷牙，它们可能会伤害你的牙齿。",
      ja: "糖虫は小さな昆虫です。むし歯を取り除かないと、歯を傷める可能性があります。",
      ko: "설탕 벌레는 작은 벌레로, 칫솔을 닦지 않으면 치아를 손상시킬 수 있습니다.",
      vi: "Ruồi đường là những con ruồi nhỏ, nếu chúng ta không đánh răng, chúng có thể gây hại cho răng."
    },
    animation: "sugar-bugs"
  },
  {
    letter: "T",
    word: {
      en: "Teeth",
      es: "Dientes",
      fr: "Dents",
      zh: "牙齿",
      ja: "歯",
      ko: "치아",
      vi: "Răng"
    },
    sentence: {
      en: "The hard white parts in your mouth that help you eat and smile",
      es: "Las partes duras y blancas en tu boca que te ayudan a comer y sonreír",
      fr: "Les parties dures et blanches dans ta bouche qui t'aident à manger et à sourire",
      zh: "牙齿是口腔中坚硬白色的部分，帮助你咀嚼和微笑。",
      ja: "歯は口の中にある白くて硬い部分です。食べ物を噛んだり、笑ったりするのを助けます。",
      ko: "치아는 입 안에 있는 하얀 부분으로, 음식을 씹고 웃는 데 도움을 줍니다.",
      vi: "Răng là những phần trắng và cứng trong miệng giúp chúng ta nhai thức ăn và cười."
    },
    animation: "teeth"
  },
  {
    letter: "U",
    word: {
      en: "Unerupted tooth",
      es: "Diente no erupcionado",
      fr: "Dent incluse",
      zh: "未萌出的牙齿",
      ja: "未萌出の歯",
      ko: "미모치",
      vi: "Răng chưa mọc"
    },
    sentence: {
      en: "A tooth that hasn't poked through your gums yet",
      es: "Un diente que todavía no ha salido a través de tus encías",
      fr: "Une dent qui n'a pas encore percé à travers tes gencives",
      zh: "未萌出的牙齿是尚未穿出牙龈的牙齿。",
      ja: "未萌出の歯は歯の中に出ていない歯です。",
      ko: "미모치는 치아 속에 나오지 않은 치아입니다.",
      vi: "Răng chưa mọc là những chiếc răng chưa mọc ra khỏi răng."
    },
    animation: "unerupted-tooth"
  },
  {
    letter: "V",
    word: {
      en: "Varnish",
      es: "Barniz",
      fr: "Vernis",
      zh: "釉质",
      ja: "エナメル",
      ko: "법랑질",
      vi: "Men răng"
    },
    sentence: {
      en: "A special vitamin paint that makes your teeth stronger",
      es: "Una pintura especial de vitaminas que hace tus dientes más fuertes",
      fr: "Une peinture spéciale de vitamines qui rend tes dents plus fortes",
      zh: "釉质是帮助牙齿变强的特殊维生素涂料。",
      ja: "エナメルは歯を丈夫にするビタミンペイントです。",
      ko: "법랑질은 치아를 더 단단하게 만드는 비타민 페인트입니다.",
      vi: "Men răng là sơn men vitamin giúp răng chúng ta chắc khỏe."
    },
    animation: "varnish"
  },
  {
    letter: "W",
    word: {
      en: "Whitening",
      es: "Blanqueamiento",
      fr: "Blanchiment",
      zh: "美白",
      ja: "美白",
      ko: "치아 미백",
      vi: "Làm sáng"
    },
    sentence: {
      en: "Making your teeth look bright and clean",
      es: "Hacer que tus dientes se vean brillantes y limpios",
      fr: "Rendre tes dents brillantes et propres",
      zh: "让牙齿看起来更白更干净",
      ja: "歯を白くして、美しくします。",
      ko: "치아를 밝게 하고 깨끗하게 만들어요.",
      vi: "Làm sáng răng để chúng trông sáng bóng và sạch sẽ."
    },
    animation: "whitening"
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
      en: "A special picture that lets the dentist see inside your teeth",
      es: "Una foto especial que permite al dentista ver dentro de tus dientes",
      fr: "Une photo spéciale qui permet au dentiste de voir à l'intérieur de tes dents",
      zh: "X光帮助牙医看到牙齿内部。",
      ja: "レントゲンで歯医者さんは歯の中を見ることができます。",
      ko: "엑스레이는 치과 선생님이 우리 치아 속을 볼 수 있게 해줘요.",
      vi: "Tia X giúp nha sĩ nhìn được bên trong răng của chúng ta."
    },
    animation: "xray"
  },
  {
    letter: "Y",
    word: {
      en: "Yellowing",
      es: "Amarillamiento",
      fr: "Jaunissement",
      zh: "黄变",
      ja: "黄変",
      ko: "노란색 변화",
      vi: "Ngả màu"
    },
    sentence: {
      en: "When teeth lose their bright white color",
      es: "Cuando los dientes pierden su color blanco brillante",
      fr: "Quand les dents perdent leur couleur blanche éclatante",
      zh: "当牙齿失去亮白色时",
      ja: "歯が明るい白に変わるとき",
      ko: "치아가 밝은 흰색에서 노란색으로 변하는 경우",
      vi: "Khi răng mất màu trắng sáng"
    },
    animation: "yellowing"
  },
  {
    letter: "Z",
    word: {
      en: "Zirconia",
      es: "Zirconia",
      fr: "Zircone",
      zh: "锆石",
      ja: "ジルコニア",
      ko: "저식",
      vi: "Kẽm"
    },
    sentence: {
      en: "A special white material used to fix broken teeth",
      es: "Un material blanco especial usado para arreglar dientes rotos",
      fr: "Un matériau blanc spécial utilisé pour réparer les dents cassées",
      zh: "锆石是用于修复断裂牙齿的特殊白色材料。",
      ja: "ジルコニアは歯を修理するために使用される白い素材です。",
      ko: "저식은 치아를 수리하는 데 사용되는 흰색 재료입니다.",
      vi: "Kẽm là vật liệu trắng đặc biệt được sử dụng để sửa chữa răng gãy."
    },
    animation: "zirconia"
  }
]; 