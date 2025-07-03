"use client"
import Image from "next/image";
import {useAnimate, motion, stagger} from "motion/react"
import profile from "./assets/protfolio-image.png"
import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/navbar"
import {IconBrandGithub, IconBrandTwitter} from "@tabler/icons-react"
import linkedIn from "./assets/linkedIn.svg"


export default function Home() {

  const [scope,animate]  = useAnimate();
  const [mousePosition, setMousePosition] = useState<{x:number,y:number}>({x:-5, y:-5});
  function FadingName(){
    animate(".cuties",
      {opacity: [0,1], filter: ["blur(10px)", "blur(0px)"]},
      {delay: stagger(0.05)})
  }

  function getRelativeCoordinates(event: React.MouseEvent, referenceElement: HTMLElement) {
    return {
      x: event.clientX - referenceElement.offsetLeft,
      y: event.clientY - referenceElement.offsetTop
    };
  }
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if(scope.current) {
      setMousePosition(getRelativeCoordinates(e, scope.current));
    }
  };

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
  
    <div ref={scope} className="min-h-screen min-w-[100vw] bg-neutral-950 flex flex-col justify-center items-center pointer " style={{userSelect: "none"}} onMouseMove={handleMouseMove}>
     
            <motion.span className="w-8 h-8 bg-transparent rounded-full fixed z-49 pointer-events-none outer-pointer" style={{
        left: 0,
        top: 0,
        position: "fixed",
        pointerEvents: "none"
      }}
      animate={{x: mousePosition.x - 20, y: mousePosition.y-20}} transition={{type: "spring" , stiffness: 300, damping: 30 ,duration: 0.2}}>
        
      </motion.span>
      <motion.span className="w-5 h-5 bg-white rounded-full fixed z-49 pointer-events-none" style={{
        left: 0,
        top: 0,
        position: "fixed",
        pointerEvents: "none"
      }}
      animate={{x: mousePosition.x - 12, y: mousePosition.y-12}} transition={{type: "spring" , stiffness: 300, damping: 30 ,duration: 0.2}}>
        
      </motion.span>
       <motion.span className="w-2 h-2 bg-white rounded-full fixed z-49 pointer-events-none mix-blend-difference " style={{
        left: 0,
        top: 0,
        position: "fixed",
        pointerEvents: "none"
      }}
      animate={{x: mousePosition.x - 6, y: mousePosition.y-6}} transition={{type: "spring", duration: 0.15}}>
        
      </motion.span>
      
      
      
      <div className="absolute right-0 top-0 mt-10 px-5  w-full flex justify-between">
        <div className=" text-2xl flex gap-2  bottom-0 " >
      <SplitedText word={"Ramanshu"} className=""></SplitedText>
      <SplitedText word={"Sharan"} className=""></SplitedText>
      <SplitedText word={"Mishra"} className=""></SplitedText>
      </div>
     <Navbar width={"3rem"} height="2.5rem" strokeWidth="5px"></Navbar>
      </div>
   
    <div className="flex flex-col h-full w-full flex-1 gap-6 items-center justify-center ">
      <div className="flex items-center flex-col relative" >
        <Image className="rounded-full hover:scale-[1.02] active:scale-[0.98] transition-scale duration-300 " width={400} src={profile} alt="profile" onClick={FadingName}></Image>
      <div className=" text-8xl flex gap-6 absolute bottom-0 " >
      <SplitedText word={"Ramanshu"} className="m-1 cuties"></SplitedText>
      <SplitedText word={"Sharan"} className="m-1 cuties"></SplitedText>
      <SplitedText word={"Mishra"} className="m-1 cuties"></SplitedText>
      </div>
      </div>
       
      <div className="flex items-center justify-center text-xl font-bold italic"> I am someone who is trying to build something</div>

      <div className="flex gap-10 items-center translate-y-15 w-full justify-center" >
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
    
    

<div className="">  
  <div className="absolute bottom-6 left-6 text-2xl  flex"> 
    <div className="flex gap-2">
        <SplitedText word={"Also"} className=""></SplitedText>
    <SplitedText word={"I'm"} className=""></SplitedText>
    <SplitedText word={"Iron"} className=""></SplitedText>
    <SplitedText word={"Man"} className=""></SplitedText>
    </div>
    
  </div>
      <div className="absolute flex justify-around items-center w-fit bottom-6 right-10 gap-8">
      <IconBrandGithub className="hover:scale-[1.3] active:scale-[0.98] transition-all duration-300"></IconBrandGithub>
      <IconBrandTwitter className="hover:scale-[1.3] active:scale-[0.98] transition-all duration-300"></IconBrandTwitter>
      <Image src={linkedIn} className="text-neutral-50 hover:scale-[1.3] active:scale-[0.98] transition-all duration-300" alt="linkedIn"></Image>
      <div className="font-bold hover:scale-[1.2] active:scale-[0.98] transition-all duration-300" >Resume</div>
    </div>
</div>
    
     
   </div>
   
  );
}


function SplitedText({word, className}:{word:string, className?: string}){
    return(
      <div className="flex">
      {word.split("").map((char,idx)=>{
        return <motion.div 
        style={{fontWeight: 400}}
          key={idx+char} 
          className={className}
          initial={{ scale: 1 }}
          whileHover={{ scaleY: 1.2, scaleX: 1.3, fontWeight: "700", letterSpacing: "0.1em" }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {char}
        </motion.div>
      })}
      </div>
    )
}