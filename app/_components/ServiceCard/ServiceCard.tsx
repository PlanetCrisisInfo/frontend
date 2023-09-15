import type { Component, ThemeMode } from "@/types"
import Icon from "../Icon/Icon"

type Props = {
  themeMode: ThemeMode
}

const ServiceCard: Component<Props> = (props) => {
  const { themeMode = "neutral" } = props
  return (
    <article
      className={`overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 ${themeMode}`}
    >
      <header>
        <figure className="hire w-[200px]">
          <Icon animateClass="smooth-animate" themeMode={themeMode}>
            <path d="M12 19.0003H14V6.00028L20.3939 8.74053C20.7616 8.89811 21 9.25964 21 9.65967V19.0003H23V21.0003H1V19.0003H3V5.65015C3 5.25496 3.23273 4.89684 3.59386 4.73634L11.2969 1.31275C11.5493 1.2006 11.8448 1.31424 11.9569 1.56659C11.9853 1.63052 12 1.6997 12 1.76966V19.0003Z"></path>
          </Icon>
        </figure>
      </header>

      <div className="p-6">
        <div className="flex gap-4 mb-4 justify-center">
          <h4 className="text-xl font-medium text-slate-700">
            Top 5 Cleanest Cities
          </h4>
        </div>
        <p>
          Day to day life operates outside, so get ready to see the beach become
          the living room, and the street the kitchen. A simple, yet beautiful,
          way of life that explains the sunny outlook.
        </p>
      </div>
    </article>
  )
}

export default ServiceCard
