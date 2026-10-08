// All site content lives here — edit this file to update the portfolio.
// Text with { en, th } switches with the TH / EN button.

export const profile = {
  firstName: "CHINNAWAN",
  lastName: "SRIPRASONG",
  role: { en: "Frontend / Full-Stack Developer", th: "Frontend / Full-Stack Developer" },
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
    en: "Hi, I'm Che — a 4th-year Electronic Engineering Technology (Computer) student at KMUTNB, passionate about building web and mobile applications. With a foundation that spans from hardware to software, I love learning new technologies and solving real problems with products people actually use.",
    th: "สวัสดีครับ ผม 'เช่' ปัจจุบันกำลังศึกษาชั้นปีที่ 4 สาขาวิชาเทคโนโลยีวิศวกรรมอิเล็กทรอนิกส์ (คอมพิวเตอร์) มจพ. ผมเป็นคนที่หลงใหลในการพัฒนา Web และ Application และชอบอัปเดตเทคโนโลยีใหม่ๆ อยู่เสมอ ด้วยพื้นฐานที่ครอบคลุมตั้งแต่ฮาร์ดแวร์ (ปวช. ช่างเทคนิคคอมพิวเตอร์) จนถึงการเขียนโปรแกรมและซอฟต์แวร์ ทำให้ผมพร้อมเรียนรู้สิ่งใหม่และสนุกกับการแก้ปัญหาเพื่อสร้างสรรค์ผลงานที่ใช้งานได้จริงครับ",
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
    home: { en: "Home", th: "หน้าแรก" },
    about: { en: "About", th: "เกี่ยวกับ" },
    work: { en: "Work", th: "ผลงาน" },
    experience: { en: "Journey", th: "เส้นทาง" },
    contact: { en: "Contact", th: "ติดต่อ" },
  },
  themeToLight: { en: "Switch to light mode", th: "เปลี่ยนเป็นโหมดสว่าง" },
  themeToDark: { en: "Switch to dark mode", th: "เปลี่ยนเป็นโหมดมืด" },
  langSwitch: { en: "เปลี่ยนเป็นภาษาไทย", th: "Switch to English" },
  about: { en: "About me", th: "เกี่ยวกับผม" },
  skills: {
    eyebrow: { en: "What I work with", th: "เครื่องมือที่ผมใช้" },
    title: { en: "Skills.", th: "ทักษะ" },
    lead: {
      en: "Languages, frameworks, hardware and cloud I build with.",
      th: "ภาษา เฟรมเวิร์ก ฮาร์ดแวร์ และคลาวด์ที่ผมใช้สร้างผลงาน",
    },
  },
  projects: {
    eyebrow: { en: "Selected work", th: "ผลงานที่คัดมา" },
    title: { en: "Projects.", th: "ผลงาน" },
    demo: { en: "Live Demo", th: "ดูตัวอย่าง" },
  },
  journey: {
    eyebrow: { en: "Experience & Education", th: "ประสบการณ์และการศึกษา" },
    title: { en: "Journey.", th: "เส้นทาง" },
  },
  contact: {
    eyebrow: { en: "Get in touch", th: "ติดต่อผม" },
    title: { en: ["Let's build", "something."], th: ["มาสร้างอะไร", "ด้วยกันครับ"] },
    resume: { en: "Download Resume", th: "ดาวน์โหลดเรซูเม่" },
    builtWith: {
      en: "Built with React, HTML, CSS & Framer Motion",
      th: "สร้างด้วย React, HTML, CSS และ Framer Motion",
    },
  },
};

export const skillGroups = [
  {
    title: { en: "Languages", th: "ภาษาโปรแกรม" },
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
    title: { en: "Frameworks & Libraries", th: "เฟรมเวิร์กและไลบรารี" },
    items: [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Flutter", icon: "flutter" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "OpenCV", icon: "opencv" },
    ],
  },
  {
    title: { en: "Database & Cloud", th: "ฐานข้อมูลและคลาวด์" },
    items: [
      { name: "MySQL", icon: "mysql" },
      { name: "Firebase", icon: "firebase" },
      { name: "Microsoft Azure", icon: "azure" },
    ],
  },
  {
    title: { en: "Tools", th: "เครื่องมือ" },
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
      { name: "Figma", icon: "figma" },
    ],
  },
  {
    title: { en: "Hardware & Core", th: "ฮาร์ดแวร์และพื้นฐาน" },
    items: [
      { name: "ESP32", icon: "esp32" },
      { name: "Arduino", icon: "arduino" },
      { name: "Machine Learning & Deep Learning", icon: "ml" },
      { name: "Data Structures & Algorithms", icon: "dsa" },
      { name: "OOP", icon: "oop" },
    ],
  },
  {
    title: { en: "Media & Design", th: "มีเดียและดีไซน์" },
    items: [
      { name: "Premiere Pro", icon: "premiere" },
      { name: "Photoshop", icon: "photoshop" },
      { name: { en: "Video Editing", th: "ตัดต่อวิดีโอ" }, icon: "video" },
      { name: { en: "Photography", th: "ถ่ายภาพ" }, icon: "camera" },
    ],
  },
];

export const projects = [
  {
    id: "sports-booking",
    index: "01",
    title: { en: "Sports Facility Booking", th: "เว็บไซต์จองสนามกีฬา" },
    type: { en: "Web Application", th: "เว็บแอปพลิเคชัน" },
    description: {
      en: "An online platform for managing and booking sports facilities. It eliminates double bookings and lets users see available time slots and reserve a court instantly.",
      th: "ระบบเว็บแอปพลิเคชันสำหรับจัดการและจองสนามกีฬาออนไลน์ ช่วยแก้ปัญหาความซ้ำซ้อนในการจอง และอำนวยความสะดวกให้ผู้ใช้สามารถดูตารางเวลาที่ว่างและกดจองได้ทันที",
    },
    stack: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    accent: "#34d399", // the only colors on the page — product highlights
    mock: "web",
    github: "#",
    demo: "#",
  },
  {
    id: "car-rental",
    index: "02",
    title: { en: "Car Rental App", th: "แอปพลิเคชันเช่ารถ" },
    type: { en: "Mobile Application", th: "แอปพลิเคชันมือถือ" },
    description: {
      en: "A mobile app for finding and renting cars, featuring detailed vehicle info, real-time rental status, and a renter management system.",
      th: "แอปพลิเคชันบนมือถือสำหรับค้นหาและเช่ารถยนต์ มีฟีเจอร์แสดงรายละเอียดรถ สถานะการเช่า และระบบจัดการข้อมูลผู้เช่า",
    },
    stack: ["Flutter", "Dart", "Firebase"],
    accent: "#f97316",
    mock: "mobile",
    github: "#",
    demo: "#",
  },
];

export const timeline = [
  {
    kind: { en: "Experience", th: "ประสบการณ์" },
    title: { en: "Intern — HDTV Production", th: "นักศึกษาฝึกงาน — HDTV Production" },
    place: "HDTV Production",
    period: { en: "Internship", th: "ฝึกงาน" },
    points: {
      en: [
        "Managed props and behind-the-scenes operations in the studio.",
        "Shot promotional product photography.",
        "Edited music-video highlight clips with Adobe Premiere Pro & Photoshop.",
      ],
      th: [
        "ดูแล Prop และงานเบื้องหลังกองถ่ายในสตูดิโอ",
        "ถ่ายภาพโปรโมตสินค้า",
        "ตัดต่อคลิป Highlight MV เพลงด้วย Adobe Premiere Pro และ Photoshop",
      ],
    },
  },
  {
    kind: { en: "Education", th: "การศึกษา" },
    title: {
      en: "B.Eng. Electronic Engineering Technology (Computer)",
      th: "ปริญญาตรี สาขาเทคโนโลยีวิศวกรรมอิเล็กทรอนิกส์ (คอมพิวเตอร์)",
    },
    place: {
      en: "King Mongkut's University of Technology North Bangkok (KMUTNB)",
      th: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ (มจพ.)",
    },
    period: { en: "Year 4 · Present", th: "ชั้นปีที่ 4 · ปัจจุบัน" },
  },
  {
    kind: { en: "Education", th: "การศึกษา" },
    title: {
      en: "Vocational Certificate — Computer Technician",
      th: "ปวช. สาขาช่างเทคนิคคอมพิวเตอร์",
    },
    place: {
      en: "Rajamangala University of Technology Phra Nakhon (RMUTP)",
      th: "มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร (มทร.พระนคร)",
    },
    period: { en: "Vocational", th: "ปวช." },
  },
  {
    kind: { en: "Education", th: "การศึกษา" },
    title: { en: "Lower Secondary (M.1 – M.3)", th: "มัธยมศึกษาตอนต้น (ม.1 – ม.3)" },
    place: {
      en: "Triam Udom Suksa Pattanakarn Nonthaburi School",
      th: "โรงเรียนเตรียมอุดมศึกษาพัฒนาการ นนทบุรี (ตอพน.)",
    },
    period: { en: "Secondary", th: "มัธยมต้น" },
  },
];
