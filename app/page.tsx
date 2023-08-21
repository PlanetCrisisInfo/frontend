import Button from "@/app/_components/Button/Button"

import type { Page, ThemeMode } from "@/types"

type Props = {
  something?: string
}

const HomePage: Page<Props> = (props) => {
  const themeMode: ThemeMode = "neutral"

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${themeMode}`}
    >
      <section id="hero">
        <h1>
          <span>Planet</span>
          <span>Crisis</span>
          <Button themeMode={themeMode} />
        </h1>
      </section>
    </main>
  )
}

export default HomePage
