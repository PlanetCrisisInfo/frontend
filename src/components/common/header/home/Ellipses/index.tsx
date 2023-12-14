import Image from "next/image"

import backEllipse from "@/../public/images/back-ellipse.svg"
import frontEllipse from "@/../public/images/front-ellipse.svg"

const Ellipses = () => {
  return (
    <>
      <div className="w-[478px] absolute inset-0 z-0 object-contain -top-[24px] -left-[110px]">
        <Image
          src={backEllipse}
          alt="back ellipse illustration"
          priority={true}
          placeholder="empty"
          className=""
        />
      </div>
      <div className="w-[318px] absolute inset-0 z-0 object-contain -top-[60px] left-[110px] -rotate-[7deg]">
        <Image
          src={frontEllipse}
          alt="front ellipse illustration"
          priority={true}
          placeholder="empty"
        />
      </div>
    </>
  )
}

export default Ellipses
