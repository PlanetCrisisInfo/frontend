import Image from "next/image"

import planetSvg from "@/../public/images/planet.svg"

import styles from "./Hero.module.scss"

interface IHeaderComponentProps {}
const Hero = () => {
  return (
    <div className="w-[100vw] max-w-[2160px] mx-auto heroHome bg overflow-hidden">
      <Image
        src={planetSvg}
        alt="planet"
        className={`-mt-1 min-h-[90vh] ${styles.planet}`}
        priority={true}
        quality={75}
      />
      <div className="absolute m-auto top-[40vmin] left-0 right-0 z-50">
        <div className="container w-full lg:w-1/2 mx-auto">
          <h2 className="mb-4">
            Earthly Echoes <br />{" "}
            <span className="text-3xl italic lg:text-4xl mt-1 inline-block">
              Broadcasting the Beats of the{" "}
              <i className="bg-gray-200 p-2 rounded-xl inline-block">
                Biosphere
              </i>
            </span>
          </h2>
          <button className="mx-auto lg:mx-0 flex du-btn happy btn">
            Latest News !!
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
