import Button from "@/app/_components/Button/Button"

import type { ThemeMode } from "@/types"

const HomePage = async function () {
  const themeMode: ThemeMode = "neutral"

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${themeMode}`}
    >
      <section id="hero">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Planet
          </span>{" "}
          Crisis
        </h1>
        <hr />
        <Button themeMode={themeMode} />
      </section>
    </main>
  )
}

export default HomePage
