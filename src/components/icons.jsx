import {
  FaBrain,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMicrochip,
  FaThreads,
} from "react-icons/fa6";
import {
  SiAlpinedotjs,
  SiDocker,
  SiElementor,
  SiGit,
  SiJavascript,
  SiLaravel,
  SiLivewire,
  SiMysql,
  SiOpencv,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiReactrouter,
  SiTailwindcss,
  SiTensorflow,
  SiVite,
  SiWordpress,
} from "react-icons/si";

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  threads: FaThreads,
  facebook: FaFacebook,
};

const techIcons = {
  PHP: SiPhp,
  Laravel: SiLaravel,
  Livewire: SiLivewire,
  Python: SiPython,
  JavaScript: SiJavascript,
  React: SiReact,
  "React Router": SiReactrouter,
  "Tailwind CSS": SiTailwindcss,
  "Tailwind CSS 4": SiTailwindcss,
  "Alpine.js": SiAlpinedotjs,
  Vite: SiVite,
  WordPress: SiWordpress,
  Elementor: SiElementor,
  TensorFlow: SiTensorflow,
  OpenCV: SiOpencv,
  CNN: FaBrain,
  "Edge AI": FaMicrochip,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  Git: SiGit,
  Docker: SiDocker,
};

// Pencocokan tidak peduli huruf besar-kecil, spasi, atau tanda baca.
const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
const lookup = Object.fromEntries(Object.entries(techIcons).map(([k, v]) => [normalize(k), v]));
const findTech = (name) => lookup[normalize(name)];

export function SocialIcon({ name, className = "size-6" }) {
  const Icon = socialIcons[name.toLowerCase()];
  return Icon ? <Icon className={className} aria-hidden='true' /> : null;
}

export function TechIcon({ name, className = "size-4" }) {
  const Icon = findTech(name);
  return Icon ? <Icon className={className} aria-hidden='true' /> : null;
}

export const hasTechIcon = (name) => Boolean(findTech(name));
