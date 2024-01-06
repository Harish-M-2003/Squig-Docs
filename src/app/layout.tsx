// "use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideMenu from "./components/SideMenu";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import Head from "next/head";

// import { useEffect } from "react";
// import { once } from "events";
// import Aos from "aos";

// AOS.init();

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Squig",
  description: "A Dynamic Programming Language",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // useEffect(()=>{
  //   // Aos.init()
  //   AOS.init({
  //     easing :"ease-in-out",
  //     once : true,
  //     offset : 50,
  //   })
  // } , [])
  return (
    <html lang="en">
      {/* <Head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>{AOS.init()}</script>
      </Head> */}
      <body>
        <nav className="bg-gradient-to-r from-black to-gray-900 md:px-10 max-md:px-4 md:pt-8 max-sm:pt-4 pt-4 pb-5 flex justify-between">
          {/* <p className='text-white'>Squig</p> */}
          <SideMenu />
          <Link href={"https://github.com/Harish-M-2003/Squig"} target="_blank">
            <BsGithub className={"md:text-4xl text-2xl text-gray-400"} />
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
