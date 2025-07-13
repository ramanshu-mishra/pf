"use client"
import Image from "next/image";
import Head from "next/head";
import {useAnimate, motion, stagger, useMotionValue, useSpring, useScroll, MotionValue, useMotionValueEvent} from "motion/react"
import profile from "../assets/protfolio-image.png"
import React, { useEffect, useRef, useState } from "react";
import Card from "../card";
import { useAboutHover, useConnectStore, useMousePosition } from "../store";

// import Navbar from "../components/navbar/navbar"
import OuterContent from "../components/outerContent/outerContent"


import SplitedText from "../components/SplittedText/SplittedText";



import Projects from "../projects/projects";

const pages: React.ReactNode[] = [<Home key={1}></Home>, <Projects key={2}></Projects>];



export default  function Page(){
  const containerRef = useRef<HTMLDivElement|null>(null);
  const {scrollYProgress} = useScroll({
    container: containerRef,
  });
  const [num, setNum] = useState(0);
  const [pos,setPos] = useState(0);
  
  useEffect(()=>{

    function handleScroll(){
const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = containerRef.current.offsetHeight;
console.log(scrollTop)
  if (scrollTop + windowHeight >= docHeight && pos != 1) {
    console.log("window-height: "+ windowHeight);
    console.log("scrollTop: "+ scrollTop);
    console.log("current pos (windowHeight+scrollTop): "+ (scrollTop+windowHeight));
    console.log("doc-height"+ docHeight);
    setPos(1);
    console.log("✅ You've reached the bottom of the page!");
  }
  else if(scrollTop ==0 && pos != -1){
    setPos(-1);
    console.log("top of the page");
  }
  else if(pos != 0){
    setPos(0);
  }

  }

    window.addEventListener('scroll', handleScroll);
    return ()=>window.removeEventListener("scroll", handleScroll);
  })
  
  useEffect(()=>{
   function handleScroll(e: WheelEvent){
    if(e.deltaY > 1 && pos == 1){
      console.log("user scrolled down");
    }
    else if(e.deltaY < 1 && pos == -1){
      console.log("user scrolled up");
    }
   }

   window.addEventListener("wheel", (e)=>handleScroll(e));
   return ()=>window.removeEventListener("wheel", (e)=>handleScroll(e));
  }, []);

  return (
      <div ref={containerRef} className="bg-red-400 overflow-y-auto"> 
        {pages[num]}
      </div>
        
      
    )  
  
}


 function Home() {

  const [scope,animate]  = useAnimate();
  const connectHovered = useConnectStore(state=>state.conenctHover);
  const aboutHovered = useAboutHover(state=>state.aboutHover);
  const setConnectHovered = useConnectStore(state=>state.setConnectHover);
  const setAboutHovered = useAboutHover(state=>state.setAboutHover);
  const mousePosition = useMousePosition((state) => state.mousePosition);
  const updateMousePosition = useMousePosition((state) => state.updatePosition);

  function FadingName(){
    animate(".cuties",
      {opacity: [0,1], filter: ["blur(10px)", "blur(0px)"]},
      {delay: stagger(0.05)})
  }
useEffect(() => {
  const handleGlobalMouseMove = (e: MouseEvent) => {
    updateMousePosition({x:e.clientX, y:e.clientY});
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

  // const smoothX = useSpring(mouseX, {stiffness: 300, damping: 30, duration: 0.2});
  // const smoothY = useSpring(mouseY, {stiffness: 300, damping: 30, duration: 0.2});
  // const smoothX2 = useSpring(mouseX, {stiffness: 300, damping: 30, duration: 0.});
  // const smoothY2 = useSpring(mouseY, {stiffness: 300, damping: 30, duration: 0.2});




 const [hover, setHover] = useState(false);
    


  useEffect(()=>{
    FadingName()
   document.addEventListener("click", handleClick);
   return ()=>document.removeEventListener("click", handleClick);
  },[])
  return (
      <OuterContent>
        <Head>
        <title>RamSpace:Porfolio Ramanshu Sharan Mishra</title>
        <meta name="description" content="Portfolio of Ramanshu Sharan Mishra. Full Stack Web Developer and Undergraduate Student at NIT-Jalandhar" />
        <meta property="og:title" content="RamSpace: Portfolio Ramanshu Sharan Mishra" />
        <meta property="og:description" content="Portfolio of Ramanshu Sharan Mishra. Full Stack Web Developer and Undergraduate Student at NIT-Jalandhar" />
        <meta property="og:image" content= "../assets/protfolio-image.png" />
        {/* <meta name="robots" content="index, follow" /> */}
        </Head>

         <div ref={scope} className=" flex-1 w-[95vw] my-4 mx-auto flex flex-col  justify-center items-center " style={{userSelect: "none"}} 
          onMouseEnter={()=>setHover(true)}
        onMouseLeave = {()=>{setHover(false)}}
        onMouseMove={()=>{
            if(hover==false)setHover(true);
        }}
         >
     
     {/* code for custom pointer */}
      <motion.span className="w-8 h-8 bg-transparent rounded-full fixed z-[998]  outer-pointer " style={{
        left: 0,
        top: 0,
        position: "fixed",
        pointerEvents: "none"
      }}
      animate={{x: mousePosition.x - 20, y: mousePosition.y-20}} transition={{type: "spring" , stiffness: 300, damping: 30 ,duration: 0.2}}>
        
      </motion.span>
      <motion.span className="w-5 h-5 dark:bg-white bg-black rounded-full fixed z-[999] " style={{
        left: 0,
        top: 0,
        position: "fixed",
        pointerEvents: "none"
      }}
      animate={{x: mousePosition.x - 12, y: mousePosition.y-12}} transition={{type: "spring" , stiffness: 300, damping: 30 ,duration: 0.2}}>
        
      </motion.span>
       <motion.span className="w-2 h-2 bg-white  rounded-full fixed z-[1000]  mix-blend-difference " style={{
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
      <div className="flex items-center flex-col relative w-full  " >
        <motion.div layoutId="profile-image" onClick={FadingName}>
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


      <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 items-center md:translate-y-5 lg:translate-y-15 w-full justify-center mb-3" >
      <motion.div className="max-w-[15rem] w-[15rem] flex justify-center items-center py-3 text-black rounded-2xl hover:text-gray-50 active:text-gray-50 h-12 shadow-cardShadow"
      style={{
              fontSize: connectHovered ? "1.2rem" : "1rem",
              backgroundColor: connectHovered ? "var(--color-neutral-700)" : "var(--color-neutral-100)",
              fontWeight: connectHovered ? "bold" : 500,
              letterSpacing: connectHovered ? "0.2rem" : "0rem",
            }}
      whileHover={{fontSize: "1.2rem", backgroundColor: "var(--color-neutral-700)", fontWeight: "bold",letterSpacing: "0.2rem"}}
        onTouchStart={() => setConnectHovered(true)}
            onTouchEnd={() => setConnectHovered(false)}
            onTouchCancel={() => setConnectHovered(false)}
      >Connect</motion.div>
      <motion.div className="max-w-[15rem] w-[15rem] flex justify-center items-center py-3 text-black rounded-2xl hover:text-gray-50 active:text-gray-50 h-12 shadow-cardShadow"
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


      </OuterContent>
   
   
  );
}




