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
        className={`-mt-1 min-h-[57vh] sm:min-h-[95vmin] ${styles.planet}`}
        priority={true}
        quality={75}
      />
      <div className="absolute m-auto top-[20vh] lg:top-[42vmin] left-0 right-0 z-50 overflow-hidden">
        <div className="container w-full xl:w-[50%] mx-auto flex justify-between">
          <div className="xl:min-w-[400px]">
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
          <article className=" hidden lg:flex my-40 lg:flex-row">
            <div className="du-card w-[250px]  m-1 du-glass relative -top-10 rotate-[-6deg]">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="car!"
                />
              </figure>
              <div className="du-card-body">
                <h2 className="du-card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="du-card-actions justify-end">
                  <button className="happy btn min-w-[120px]">More!</button>
                </div>
              </div>
            </div>
            <div className="du-card w-[250px] m-1 du-glass relative -top-10 rotate-[6deg]">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="car!"
                />
              </figure>
              <div className="du-card-body">
                <h2 className="du-card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="du-card-actions justify-end">
                  <button className="happy btn min-w-[120px]">More!</button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Hero
