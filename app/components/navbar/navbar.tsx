"use client"
import Link from "next/link";
import { AnimatePresence, AnimationPlaybackControlsWithThen, motion, stagger, useAnimate} from "motion/react"
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";



const content = [
    {
        title: "Home",
        link: "/"
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
        <div className="">
            <NavIcon width={width} height={height} strokeWidth={strokeWidth}></NavIcon>
        </div>
    )
}


function NavIcon({width,height,strokeWidth}:{width:string, height:string,strokeWidth:string}){

    const [scope, animate] = useAnimate();
    const [open, setOpen] = useState();
    const [active,setActive] = useState(false);
    const animationRef = useRef<AnimationPlaybackControlsWithThen|null>(null);
    const path = usePathname();
    console.log(path);

    const childVariant = {
        open: {
            opacity: 100,
            x:0,
            scale: 1,
        },
        closed: {
            opacity: 0,
            x: 10,
            scale: 0.5,
        }
    }
    const parentVariant = {
        open: {
            transition: { staggerChildren: 0.1, delayChildren: 0.2}
        },
        closed: {
            width: 0,

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
        
        <motion.div ref={scope} className="flex gap-5" 
        animate={open?"open":"closed"}
        transition={{duration: 1.5, ease: "easeInOut"}}

        >
            <motion.div className="" >
                <AnimatePresence mode="wait">
                { open && <motion.div key={"nav"} className="flex flex-col gap-4"
                variants={parentVariant}
                exit={"closed"}
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
            
            <motion.div  className="group flex flex-col gap-2 active:scale-[0.95] transition-scale duration-300" style={{width, height}} onMouseEnter={()=>setActive(true)} onMouseLeave={()=>setActive(false)} onClick={()=>{setOpen(e=>!e)}}>
  <motion.div className={`rounded-full w-full bg-white  dot shadow-cardShadow`} style={{height:strokeWidth }}></motion.div>
  <motion.div className={`rounded-full w-full bg-white  dot shadow-cardShadow`} style={{height:strokeWidth }}></motion.div>
  <motion.div className={`rounded-full w-full bg-white  dot shadow-cardShadow`} style={{height:strokeWidth }}></motion.div>
</motion.div>
        </motion.div>
  
    )
}