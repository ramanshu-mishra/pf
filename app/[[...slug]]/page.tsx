"use client"
// import Image from "next/image";
import debounce from "lodash/debounce"
import {useAnimate, motion, stagger,  AnimatePresence} from "motion/react"
// import profile from "../assets/protfolio-image.png"
import React, { useEffect, useRef, useState } from "react";
import Card from "../card";
import { useAboutHover, useConnectStore, useMousePosition, windowStore } from "../store";

// import Navbar from "../components/navbar/navbar"
import OuterContent from "../components/outerContent/outerContent"


import SplitedText from "../components/SplittedText/SplittedText";



import Projects from "../projects/projects";

const pages: React.ReactNode[] = [<Home key={1}></Home>, <Projects key={2} ></Projects>];
const pageColors: string[]=["#0a0a0a","#172554", "#3b0764"];
const windowSizes: number[] = [1,2];


export default  function Page(){
  const containerRef = useRef<HTMLDivElement|null>(null);
 
  const num = windowStore(state=>state.indices);
  const setNum = windowStore(state=>state.setIndices);

  
  useEffect(() => {
    
  const handleScroll =  debounce((e: WheelEvent)=>{
    const w = num[0];
    const sw = num[1];
    if (e.deltaY > 0 && num[0] + 1 < pages.length && num[1] == windowSizes[num[0]]-1) {
      // scroll down
      setNum([w+1,0]);
    } else if (e.deltaY < 0 && num[0] - 1 >= 0 && num[1]== 0 ) {
      // scroll up
      setNum([w-1,windowSizes[w-1]-1]);
    }
    else if(e.deltaY > 0 && num[1] < windowSizes[num[0]]-1){
      setNum([w,sw+1]);
    }
    else if(e.deltaY < 0 && num[1] > 0){
      setNum([w,sw-1]);
    }
  }, 150);

  window.addEventListener("wheel", handleScroll);

  return () => {
    window.removeEventListener("wheel", handleScroll);
  };
}, [num]);


  console.log("pagelength: "+ pages.length);
  return (
   <AnimatePresence >
    <OuterContent background={pageColors[num[0]+num[1]]} num={num[0]}>
      <motion.div ref={containerRef} className=" w-full h-full flex flex-1 items-center  "
      style={{userSelect: "none"}}
      >
        <AnimatePresence mode="wait">
          {pages.map((comp, i) => {
            if (i === num[0])
              return (
                <motion.div
                  key={i}
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="h-full w-full flex flex-col flex-1  "
                  // style={{ flexBasis: 0 }}
                >
                  {comp}
                </motion.div>
              );
          })}
        </AnimatePresence>
      </motion.div>
      </OuterContent>
      </AnimatePresence>
        
      
    )  
  
}


 function Home() {
  const [scope,animate]  = useAnimate();
  const connectHovered = useConnectStore(state=>state.conenctHover);
  const aboutHovered = useAboutHover(state=>state.aboutHover);
  const setConnectHovered = useConnectStore(state=>state.setConnectHover);
  const setAboutHovered = useAboutHover(state=>state.setAboutHover);
  const mousePosition = useMousePosition((state) => state.mousePosition);
  

  function FadingName(){
    animate(".cuties",
      {opacity: [0,1], filter: ["blur(10px)", "blur(0px)"]},
      {delay: stagger(0.05)})
  }


 const [hover, setHover] = useState(false);
    


  useEffect(()=>{
    FadingName()
  },[]);

  return (
    
      <motion.div
      layoutId="page"
      className="  h-full flex-1 basis-0  flex items-center justify-center"
      >
        

         <div ref={scope} className=" flex-1 w-[95vw] my-4 mx-auto flex flex-col basis-0  justify-center items-center " style={{userSelect: "none"}} 
          onMouseEnter={()=>setHover(true)}
        onMouseLeave = {()=>{setHover(false)}}
        onMouseMove={()=>{
            if(hover==false)setHover(true);
        }}
         >
   {/* main content code */}
    <div className="flex flex-col h-full w-full flex-1 gap-6 items-center  justify-center   ">

      {/* code for image and name */}
      <div className="flex items-center flex-col relative w-full  h-full  " >
        <motion.div layoutId="profile-image" onClick={FadingName}
        className="relative"
        >
            {/* <Image  width={0}
            className=" {` shadow-cardShadow mt-2 border-solid dark:border-0  border-neutral-400 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-scale duration-300  w-[300] md:w-[380] md:translate-y-5 lg:translate-y-0  sm:w-[380] overflow-hidden sm:translate-y-1 relative `}" src={profile} alt="profile" ></Image> */}
            <Card hover={hover} cords={mousePosition}></Card>
        </motion.div>
        
      <div className=" text-4xl flex-wrap flex lg:absolute lg:text-8xl  sm:text-6xl md:text-7xl bottom-2 justify-center md:w-full md:gap-6 " >
      <SplitedText word={"Ramanshu"} className="m-1 cuties "></SplitedText>
      <SplitedText word={"Sharan"} className="m-1 cuties "></SplitedText>
      <SplitedText word={"Mishra"} className="m-1 cuties "></SplitedText>
      </div>
      </div>

      {/* code for image and name --done */}
       
      <motion.div layoutId="loader-text" className="text-center text-xl font-bold italic text-neutral-700 dark:text-neutral-50"> I am someone who is trying to build something</motion.div>


      <div className="flex flex-1 basis-0 flex-col sm:flex-row  gap-5 sm:gap-10 items-center md:translate-y-0 lg:translate-y-15 w-full justify-center  " >
      <motion.div className="max-w-[18rem] w-[18rem] md:w-[18rem] flex justify-center items-center py-3 text-black rounded-2xl hover:text-gray-50 active:text-gray-50 h-12 shadow-cardShadow "
     style={{
              fontSize: connectHovered ? "120%" : "100%",
              backgroundColor: connectHovered ? "var(--color-neutral-700)" : "var(--color-neutral-100)",
              fontWeight: connectHovered ? "bold" : 500,
              letterSpacing: connectHovered ? "0.2rem" : "0rem",
            }}
      whileHover={{fontSize: "120%", backgroundColor: "var(--color-neutral-700)", fontWeight: "bold", letterSpacing: "0.2rem"}}
      whileTap={{fontSize: "120%", backgroundColor: "var(--color-neutral-700)", fontWeight: "bold", letterSpacing: "0.2rem"}}
        onTouchStart={() => setConnectHovered(true)}
            onTouchEnd={() => setConnectHovered(false)}
            onTouchCancel={() => setConnectHovered(false)}
      >Connect</motion.div>
      <motion.div className="max-w-[18rem] w-[18rem] md:w-[18rem] flex justify-center items-center py-3 text-black rounded-2xl hover:text-gray-50 active:text-gray-50 h-12 shadow-cardShadow"
       style={{
              fontSize: aboutHovered ? "120%" : "100%",
              backgroundColor: aboutHovered ? "var(--color-neutral-700)" : "var(--color-neutral-100)",
              fontWeight: aboutHovered ? "bold" : 500,
              letterSpacing: aboutHovered ? "0.2rem" : "0rem",
            }}
      whileHover={{fontSize: "120%", backgroundColor: "var(--color-neutral-700)", fontWeight: "bold", letterSpacing: "0.2rem"}}
      whileTap={{fontSize: "120%", backgroundColor: "var(--color-neutral-700)", fontWeight: "bold", letterSpacing: "0.2rem"}}
        onTouchStart={() => setAboutHovered(true)}
            onTouchEnd={() => setAboutHovered(false)}
            onTouchCancel={() => setAboutHovered(false)}
      >About</motion.div>
    </div>
    </div>
    
    {/* main content code done */}


    
     
   </div>


      </motion.div>
   
   
  );
}




