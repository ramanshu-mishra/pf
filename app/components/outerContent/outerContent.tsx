"use client"
import Navbar from "../navbar/navbar"
import SplitedText from "../SplittedText/SplittedText"
import {IconBrandGithub, IconBrandTwitter} from "@tabler/icons-react"
import linkedIn from "../../assets/linkedIn.svg"
import Image from "next/image"
export default function Page({children}:{children:React.ReactNode}) {
    return (
        <div className="min-h-screen w-full relative flex flex-col justify-between items-center overflow-y-auto">
            <div className="w-full mt-6 flex flex-col sm:flex-row justify-between items-center px-4 z-[950] gap-4">
                <div className="text-2xl flex gap-2 items-center">
                    <SplitedText word={"Ramanshu"} className="" />
                    <SplitedText word={"Sharan"} className="hidden sm:inline" />
                    <SplitedText word={"Mishra"} className="hidden sm:inline" />
                </div>
                <Navbar width={"3rem"} height="2.5rem" strokeWidth="5px" />
            </div>

            <main className="flex-1 w-full flex flex-col justify-center items-center px-2 sm:px-8">
                {children}
            </main>

            <footer className="w-full flex flex-col sm:flex-row justify-between items-end px-4 pb-4 z-[950] gap-4">
                <div className="text-2xl flex gap-2">
                    <SplitedText word={"Also"} className="" />
                    <SplitedText word={"I'm"} className="" />
                    <SplitedText word={"Iron"} className="" />
                    <SplitedText word={"Man"} className="" />
                </div>
                <div className="flex justify-around items-center gap-6 mt-4 sm:mt-0">
                    <IconBrandGithub className="hover:scale-[1.3] active:scale-[0.98] transition-all duration-300" />
                    <IconBrandTwitter className="hover:scale-[1.3] active:scale-[0.98] transition-all duration-300" />
                    <Image src={linkedIn} className="text-neutral-50 hover:scale-[1.3] active:scale-[0.98] transition-all duration-300" alt="linkedIn" />
                    <div className="font-bold hover:scale-[1.2] active:scale-[0.98] transition-all duration-300">Resume</div>
                </div>
            </footer>
        </div>
    );
}