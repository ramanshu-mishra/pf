import Image from "next/image"
import DreamMotion from "../assets/projectImages/DreamMotion.png";
import recall from "../assets/projectImages/recall.png";
import talksy from "../assets/projectImages/talksy.png";
import cofeeshare from "../assets/projectImages/cofeeshare.png";
interface projectInterface {
  title: string;
  type: string;
  description: string;
  tags: string[];
  image: React.ReactNode;
  bg: string;
  link:string;
}

interface projectInterface {
  title: string;
  type: string;
  description: string;
  tags: string[];
  image: React.ReactNode;
  bg: string;
  link:string;
}

export const projects: projectInterface[] = [
    {
    title: "Talksy",
    type: "A platform to meet strangers over the internet",
    description:
      "Meetings strangers around the word made easy through Talksy. A random person peer to peer video conferrensing application.",
    tags: [ "WebRTC","TypeScript","NodeJs", "WebSockets" ,"NextJS", "TailwindCSS"],
    image: (
      <Image
        alt={"talksy"}
        width={0}
        src={talksy}
        className="h-full w-full"
      ></Image>
    ),
    bg: "yellow",
    link: "https://talksy.fun/"
  },
  {
    title: "CofeeShare",
    type: "A peer to peer data sharing paltform",
    description:
      "A peer to peer data sharing platform levereging WebRTC. ",
    tags: ["WebRTC","TypeScript","NodeJs", "WebSockets" ,"NextJS", "TailwindCSS"],
    image: (
      <Image
        alt={"ram"}
        width={0}
        src={cofeeshare}
        className="h-full w-full"
      ></Image>
    ),
    bg: "teal",
    link: "https://cofeeshare.app/"
  },
  {
    title: "Recall",
    type: "Bookmarking and note-taking while you browse",
    description:
      "An intelligent web companion that lets you bookmark and take notes on the go, organized effortlessly with tags and autofetched images while you browse.",
    tags: ["React.js", "TypeScript", "TailwindCSS", "Express.js", "MongoDB"],
    image: (
      <Image
        alt={"ram"}
        width={0}
        src={recall}
        className="h-full w-full"
      ></Image>
    ),
    bg: "blue",
    link: "https://recall-rho.vercel.app/"
  },
  {
    title: "Dream Motion Landing Page",
    type: "Landing page for AI animation SAAS platform",
    description:
      "A clean and shower landing page for AI animation SAAS platform DreamMotion",
    tags: ["Next.js", "TypeScript", "Motion.dev"],
    image: (
      <Image
        alt={"ram"}
        width={0}
        src={DreamMotion}
        className="h-full w-full"
      ></Image>
    ),
    bg: "violet",
    link: "https://dream-motion-landing-page.vercel.app/"
  },
];

export const bgColorMap = {
  blue: {
    "950": "#172554",
    "900": "#1e3a8a",
    "800": "#1e40af",
    "400": "#60a5fa",
    "200": "#bfdbfe",
    "100": "#dbeafe",
    "50": "#eff6ff",
    "900/50": "rgba(30, 58, 138, 0.5)",
  },
  violet: {
    "950": "#3b0764",
    "900": "#581c87",
    "800": "#6b21a8",
    "400": "#a78bfa",
    "200": "#e9d5ff",
    "100": "#f3e8ff",
    "50": "#faf5ff",
    "900/50": "rgba(88, 28, 135, 0.5)",
  },
  yellow: {
    "950": "#422006",
    "900": "#713f12",
    "800": "#854d0e",
    "400": "#facc15",
    "200": "#fef08a",
    "100": "#fef9c3",
    "50": "#fefce8",
    "900/50": "rgba(113, 63, 18, 0.5)",
  },
  teal:{
     "950": "#042f2e",
    "900": "#134e4a",
    "800": "#115e59",
    "400": "#2dd4bf",
    "200": "#99f6e4",
    "100": "#ccfbf1",
    "50": "#f0fdfa",
    "900/50": "rgba(19, 78, 74, 0.5)",
  }
};



export const PageColorMap = {
  teal:{
     "950": "#042f2e",
    "900": "#134e4a",
    "800": "#115e59",
    "400": "#2dd4bf",
    "200": "#99f6e4",
    "100": "#ccfbf1",
    "50": "#f0fdfa",
    "900/50": "rgba(19, 78, 74, 0.5)",
  },
  yellow: {
    "950": "#422006",
    "900": "#713f12",
    "800": "#854d0e",
    "400": "#facc15",
    "200": "#fef08a",
    "100": "#fef9c3",
    "50": "#fefce8",
    "900/50": "rgba(113, 63, 18, 0.5)",
  },
   blue: {
    "950": "#172554",
    "900": "#1e3a8a",
    "800": "#1e40af",
    "400": "#60a5fa",
    "200": "#bfdbfe",
    "100": "#dbeafe",
    "50": "#eff6ff",
    "900/50": "rgba(30, 58, 138, 0.5)",
  },
  violet: {
    "950": "#3b0764",
    "900": "#581c87",
    "800": "#6b21a8",
    "400": "#a78bfa",
    "200": "#e9d5ff",
    "100": "#f3e8ff",
    "50": "#faf5ff",
    "900/50": "rgba(88, 28, 135, 0.5)",
  },
  cyan: {
    "950": "#083344",
    "900": "#164e63",
    "800": "#155e75",
    "400": "#22d3ee",
    "200": "#a5f3fc",
    "100": "#cffafe",
    "50": "#ecfeff",
    "900/50": "rgba(8, 51, 68, 0.5)",
  },
  neutral: {
    "950": "#0a0a0a",
    "900": "#171717",
    "800": "#262626",
    "400": "#a3a3a3",
    "200": "#e9d5ff",
    "100": "#e5e5e5",
    "50": "#fafafa",
    "900/50": "rgba(23, 23, 23, 0.5)",
  }
}
export const pageColors: string[][]=[["neutral"],["yellow","teal","blue", "violet"],["cyan"],["neutral"]];
export const windowSizes: number[] = [1,4,1,1];

export const skills: string[] = ["React.js(Redux, Zustand)", "Next.js", "JavaScript(ES6+)", "WebRTC","TailwindCSS" , "Framer-Motion", "Express.js","WebSockets","PostgressDB", "MongoDB", "MySQL","MonoRepo"]

export const devTools: string[] = ["TypeScript", "Git", "Docker", "Prisma-ORM", "TurboRepo"]