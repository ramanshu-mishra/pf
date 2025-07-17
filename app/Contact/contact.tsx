import Image from "next/image";
import ironMan from "../assets/iron-man.png";
import {motion, useAnimate} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useHandleMessage } from "../handleMessage";
import { IconX } from "@tabler/icons-react";




export default function Page() {
  const [open,setOpen] = useState(false);
  const ref = useRef<HTMLDivElement|null>(null);
function handleClick(e: MouseEvent) {
    if (!ref.current) return;
    if (ref.current && !ref.current.contains(e.target as Node)) {
      if (open) setOpen(false);
    }
  }
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [open]);

  return (
    <motion.div className="flex h-full w-full items-center justify-center  relative "
    exit={{opacity:0}}
    transition={{duration: 0.5}}
    >
      {open && <div className="fixed w-screen h-screen z-[999] bg-neutral-950/40   backdrop-blur-sm"></div>}
      {open && <MessageWindow ref={ref} setOpen = {setOpen}></MessageWindow>}
      <div className="flex h-fit  sm:h-100 sm:w-180  lg:h-100 lg:w-200 flex-col gap-1 rounded-3xl bg-zinc-800 shadow-[0px_0px_4px_0px_#718096] p-6 relative mx-4 min-w-50">
        <div className="flex flex-col sm:flex-row h-full w-full gap-1 relative  max-sm:gap-2">
          <div className="flex max-sm:w-full w-[60%] flex-col gap-3 ">
            <div className="text-2xl sm:text-3xl font-semibold ">Get in Touch</div>
            <div className="text-md sm:text-lg">
              I am always open to discuss new Ideas, creative thoughts, even
              random gossip sometimes .Feel free to reach out to me.
            </div>
            <div className="flex h-10 items-center justify-center text-sm font-semibold ">
              <motion.div className="absolute sm:w-[50%] z-[26] flex justify-center items-center bg-white text-neutral-950 w-full mx-10 max-sm:mx-1 py-2 rounded-full"
              whileHover={{fontWeight: "bold", letterSpacing: "0.1rem", backgroundColor: "#164e63", color: "white"}}
              whileTap={{fontWeight: "bold", letterSpacing: "0.1rem", backgroundColor: "#164e63"}}
              onClick={()=>setOpen(true)}
              >
                Message Me
              </motion.div>
              
            </div>
          </div>
          <Image alt="me" src={ironMan} className=" absolute z-22 bottom-3 max-md:-right-45 max-lg:scale-90 -right-40  lg:-right-30 max-sm:hidden  ">
            
          </Image>
          <SVGAnimation></SVGAnimation>
          <div className="absolute max-md:hidden max-lg:right-25 max-lg:-top-16 -top-18 right-35 h-15 w-15 rounded-full mix-blend-difference z-23  bg-blue-400"></div>
          <motion.div className="relative sm:absolute w-full h-fit min-h-33 z-25 bottom-0 bg-neutral-950 rounded-3xl py-2 flex flex-col"
          initial={{y:100}}
          animate={{y:0}}
          transition={{duration: 1}}
          >
            <div className="px-6 flex items-center  h-10 text-3xl max-sm:h-7">❝</div>
            <div className="flex flex-1 flex-col  px-4 py-2 sm:px-8 md:py-0 lg:py-4 text-lg italic tracking-tight font-bold max-sm:text-md"> Sometimes you gotta run before you can walk</div>
            <div className="flex justify-end px-6 items-center gap-1 font-semibold"> <span className=" bg-white w-5 h-0.5"></span> Iron Man</div>
          </motion.div>
        </div>
        
      </div>
      
    </motion.div>
  );
}

interface MessageInterface{
  name: string,
  contact:string,
  message:string
}

 function MessageWindow({ ref,setOpen }: { ref: React.RefObject<HTMLDivElement>, setOpen: (x:boolean)=>void }) {
  const {loading, error, data, handleMessage} = useHandleMessage();
  const [msg,setmsg] = useState<MessageInterface>({name:"", contact:"", message: ""});
  const first = useRef(true);
  const [scope,animate] = useAnimate();
  const [scope2, animate2] = useAnimate();


  async function loaderAnimation(){
   animate(".hi", {scale: [1.2, 0.8, 1.1, 1]},{duration: 0.8 });
    if(data)animate2(".noti1", {opacity: [1,0], y: [0, -200]}, {duration: 1})
    if(error){
     await animate2(".noti2", {opacity: [0,1],scale: [1.1,0.8,1]},{duration: 0.5});
     animate2(".noti2", {opacity: [1,0]}, {duration: 0.5});
    }
  }
 
  useEffect(()=>{
    if(first.current)return;
    if(!loading){
      loaderAnimation();
    }
  }, [loading])

  return (
    <>
    <motion.div ref={scope2} className="pointer-events-none absolute z-[1001] rounded-4xl max-w-110  top-0 h-20 w-full mx-auto flex justify-center items-center ">
<motion.div  className="pointer-events-none absolute z-[1001] rounded-4xl max-w-110 bg-green-400 top-0 h-20 w-full mx-auto flex justify-center items-center text-xl font-semibold shadow-[inset_0px_0px_10px_0px_#052e16] noti1"
    style={{opacity: 0}}
    >
      Message Sent 
    </motion.div>
    <motion.div className="pointer-events-none absolute z-[1001] rounded-4xl max-w-110 top-0 h-10 w-full mx-auto flex justify-center items-center text-xl font-semibold shadow-[inset_0px_0px_10px_0px_#450a0a] bg-red-800 noti2"
    style={{opacity: 0}}
    >
      Message not sent
    </motion.div>

    </motion.div>
    
    <motion.div
      ref={ref}
      className="absolute z-[1000] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md p-6 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl text-white my-2 mx-2 min-w-70 "
    >
      <h2 className=" text-2xl font-semibold text-center mb-4 relative">Send a Message
        <span className="absolute right-0 top-1/2 -translate-y-1/2"
        onClick={()=>setOpen(false)}
        ><IconX></IconX></span>
      </h2>
      <motion.form className="flex flex-col gap-4"
      ref= {scope}
      >
        <input
          type="text"
          required
          placeholder="Enter your name"
          className="w-full p-3 rounded-xl bg-neutral-700/40 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-white/20 "
          onChange={(e)=>setmsg({...msg, name:e.target.value })}
        />
        <input
          type="text"
          required
          placeholder="Email or contact whatever..."
          className="w-full p-3 rounded-xl bg-neutral-700/40 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-white/20"
          onChange={(e)=>setmsg({...msg,contact:e.target.value  })}
        />
        <textarea
          placeholder="Enter your message"
          className="w-full p-3 h-32 rounded-xl bg-neutral-700/40 placeholder-white/70 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-white/20 overflow-y-auto"
          onChange={(e)=>setmsg({...msg,message:e.target.value })}
        />
        <motion.button
          className="w-full mt-2 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition-colors duration-200 text-white font-semibold "
          whileHover={{letterSpacing: "0.1rem"}}
          style={loading && {pointerEvents: "none"}}
          onClick={(e)=>{
            e.stopPropagation();
            e.preventDefault();
            first.current = false;
            handleMessage(msg);
          }}
        >
         
         {<motion.div className=" text-md hi  " style={{display: loading ? "none": "block"}}>Message Me</motion.div>}
         {<motion.div  className="flex justify-center items-center min-h-5 relative h-full w-full" style={{display: !loading ? "none": "block"}}>
          <svg
            className="absolute w-full h-15 -top-5  m-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle fill="#FF156D" stroke="#FF156D" strokeWidth="7" r="8" cx="40" cy="65">
              <animate
                attributeName="cy"
                calcMode="spline"
                dur="0.8s"
                values="65;110;65"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="-.4s"
              />
            </circle>
            <circle fill="#FF156D" stroke="#FF156D" strokeWidth="7" r="8" cx="100" cy="65">
              <animate
                attributeName="cy"
                calcMode="spline"
                 dur="0.8s"
                values="65;110;65"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="-.2s"
              />
            </circle>
            <circle fill="#FF156D" stroke="#FF156D" strokeWidth="7" r="8" cx="160" cy="65">
              <animate
                attributeName="cy"
                calcMode="spline"
                 dur="0.8s"
                values="65;110;65"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="0s"
              />
            </circle>
          </svg>
        </motion.div>}
         
        </motion.button>
      </motion.form>
    </motion.div>
    </>
  );
}

function SVGAnimation(){


  return (
   <>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 250 250"
    width="250"
    height="250"
    fill="none"
    className="absolute z-10 -top-30 right-10 max-lg:right-3 max-lg:-top-26 max-md:hidden"
    style={{ strokeDasharray: 200, strokeDashoffset: 0 }}
  >
    <motion.path d="M60,60 L210,70" className="neon-path" 
    initial={{pathLength: 0}}
    animate={{pathLength: 1}}
    transition={{duration: 1, delay: 0.1}}
    />
  </svg>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 250 250"
    width="250"
    height="250"
    fill="none"
    className="absolute z-22 -top-30 right-10 max-lg:right-3 max-lg:-top-26 max-md:hidden"
    style={{ strokeDasharray: 200, strokeDashoffset: 0 }}
  >
    <motion.path d="M60,60 L130,220" className="neon-path" 
    initial={{pathLength: 0}}
    animate={{pathLength: 1}}
    transition={{duration: 1.5, delay: 0.1}}
    />
  </svg>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 250 250"
    width="250"
    height="250"
    fill="none"
    className="absolute z-22 -top-30 right-10 max-lg:right-3 max-lg:-top-26 max-md:hidden"
    style={{ strokeDasharray: 200, strokeDashoffset: 0 }}
  >
    <motion.path d="M130,220 L210,70" className="neon-path" 
    initial={{pathLength: 0}}
    animate={{pathLength: 1}}
    transition={{duration: 1.5, delay: 0.5}}
    />
  </svg>
</>


  )
}



// session5: "{"email":"vanshm.it.23@nitj.ac.in","roll":"23124115","isSingle":false,"course":"btech","sem":"5","form_uploaded":1,"doc_uploaded":1,"role":"user","step":5.2}"
