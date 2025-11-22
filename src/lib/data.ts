export const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#blog", label: "Articles" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const heroHighlights = [
  "Web Developer with a DSA-driven mindset",
  "Designing intuitive interfaces with optimized logic",
  "Turning complex problems into elegant, scalable code",
  "Dedicated to learning, solving, and building",
];

export const stats = [
  { label: "Coding & Learning Experience", value: "03+" },
  { label: "Web & UI Development", value: "06+" },
  { label: "DSA & Problem Solving", value: "4/5" },
  { label: "Tech Stacks Explored", value: "10+" },
];

export const experienceTimeline = [
  {
    title: "B.Tech · Computer Science · LNCT, Bhopal",
    period: "2023 — 2027",
    description:
      "Currently pursuing B.Tech in Computer Science with strong focus on Web Development, DSA, and problem-solving.",
    achievements: [
      "Scored consistently good grades across semesters (CGPA: 8.42 till 4th sem)",
      "Actively improving skills through projects, coding, and learning"
    ],
  },
  {
    title: "Secondary Education",
    period: "2018 — 2020",
    description:
      "CBSE Class X · BD Public School, Patna",
    achievements: [
      "Achieved excellent overall academic scores of aggregate 93.6% in Class 10.",
      "Achieved bronze medal at state level in IMO (international Mathematics Olympiad",
    ],
  },
  {
    title: "Senior Secondary Education",
    period: "2020 — 2022",
    description:
      "CBSE Class XII · BD Public School, Patna",
    achievements: [
      "Achieved a good overall academic scores of aggregate 82.8% in Class 12.",
      "Built a solid PCM foundation during my Class 12 journey, shaping my path toward engineering."
    ],
  },
];

export type ProjectMedia =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster?: string }
  | { type: "embed"; src: string; title: string };

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  media: ProjectMedia;
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: "cerebro",
    title: "Cerebro AI Workspace",
    description:
      "An immersive co-pilot for product teams that blends whiteboarding, code review, and AI-assisted documentation.",
    tech: ["Next.js", "Framer Motion", "LangChain", "Supabase"],
    github: "https://github.com/example/cerebro",
    demo: "https://cerebro.example.com",
    media: { type: "image", src: "/media/projects/cerebro.png", alt: "Cerebro dashboard" },
    highlights: [
      "Realtime multi-cursor collaboration with CRDTs",
      "Motion-crafted onboarding that adapts to user personas",
      "LLM powered snippets with contextual memory",
    ],
  },
  {
    id: "nebula",
    title: "Nebula Motion System",
    description:
      "A GSAP + Three.js powered marketing website with volumetric lighting, parallax journeys, and dynamic case studies.",
    tech: ["Three.js", "GSAP", "Next.js", "Sanity"],
    github: "https://github.com/example/nebula",
    demo: "https://nebula.example.com",
    media: { type: "video", src: "https://storage.googleapis.com/coverr-main/mp4/Night-Traffic.mp4", poster: "/media/projects/nebula-poster.png" },
    highlights: [
      "Procedural hero scene rendered at 60fps on desktop",
      "Lazy-loaded story chapters with IntersectionObserver",
      "Portable motion tokens consumed across channels",
    ],
  },
  {
    id: "pulse",
    title: "Pulse Analytics Portal",
    description:
      "A secure healthcare analytics suite with HIPAA compliant data viz, anomaly alerts, and offline ready PWA features.",
    tech: ["Next.js", "D3.js", "Tailwind", "Resend"],
    github: "https://github.com/example/pulse",
    demo: "https://pulse.example.com",
    media: { type: "image", src: "/media/projects/pulse.png", alt: "Pulse analytics" },
    highlights: [
      "Role-based dashboards with optimistic mutations",
      "Automated reporting pipeline exporting PDF decks",
      "Granular theming powered by design tokens",
    ],
  },
];

export const skillCategories = [
  {
    label: "Frontend",
    skills: [
      { name: "React / Next.js", proficiency: 95 },
      { name: "TypeScript", proficiency: 90 },
      { name: "HTML / CSS", proficiency: 85 },
      { name: "WebGL / Three.js", proficiency: 65 },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", proficiency: 80 },
      { name: "GraphQL", proficiency: 70 },
      { name: "MySql", proficiency: 75 },
      { name: "MongoDB", proficiency: 70 },
    ],
  },
  {
    label: "Languages",
    skills: [
      { name: "JavaScript", proficiency: 95 },
      { name: "C++", proficiency: 80 },
      { name: "JAVA", proficiency: 70 },
      { name: "Python", proficiency: 50 },
    ],
  },
  {
    label: "Tools & Craft",
    skills: [
      { name: "Figma & Design Systems", proficiency: 88 },
      { name: "Storybook", proficiency: 78 },
      { name: "Testing Library / Vitest", proficiency: 82 },
      { name: "CI/CD & DevOps", proficiency: 70 },
    ],
  },
];

export const testimonials = [
  {
    name: "Rishabh Sahni",
    role: "DSA & Development Partner",
    quote:
      "“Ankit is one of the most consistent people I’ve met. His approach to solving DSA problems is structured and clear, and he always helps others understand tough concepts.”",
    avatar: "/media/people/maya.svg",
  },
  {
    name: "Shivam Kumar",
    role: "Coursemate, MIT Bengaluru",
    quote:
      "“He asks the right questions and takes ownership of his work. Ankit would be an asset to any development team.”",
    avatar: "/media/people/carlos.svg",
  },
  {
    name: "Prof. Ashish Dubey",
    role: "Mentor",
    quote:
      "“What impresses me most about Ankit is his structured approach to problem-solving. Whether it’s DSA or real-world coding, he breaks things down clearly and solves them efficiently. A disciplined learner with great growth ahead.”",
    avatar: "/media/people/rhea.svg",
  },
];

export const blogPosts = [
  {
    title: "The Father of India’s Nuclear Program - Homi J. Bhabha",
    date: "May 2025",
    excerpt:
      "Homi J. Bhabha was a brilliant physicist who built India’s nuclear research ecosystem from scratch. His ideas, leadership, and scientific excellence made him one of India’s greatest tech visionaries",
    link: "https://www.britannica.com/biography/Homi-Bhabha",
    readingTime: "30 min read",
  },
  {
    title: "The Unsung Hero of Tech - Nikola Tesla",
    date: "Jul 2025",
    excerpt:
      "Nikola Tesla was an extraordinary yet often overlooked inventor whose ideas shaped the modern technological world. Despite his genius, he remained an unsung hero who never received the recognition he truly deserved.",
    link: "https://nikolatesla.in/the-extraordinary-life-of-nikola-tesla-innovations-patents-and-legacy/",
    readingTime: "45 min read",
  },
  {
    title: "My DSA learning journey yet - coming soon",
    date: "Nov 2025",
    excerpt:
      "These are some of the articles that helped me understand concepts better in coding and development. I’m sharing them so others can benefit too.",
    link: "",
    readingTime: "10 min read",
  },
];

export const certifications = [
  {
    title: "Oracle certified GenAi professional",
    issuer: "Oracle",
    year: "2025",
  },
  {
    title: "Data Structure and Backend with java",
    issuer: "Coursera",
    year: "2025",
  },
  {
    title: "Fundamentals of Java Programming",
    issuer: "Coursera",
    year: "2025",
  },
  {
    title: "OCI Founadation Associate",
    issuer: "Oracle",
    year: "2025",
  },
  {
    title: "DSA in Python",
    issuer: "Udemy",
    year: "2025",
  },
  {
    title: "English for IT 2",
    issuer: "Cisco Networking Academy",
    year: "2025",
  },
];

export const achievements = [
  {
    title: "Completed Class 10 with excellent academic record.",
    description: "CBSE",
    year: "2020",
  },
  {
    title: "Completed Class 12 (PCM) with strong foundation in mathematics & science.",
    description: "CBSE",
    year: "2022",
  },
  {
    title: "Crossed 200+ DSA problems",
    description: "Leetcode, GFG and Codeforces",
    year: "2025",
  },
  {
    title: "Maintained consistent academic performance in Semester exams.",
    description: "2023 - Till now",
    year: "2025",
  },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Ankit-Tiwary45", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ankit-tiwary-45/", icon: "linkedin" },
  { label: "Facebook", href: "https://www.facebook.com/sardaar.gabbarsingh.73700", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/__an_kit_45/", icon: "instagram" },
];

