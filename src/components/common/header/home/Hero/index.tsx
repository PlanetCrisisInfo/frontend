import styles from "./Hero.module.scss"

interface IHeaderComponentProps {}

const Hero = () => {
  return (
    <div className="relative -mt-1">
      <div className="min-h-[80vh] bg gradient border border-yellow-400"></div>
      <div className={`${styles.planetSvg}`}></div>
      {/* <div className="container  border-4 absolute inset-0 z-20">
        <h1>Hero Section</h1>
      </div> */}
    </div>
  )
}

export default Hero
