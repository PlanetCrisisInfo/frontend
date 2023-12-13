import Image, { StaticImageData } from "next/image"

interface IHeaderComponentProps {
  imageSrc: StaticImageData
  alt: string
}

const Hero = ({ imageSrc, alt }: IHeaderComponentProps) => {
  return (
    <header className="min-h-[80vh] gradient bg relative ">
      <div className="max-w-[900px] circle-ils absolute inset-0 object-cover -left-52 -top-44 z-0">
        <Image
          src={imageSrc}
          alt={alt}
          priority={true}
          placeholder="empty"
          className="scale-x-[-1]"
        />
      </div>
      <div className="container  border-4  relative z-10">
        <h1 className="">Hero Section</h1>
      </div>
    </header>
  )
}

export default Hero
