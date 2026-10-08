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
      { name: "Figma", icon: "figma" },
    ],
  },
  {
    title: "Hardware & Core",
    items: [
      { name: "ESP32", icon: "esp32" },
      { name: "Arduino", icon: "arduino" },
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
    mock: "mobile",
    github: "#",
    demo: "#",
  },
];

export const timeline = [
  {
    kind: "Experience",
    title: "Intern — HDTV Production",
    place: "HDTV Production",
    period: "Internship",
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
    title: "Electronics Engineering Technology - Computer",
    place: "King Mongkut's University of Technology North Bangkok (KMUTNB)",
    period: "Year 4 · Present",
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
