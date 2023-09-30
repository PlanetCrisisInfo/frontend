"use client"

import { Component } from "@/types";
import Image from "next/image";
import useDimensions from 'react-cool-dimensions';
import arrayCeil from "@/app/_utils/arrayCeil";
import { useState } from "react";



type Props  = {
children:any
}

const Hero: Component<Props> = () => {

  const [heroImage, setHeroImage] = useState('hero-1920.jpg')
  const imageSizes = [600, 1280, 1920]

  const { observe, unobserve, width, height, entry } = useDimensions({
      onResize: ({ observe, unobserve, width, height, entry }) => {
          setHeroImage(`hero-${arrayCeil(imageSizes, width)}.jpg`)

          unobserve(); // To stop observing the current target element
          observe(); // To re-start observing the current target element
      },
  });

return(

  <div
  ref={observe}
  className="w-full h-screen flex justify-center items-center overflow-hidden relative bg-black">
  <Image
      src={`/images/hero.jpg`}
      alt="Hero Image"
      className="opacity-60 object-cover"
      fill
  />
  <div className="flex flex-col justify-center items-center px-3">
      <h1 className=" text-center text-3xl md:text-5xl text-white font-bold drop-shadow-lg">Planet crisis
          
      </h1>
      {/* <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Planet
            </span>{" "}
            Crisis
          </h1> */}

  </div>
</div>
)


}

export default Hero