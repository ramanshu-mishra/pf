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


// export const metadata: Metadata = {
//   title: "Ramanshu",
//   description: "Portfolio of Ramanshu Sharan Mishra. Full Stack Web Developer and Undergraduate Student at NIT-Jalandhar",
// };

export const metadata = {
  title: "Ramanshu Sharan Mishra - Portfolio",
  description: "Portfolio of Ramanshu Sharan Mishra. Full Stack Web Developer, Undergraduate Student at NIT-Jalandhar, Builder of cool things. Lover of clean code an chaos",
  keywords: ["Next.js", "React", "Ramanshu", "Ramanshu Sharan Mishra", "Sharan", "Mishra", "Ramanshu Mishra", "Ramanshu Sharan", "Ram", "Indophoenix", "phoenix", "ramspace", "Ramspace", "Space"],
  authors: [{ name: "Ramanshu Sharan Mishra", url: "https://ramspace.fun" }],
  creator: "Ramanshu Sharan Mishra",
  metadataBase: new URL("https://ramspace.fun"), // ✅ required for dynamic images and canonical
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Ramanshu Sharan Mishra - Portfolio",
    description: "Portfolio of Ramanshu Sharan Mishra. Full Stack Web Developer, Undergraduate Student at NIT-Jalandhar, Builder of cool things. Lover of clean code an chaos",
    url: "https://ramspace.fun",
    siteName: "ramspace",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ramanshu Sharan Mishra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramanshu Sharan Mishra - Portfolio",
    description: "Portfolio of Ramanshu Sharan Mishra. Full Stack Web Developer, Undergraduate Student at NIT-Jalandhar, Builder of cool things. Lover of clean code an chaos",
    site: "@RamanshuSharan",
    creator: "@RamanshuSharan",
    images: ["/og.png","/og2.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
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
        className={`${poppins.variable} ${inter.variable} ${Jockey.variable} min-h-screen h-screen w-screen overflow-y-auto antialiased flex flex-col justify-center items-center min-w-[10rem]  `}
      >
       
          {children}
        <Analytics></Analytics>
        
      </body>
    </html>
  );

}
