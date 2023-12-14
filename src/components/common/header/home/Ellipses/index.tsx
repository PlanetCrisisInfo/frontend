import Image from "next/image"

import backEllipse from "@/../public/images/back-ellipse.svg"
import frontEllipse from "@/../public/images/front-ellipse.svg"

const Ellipses = () => {
  return (
    <div>
      <div className="w-[478px] absolute inset-0 z-0 object-contain -top-[24px] -left-[160px]">
        <Image
          src={backEllipse}
          alt="back ellipse illustration"
          priority={true}
          placeholder="empty"
          className=""
        />
      </div>
      <div className="w-[318px] absolute inset-0 z-0 object-contain -top-[60px] -left-[14px] -rotate-12">
        <Image
          src={frontEllipse}
          alt="front ellipse illustration"
          priority={true}
          placeholder="empty"
        />
      </div>
    </div>
  )
}

export default Ellipses
