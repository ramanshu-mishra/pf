export default function Tag({className, text}:{className?: string,text:string}){
    return (
        <div className= {`${className} rounded-full px-2 py-1 border-1 border-white/60`}>
            {text}
        </div>
    )
}