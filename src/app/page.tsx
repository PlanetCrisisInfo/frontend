import imageSrc from "@/../public/images/circle.svg"
import Hero from "@/components/common/header/Hero"

export default function HomePage() {
  const theme = "sad"
  return (
    <main>
      <Hero imageSrc={imageSrc} alt="circle illustration" />
    </main>
  )
}
