"use client"
import Navbar from "../navbar/navbar"
import SplitedText from "../SplittedText/SplittedText"
import {IconBrandGithub, IconBrandTwitter} from "@tabler/icons-react"
import LinkedIn from "../../assets/linkedIn"
import {AnimatePresence, motion,  useAnimate, useMotionTemplate, useMotionValue} from "motion/react";
import { useMousePosition } from "../../store"
import { useEffect } from "react"
import Head from "next/head"

const titles = ["", "Projects"];

export default function Page({className, children, background, num}:{className?: string, children:React.ReactNode, background: string, num:number}) {
    const [scope,animate]  = useAnimate();
    async function handleClick(){
       await animate(".outer-pointer", 
          {
            backgroundColor: ["#f8fafc"],
            opacity: [1, 0],
            scale: [1, 4]
          },
        {
          duration:  0.5
        })
        animate(".outer-pointer", 
          {
            scale: 1,
            zIndex: 2
          },
          {
            duration: 0
          }
        )
      }
    
    const mousePosition = useMousePosition((state) => state.mousePosition);
    const updateMousePosition = useMousePosition((state) => state.updatePosition);
    useEffect(() => {
  const handleGlobalMouseMove = (e: MouseEvent) => {
    updateMousePosition({x:e.clientX, y:e.clientY});
    // console.log(mousePosition.x);
  };
  const handleGlobalTouchMove = (e: TouchEvent) => {
    if (e.touches && e.touches.length > 0) {
      updateMousePosition({x:e.touches[0].clientX, y:e.touches[0].clientY})
    }
  };

  window.addEventListener("mousemove", handleGlobalMouseMove);
  window.addEventListener("touchmove", handleGlobalTouchMove);
  document.addEventListener("click", handleClick);

  return () => {
    window.removeEventListener("mousemove", handleGlobalMouseMove);
    window.removeEventListener("touchmove", handleGlobalTouchMove);
    document.removeEventListener("click", handleClick);
  };
  
}, []);

    return (
        <motion.div ref={scope} className="fixed inset-0 w-screen h-screen flex flex-col justify-between items-center overflow-hidden" 
        animate={{backgroundColor: background}}
        style={{userSelect: "none"}}
        >
          <AnimatePresence mode="wait">
            {titles[num] && (
              <motion.div
                key={num}
                className="w-fit absolute right-0 text-5xl my-auto inset-y-0 h-fit font-semibold"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.4 }}
                style={{ transformOrigin: "right" }}
              >
                {titles[num]}
              </motion.div>
            )}
          </AnimatePresence>
            <Head>
        <title>RamSpace:Porfolio Ramanshu Sharan Mishra</title>
        <meta name="description" content="Portfolio of Ramanshu Sharan Mishra. Full Stack Web Developer and Undergraduate Student at NIT-Jalandhar" />
        <meta property="og:title" content="RamSpace: Portfolio Ramanshu Sharan Mishra" />
        <meta property="og:description" content="Portfolio of Ramanshu Sharan Mishra. Full Stack Web Developer and Undergraduate Student at NIT-Jalandhar" />
        <meta property="og:image" content= "../assets/protfolio-image.png" />
        {/* <meta name="robots" content="index, follow" /> */}
        </Head>
             {/* code for custom pointer */}
                  <motion.span className="w-8 h-8 bg-transparent rounded-full fixed z-[1048]  outer-pointer " style={{
                    left: 0,
                    top: 0,
                    position: "fixed",
                    pointerEvents: "none"
                  }}
                  animate={{x: mousePosition.x - 20, y: mousePosition.y-20}} transition={{type: "spring" , stiffness: 300, damping: 30 ,duration: 0.2}}>
                    
                  </motion.span>
                  <motion.span className="w-5 h-5 dark:bg-white bg-black rounded-full fixed z-[1049] " style={{
                    left: 0,
                    top: 0,
                    position: "fixed",
                    pointerEvents: "none"
                  }}
                  animate={{x: mousePosition.x - 12, y: mousePosition.y-12}} transition={{type: "spring" , stiffness: 300, damping: 30 ,duration: 0.2}}>
                    
                  </motion.span>
                   <motion.span className="w-2 h-2 bg-white  rounded-full fixed z-[1050]  mix-blend-difference " style={{
                    left: 0,
                    top: 0,
                    position: "fixed",
                    pointerEvents: "none"
                  }}
                  animate={{x: mousePosition.x - 6, y: mousePosition.y-6}} transition={{type: "spring", duration: 0.15}}>
                    
                  </motion.span>
                  {/* code for costom pointer --- done */}

            <div className="w-full mt-8 mb-2 flex flex-row justify-between items-center px-8 z-[950] gap-4">
                <div className="text-2xl md:text-3xl flex gap-2 items-center">
                    <SplitedText word={"Ramanshu"} className="" />
                    <SplitedText word={"Sharan"} className="hidden sm:inline" />
                    <SplitedText word={"Mishra"} className="hidden sm:inline" />
                </div>
                <Navbar width={"3rem"} height="2.5rem" strokeWidth="5px" />
            </div>

            <main className="flex-1 w-full min-w-0 min-h-0 flex flex-col justify-center items-center px-2 sm:px-8 h-full ">
                {children}
            </main>

            <footer className="w-full min-w-0 min-h-0 flex flex-row justify-start sm:justify-between items-end px-8  relative pb-8 z-[950] gap-4">
                <div className="text-2xl md:text-3xl flex gap-2">
                    <SplitedText word={"Also"} className="" />
                    <SplitedText word={"I'm"} className="" />
                    <SplitedText word={"Iron"} className="" />
                    <SplitedText word={"Man"} className="" />
                </div>
                <div className="hidden sm:flex justify-around items-center gap-6 mt-4 sm:mt-0  ">
                    <a target="_black" href="https://github.com/ramanshu-mishra"><IconBrandGithub className="hover:scale-[1.3] active:scale-[0.98] transition-all duration-300 h-8 w-8" /></a>
                    <a target="_black" href="https://x.com/RamanshuSharan"><IconBrandTwitter className="hover:scale-[1.3] active:scale-[0.98] transition-all duration-300 h-8 w-8" /></a>
                    <a target="_black" href="https://www.linkedin.com/in/ramanshu-sharan-mishra-29905627b/"> 
                    <LinkedIn classes="text-black dark:text-neutral-50 h-8 w-8"></LinkedIn>
                    </a>
                    <a target="_blank" download={"/Resume_Ramanshu_Sharan_Mishra.pdf"} href={"/Resume_Ramanshu_Sharan_Mishra.pdf"}><div className="font-bold hover:scale-[1.2] active:scale-[0.98] transition-all duration-300 text-xl">Resume</div></a>
                </div>
            </footer>
        </motion.div>
    );
}