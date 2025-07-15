// import OuterContent from "../components/outerContent/outerContent"
import {AnimatePresence, motion, useAnimate} from "motion/react";
import {IconChevronLeft, IconChevronRight} from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import cryptoTracker from "../assets/projectImages/cryptoTracker.png"
import recall from "../assets/projectImages/recall.png"
import Tag from "../components/tag";
import { cn } from "../lib/utils";
import debounce from "lodash/debounce"
import { windowStore } from "../store";

interface projectInterface{
    title: string;
    type:string,
    description: string,
    tags: string[],
    image: React.ReactNode,
    bg: string
}

const projects:projectInterface[] = [{
    title: "Recall",
    type: "Bookmarking and note-taking while you browse",
    description: "An intelligent web companion that lets you bookmark and take notes on the go, organized effortlessly with tags and autofetched images while you browse.",
    tags: ["React.js", "TypeScript", "TailwindCSS", "Express.js", "MongoDB"],
    image: <Image alt={"ram"} width={0} src={recall} className="object-cover h-full"></Image>,
    bg: "blue"
},
{
    title: "Crypto Price Tracker",
    type: "A simple platform to get price and volume updates for Crypto Currencies",
    description: "A simple API wrapper for price and Volume changes of top performing crypto currencies and with filter support",
    tags: ["React.js", "TypeScript", "TailwindCSS"],
    image: <Image alt={"ram"} width={0} src={cryptoTracker} className="object-cover h-full"></Image>,
    bg: "violet"
}
]

const bgColorMap = {
  blue: {
    "950": "#172554",
    "900": "#1e3a8a",
    "800": "#1e40af",
    "400": "#60a5fa",
    "200": "#bfdbfe",
    "100": "#dbeafe",
    "50": "#eff6ff",
    "900/50": "rgba(30, 58, 138, 0.5)"
    
  },
  violet: {
    "950": "#3b0764",
    "900": "#581c87",
    "800": "#6b21a8",
    "400": "#a78bfa",
    "200": "#e9d5ff",
    "100": "#f3e8ff",
    "50": "#faf5ff",
    "900/50": "rgba(88, 28, 135, 0.5)"
  }
}



export default function Main(){

    const num = windowStore(state=>state.indices);
    const setNum = windowStore(state=>state.setIndices);
    // const [num,setNum] = useState(0);
    const [scope, animate] = useAnimate();
    function TriggerAnimation(){
        animate(".ct1", {scaleX: [0,1,0]}, {duration: 0.6 , delay: 0.2});
        animate(".ct2", {scaleX: [0,1,0]}, {duration: 0.6 , delay: 0.4});
        animate(".ct3", {scaleX: [0,1,0]}, {duration: 0.6 , delay: 0.5});
    }

    useEffect(()=>{
        TriggerAnimation();
    }, [num]);

    useEffect(() => {
        
      const handleScroll =  debounce((e: WheelEvent)=>{
        console.log("num is: "+num);
        if (e.deltaY > 0 && num[1] + 1 < projects.length) {
          console.log("scrolled down");
          setNum([num[0],num[1]+1]);
        } else if (e.deltaY < 0 && num[1] - 1 >= 0) {
          console.log("scrolled up");
          setNum([num[0],num[1]-1]);
        }
      }, 150);
    
      window.addEventListener("wheel", handleScroll);
    
      return () => {
        window.removeEventListener("wheel", handleScroll);
      };
    }, [num]);
    
    return (
        
            <motion.div ref={scope} layoutId="page" className=" flex flex-1 h-full flex-col ">

                {/* code for the project shocase block */}
                    <motion.div  className={cn(` w-[30%] h-70 sm:w-153 sm:h-80 md:h-100 md:w-192  relative left-19 lg:w-240 lg:h-130 rounded-3xl p-4` )}
                    style={{backgroundColor: bgColorMap[projects[num[1]].bg]["900"]}}
                    initial={{y:0, opacity: 0}}
                    animate={{y:0, opacity: 1}}
                    transition={{duration: 0.5}}
                    exit={{y:100, opacity: 0}}
                    >
                        <ProjectImageBlock num={num}></ProjectImageBlock>
                        {/* code for project Image */}
                        <ProjectDescriptionBlock num={num}></ProjectDescriptionBlock>
                        {/* end of code for project Image */}
                    </motion.div>
                     {/* code for project shocase block end */}

                    {/* code for arrow button */}
                    <ProjectNavigationButton num={num} setNum={setNum}></ProjectNavigationButton>
                    {/* code for arrow button end */}
                    
                   
            </motion.div>
        
    )
}


function ProjectImageBlock({num}:{num:number[]}){
  return (
    <div className={`absolute flex flex-col -right-[27%] w-97 h-85 rounded-3xl my-auto inset-y-0`}
                        style={{backgroundColor: bgColorMap[projects[num[1]].bg]["900"]}}
                        >
                            <div className={`h-full w-full  z-5 absolute rounded-3xl right-0.5 translate-y-0.5`}
                            style={{backgroundColor: bgColorMap[projects[num[1]].bg]["950"]}}>
                                {/* code for project description */}
                                <div className="relative h-full w-full rounded-3xl overflow-hidden">
                                            {/* code for transition animation */}
                                            <div className={`absolute z-0 h-full w-full overflow-hidden flex flex-col py-8 px-8 text-lg  gap-2`}
                                            style={{color: bgColorMap[projects[num[1]].bg]["200"]}}>
                                                    <div>{projects[num[1]].type}</div>
                                                    <h1 className={`text-2xl font-bold`}
                                                    style={{color: bgColorMap[projects[num[1]].bg]["50"]}}
                                                    >{projects[num[1]].title}</h1>
                                                    <div className={`text-[15px] font-semibold`}
                                                    style={{color: bgColorMap[projects[num[1]].bg]["100"]}}
                                                    >{projects[num[1]].description}</div>
                                                    <div className="flex gap-2 flex-wrap">
                                                        {projects[num[1]].tags.map((tag,i)=>{
                                                            return <Tag key={i} className="text-[12px]" text={tag}></Tag>
                                                        })}
                                                    </div>
                                            </div>
                            <motion.div className={`absolute z-3 rounded-3xl h-full w-full ct1`}
                            initial={{scaleX: 0}}
                            animate={{scaleX: [0,1,0]}}
                            transition={{duration: 0.6 , delay: 0.3}}
                            style={{transformOrigin: "left", backgroundColor: bgColorMap[projects[num[1]].bg]["200"] }}
                            ></motion.div>
                            <motion.div className={`absolute z-2 rounded-3xl h-full w-full ct2`}
                            initial={{scaleX: 0}}
                            animate={{scaleX:[0,1,0]}}
                            transition={{duration: 0.6, delay: 0.5}}
                            style={{transformOrigin: "left",backgroundColor: bgColorMap[projects[num[1]].bg]["900"]}}
                            ></motion.div>
                            <motion.div className={`absolute z-1 rounded-3xl h-full w-full ct3`}
                              initial={{scaleX: 0}}
                            animate={{scaleX:[0,1,0]}}
                            transition={{duration: 0.6, delay: 0.7}}
                            style={{transformOrigin: "left",backgroundColor: bgColorMap[projects[num[1]].bg]["200"]}}
                            ></motion.div>
                            {/* end of code for transition animation */}
                                </div>
                                {/* end of code for project description */}
                            </div>
                            <div className={`h-full w-full  z-4 absolute rounded-3xl right-4 top-5`}
                             style={{backgroundColor: bgColorMap[projects[num[1]].bg]["900"]}}
                            >
                            </div>
                            
                        </div>
  )
}

function ProjectDescriptionBlock({num}:{num:number[]}){
  return (
    <div className={`rounded-3xl  relative h-full w-full overflow-hidden`}
                         style={{backgroundColor: bgColorMap[projects[num[1]].bg]["400"]}}
                        >
                            <div className="absolute h-full w-full z-0 ">
                                {projects[num[1]].image}                     
                            </div>
                            <motion.div  className="z-5 absolute bottom-3 w-full flex h-auto justify-center">
                                <motion.div className="w-[74%] bg-white h-15 rounded-full flex justify-center items-center font-semibold text-lg"
                                style={{color: bgColorMap[projects[num[1]].bg][900]}}
                                whileHover={{backgroundColor: bgColorMap[projects[num[1]].bg][950],
                                    color: bgColorMap[projects[num[1]].bg][50],
                                    letterSpacing: "1px",
                                    fontSize: 1.1
                                 }}
                                >
                                
                                    Visit
                                </motion.div>
                            </motion.div>
                            
                            {/* code for transition animation */}
                            <motion.div className={`absolute z-3 rounded-3xl h-full w-full ct1`}
                            initial={{scaleX: 0}}
                            animate={{scaleX: [0,1,0]}}
                            transition={{duration: 0.6 , delay: 0.3}}
                            style={{transformOrigin: "left",backgroundColor: bgColorMap[projects[num[1]].bg]["200"]}}
                            ></motion.div>
                            <motion.div className={`absolute z-2 rounded-3xl h-full w-full ct2`}
                            initial={{scaleX: 0}}
                            animate={{scaleX:[0,1,0]}}
                            transition={{duration: 0.6, delay: 0.5}}
                            style={{transformOrigin: "left",backgroundColor: bgColorMap[projects[num[1]].bg]["900"]}}
                            ></motion.div>
                            <motion.div className={`absolute z-1 rounded-3xl  h-full w-full ct3`}
                              initial={{scaleX: 0}}
                            animate={{scaleX:[0,1,0]}}
                            transition={{duration: 0.6, delay: 0.7}}
                            style={{transformOrigin: "left",backgroundColor: bgColorMap[projects[num[1]].bg]["200"]}}
                            ></motion.div>
                            {/* end of code for transition animation*/}
                        </div>
  )
}

function ProjectNavigationButton({num,setNum}:{num:number[], setNum: (x:number[])=>void}){
  return (
    <motion.div className="  mb-6 flex justify-center z-[1047] relative items-center -bottom-17 w-fit inset-x-0 mx-auto h-10  "
                    initial={{y:0}}
                    animate={{y:0}}
                    >
                            <div className="flex gap-3  items-center">
                                <motion.div className={`h-12 w-12  rounded-full flex items-center justify-center`}
                                animate={{backgroundColor: num[1]==0 ? (bgColorMap[projects[num[1]].bg]["900/50"]): bgColorMap[projects[num[1]].bg]["800"]}}
                                onClick={()=>{if(num[1]>0)setNum([num[0],num[1]-1])}}
                                style={{cursor: num[1]==0? "not-allowed":"pointer"}}
                                >
                                    <IconChevronLeft></IconChevronLeft>
                                </motion.div>
                                
                            {projects.map((p,i)=>{
                                
                                return <motion.div key={i} animate={{ width: i === num[1] ? "20px" : "12px" }} transition={{duration: 0.3}} className="h-3 w-3 rounded-full bg-white/50"></motion.div>
                               
                            })}
                             
                               <motion.div className={`h-12 w-12 flex items-center justify-center rounded-full`}
                               animate={{backgroundColor: num[1]==projects.length-1? (bgColorMap[projects[num[1]].bg]["900/50"]): (bgColorMap[projects[num[1]].bg]["800"])}}
                               onClick={()=>{if(num[1]< projects.length-1)setNum([num[0],num[1]+1])}}
                               style={{cursor: num[1] ==projects.length-1? "not-allowed":"pointer"}}
                               >
                                <IconChevronRight></IconChevronRight>
                               </motion.div>
                            
                            </div>
                             
                    </motion.div>
  )
}