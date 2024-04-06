export type Skill = string;
type Skills = Skill[];

export const languages = [
  "Java",
  "Python",
  "C",
  "JavaScript",
  "TypeScript",
  "SQL",
  "Bash",
];
export const front_end = ["React.js", "Next.js", "Bootstrap", "Tailwind"];
export const back_end = ["Express.js", "Node.js", "Flask", "REST APIs"];

const linkfolio_skills: Skills = [
  "Next.js",
  "React.js",
  "Tailwind",
  "Firebase",
  "Zustand",
  "Puppeteer",
];
const harbor_skills: Skills = [
  "Next.js",
  "React.js",
  "Tailwind",
  "Firebase",
  "Zustand",
  "Shadcnui",
  "NextAuth",
  "OpenAI Api",
  "Spotify Api",
];
const clinkz_skills: Skills = [
  "Next.js",
  "React.js",
  "Tailwind",
  "Zustand",
  "Shadcnui",
  "NextAuth",
];

export type ProjectPreview = {
  alt: string;
  width: number;
  height: number;
  image_url: string;
};

export type Project = {
  title: string;
  description: string;
  skills: Skills;
  live_link: string | null;
  github_link: string;
  redirect_link: string;
  image_url: string;
};

type Projects = Project[];

export const projects: Projects = [
  {
    title: "LINKFOLIO",
    description:
      "Platform for users seeking design inspiration for their personal web portfolios through visualizing endless real-world portfolios.",
    skills: linkfolio_skills,
    live_link: "https://linkfolio-nu.vercel.app/",
    github_link: "https://github.com/yeahimjt/linkfolio",
    redirect_link: "/project/linkfolio",
    image_url: "/linkfolio.webp",
  },
  {
    title: "HARBOR",
    description:
      "Service that leverages AI to recommend music to users, recommendations are synced to users spotify account.",
    skills: harbor_skills,
    live_link: null,
    github_link: "https://github.com/yeahimjt/harbor",
    redirect_link: "/project/harbor",
    image_url: "/harbor.webp",
  },
  {
    title: "CLINKZ",
    description:
      "Subscription-based service that allows users to enter Amazon product URLs to have them actively scraped for better prices, receiving notifications when price is low.",
    skills: clinkz_skills,
    live_link: "https://harbor-ten.vercel.app/",
    github_link: "https://github.com/yeahimjt/clinkz",
    redirect_link: "/project/clinkz",
    image_url: "/clinkz.webp",
  },
];
