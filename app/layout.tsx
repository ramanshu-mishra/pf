import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
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
      <body
        className={`${inter.variable} min-h-screen h-screen antialiased flex flex-col justify-center items-center `}
      >
        
          {children}
        <Analytics></Analytics>
        
      </body>
    </html>
  );
}
