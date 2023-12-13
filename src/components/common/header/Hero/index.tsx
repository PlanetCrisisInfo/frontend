import Image, { StaticImageData } from "next/image"

interface IHeaderComponentProps {
  imageSrc: StaticImageData
  alt: string
}

const Hero = ({ imageSrc, alt }: IHeaderComponentProps) => {
  return (
    <header className="min-h-[80vh] gradient bg">
      <div className="container  border-4 ">
        <div className="max-w-[500px] circle-ils">
          <Image src={imageSrc} alt={alt} priority={true} placeholder="empty" />
        </div>
        <h1>Hero Section</h1>
      </div>
    </header>
  )
}

export default Hero
