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

export interface ProjectFull {
  title: string;
  description: string;
  skills: Skills;
  live_link: string | null;
  github_link: string;
  redirect_link: string;
  image_url: string;
  back_redirect: string;
  forward_redirect: string;
  overview: string;
  features: string;
  challenges: string;
  results: string;
  type: string;
  duration: string;
}

export interface ProjectPage {
  linkfolio: ProjectFull;
  harbor: ProjectFull;
  clinkz: ProjectFull;
}

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

export const project_page: ProjectPage = {
  linkfolio: {
    title: "LINKFOLIO",
    description:
      "Platform for users seeking design inspiration for their personal web portfolios through visualizing endless real-world portfolios.",
    skills: linkfolio_skills,
    live_link: "https://linkfolio-nu.vercel.app/",
    github_link: "https://github.com/yeahimjt/linkfolio",
    redirect_link: "/project/linkfolio",
    image_url: "/linkfolio-big.webp",
    back_redirect: "/project/clinkz",
    forward_redirect: "/project/harbor",
    overview:
      "Resources for building a personal web portfolio are scarce. Often times google searches will recommend you the same few portfolios that are notable in their respective fields. Linkfolio is here to bring real-world portfolios to users.",
    features:
      "Linkfolio utilizes Firebase for its authentication, database for data, and storage for storing the images of users portfolio website. Users can upload, or edit their posts and using Puppeteer can validate their URL so that a screenshot is taken of their portfolio at the given URL and stored so they can avoid having to upload a picture themselves. Infinite scrolling exists for exploring posts to feed users data incrementally for optimization.",
    challenges:
      "The project had no notable challenges. Before developing any of Linkfolios pages or functionality, I had already designed and mapped out needed functionality. This allowed me to have a solid foundation for how my website would look, and how it would ultimately flow for users.",
    results:
      "What I was left with at the end of development was a production ready platform for users to utilize. As of right now I am pushing this platform via Linkedin, and various other social media platforms; targeting specific users who meet the need-case for the application to grow its community.",
    type: "Web Application",
    duration: "1 month",
  },
  harbor: {
    title: "HARBOR",
    description:
      "Service that leverages AI to recommend music to users, recommendations are synced to users spotify account.",
    skills: harbor_skills,
    live_link: null,
    github_link: "https://github.com/yeahimjt/harbor",
    redirect_link: "/project/harbor",
    image_url: "/harbor-big.webp",
    back_redirect: "/project/linkfolio",
    forward_redirect: "/project/clinkz",
    overview:
      "As someone who is more times than not listening to music, I often find searching for new music difficult. I do not interact often with my streaming platform to like or dislike the songs I'm reommended often making me skip a large bulk of music. An idea sparked from this, what if I could just easily tell my streaming service exactly what kind of music I like in greater detail? Resulting from this idea, I started to brainstorm an application that would allow users to provide text descriptions of their music taste, in turn having AI recommend music that fits that criteria.",
    features:
      "Harbor relies on Firebase for authentication, database for data, and storage for storing images generated for playlist covers generated by OpenAI Dalle-3. Spotify Api is intergrated to allow for recommendations from Harbor to be synced to users Spotify accounts for later listening.",
    challenges:
      "A reasonable challenge I was met with was simply storing the users session including their access token for Spotify's API to allow their experience browsing music to be seamless. Unfortunately Spotify deemed the project as a hobby not allowing public users to access any of its functionality.",
    results:
      "Harbor became an application I personally use daily. Since the project is not accessible to public users I allowed personal friends to have access to generate their own AI-Enhanced playlists that they regularly use.",
    type: "Web Service",
    duration: "3 weeks",
  },
  clinkz: {
    title: "CLINKZ",
    description:
      "Subscription-based service that allows users to enter Amazon product URLs to have them actively scraped for better prices, receiving notifications when price is low.",
    skills: clinkz_skills,
    live_link: "https://harbor-ten.vercel.app/",
    github_link: "https://github.com/yeahimjt/clinkz",
    redirect_link: "/project/clinkz",
    image_url: "/clinkz-big.webp",
    back_redirect: "/project/harbor",
    forward_redirect: "/project/linkfolio",
    overview:
      "Typically when researching into purchasing products, I often try my best to buy when the items price is at a discount. Unfortunately at the time there was no method of tracking its price without manually checking amazon product pages. This is where Clinkz was conceptualized, allowing users to enter amazon product URLs to have Clinkz track and notify products for them.",
    features:
      "Clinkz utilizes Firebase for its data storage, and users authorization. The bread winning feature of Clinkz is its hand free data retrieval from dynamic amazon product links. This allows the user to simply enter an amazon product link, and in turn store important data like its current price, description, ratings, and reviews. Users can choose which list to add the new amazon product to help maintain the products they are looking to buy. Clinkz very importantly also, on a repeated schedule, re-scrapes all amazon products listed in the Firestore database to grab the products new current price and update users via E-mail notification. Clinkz also has subscriptions tiers allowing for users to pay monthly for scraping even more products.",
    challenges:
      "Choosing which proxy provider for web scraping proved to be difficult as I was unfamiliar at the time with proxies. Eventually choosing one, it was not until I pushed Clinkz to production that it failed to work; with no clear answer of the problem I switched proxy providers and have had no problem since.",
    results:
      "Clinkz is a functional amazon product price tracker that efficiently implements subscription tiers for its users.",
    type: "Web Service",
    duration: "4 weeks",
  },
};
