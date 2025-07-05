import {motion} from "motion/react";
export default function SplitedText({word, className}:{word:string, className?: string}){
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