import Ellipses from "@/components/common/header/home/Ellipses"
import Hero from "@/components/common/header/home/Hero"

export default function HomePage() {
  const theme = "sad"
  return (
    <>
      <Hero />
      <Ellipses />
      <section>
        <div className="container">
          <h1 className="">Home Page</h1>
        </div>
      </section>
    </>
  )
}
