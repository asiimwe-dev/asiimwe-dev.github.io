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
  tagline: "Building scalable solutions for real-world problems | AI Full Stack and Systems Engineer",
  bio: "Senior CS student at Mbarara University of Science and Technology (MUST) with a 4.13 CGPA. Passionate about solving regional economic challenges through energy and agri-tech innovations. Systems-oriented mindset focused on scalability and efficiency.",
  email: "asimgilbs744@gmail.com",
  github: "https://github.com/asiimwe-dev",
  linkedin: "https://linkedin.com/in/gilbert-asiimwe",
  twitter: "https://x.com/asiimwe_dev",
  instagram: "https://instagram.com/that_gilbert.amooti",
  resumeUrl: "/assets/resume.pdf"
};

export const PROJECTS: Project[] = [
  {
    id: "farmlink",
    title: "FarmLink",
    description: "Agricultural ecosystem connecting Ugandan farmers to investors and AI diagnostics.",
    image: "/assets/agriculture.jpg",
    icon: "🌾",
    tech: ["Flutter", "Dart", "Firebase", "Mobile-First", "FastAPI", "AI Diagnostics"],
    githubUrl: "https://github.com/asiimwe-dev",
    liveUrl: "#"
  },
  {
    id: "petrostack",
    title: "PetroStack",
    description: "Data management platform addressing challenges in Uganda’s petroleum sector.",
    image: "/assets/oil and gas.jpg",
    icon: "⛽",
    tech: ["Node.js", "PostgreSQL", "AWS", "Docker"],
    githubUrl: "https://github.com/asiimwe-dev",
    liveUrl: "#"
  },
  {
    id: "audioguard",
    title: "AudioGuard",
    description: "Security-focused audio processing tool moving to production.",
    image: "/assets/c-code.png",
    icon: "🔊",
    tech: ["Flutter", "Dart", "FastAPI", "Signal Processing", "Python"],
    githubUrl: "https://github.com/asiimwe-dev"
  },
  {
    id: "entebbe-bot",
    title: "Entebbe Bot",
    description: "Successful customer-interactive chatbot for Entebbe International Airport.",
    image: "/assets/chatbot.png",
    icon: "✈️",
    tech: ["HTML", "CSS", "JS", "NLP"],
    githubUrl: "https://github.com/asiimwe-dev",
    liveUrl: "#"
  },
  {
    id: "private-ai-lab",
    title: "Private AI Lab",
    description: "Localized LLM environment running on Fedora 43.",
    image: "/assets/ai-lab.png",
    icon: "🧠",
    tech: ["Python", "Ollama", "Fedora", "Open WebUI"],
    githubUrl: "https://github.com/asiimwe-dev"
  }
];

export const ACADEMIC = {
  institution: "Mbarara University of Science and Technology (MUST)",
  achievement: "4.13 CGPA",
  competencies: ["Data Structures & Algorithms (DSA)", "Object-Oriented Programming (Java)", "Networking", "System Design"]
};

export const SKILLS: Skill[] = [
  {
    category: "Languages",
    items: ["C", "Java", "Python", "JavaScript", "TypeScript", "Dart"]
  },
  {
    category: "Systems/OS",
    items: ["Fedora Linux", "Zorin OS", "Memory Management", "Kernel Basics"]
  },
  {
    category: "DevOps",
    items: ["Podman", "Docker", "GitHub CLI", "Makefiles"]
  }
];
