"use client"
import Image from "next/image";
import {useAnimate, motion, stagger} from "motion/react"
import profile from "../assets/protfolio-image.png"
import React, { useEffect, useState } from "react";
// import Navbar from "../components/navbar/navbar"
import OuterContent from "../components/outerContent/outerContent"

import SplitedText from "../components/SplittedText/SplittedText";

export default function Home() {

  const [scope,animate]  = useAnimate();
  const [mousePosition, setMousePosition] = useState<{x:number,y:number}>({x:-5, y:-5});
  function FadingName(){
    animate(".cuties",
      {opacity: [0,1], filter: ["blur(10px)", "blur(0px)"]},
      {delay: stagger(0.05)})
  }
useEffect(() => {
  const handleGlobalMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  window.addEventListener("mousemove", handleGlobalMouseMove);
  document.addEventListener("click", handleClick);

  return () => {
    window.removeEventListener("mousemove", handleGlobalMouseMove);
    document.removeEventListener("click", handleClick);
  };
}, []);

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

  

  useEffect(()=>{
    FadingName()
   document.addEventListener("click", handleClick);
   return ()=>document.removeEventListener("click", handleClick);
  },[])
  return (
      <OuterContent>

         <div ref={scope} className="min-h-[95%] w-[95vw]  flex flex-col  justify-center items-center " style={{userSelect: "none"}} >
     
     {/* code for custom pointer */}
      <motion.span className="w-8 h-8 bg-transparent rounded-full fixed z-[998]  outer-pointer " style={{
        left: 0,
        top: 0,
        position: "fixed",
        pointerEvents: "none"
      }}
      animate={{x: mousePosition.x - 20, y: mousePosition.y-20}} transition={{type: "spring" , stiffness: 300, damping: 30 ,duration: 0.2}}>
        
      </motion.span>
      <motion.span className="w-5 h-5 bg-white rounded-full fixed z-[999] " style={{
        left: 0,
        top: 0,
        position: "fixed",
        pointerEvents: "none"
      }}
      animate={{x: mousePosition.x - 12, y: mousePosition.y-12}} transition={{type: "spring" , stiffness: 300, damping: 30 ,duration: 0.2}}>
        
      </motion.span>
       <motion.span className="w-2 h-2 bg-white rounded-full fixed z-[1000]  mix-blend-difference " style={{
        left: 0,
        top: 0,
        position: "fixed",
        pointerEvents: "none"
      }}
      animate={{x: mousePosition.x - 6, y: mousePosition.y-6}} transition={{type: "spring", duration: 0.15}}>
        
      </motion.span>
      {/* code for costom pointer --- done */}
      
      
      
      
   {/* main content code */}
    <div className="flex flex-col h-full w-full flex-1 gap-6 items-center justify-center ">

      {/* code for image and name */}
      <div className="flex items-center flex-col relative w-full " >
        <Image className=" mt-2 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-scale duration-300 p-4 w-[300] md:w-[380] md:translate-y-5 lg:translate-y-0 sm:w-[380] sm:translate-y-1" width={0} src={profile} alt="profile" onClick={FadingName}></Image>
      <div className=" text-4xl flex-wrap flex lg:absolute lg:text-8xl  sm:text-6xl md:text-7xl bottom-2 justify-center md:w-full md:gap-6  " >
      <SplitedText word={"Ramanshu"} className="m-1 cuties "></SplitedText>
      <SplitedText word={"Sharan"} className="m-1 cuties "></SplitedText>
      <SplitedText word={"Mishra"} className="m-1 cuties "></SplitedText>
      </div>
      </div>

      {/* code for image and name --done */}
       
      <div className="text-center text-xl font-bold italic"> I am someone who is trying to build something</div>


      <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 items-center md:translate-y-5 lg:translate-y-15 w-full justify-center mb-3" >
      <motion.div className="max-w-[15rem] w-[15rem] flex justify-center items-center py-3 text-black rounded-2xl hover:text-gray-50 h-12 shadow-cardShadow"
      style={{fontSize: "100%", backgroundColor: "var(--color-neutral-100)", fontWeight: 500}}
      whileHover={{fontSize: "120%", backgroundColor: "var(--color-neutral-700)", fontWeight: "bold",letterSpacing: "0.2rem"}}
      >Connect</motion.div>
      <motion.div className="max-w-[15rem] w-[15rem] flex justify-center items-center py-3 text-black rounded-2xl hover:text-gray-50 h-12 shadow-cardShadow"
       style={{fontSize: "100%", backgroundColor: "var(--color-neutral-100)" , fontWeight: 500}}
      whileHover={{fontSize: "120%", backgroundColor: "var(--color-neutral-700)", fontWeight: "bold", letterSpacing: "0.2rem"}}
      >About</motion.div>
    </div>
    </div>
    
    {/* main content code done */}


    
     
   </div>


      </OuterContent>
   
   
  );
}




