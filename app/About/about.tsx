"use client";
import { motion } from "motion/react";
// import { useEffect } from "react";
// import { windowStore } from "../store";
import { devTools, skills } from "../projects/projectConfig";
import SplitedText from "../components/SplittedText/SplittedText";


export default function Page() {
  const staggerChildren = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.09, delayChildren: 0.02 },
    },
  };

  return (
    <motion.div
      layoutId="page"
      className="relative flex w-full flex-1 flex-col items-center justify-center overflow-y-auto"
      exit={{ y: 20, opacity: 0, overflow: "none" }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="flex h-full w-full min-w-80 justify-center">
        <motion.div className="flex h-full w-[90%] flex-col items-center gap-3 sm:w-[70%]">
          {/* Header */}
          <motion.div
            className="flex gap-2 self-start bg-cyan-950 text-3xl"
            exit={{ backgroundColor: "transparent" }}
            transition={{ duration: 0 }}
          >
            <SplitedText word="About" />
            <SplitedText word="Me" />
          </motion.div>

          {/* Intro text */}
          <motion.div
            className="sm:text-md piles bg-cyan-950 text-[15px] max-sm:w-[90%] max-sm:min-w-[90%]"
            exit={{ backgroundColor: "transparent" }}
            transition={{ duration: 0 }}
          >
            <div>
              I’m <span className="font-semibold">Ramanshu Sharan Mishra</span>.
            </div>
            <div>
              20. Developer. Builder of cool things. Lover of clean code and
              chaos. I don’t just write code — I engineer experiences. If it
              feels impossible, I’m already interested.
            </div>
          </motion.div>

          {/* Skills & DevTools Section */}
          <motion.div
            className="flex h-full w-full flex-col items-center gap-2"
            exit={{ backgroundColor: "transparent" }}
            transition={{ duration: 0 }}
          >
            <motion.div
              className="piles bg-cyan-950 text-3xl"
              exit={{ backgroundColor: "transparent" }}
              transition={{ duration: 0 }}
            >
              <SplitedText word={"SKILLS"} />
            </motion.div>

            {/* TechStack */}
            <motion.div
              className="piles flex h-fit w-full flex-col gap-2 rounded-3xl border-2 bg-cyan-950 px-4 py-2"
              exit={{ backgroundColor: "transparent" }}
              transition={{ duration: 0 }}
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
            >
              <div className="flex w-full items-center justify-center">
                TechStack
              </div>
              <div className="sm:text-md flex flex-wrap gap-2 text-sm">
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className={`rounded-full border-1 border-white/60 px-2 py-1`}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.3 },
                      },
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* DevTools */}
            <motion.div
              className="piles flex h-fit w-full flex-col gap-2 rounded-3xl border-2 bg-cyan-950 px-4 py-2"
              exit={{ backgroundColor: "transparent" }}
              transition={{ duration: 0 }}
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
            >
              <div className="flex w-full items-center justify-center">
                DevTools
              </div>
              <div className="sm:text-md flex flex-wrap gap-2 text-sm">
                {devTools.map((skill, i) => (
                  <motion.div
                    key={i}
                    className={`rounded-full border-1 border-white/60 px-2 py-1`}
                    variants={{
                      hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: { duration: 0.3 },
                      },
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* C++ message */}
            <motion.div className="piles flex h-20 items-center justify-center text-center">
              Still C++ remains as the only love of my Life
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
