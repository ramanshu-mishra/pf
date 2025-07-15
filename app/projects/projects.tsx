// import OuterContent from "../components/outerContent/outerContent"
import { AnimatePresence, motion, useAnimate } from "motion/react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import cryptoTracker from "../assets/projectImages/cryptoTracker.png";
import recall from "../assets/projectImages/recall.png";
import Tag from "../components/tag";
import { cn } from "../lib/utils";
import debounce from "lodash/debounce";
import { windowStore } from "../store";

interface projectInterface {
  title: string;
  type: string;
  description: string;
  tags: string[];
  image: React.ReactNode;
  bg: string;
}

const projects: projectInterface[] = [
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
  },
];

const bgColorMap = {
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

export default function Main() {
  const num = windowStore((state) => state.indices);
  const setNum = windowStore((state) => state.setIndices);
  // const [num,setNum] = useState(0);
  const [scope, animate] = useAnimate();
  function TriggerAnimation() {
    animate(".ct1", { scaleX: [0, 1, 0] }, { duration: 0.6, delay: 0.2 });
    animate(".ct2", { scaleX: [0, 1, 0] }, { duration: 0.6, delay: 0.4 });
    animate(".ct3", { scaleX: [0, 1, 0] }, { duration: 0.6, delay: 0.5 });
  }

  useEffect(() => {
    TriggerAnimation();
  }, [num]);

  useEffect(() => {
    const handleScroll = debounce((e: WheelEvent) => {
      console.log("num is: " + num);
      if (e.deltaY > 0 && num[1] + 1 < projects.length) {
        console.log("scrolled down");
        setNum([num[0], num[1] + 1]);
      } else if (e.deltaY < 0 && num[1] - 1 >= 0) {
        console.log("scrolled up");
        setNum([num[0], num[1] - 1]);
      }
    }, 150);

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [num]);

  return (
    <motion.div
      ref={scope}
      layoutId="page"
      className="flex h-full w-full flex-1 flex-col items-center justify-center "
    >
      {/* code for the project shocase block */}
      <motion.div
        className="m-4 flex h-[90%] w-full flex-col gap-2  p-4 max-lg:items-center max-lg:justify-center lg:h-auto lg:w-240 lg:flex-row xl:w-300 xl:min-w-300 2xl:w-350 2xl:min-w-350"
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ y: 100, opacity: 0 }}
      >
        <div
          className={cn(
            `relative aspect-5/3 w-full min-w-80 rounded-3xl p-2 lg:p-4 md:w-[90%] md:min-w-[90%] lg:h-110 lg:min-h-110 lg:w-180 lg:min-w-180 xl:h-125 xl:min-h-125 xl:w-210 xl:min-w-210 2xl:h-135 2xl:min-h-135 2xl:w-250 2xl:min-w-250`,
          )}
          style={{ backgroundColor: bgColorMap[projects[num[1]].bg]["900"] }}
        >
          <ProjectDescriptionBlock num={num}></ProjectDescriptionBlock>
        </div>

        <ProjectImageBlock num={num}></ProjectImageBlock>
      </motion.div>
      <div>
        <ProjectNavigationButton
          num={num}
          setNum={setNum}
        ></ProjectNavigationButton>
      </div>
    </motion.div>
  );
}

function ProjectImageBlock({ num }: { num: number[] }) {
  return (
    <div
      className={`relative lg:inset-y-0 lg:my-auto flex flex-col rounded-3xl
  min-w-80 w-full h-fit
  sm:w-120 sm:min-w-120  sm:h-66 sm:min-h-66
  md:h-68 md:min-h-68 md:min-w-120 md:w-120
  lg:right-25 lg:h-78 lg:min-h-78 lg:w-90 lg:min-w-90
  xl:h-80 xl:min-h-80 xl:w-100 xl:min-w-100
  2xl:h-85 2xl:min-h-85 2xl:min-w-105  2xl:w-105 p-0.5 `}
      style={{ backgroundColor: bgColorMap[projects[num[1]].bg]["900"] }}>

       <div className=" relative overflow-hidden h-full w-full rounded-3xl">
      <div className="lg:absolute z-1 h-full w-full overflow-hidden rounded-3xl p-4"
       style={{ backgroundColor: bgColorMap[projects[num[1]].bg]["950"] }}
      >
        <div className=" relative flex flex-col gap-2">
          <div>{projects[num[1]].type}</div>
          <div className="text-2xl font-bold"
          style={{color: bgColorMap[projects[num[1]].bg]["50"]}}>{projects[num[1]].title}</div>
          <div className={`text-[15px] font-semibold`}
          style={{color: bgColorMap[projects[num[1]].bg]["100"]}}>{projects[num[1]].description}</div>
          <div className="flex gap-2 flex-wrap">{projects[num[1]].tags.map((tag,i)=>{
            return <Tag className="text-[12px]" text={tag} key={i}></Tag>
          })}</div>
        </div>
        
      </div>
      <TransitionAnimation num={num}></TransitionAnimation>
      </div>
      <div
        className={` max-lg:hidden absolute h-full w-full top-5 right-5  rounded-3xl z-0`}
        style={{ backgroundColor: bgColorMap[projects[num[1]].bg]["900"] }}
      ></div>
    </div>
  );
}

function ProjectDescriptionBlock({ num }: { num: number[] }) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden rounded-3xl`}
      style={{ backgroundColor: bgColorMap[projects[num[1]].bg]["400"] }}
    >
      <div className="absolute z-0 h-full w-full bg-amber-400 object-cover">
        {projects[num[1]].image}
      </div>
      <motion.div className="absolute bottom-3 z-5 flex h-auto w-full justify-center">
        <motion.div
          className="flex h-8 sm:h-12 md:h-15 w-[90%]  lg:w-[74%] items-center justify-center rounded-full bg-white text-lg font-semibold"
          style={{ color: bgColorMap[projects[num[1]].bg][900] }}
          whileHover={{
            backgroundColor: bgColorMap[projects[num[1]].bg][950],
            color: bgColorMap[projects[num[1]].bg][50],
            letterSpacing: "1px",
            fontSize: 1.1,
          }}
        >
          Visit
        </motion.div>
      </motion.div>

      {/* code for transition animation */}
     <TransitionAnimation num={num}></TransitionAnimation>
      {/* end of code for transition animation*/}
    </div>
  );
}

function ProjectNavigationButton({
  num,
  setNum,
}: {
  num: number[];
  setNum: (x: number[]) => void;
}) {
  return (
    <motion.div
      className="relative inset-x-0  z-[1047] mx-auto mb-6 flex h-10 w-fit items-center justify-center"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
    >
      <div className="flex items-center gap-3">
        <motion.div
          className={`flex h-12 w-12 items-center justify-center rounded-full`}
          animate={{
            backgroundColor:
              num[1] == 0
                ? bgColorMap[projects[num[1]].bg]["900/50"]
                : bgColorMap[projects[num[1]].bg]["800"],
          }}
           whileHover={{
            backgroundColor:
              num[1] == 0
                ? bgColorMap[projects[num[1]].bg]["900/50"]
                : bgColorMap[projects[num[1]].bg]["400"],
          }}
           whileTap={{backgroundColor: num[1] == projects.length - 1
                ? bgColorMap[projects[num[1]].bg]["900/50"]
                : bgColorMap[projects[num[1]].bg]["400"],}}      
          onClick={() => {
            if (num[1] > 0) setNum([num[0], num[1] - 1]);
          }}
          style={{ cursor: num[1] == 0 ? "not-allowed" : "pointer" }}
        >
          <IconChevronLeft></IconChevronLeft>
        </motion.div>

        {projects.map((p, i) => {
          return (
            <motion.div
              key={i}
              animate={{ width: i === num[1] ? "30px" : "12px" }}
              transition={{ duration: 0.3 }}
              className=" h-2 w-8 rounded-full bg-white/50"
            ></motion.div>
          );
        })}

        <motion.div
          className={`flex h-12 w-12 items-center justify-center rounded-full`}
          animate={{
            backgroundColor:
              num[1] == projects.length - 1
                ? bgColorMap[projects[num[1]].bg]["900/50"]
                : bgColorMap[projects[num[1]].bg]["800"],
          }}
          whileHover={{backgroundColor: num[1] == projects.length - 1
                ? bgColorMap[projects[num[1]].bg]["900/50"]
                : bgColorMap[projects[num[1]].bg]["400"],}}
          whileTap={{backgroundColor: num[1] == projects.length - 1
                ? bgColorMap[projects[num[1]].bg]["900/50"]
                : bgColorMap[projects[num[1]].bg]["400"],}}      
          onClick={() => {
            if (num[1] < projects.length - 1) setNum([num[0], num[1] + 1]);
          }}
          style={{
            cursor: num[1] == projects.length - 1 ? "not-allowed" : "pointer",
          }}
        >
          <IconChevronRight></IconChevronRight>
        </motion.div>
      </div>
    </motion.div>
  );
}


function TransitionAnimation({num}:{num:number[]}){
  return (
    <>
    <motion.div
            className={`ct1 absolute top-0 left-0 z-4 h-full w-full rounded-3xl`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              transformOrigin: "left",
              backgroundColor: bgColorMap[projects[num[1]].bg]["200"],
            }}
          ></motion.div>
          <motion.div
            className={`ct2 absolute z-3 top-0 left-0 h-full w-full rounded-3xl`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              transformOrigin: "left",
              backgroundColor: bgColorMap[projects[num[1]].bg]["900"],
            }}
          ></motion.div>
          <motion.div
            className={`ct3 absolute z-2  top-0 left-0 h-full w-full rounded-3xl`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{
              transformOrigin: "left",
              backgroundColor: bgColorMap[projects[num[1]].bg]["200"],
            }}
          ></motion.div>
    </>
  )
}


