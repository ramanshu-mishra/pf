import type { Metadata } from "next";
import { Inter , Poppins, Jockey_One} from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';




const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"]
})
const Jockey = Jockey_One({
  variable: "--font-jockey",
  weight: "400",
  display: "auto",
  subsets : ["latin"]
})


export const metadata: Metadata = {
  title: "Ramanshu",
  description: "Portfolio of Ramanshu Sharan Mishra. Full Stack Web Developer and Undergraduate Student at NIT-Jalandhar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
return (
    <html lang="en">
       <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
       <title></title>
      <body
        className={`${poppins.variable} ${inter.variable} ${Jockey.variable} min-h-screen h-auto overflow-y-auto antialiased flex flex-col justify-center items-center min-w-[10rem]  `}
      >
       
          {children}
        <Analytics></Analytics>
        
      </body>
    </html>
  );

}
