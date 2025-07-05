import {motion} from "motion/react";
import { useState } from "react";
export default function SplitedText({word, className}:{word:string, className?: string}){
    const [touchHoveredIdx, setTouchHoveredIdx] = useState<number|null>(null);
    return(
      <div className="flex">
      {word.split("").map((char,idx)=>{
        const isTouchHovered = touchHoveredIdx === idx;
        return <motion.div 
          style={{fontWeight: isTouchHovered ? 700 : 400}}
          key={idx+char} 
          className={className}
          initial={{ scale: 1 }}
          whileHover={{ scaleY: 1.2, scaleX: 1.3, fontWeight: "700", letterSpacing: "0.1em" }}
          animate={isTouchHovered ? { scaleY: 1.2, scaleX: 1.3, fontWeight: 700, letterSpacing: "0.1em" } : { scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onTouchStart={() => setTouchHoveredIdx(idx)}
          onTouchEnd={() => setTouchHoveredIdx(null)}
          onTouchCancel={() => setTouchHoveredIdx(null)}
        >
          {char}
        </motion.div>
      })}
      </div>
    )
}