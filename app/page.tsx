import Button from "@/app/_components/Button/Button"

import SecondaryBar from "./_components/SecondaryBar/SecondaryBar"
import HomeCard from "./_components/ServiceCard/ServiceCard"
import WorldCard from "./_components/WorldCard/WorldCard"

import type { ThemeMode } from "@/types"
const HomePage = function () {
  const themeMode: ThemeMode = "neutral"

  return (
    <>
      <SecondaryBar themeMode={themeMode} />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        <section id="hero">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Planet
            </span>{" "}
            Crisis
          </h1>
          <hr />
          <Button text="Button" themeMode={themeMode} />
          <section>
            <div className="container px-6 m-auto">
              <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                <div className="col-span-4 lg:col-span-6">
                  {" "}
                  <HomeCard themeMode={themeMode} />
                </div>
                <div className="col-span-4 lg:col-span-6">
                  {" "}
                  <HomeCard themeMode={themeMode} />
                </div>
                <div className="col-span-4 lg:col-span-6">
                  {" "}
                  <HomeCard themeMode={themeMode} />
                </div>
                <div className="col-span-4 lg:col-span-6">
                  {" "}
                  <HomeCard themeMode={themeMode} />
                </div>
                <div className="col-span-4 lg:col-span-6">
                  {" "}
                  <WorldCard themeMode={themeMode} />
                </div>
                <div className="col-span-4 lg:col-span-6">
                  {" "}
                  <HomeCard themeMode={themeMode} />
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  )
}

export default HomePage
