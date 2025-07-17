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
import About from "../About/about";
import Contact from "../Contact/contact";

const pages: React.ReactNode[] = [<Home key={1}></Home>, <Projects key={2} ></Projects>, <About key={3}></About>, <Contact key={4}></Contact>];
import { windowSizes} from "../projects/projectConfig"


export default  function Page(){
  const containerRef = useRef<HTMLDivElement|null>(null);
 
  const num = windowStore(state=>state.indices);
  const setNum = windowStore(state=>state.setIndices);
  const scrolling = useRef(false);

    const numRef = useRef(num);
 useEffect(() => {
    numRef.current = num;
  }, [num]);

  useEffect(() => {
    const handleScroll = debounce((e: WheelEvent) => {
      if (scrolling.current) return;
      if(Math.abs(e.deltaY) < 1)return;
      scrolling.current = true;
      setTimeout(() => {
        scrolling.current = false;
      }, 400);


      let del = e.deltaY;
      del = Math.min(del,1);
      
      const w = numRef.current[0];
      const sw = numRef.current[1];
      const maxSub = windowSizes[w] - 1;

      if (del > 0) {
        if (sw < maxSub) {
          setNum([w, sw + 1]);
        } else if (w + 1 < pages.length) {
          setNum([w + 1, 0]);
        }
      } else {
        if (sw > 0) {
          setNum([w, sw - 1]);
        } else if (w > 0) {
          setNum([w - 1, windowSizes[w - 1] - 1]);
        }
      }
    }, 20)

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);



  console.log("pagelength: "+ pages.length);
  return (
   <AnimatePresence mode="wait">
    <OuterContent >
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
 

  const mousePosition = useMousePosition((state) => state.mousePosition);
  const setNum = windowStore(state=>state.setIndices);
  

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
            <Card  cords={mousePosition}></Card>
        </motion.div>
        
      <div className=" text-4xl flex-wrap flex lg:absolute lg:text-8xl  sm:text-6xl md:text-7xl bottom-2 justify-center md:w-full md:gap-6 " >
      <SplitedText word={"Ramanshu"} className="m-1 cuties "></SplitedText>
      <SplitedText word={"Sharan"} className="m-1 cuties "></SplitedText>
      <SplitedText word={"Mishra"} className="m-1 cuties "></SplitedText>
      </div>
      </div>

      {/* code for image and name --done */}
       
      <motion.div layoutId="loader-text" className="text-center text-xl font-bold italic text-neutral-50"> I am someone who is trying to build something</motion.div>


      <div className="flex flex-1 basis-0 flex-col sm:flex-row  gap-5 sm:gap-10 items-center md:translate-y-0 lg:translate-y-15 w-full justify-center  z-55 " >
      <motion.div className="max-w-[18rem] w-[18rem] md:w-[18rem] flex justify-center items-center py-3 text-black rounded-2xl hover:text-gray-50 active:text-gray-50 h-12 shadow-cardShadow "
     style={{
              fontSize:  "100%",
              backgroundColor: "var(--color-neutral-100)",
              fontWeight:  500,
              letterSpacing: "0rem",
            }}
          onClick={()=>setNum([3,0])}
      whileHover={{fontSize: "120%", backgroundColor: "var(--color-neutral-700)", fontWeight: "bold", letterSpacing: "0.2rem"}}
      whileTap={{fontSize: "120%", backgroundColor: "var(--color-neutral-700)", fontWeight: "bold", letterSpacing: "0.2rem"}}
       
      >Connect</motion.div>
      <motion.div className="max-w-[18rem] w-[18rem] md:w-[18rem] flex justify-center items-center py-3 text-black rounded-2xl hover:text-gray-50 active:text-gray-50 h-12 shadow-cardShadow"
       style={{
              fontSize:  "100%",
              backgroundColor:  "var(--color-neutral-100)",
              fontWeight:  500,
              letterSpacing:  "0rem",
            }}
      whileHover={{fontSize: "120%", backgroundColor: "var(--color-neutral-700)", fontWeight: "bold", letterSpacing: "0.2rem"}}
      whileTap={{fontSize: "120%", backgroundColor: "var(--color-neutral-700)", fontWeight: "bold", letterSpacing: "0.2rem"}}
       
            onClick={()=>setNum([2,0])}
      >About</motion.div>
    </div>
    </div>
    
    {/* main content code done */}
            
   </div>


      </motion.div>
   
   
  );
}




