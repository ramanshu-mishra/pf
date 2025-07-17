"use client"
import Navbar from "../navbar/navbar"
import SplitedText from "../SplittedText/SplittedText"
import {IconBrandGithub, IconBrandTwitter} from "@tabler/icons-react"
import LinkedIn from "../../assets/linkedIn"
import {AnimatePresence, motion,  useAnimate} from "motion/react";
import { useMousePosition, windowStore } from "../../store"
import { useEffect } from "react"
import Head from "next/head"
import { pageColors,PageColorMap} from "../../projects/projectConfig"

const titles = ["", "Projects", "About", "Connect"];

export default function Page({ children, }:{className?: string, children:React.ReactNode}) {
    const [scope,animate]  = useAnimate();
        const nm = windowStore(store=>store.indices);
        
        


         function TriggerSlider() {
  const currentTheme = PageColorMap[pageColors[nm[0]]?.[nm[1]]] ?? PageColorMap["neutral"];
  
  const gradients = [
    `radial-gradient(circle at 50% 0%, ${currentTheme["900"]}, ${currentTheme["100"]})`,
    `radial-gradient(circle at 50% 0%, ${currentTheme["900"]}, ${currentTheme["400"]})`,
    `radial-gradient(circle at 50% 100%, ${currentTheme["900"]}, ${currentTheme["100"]})`,
    `radial-gradient(circle at 50% 100%, white, white)`
  ];

  animate(".slider", { background: gradients }, { duration: 1 });
}
         
        
          useEffect(() => {
            
            TriggerSlider();
          }, [nm]);
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
            zIndex: 2050
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
        <motion.div ref={scope} className="fixed inset-0 w-screen h-screen flex flex-col justify-between items-center overflow-y-auto" 
        animate={{backgroundColor: PageColorMap[pageColors[nm[0]]?.[nm[1]]]?.["950"] ?? PageColorMap["neutral"]["950"]}}
        style={{userSelect: "none"}}
        
        >
          <motion.div className="absolute h-full w-full overflow-hidden  ">
<svg
  className="h-full w-full left-0 bottom-0 stroke-neutral-100 opacity-15 z-0"
  viewBox="0 0 1202 1080"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style={{ pointerEvents: "none" }}
>
  <motion.path
    d="M1621.88 -47.1813C1451.86 -40.9397 1088.86 85.9397 996.98 543.524C905.102 1001.11 422.711 1152.88 193 1171.56"
    strokeWidth="3"
    strokeLinecap="round"
    
    initial={{ pathLength: 0 }}
    animate={{ pathLength: [0,1,1,0,0] }}
    transition={{
      duration: 4,
      times: [0,0.33,0.66,0.9,1],
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
      
    }}
  />
  <motion.path
    d="M1710.67 356.612C1545.47 315.917 1161.58 338.213 947.557 752.964C733.532 1167.71 228.009 1181.15 2.00008 1136.03" 
    strokeWidth="3"
    strokeLinecap="round"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: [0,1,1,0,0] }}
    transition={{
      duration: 4,
      times: [0,0.33,0.66,0.9,1],
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
      delay: 1
    }}
  />
</svg>

          </motion.div>
         

          <AnimatePresence mode="wait">
            {titles[nm[0]] && (
              <motion.div
                key={nm[0]}
                className="w-fit absolute right-4 text-5xl my-auto inset-y-0 h-fit font-semibold"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.4 }}
                style={{ transformOrigin: "right" }}
              >
                {titles[nm[0]]}
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
                  <motion.span className="w-8 h-8 bg-transparent rounded-full fixed z-[2050]  outer-pointer " style={{
                    left: 0,
                    top: 0,
                    position: "fixed",
                    pointerEvents: "none"
                  }}
                  animate={{x: mousePosition.x - 20, y: mousePosition.y-20}} transition={{type: "spring" , stiffness: 300, damping: 30 ,duration: 0.2}}>
                    
                  </motion.span>
                  <motion.span className="w-5 h-5 bg-white  rounded-full fixed z-[2051] " style={{
                    left: 0,
                    top: 0,
                    position: "fixed",
                    pointerEvents: "none"
                  }}
                  animate={{x: mousePosition.x - 12, y: mousePosition.y-12}} transition={{type: "spring" , stiffness: 300, damping: 30 ,duration: 0.2}}>
                    
                  </motion.span>
                   <motion.span className="w-2 h-2 bg-white  rounded-full fixed z-[2052]  mix-blend-difference " style={{
                    left: 0,
                    top: 0,
                    position: "fixed",
                    pointerEvents: "none"
                  }}
                  animate={{x: mousePosition.x - 6, y: mousePosition.y-6}} transition={{type: "spring", duration: 0.15}}>
                    
                  </motion.span>
                  {/* code for costom pointer --- done */}

            <div className="max-sm:mt-6  w-full mt-8 mb-2 flex flex-row justify-between items-center px-8 z-[950] gap-4">
                <div className="text-2xl md:text-3xl flex gap-2 items-center">
                    <SplitedText word={"Ramanshu"} className="" />
                    <SplitedText word={"Sharan"} className="hidden sm:inline" />
                    <SplitedText word={"Mishra"} className="hidden sm:inline" />
                </div>
                <Navbar width={"3rem"} height="2.5rem" strokeWidth="5px" />
            </div>

<div className="flex w-full h-full ">
  <motion.div  className=" max-sl:hidden shadow-md w-2 h-[30%] left-4 inset-y-0 my-auto absolute rounded-full overflow-hidden slider "
  animate={{ height: `calc(30% - ${4 * nm[0]}%)` }}

  >
            <div className=" h-full w-full rounded-full slider "></div>

        </motion.div>
  <main className="flex-1 w-full min-w-0  min-h-0 flex flex-col justify-center items-center px-2 sm:px-8 h-full ">
                {children}
            </main>
</div>
            

            <footer className="w-full  min-w-0 min-h-0 flex flex-row justify-start sm:justify-between items-end px-8  relative max-sm:pb-6 mt-2 pb-8 z-[950] gap-4">
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
                    <LinkedIn classes=" text-neutral-50 h-8 w-8"></LinkedIn>
                    </a>
                    <a target="_blank" download={"/Resume_Ramanshu_Sharan_Mishra.pdf"} href={"/Resume_Ramanshu_Sharan_Mishra.pdf"}><div className="font-bold hover:scale-[1.2] active:scale-[0.98] transition-all duration-300 text-xl">Resume</div></a>
                </div>
            </footer>
        </motion.div>
    );
}