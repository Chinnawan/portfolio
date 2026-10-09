// All site content lives here — edit this file to update the portfolio.
// Text with { en, th } switches with the TH / EN button.
// Plain strings (headings, labels, proper nouns) stay English in both languages.

export const profile = {
  firstName: "CHINNAWAN",
  lastName: "SRIPRASONG",
  heroLeft: {
    en: ["Frontend / Full-Stack Developer,", "4th-year student at KMUTNB."],
    th: ["Frontend / Full-Stack Developer", "นักศึกษาชั้นปีที่ 4 มจพ."],
  },
  heroRight: {
    en: ["Bridging hardware & software,", "based in Bangkok, Thailand."],
    th: ["เชื่อมโลกฮาร์ดแวร์และซอฟต์แวร์", "กรุงเทพฯ ประเทศไทย"],
  },
  photoAlt: { en: "Portrait of Chinnawan Sriprasong", th: "รูปของชินวัณ ศรีประสงค์" },
  bio: {
    en: "Hi, I'm Chinnawan — a 4th-year Electronic Engineering Technology - Computer student at KMUTNB, passionate about building web and mobile applications. With a foundation that spans from hardware to software, I love learning new technologies and solving real problems with products people actually use.",
    th: "สวัสดีครับ ผมชื่อ ชินวัณ ครับ ปัจจุบันกำลังศึกษาชั้นปีที่ 4 สาขาวิชาเทคโนโลยีวิศวกรรมอิเล็กทรอนิกส์ แขนงคอมพิวเตอร์ ที่ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ ผมเป็นคนที่หลงใหลในการพัฒนา Web และ Application และชอบอัปเดตเทคโนโลยีใหม่ๆ อยู่เสมอ ด้วยพื้นฐานที่ครอบคลุมตั้งแต่ฮาร์ดแวร์ที่เคยศึกษาตั้งแต่ ปวช. ช่างเทคนิคคอมพิวเตอร์ จนถึงการเขียนโปรแกรมและซอฟต์แวร์ที่กำลังศึกษาอยู่ ทำให้ผมพร้อมเรียนรู้สิ่งใหม่และสนุกกับการแก้ปัญหาเพื่อสร้างสรรค์ผลงานที่ใช้งานได้จริงครับ",
  },
};

export const links = {
  email: "chinnawansriprasong@gmail.com",
  github: "https://github.com/Chinnawan",
  linkedin: "https://www.linkedin.com/in/chinnawan-sriprasong/",
  resume: "/resume.pdf", // put your PDF at public/resume.pdf
};

// UI labels
export const ui = {
  nav: {
    home: "Home",
    about: "About",
    work: "Work",
    experience: "Journey",
    contact: "Contact",
  },
  themeToLight: { en: "Switch to light mode", th: "เปลี่ยนเป็นโหมดสว่าง" },
  themeToDark: { en: "Switch to dark mode", th: "เปลี่ยนเป็นโหมดมืด" },
  langSwitch: { en: "เปลี่ยนเป็นภาษาไทย", th: "Switch to English" },
  about: "About me",
  skills: {
    eyebrow: "What I work with",
    title: "Skills.",
    lead: {
      en: "Languages, frameworks, hardware and cloud I build with.",
      th: "Languages, frameworks, hardware และ cloud ที่ผมใช้สร้างผลงาน",
    },
  },
  projects: {
    eyebrow: { en: "Selected work", th: "ผลงานของผม" },
    title: "Projects.",
    demo: "Live Demo",
  },
  journey: {
    eyebrow: "Experience & Education",
    title: "Journey.",
  },
  contact: {
    eyebrow: { en: "Get in touch", th: "ติดต่อฉัน" },
    title: { en: ["Let's build", "something."], th: ["มาสร้างอะไรใหม่ๆ", "ด้วยกันครับ"] },
    resume: "Download Resume",
    builtWith: "Built with React, HTML, CSS & Framer Motion",
  },
};

export const skillGroups = [
  {
    title: "Languages",
    items: [
      { name: "Python", icon: "python" },
      { name: "C / C++", icon: "cpp" },
      { name: "Java", icon: "java" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Dart", icon: "dart" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "MATLAB", icon: "matlab" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Flutter", icon: "flutter" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "OpenCV", icon: "opencv" },
    ],
  },
  {
    title: "Database & Cloud",
    items: [
      { name: "MySQL", icon: "mysql" },
      { name: "Firebase", icon: "firebase" },
      { name: "Microsoft Azure", icon: "azure" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
      { name: "Docker", icon: "docker" },
      { name: "Figma", icon: "figma" },
      { name: "EasyEDA", icon: "easyeda" },
      { name: "QA / Manual Testing", icon: "qa" },
    ],
  },
  {
    title: "Hardware & Core",
    items: [
      { name: "ESP32", icon: "esp32" },
      { name: "Arduino", icon: "arduino" },
      { name: "PCB Design & Etching", icon: "pcb" },
      { name: "Soldering & Circuit Assembly", icon: "soldering" },
      { name: "Transformer Winding", icon: "coil" },
      { name: "Machine Learning & Deep Learning", icon: "ml" },
      { name: "Data Structures & Algorithms", icon: "dsa" },
      { name: "OOP", icon: "oop" },
    ],
  },
  {
    title: "Media & Design",
    items: [
      { name: "Premiere Pro", icon: "premiere" },
      { name: "Photoshop", icon: "photoshop" },
      { name: "Video Editing", icon: "video" },
      { name: "Photography", icon: "camera" },
      { name: "Live Streaming & Camera", icon: "live" },
    ],
  },
];

// `stack` items use keys from stackIcons in data/icons.js
export const projects = [
  {
    id: "courthub",
    index: "01",
    title: "Sports Facility Booking",
    type: "Web Application",
    description: {
      en: "An online platform for managing and booking sports facilities. It eliminates double bookings and lets users see available time slots and reserve a court instantly.",
      th: "ระบบเว็บแอปพลิเคชันสำหรับจัดการและจองสนามกีฬาออนไลน์ ช่วยแก้ปัญหาความซ้ำซ้อนในการจอง และอำนวยความสะดวกให้ผู้ใช้สามารถดูตารางเวลาที่ว่างและกดจองได้ทันที",
    },
    stack: [
      { name: "Next.js", icon: "nextjs" },
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Firebase", icon: "firebase" },
      { name: "Docker", icon: "docker" },
    ],
    accent: "#22c55e", // the only colors on the page — product highlights
    mock: "browser",
    screenshot: "courthub", // key in data/icons.js → images
    url: "courthub-web.vercel.app",
    github: "https://github.com/Chinnawan/courthub-web",
    demo: "https://courthub-web.vercel.app/",
  },
  {
    id: "car-rental",
    index: "02",
    title: "Car Rental App",
    type: "Mobile Application",
    description: {
      en: "A mobile app for finding and renting cars, featuring detailed vehicle info, real-time rental status, and a renter management system.",
      th: "แอปพลิเคชันบนมือถือสำหรับค้นหาและเช่ารถยนต์ มีฟีเจอร์แสดงรายละเอียดรถ สถานะการเช่า และระบบจัดการข้อมูลผู้เช่า",
    },
    stack: [
      { name: "Flutter", icon: "flutter" },
      { name: "Dart", icon: "dart" },
      { name: "Firebase", icon: "firebase" },
    ],
    accent: "#f97316",
    mock: "phone",
    screenshot: "carhub",
    github: "https://github.com/Chinnawan/car",
    demo: "#", // → "https://flutterapp-346ef.web.app/" once deployed to Firebase Hosting
  },
  {
    id: "power-supply",
    index: "03",
    title: { en: "AC 220V to DC 12V Power Supply", th: "หม้อแปลง AC 220V เป็น DC 12V" },
    type: { en: "Hardware / Electronics", th: "ฮาร์ดแวร์ / อิเล็กทรอนิกส์" },
    description: {
      en: "A working AC 220V to DC 12V power supply built from scratch — hand-wound transformer coils, components soldered onto the controller board, and everything assembled into a finished, usable enclosure.",
      th: "หม้อแปลงไฟ AC 220V เป็น DC 12V ที่ทำเองทั้งหมด ตั้งแต่พันขดลวดหม้อแปลง บัดกรีอุปกรณ์ต่างๆ ลงบอร์ดคอนโทรลเลอร์ ไปจนถึงประกอบเป็นกล่องหม้อแปลงที่ใช้งานได้จริง",
    },
    stack: [
      { name: "Transformer Winding", icon: "coil" },
      { name: "Soldering", icon: "soldering" },
      { name: "Circuit Assembly", icon: "circuit" },
    ],
    accent: "#eab308",
    mock: "photos",
    photos: ["transformerBoard", "transformerBox", "transformerCoil"],
  },
  {
    id: "pcb",
    index: "04",
    title: { en: "Custom Microcontroller PCB", th: "บอร์ด PCB สำหรับไมโครคอนโทรลเลอร์" },
    type: { en: "Hardware / PCB Design", th: "ฮาร์ดแวร์ / ออกแบบ PCB" },
    description: {
      en: "A PCB for Arduino, ESP32 and other microcontrollers. Laid out in EasyEDA, then etched and soldered by hand.",
      th: "บอร์ด PCB สำหรับใช้กับ Arduino, ESP32 หรือไมโครคอนโทรลเลอร์ทั่วไป ออกแบบการวางอุปกรณ์ด้วยโปรแกรม EasyEDA กัดลายบอร์ดเอง และบัดกรีอุปกรณ์เอง",
    },
    stack: [
      { name: "EasyEDA", icon: "easyeda" },
      { name: "Arduino", icon: "arduino" },
      { name: "ESP32", icon: "esp32" },
      { name: "PCB Etching", icon: "circuit" },
      { name: "Soldering", icon: "soldering" },
    ],
    accent: "#3b82f6",
    mock: "photos",
    photos: ["pcbBoard", "pcbDesign", "pcbEtching"],
  },
];

// `photos` use keys from journeyPhotos in data/icons.js
export const timeline = [
  {
    kind: "Experience",
    title: "Part-Time — QA Tester",
    place: "EXPOPASS",
    period: { en: "2026 · 2 months", th: "2569 · 2 เดือน" },
    points: {
      en: [
        "Tested the company's event-registration website for bugs and problems in the user registration flow.",
        "Checked that event details on the site — event name, venue and dates — matched the real events.",
      ],
      th: [
        "ตรวจสอบเว็บไซต์ลงทะเบียนงานอีเวนต์ของบริษัท ว่ามี Bug หรือปัญหาในการลงทะเบียนฝั่งผู้ใช้หรือไม่",
        "ตรวจสอบข้อมูลที่แสดงบนเว็บ เช่น ชื่องาน สถานที่จัด และวันที่จัด ว่าตรงกับงานอีเวนต์จริงหรือไม่",
      ],
    },
    photos: ["expopass1"],
  },
  {
    kind: "Experience",
    title: "Part-Time — Page Admin & Live Camera Operator",
    place: { en: "Sabai Sabai Karaoke Boxing Stadium, Pathum Thani", th: "ค่ายมวยสบายสบาย คาราโอเกะ ปทุมธานี" },
    period: { en: "2025", th: "2568" },
    points: {
      en: [
        "Page admin: ran the page throughout every live stream and put up on-screen graphics — fighter names, round and fight time — for viewers.",
        "Camera operator: zoomed in and out with the action so viewers could see the fighters clearly.",
      ],
      th: [
        "Admin เพจ: ควบคุมดูแลเพจตลอดการไลฟ์สตรีม และขึ้น CG ชื่อนักมวย ยกที่ต่อย และเวลาที่ต่อยให้ผู้ชมเห็น",
        "ตากล้อง: ซูมเข้า-ออกตามจังหวะการต่อย เพื่อให้ผู้ชมเห็นนักมวยได้คมชัดเต็มตามากขึ้น",
      ],
    },
    photos: ["sabai1", "sabai2", "sabai3"],
  },
  // HDTV internship came before KMUTNB
  {
    kind: "Education",
    title: "Electronics Engineering Technology - Computer",
    place: "King Mongkut's University of Technology North Bangkok (KMUTNB)",
    period: "Year 4 · Present",
  },
  {
    kind: "Experience",
    title: "Intern — HDTV Production",
    place: "HDTV Production",
    period: { en: "2022 · 2 months", th: "2565 · 2 เดือน" },
    photos: ["hdtv1", "hdtv2", "hdtv3"],
    points: {
      en: [
        "Managed props and behind-the-scenes operations in the studio.",
        "Shot promotional product photos and retouched them in Photoshop.",
        "Edited music-video highlight clips with Adobe Premiere Pro.",
      ],
      th: [
        "ดูแล Prop และงานเบื้องหลังกองถ่ายในสตูดิโอ",
        "ถ่ายภาพโปรโมตสินค้า และแก้ไขภาพด้วย Photoshop",
        "ตัดต่อคลิป Highlight MV เพลงด้วย Adobe Premiere Pro",
      ],
    },
  },
  {
    kind: "Education",
    title: "Vocational Certificate — Computer Technician",
    place: "Rajamangala University of Technology Phra Nakhon (RMUTP)",
    period: "Vocational",
  },
  {
    kind: "Education",
    title: "Lower Secondary (M.1 – M.3)",
    place: "Triam Udom Suksa Pattanakarn Nonthaburi School",
    period: "Secondary",
  },
];
