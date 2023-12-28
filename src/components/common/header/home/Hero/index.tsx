import Image from "next/image"

import planetSvg from "@/../public/images/planet.svg"

import styles from "./Hero.module.scss"

interface IHeaderComponentProps {}
const Hero = () => {
  return (
    <div className="w-[100vw] max-w-[2160px] mx-auto heroHome bg ">
      <Image
        src={planetSvg}
        alt="planet"
        className={`-mt-1 min-h-[90vh] ${styles.planet}`}
        priority={true}
        quality={75}
      />
      <div className="absolute m-auto top-[40vmin] left-0 right-0 z-50">
        <div className="w-1/2 mx-auto">
          <h2>
            Earthly Echoes <br />{" "}
            <span className="text-4xl">
              Broadcasting the Beats of the Biosphere
            </span>
          </h2>
          <button>Get Latest News!!</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
