import Image from "next/image"

import backEllipse from "@/../public/images/back-ellipse.svg"
import frontEllipse from "@/../public/images/front-ellipse.svg"

interface IHeaderComponentProps {}

const Hero = () => {
  return (
    <header className="min-h-[90vh] gradient bg relative">
      <div className="w-[478px] absolute inset-0 z-0 object-contain -top-6 -left-40">
        <Image
          src={backEllipse}
          alt="back ellipse illustration"
          priority={true}
          placeholder="empty"
          className=""
        />
      </div>
      <div className="w-[318px] absolute inset-0 z-0 object-contain -top-16 left-14 -rotate-12">
        <Image
          src={frontEllipse}
          alt="front ellipse illustration"
          priority={true}
          placeholder="empty"
        />
      </div>
      <div className="container  border-4  relative z-20">
        <h1 className="">Hero Section</h1>
      </div>
    </header>
  )
}

export default Hero
