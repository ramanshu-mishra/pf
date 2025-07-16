"use client"
import {motion} from "motion/react";
// import { useEffect } from "react";
// import { windowStore } from "../store";
import { devTools, skills } from "../projects/projectConfig";
import SplitedText from "../components/SplittedText/SplittedText";
import Tag from "../components/tag";

export default function Page(){
    const containerVariants = {
  hidden: { y: 10, filter: "blur(10px)" },
  visible: {
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      damping: 40,         // Increased for smoother motion
      stiffness: 180,      // Decreased for less abrupt movement
      staggerChildren: 0.1, // Increased for more gradual staggering
      delayChildren: 0.1,    // Slightly increased delay
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      damping: 18,         // Increased for smoother motion
      stiffness: 180,      // Decreased for less abrupt movement
    },
  },
};

    
   return (
      <motion.div
  layoutId="page"
  className="relative flex  w-full flex-1 flex-col items-center justify-center overflow-y-auto "
  initial="hidden overflow-hidden"
  animate="visible overflow-y-auto"
  exit={{ y: 100, opacity: 0, overflow: "none" }}
  transition={{duration:0.5}}
  variants={containerVariants}
>
  <motion.div
    className="h-full w-full flex justify-center min-w-80"
    variants={itemVariants}
  >
    <motion.div
      className="w-[90%] sm:w-[70%] h-full flex items-center flex-col gap-3 "
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div className="flex text-3xl self-start bg-cyan-950  gap-2" variants={itemVariants}>
        <SplitedText word="About" />
        <SplitedText word="Me" />
      </motion.div>

      {/* Intro text */}
      <motion.div className="text-[15px] bg-cyan-950 max-sm:min-w-[90%] max-sm:w-[90%]  sm:text-md piles" variants={itemVariants}>
        <div>
          I’m <span className="font-semibold">Ramanshu Sharan Mishra</span>.
        </div>
        <div>
          20. Developer. Builder of cool things. Lover of clean code and chaos.
          I don’t just write code — I engineer experiences. If it feels
          impossible, I’m already interested.
        </div>
      </motion.div>

      {/* Skills & DevTools Section */}
      <motion.div
        className="h-full w-full  flex flex-col gap-2 items-center"
        variants={containerVariants}
      >
        <motion.div className="text-3xl bg-cyan-950 piles" variants={itemVariants}>
          <SplitedText word={"SKILLS"} />
        </motion.div>

        {/* TechStack */}
        <motion.div
          className="h-fit piles bg-cyan-950 w-full flex flex-col gap-2 border-2 rounded-3xl px-4 py-2"
          variants={itemVariants}
          
        >
          <div className="w-full flex justify-center items-center">
            TechStack
          </div>
          <div className="flex text-sm sm:text-md gap-2 flex-wrap">
            {skills.map((skill, i) => (
              <Tag text={skill} key={i} />
            ))}
          </div>
        </motion.div>

        {/* DevTools */}
        <motion.div
          className="h-fit w-full bg-cyan-950 piles flex flex-col gap-2 border-2 rounded-3xl px-4 py-2"
          variants={itemVariants}
        >
          <div className="w-full flex justify-center items-center">
            DevTools
          </div>
          <div className="flex gap-2 text-sm sm:text-md flex-wrap">
            {devTools.map((skill, i) => (
              <Tag text={skill} key={i} />
            ))}
          </div>
        </motion.div>

        {/* C++ message */}
        <motion.div
          className="h-20 piles flex justify-center items-center text-center "
          variants={itemVariants}
        >
          Still C++ remains as the only love of my Life
        </motion.div>
      </motion.div>
    </motion.div>
  </motion.div>
</motion.div>

     );
}