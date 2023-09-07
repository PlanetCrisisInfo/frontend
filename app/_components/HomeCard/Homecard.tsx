import type { Component, ThemeMode } from "@/types"
import Image from "next/image"

type Props = {
  themeMode: ThemeMode

}

const HomeCard: Component<Props> = (props) => {
  const {
    themeMode = "neutral",
  } = props
  return (
    <div className={`overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 ${themeMode}`}>

  <figure>
    <Image src="/images/forest.jpg" alt="card image" className="aspect-video w-full" width={300} height={300}/>
  </figure>

  <div className="p-6">
    <header className="flex gap-4 mb-4 justify-center">
     
      <div className="">
        <h4 className="text-xl font-medium text-slate-700">In the urban Jungle</h4>
     
      </div>
    </header>
    <p>
      Day to day life operates outside, so get ready to see the beach become the living room, and the street the kitchen. A simple, yet beautiful, way of life that explains the sunny outlook.
    </p>
  </div>


</div>
  )
}

export default HomeCard