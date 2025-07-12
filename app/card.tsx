"use client";



import React, { useEffect, useRef, useState } from "react";
import { CardBody, CardContainer} from "./card2";  
import profile from "./assets/protfolio-image.png"
import  Image from "next/image";
import { useRelMousePosition } from "./store";


export default function Card({cords,hover}: {cords: {x:number,y:number}, hover:boolean}) {
    const relcord = useRelMousePosition((state)=>state.mousePosition);
    const setRelcord = useRelMousePosition((state)=>state.updatePosition);
    const ref = useRef<HTMLDivElement|null>(null);
    const [theme, setTheme] = useState<string>("dark");
    useEffect(()=>{
      const t = localStorage.getItem("theme");
      if(t === "light" || t === "dark"){
        setTheme(t);
      } 
    },[]);

    console.log(theme);
    

    useEffect(()=>{
        if(!ref)return;
        const {x,y} = ref.current.getBoundingClientRect();
        const cx = (cords.x - x)
        const cy = (cords.y - y)
        setRelcord({x: cx, y:cy});
    }, [cords])

  return (

    <CardContainer className="inter-var shadow-cardShadow mt-2 border-solid dark:border-0  border-neutral-400 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-scale duration-300  w-[300] md:w-[380] md:translate-y-5 lg:translate-y-0  sm:w-[380] overflow-hidden sm:translate-y-1 relative">
      <CardBody className={``} >

        
          <div ref={ref} className=" p-[1.5px] "
        
        
        style = {hover && theme === "dark" ? { background: `radial-gradient(circle at ${relcord.x}px ${relcord.y}px, #fff, #000)` } : hover && theme !="dark"? {background: `radial-gradient(circle at ${relcord.x}px ${relcord.y}px, #000, #fff)`}: {background: ""} }
        >
            <div>
              <Image  width={0}
            className=" rounded-full" src={profile} alt="profile" ></Image>
           
            </div>

        </div>
        
        
        
      </CardBody>
    </CardContainer>
   
  );
}
