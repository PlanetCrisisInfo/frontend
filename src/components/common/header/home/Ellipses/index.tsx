import Image from "next/image"

import circle from "@/../public/images/circle.svg"

import styles from "./Ellipses.module.scss"

const Ellipses = () => {
  return (
    <div
      className={`w-[55vw] lg:w-[35vw] absolute inset-0 z-10 object-cover -top-[6%] -left-[10%] lg:-top-[5%] lg:-left-[8%] 5xl:hidden ${styles.ellipse} `}
    >
      <Image
        src={circle}
        alt="back ellipse illustration"
        priority={true}
        placeholder="empty"
        className="-scale-x-100"
      />
    </div>
  )
}

export default Ellipses
