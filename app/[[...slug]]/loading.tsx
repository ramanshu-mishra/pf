"use client"

import {motion} from "motion/react";
import { useState } from "react";
import Card from "../card"
import { LoaderFour } from "../components/loader";
export default function Page(){
   
    const [hover, setHover] = useState(false);
    const [cords, setCords] = useState<{x:number,y:number}>({x:0,y:0});


    return(
        <div className="min-h-screen h-auto  antialiased flex flex-col justify-center items-center min-w-screen w-auto"
            onMouseEnter={()=>setHover(true)}
            onMouseLeave = {()=>{setHover(false)}}
            onMouseMove={(e)=>{
                if(hover==false)setHover(true);
                setCords({x:e.clientX, y:e.clientY});
            }}
        >
            <motion.div layoutId= "profile-image" >          
            <Card cords = {cords} ></Card>
            </motion.div>
            <motion.div layoutId="loader-text">
                 <LoaderFour className={"text-5xl"} text="BOOTING RSM"></LoaderFour>
            </motion.div>
           
        </div>
    )
}