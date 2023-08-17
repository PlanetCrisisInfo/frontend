import Button from "./_components/Button/Button"
import { Carousel } from "./_components/Carousel/Carousel"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold text-center">
        <span className="text-blue-500">Planet</span>
        <span className="text-green-500">Crisis</span>
        <Button />
        <Carousel  />
      </h1>
    </main>
  )
}
