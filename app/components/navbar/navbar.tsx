"use client"
import { AnimationPlaybackControlsWithThen, motion, stagger, useAnimate} from "motion/react"
import { useEffect, useRef, useState } from "react";

export default function Nav({width,height,strokeWidth}:{width:string,height:string,strokeWidth:string}){

    
    return (
        <div className="">
            <NavIcon width={width} height={height} strokeWidth={strokeWidth}></NavIcon>
        </div>
    )
}


function NavIcon({width,height,strokeWidth}:{width:string, height:string,strokeWidth:string}){

    const [scope, animate] = useAnimate();
    const [active,setActive] = useState(false);
    const animationRef = useRef<AnimationPlaybackControlsWithThen|null>(null);
    function handleActive(){
      const x =   animate(
            ".dot",
            { scaleX: [1, 0.4, 1],transformOrigin: "left" },
            { duration: 1, delay: stagger(0.2), repeat: Infinity }
        );
        animationRef.current = x;
    }

    useEffect(()=>{
        if(active)handleActive();
        else animationRef.current?.cancel();
    },[active])

    return <motion.div ref={scope} className="group flex flex-col gap-2" style={{width, height}} onMouseEnter={()=>setActive(true)} onMouseLeave={()=>setActive(false)}>
  <motion.div className={`rounded-full w-full bg-white h-[${strokeWidth }] dot shadow-cardShadow`} ></motion.div>
  <motion.div className={`rounded-full w-full bg-white h-[${strokeWidth}] dot shadow-cardShadow`}></motion.div>
  <motion.div className={`rounded-full w-full bg-white h-[${strokeWidth}] dot shadow-cardShadow`}></motion.div>
</motion.div>

}