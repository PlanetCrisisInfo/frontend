import Image from "next/image"

import planetSvg from "@/../public/images/planet.svg"

import styles from "./Hero.module.scss"

interface IHeaderComponentProps {}
const Hero = () => {
  return (
    <div className="w-[100vw] max-w-[2160px] mx-auto heroHome bg">
      <Image
        src={planetSvg}
        alt="planet"
        className={`-mt-1 min-h-[90vh] ${styles.planet}`}
        priority={true}
        quality={75}
      />
      {/* <p className="flex justify-end items-center text-3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        accusamus perspiciatis ratione dolore quidem quibusdam ducimus quos,
        repellendus debitis, veniam consequatur excepturi est aut nisi.
        Accusamus explicabo similique repellendus laudantium?
      </p> */}
    </div>
  )
}

export default Hero
