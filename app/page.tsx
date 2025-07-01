"use client"
import Image from "next/image";
import {useAnimate, motion, stagger} from "motion/react"
import profile from "./assets/protfolio-image.png"
import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/navbar/navbar"
import {IconBrandGithub, IconBrandLinkedin, IconBrandLinkedinFilled, IconBrandTwitter, IconX} from "@tabler/icons-react"
import linkedIn from "./assets/linkedIn.svg"


export default function Home() {

  const [scope,animate]  = useAnimate();
  const [mousePosition, setMousePosition] = useState<{x:number,y:number}>({x:0, y:0});
  function FadingName(){
    animate(".cuties",
      {opacity: [0,1], filter: ["blur(10px)", "blur(0px)"]},
      {delay: stagger(0.05)})
  }

 function getRelativeCoordinates(event, referenceElement) {
  console.log(scope.current)
   const rect = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop
   }
  console.log(rect.left,rect.top);
  
  const res =  {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
  console.log(res);
  return res;
}
  
const handleMouseMove = (e) => {
    setMousePosition(getRelativeCoordinates(e, scope.current));
  };

  useEffect(()=>{
    FadingName()
  },[])
  return (
  
    <div ref={scope} className="min-h-screen w-[100vw] bg-neutral-950 flex justify-center items-center pointer " onMouseMove={(e)=>{
      handleMouseMove(e)
    }}>
      <motion.span className="w-4 h-4 bg-white rounded-full relative z-49 " style={{pointerEvents: "none"}} 
      animate={{x: mousePosition.x -12 +"px", y:mousePosition.y + "px"}}
      transition={{type: "tween"}} >
        <motion.span className="w-2 h-2 rounded-full bg-black absolute inset-0 m-auto z-50"
      
        ></motion.span>
      </motion.span>
      <div className="absolute right-0 top-0 m-10">
     <Navbar width={"3rem"} height="2.5rem" strokeWidth="5px"></Navbar>
      </div>
   
    <div className="flex flex-col h-full flex-1 gap-6 items-center ">
      <div className="flex items-center flex-col relative" >
        <Image className="rounded-full hover:scale-[1.02] active:scale-[0.98] transition-scale duration-300 " width={400} src={profile} alt="profile" onClick={FadingName}></Image>
      <div className=" text-8xl flex gap-6 absolute bottom-2 " >
      <SplitedText word={"Ramanshu"} className="m-1"></SplitedText>
      <SplitedText word={"Sharan"} className="m-1"></SplitedText>
      <SplitedText word={"Mishra"} className="m-1"></SplitedText>
      </div>
      </div>
       
      <div className="flex items-center justify-center text-xl font-bold italic"> I am someone who is trying to build something</div>
    </div>

    <div className="absolute flex justify-around items-center w-fit bottom-6 right-10 gap-8">
      <IconBrandGithub className="hover:scale-[1.3] active:scale-[0.98] transition-all duration-300"></IconBrandGithub>
      <IconBrandTwitter className="hover:scale-[1.3] active:scale-[0.98] transition-all duration-300"></IconBrandTwitter>
      <Image src={linkedIn} className="text-neutral-50 hover:scale-[1.3] active:scale-[0.98] transition-all duration-300" alt="linkedIn"></Image>
      <div className="font-bold hover:scale-[1.2] active:scale-[0.98] transition-all duration-300" >Resume</div>
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
          className={className+ " cuties"}
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
