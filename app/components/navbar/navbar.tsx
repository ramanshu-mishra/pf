"use client"
import Link from "next/link";
import { AnimatePresence, AnimationPlaybackControlsWithThen, motion, stagger, useAnimate} from "motion/react"
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { IconBrandGithub, IconBrandTwitter } from "@tabler/icons-react";
import Image from "next/image";
import linkedIn from "../../assets/linkedIn.svg"



const content = [
    {
        title: "Home",
        link: "/home"
    },
    {
        title: "Projects",
        link: "/projects"
    },
    {
        title: "About",
        link: "/about"
    },
    {
        title: "Blogs",
        link: "/blog"
    },
    {
        title: "Contact",
        link: "/contact"
    }
]

export default function Nav({width,height,strokeWidth}:{width:string,height:string,strokeWidth:string}){

    
    return (
        
        <NavIcon width={width} height={height} strokeWidth={strokeWidth}></NavIcon>
        
    )
}


function NavIcon({width,height,strokeWidth}:{width:string, height:string,strokeWidth:string}){

    const [scope, animate] = useAnimate();
    const [open, setOpen] = useState(false);
    const [active,setActive] = useState(false);
    const [touchHoveredIdx, setTouchHoveredIdx] = useState<number|null>(null);
    const animationRef = useRef<AnimationPlaybackControlsWithThen|null>(null);
    const path = usePathname();


    const smallNavParent = {
        open:{
            opacity: 100,
            transition: { staggerChildren: 0.1, delayChildren: 0.3},
            transformOrigin: "right",
            height: [0, "56vh"]
        },
        closed:{
            opacity: 0,
            height: 0
        }
    }

    const smallchildVariant= {
        open:{
             opacity: 100,
            x:0,
            scale: 1,
        },
        closed:{
             opacity: 0,
            scale: 0.5,
        }
    }

    const childVariant = {
        open: {
            opacity: 100,
            x:0,
           
        },
        closed: {
            opacity: 0,
            x: 10,
           
        }
    }
    
    const parentVariant = {
        open: {
            transition: { staggerChildren: 0.1, delayChildren: 0.2},
            transformOrigin: "right"
        },
        closed: {
            scaleX: 0,
            transformOrigin: "right"
        }
    }


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

    return (
        
        <motion.div ref={scope} className="flex gap-5 relative" 
        animate={open?"open":"closed"}
        transition={{duration: 1.5, ease: "easeInOut"}}

        >
            <motion.div className="" >
                
                <AnimatePresence >
                   {
  open && (
    <motion.div
      key={"nav1"}
      className="fixed inset-0 z-[200] backdrop-blur-lg shadow-cardShadow sm:hidden flex flex-col  items-center w-screen min-w-screen min-h-0 overflow-y-auto justify-between"
    
        variants={smallNavParent}
        transition={{duration: 0.3}}
    >

        <div className="flex flex-col gap-5 justify-center items-center flex-1">
        {   
                        content.map((tab,idx)=>{
                            const isTouchHovered = touchHoveredIdx === idx;
                            return <motion.div 
                            style={{y: -5, x:10, opacity: 0 }} 
                            className="text-2xl relative tabs flex gap-2 items-center justify-start" 
                            key={idx}
                            variants={smallchildVariant}
                            whileHover={{scale: 1.1}}
                            animate={isTouchHovered ? {scale: 1.1} : {}}
                            transition={{duration: 0.3}}
                            onTouchStart={() => setTouchHoveredIdx(idx)}
                            onTouchEnd={() => setTouchHoveredIdx(null)}
                            onTouchCancel={() => setTouchHoveredIdx(null)}
                            
                            
                            >
                                 <motion.span className={` z-50 h-[8px] w-[8px] bg-white rounded-full absolute -left-4 ${!(path==tab.link) && "hidden"}`}
                                 initial={{opacity:0, y:-1000}}
                                 animate={{opacity:1, y:0}}
                                 transition={{type:"spring", stiffness: 300, damping: 20}}
                                 >
                                    </motion.span>   <Link onClick={()=>setOpen(false)} href={tab.link}>{tab.title}</Link>
                            </motion.div>
                        })
                    }</div>


       <div className="mb-6 flex justify-around items-center w-fit bottom-6 inset-x-0 mx-auto gap-8 ">
      <IconBrandGithub className="hover:scale-[1.3] active:scale-[0.98] transition-all duration-300"></IconBrandGithub>
      <IconBrandTwitter className="hover:scale-[1.3] active:scale-[0.98] transition-all duration-300"></IconBrandTwitter>
      <Image src={linkedIn} className="text-neutral-50 hover:scale-[1.3] active:scale-[0.98] transition-all duration-300" alt="linkedIn"></Image>
      <div className="font-bold hover:scale-[1.2] active:scale-[0.98] transition-all duration-300" >Resume</div>
    </div>
    </motion.div>
  )
}
                { open && <motion.div key={"nav"} className=" hidden absolute -left-12 sm:flex flex-col gap-4 z-[950]"
                variants={parentVariant}
                exit={"closed"}
                style={{width: "100%", transformOrigin: "left"}}
                // transition={{duration: 1.5}}
                >
                     {
                        content.map((tab,idx)=>{
                            return <motion.div style={{y: -5, x:10, opacity: 0 }} className="relative tabs flex gap-2 items-center justify-start" key={idx}
                            variants={childVariant}
                            whileHover={{scale: 1.1}}
                            transition={{duration: 0.3}}
                          
                            
                            
                            >
                                 <motion.span className={`h-[5px] w-[5px] bg-white rounded-full absolute -left-3 ${!(path==tab.link) && "hidden"}`}
                                 initial={{opacity:0, y:-1000}}
                                 animate={{opacity:1, y:0}}
                                 transition={{type:"spring", stiffness: 300, damping: 20}}
                                 ></motion.span>   <Link href={tab.link}>{tab.title}</Link>
                            </motion.div>
                        })
                    }
                </motion.div>}
                </AnimatePresence>
            </motion.div>
            
            <motion.div  className="group z-[950] flex flex-col gap-2 active:scale-[0.95] transition-scale duration-300" style={{width, height}} onMouseEnter={()=>setActive(true)} onMouseLeave={()=>setActive(false)} onClick={()=>{setOpen(e=>!e)}}>
  <motion.div className={`rounded-full w-full bg-white  dot shadow-cardShadow`} style={{height:strokeWidth }}></motion.div>
  <motion.div className={`rounded-full w-full bg-white  dot shadow-cardShadow`} style={{height:strokeWidth }}></motion.div>
  <motion.div className={`rounded-full w-full bg-white  dot shadow-cardShadow`} style={{height:strokeWidth }}></motion.div>
</motion.div>
        </motion.div>
  
    )
}