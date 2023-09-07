import type { Component, ThemeMode } from "@/types"
import Image from "next/image"

type Props = {
  themeMode: ThemeMode

}

const WorldCard: Component<Props> = (props) => {
  const {
    themeMode = "neutral",
  } = props
  return (
    <div className={`overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200${themeMode}`}>


    <Image src="/images/world-map.jpg" alt="card image" className="aspect-video w-full" width={300} height={300}/>


  

</div>
  )
}

export default WorldCard