export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  icon: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const PERSONAL_INFO = {
  name: "Asiimwe Gilbert",
  role: "AI Full-Stack & Systems Engineer",
  tagline:
    "Building scalable solutions for real-world problems | AI Full Stack and Systems Engineer",
  bio: "Senior CS student at Mbarara University of Science and Technology (MUST) with a 4.13 CGPA. Passionate about solving regional economic challenges through energy and agri-tech innovations. Systems-oriented mindset focused on scalability and efficiency.",
  email: "gilbertasiimwe00@gmail.com",
  github: "https://github.com/asiimwe-dev",
  linkedin: "https://linkedin.com/in/gilbert-asiimwe",
  twitter: "https://x.com/asiimwe_dev",
  instagram: "https://instagram.com/asiimwe_dev",
  whatsapp: "https://wa.me/256764502179",
  resumeUrl: "/assets/resume.pdf",
};

export const PROJECTS: Project[] = [
  {
    id: "farmerhub-UG",
    title: "FarmerHub-UG",
    description:
      "AI-Powered Agri-RegTech Platform for Deforestation-Free Global Supply Chains across Uganda and East Africa. By leveraging offline-first technology, we empower agricultural cooperatives, exporters, and lenders with high-fidelity field data, AI-driven yield forecasting, and export-grade traceability.",
    image: "/assets/agriculture.jpg",
    icon: "🌾",
    tech: [
      "Flutter",
      "Dart",
      "SQL-lite",
      "PostgreSQL",
      "FastAPI",
      "Giospatial",
      "PostGIS",
    ],
    githubUrl: "https://github.com/asiimwe-dev/FarmerHub-UG",
    liveUrl: "#",
  },
  {
    id: "petrostack",
    title: "PetroStack Technologies",
    description:
      "Data management platform addressing challenges in Uganda’s petroleum sector.",
    image: "/assets/oil and gas.jpg",
    icon: "⛽",
    tech: ["Node.js", "PostgreSQL", "AWS", "Docker"],
    githubUrl: "https://github.com/asiimwe-dev",
    liveUrl: "#",
  },
  {
    id: "audioguard",
    title: "AudioGuard",
    description: "Security-focused audio processing tool moving to production.",
    image: "/assets/audioguard.png",
    icon: "🔊",
    tech: ["Flutter", "Dart", "FastAPI", "Signal Processing", "Python"],
    githubUrl: "https://github.com/asiimwe-dev/AudioGuard",
    liveUrl: "#",
  },
  {
    id: "entebbe-bot",
    title: "Entebbe Bot",
    description:
      "Successful customer-interactive chatbot for Entebbe International Airport.",
    image: "/assets/chatbot.png",
    icon: "✈️",
    tech: ["HTML", "CSS", "JS", "NLP"],
    githubUrl: "https://github.com/asiimwe-dev/EntebbeChatBot",
    liveUrl: "#",
  },
  {
    id: "private-ai-lab",
    title: "Private AI Lab",
    description: "Localized LLM environment running on Fedora 43.",
    image: "/assets/ai-lab.png",
    icon: "🧠",
    tech: ["Python", "Ollama", "Fedora", "Open WebUI"],
    githubUrl: "https://github.com/asiimwe-dev",
  },
];

export interface EngineeringLog {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  tags: string[];
}

export const ENGINEERING_LOGS: EngineeringLog[] = [
  {
    id: "log-1",
    date: "May 2026",
    title: "Optimizing Linux Kernel for Low-Latency Audio",
    excerpt:
      "Exploring real-time patches and memory locking for high-performance DSP applications.",
    tags: ["Linux", "C", "Performance"],
  },
  {
    id: "log-2",
    date: "April 2026",
    title: "Building a Distributed Agri-Tech Mesh",
    excerpt:
      "Architecting a resilient network for remote farmers using LoRaWAN and edge computing.",
    tags: ["Systems", "IoT", "Networking"],
  },
];

export const ACADEMIC = {
  institution: "Mbarara University of Science and Technology (MUST)",
  achievement: "4.13 CGPA",
  competencies: [
    "Data Structures & Algorithms (DSA)",
    "Object-Oriented Programming (Java)",
    "Networking",
    "System Design",
  ],
};

export const SKILLS: Skill[] = [
  {
    category: "Languages",
    items: ["C", "Java", "Python", "JavaScript", "TypeScript", "Dart"],
  },
  {
    category: "Systems/OS",
    items: ["Fedora Linux", "Zorin OS", "Memory Management", "Kernel Basics"],
  },
  {
    category: "DevOps",
    items: ["Podman", "Docker", "GitHub CLI", "Makefiles"],
  },
];
