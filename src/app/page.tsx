import Ellipses from "@/components/common/header/home/Ellipses"
import Hero from "@/components/common/header/home/Hero"
import Services from "@/components/common/header/home/Services"

export default function HomePage() {
  const theme = "sad"
  return (
    <>
      <Hero />
      <Ellipses />
      <Services  />
      <section className="bg-gray-100 text-slate-800">
        <div className="container">
          <h1 className="">Home Page</h1>
        </div>
      </section>
    </>
  )
}
