"use client"

import { Component } from "@/types";
import Image from "next/image";




type Props  = {
children:any
}

const Hero: Component<Props> = () => {



return(

  <div className="relative  h-screen overflow-hidden">
  <div className="absolute inset-0">
    <Image src="/images/hero.jpg" alt="Background Image" className="object-cover object-center w-full h-full" layout="fill"/>
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
  <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Planet
            </span>{" "}
            Crisis
          </h1>

  </div>
</div>
)


}

export default Hero