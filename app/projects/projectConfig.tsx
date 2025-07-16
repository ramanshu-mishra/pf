import Image from "next/image"
import cryptoTracker from "../assets/projectImages/cryptoTracker.png";
import recall from "../assets/projectImages/recall.png";
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
    title: "Crypto Price Tracker",
    type: "A simple platform to get price and volume updates for Crypto Currencies",
    description:
      "A simple API wrapper for price and Volume changes of top performing crypto currencies and with filter support",
    tags: ["React.js", "TypeScript", "TailwindCSS"],
    image: (
      <Image
        alt={"ram"}
        width={0}
        src={cryptoTracker}
        className="h-full w-full"
      ></Image>
    ),
    bg: "violet",
    link: "https://crypto-tracker-eight-henna.vercel.app/"
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
};



export const PageColorMap = {
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
export const pageColors: string[][]=[["neutral"],["blue", "violet"],["cyan"],["neutral"]];
export const windowSizes: number[] = [1,2,1,1];

export const skills: string[] = ["React.js(Redux, Zustand)", "Next.js", "JavaScript(ES6+)", "TailwindCSS" , "Framer-Motion", "Express.js","WebSockets","PostgressDB", "MongoDB", "MySQL"]

export const devTools: string[] = ["TypeScript", "Git", "Docker", "Prisma-ORM"]