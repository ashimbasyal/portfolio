import { AiOutlineApi } from "react-icons/ai";
import {
  FaAngular,
  FaBug,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaJs,
  FaNodeJs,
  FaPalette,
  FaRocket,
} from "react-icons/fa";
import {
  SiDotnet,
  SiFlutter,
  SiN8N,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import type { Badge, ExperienceItem, Project, Skill } from "./types";

export const skills: Skill[] = [

  {
    name: "Dot Net",
    icon: SiDotnet,
    color: "#512BD4",
    usage: ".NET is a developer platform with tools and libraries for building all types of applications, including web, mobile, desktop, gaming, IoT, cloud, and microservices.",
    level: 90,
  },
  {
    name: "JavaScript",
    icon: FaJs,
    color: "#F7DF1E",
    usage: "Adds interactivity and dynamism to modern web interfaces.",
    level: 90,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    usage: "Used for front-end and back-end applications with static typing.",
    level: 85,
  },
  {
    name: "Angular",
    icon: FaAngular,
    color: "#DD0031",
    usage: "Development of complex Single Page Applications (SPAs) for enterprise environments.",
    level: 90,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#339933",
    usage: "Building microservices and backend development tools.",
    level: 50,
  },
  {
    name: "Docker",
    icon: FaDocker,
    color: "#2496ED",
    usage: "Containerizing applications to ensure consistency across environments.",
    level: 70,
  },
  {
    name: "Flutter",
    icon: SiFlutter, // make sure to import from 'react-icons/si'
    color: "#02569B",
    usage: "Cross-platform mobile app development for Android and iOS with a single codebase.",
    level: 80,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
    usage: "Designing and optimizing relational databases.",
    level: 85,
  },
  {
    name: "n8n",
    icon: SiN8N,
    color: "#6A23B7",
    usage: "Workflow automation and integration between different APIs.",
    level: 75,
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "#F05032",
    usage: "Code versioning and team collaboration.",
    level: 95,
  },
     {
    name: "SQL",
    icon: FaDatabase,
    color: "#00758F",
    usage: "Designing, querying, and managing relational databases for structured data storage and retrieval.",
    level: 90,
  },
];

export const experience: ExperienceItem[] = [
  {
    period: "March 2023 - Present",
    company: "IMARK Pvt Ltd",
    description:
      "Working as a Software Developer at IMARK Pvt Ltd, a company focused on Fintech and Healthcare domains. Contributed to multiple enterprise-level systems such as IPOS, Bank Portal, TMS, MMS, and Card Support. Experienced in developing scalable web applications using .NET Core, Angular, SQL Server, and Clean Architecture.",
  },
  {
    period: "Freelance Projects",
    company: "Personal Development & Freelancing",
    description:
      "Built and deployed multiple personal and freelance projects using Flutter, .NET, and Angular. Focused on developing cross-platform mobile and web applications with secure APIs, authentication, and real-time communication using SignalR.",
  },
  {
    period: "2018 - 2023",
    company: "New Summit College",
    description:
      "Completed Bachelor's in Computer Science and Information Technology (BSc. CSIT) from Tribhuvan University, developing a strong foundation in programming, databases, and software development principles.",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "IPOS & Bank Portal",
    description:
      "A centralized system for managing POS devices and bank-related communications.",
    longDescription:
      "Developed and optimized systems for managing POS terminals — handling deployment, configuration, and monitoring. The Bank Portal facilitates communication between banks and IMARK for various actions related to POS devices. Improved system efficiency through refactoring and SQL query optimization.",
    stack: [".NET 6", "Angular", "MS SQL Server", "Clean Architecture"],
    image: import.meta.env.BASE_URL + "/images/ipos.png",
    results:
      "Enhanced system reliability and performance by 40%, reducing support response time significantly.",
  },
  {
    id: 2,
    title: "TMS (Terminal Management System)",
    description:
      "A .NET 6 and Angular-based system enabling secure data transfer between servers and POS terminals.",
    longDescription:
      "Designed the architecture and workflow allowing Android POS devices to connect with the system for file downloads (APK, images, banners, etc.), heartbeat monitoring, and status updates. Implemented digital signatures using .pfx files, TLS communication, AES encryption, and Google 2FA for secure access.",
    stack: [".NET 6", "Angular", "TLS", "AES Encryption", "OpenSSL", "Google 2FA"],
    image: import.meta.env.BASE_URL + "/images/tms.png",
    results:
      "Improved data security and device management reliability by implementing TLS and AES protocols.",
  },
  {
    id: 3,
    title: "MMS (Merchant Management System)",
    description:
      "A merchant registration and QR code generation system for POS terminals.",
    longDescription:
      "Developed a system that enables merchants to register and generate QR codes displayed on their POS terminals for transactions. Includes merchant management, payment tracking, and institutional compliance tools.",
    stack: [".NET 6", "Angular", "Entity Framework Core", "MS SQL Server"],
    image: import.meta.env.BASE_URL + "/images/mms.png",
    results:
      "Streamlined merchant onboarding, reducing registration time by 60%.",
  },
  {
    id: 4,
    title: "Card Support System",
    description:
      "System to manage card request and printing workflow.",
    longDescription:
      "Implemented modules to handle card requests, approvals, and printing directly through the system. Users can track pending and approved card requests and initiate printing seamlessly through the web portal.",
    stack: [".NET 6", "Angular", "MS SQL Server", "Clean Architecture"],
    image: import.meta.env.BASE_URL + "/images/card-support.png",
    results:
      "Reduced manual intervention in card processing and increased workflow transparency.",
  },
  {
    id: 5,
    title: "Flutter Mobile Projects",
    description:
      "Cross-platform apps built using Flutter and .NET backend.",
    longDescription:
      "Developed Flutter-based mobile apps integrated with secure .NET APIs for user authentication, data visualization, and geolocation-based services. Emphasized on clean UI, performance, and reusability.",
    stack: ["Flutter", "Dart", ".NET 8", "REST API"],
    image: import.meta.env.BASE_URL + "/images/flutter-app.png",
    results:
      "Delivered robust mobile applications with seamless API integration and excellent UI responsiveness.",
  },
];


export const badges: Badge[] = [
  {
    name: "Master of APIs",
    icon: AiOutlineApi,
    description: "Design and implementation of scalable and secure RESTful APIs.",
  },
  {
    name: "Bug Hunter",
    icon: FaBug,
    description: "Skilled in debugging and solving complex problems.",
  },
  {
    name: "UI Designer",
    icon: FaPalette,
    description: "Creating intuitive and visually appealing interfaces.",
  },
  {
    name: "Performance Rocket",
    icon: FaRocket,
    description: "Optimizing applications for maximum speed and efficiency.",
  },
];
