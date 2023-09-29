import SecondaryBar from "@/app/_components/SecondaryBar/SecondaryBar"
import { pagesLinksCleanest } from "@/app/_data/pageLinks"

import type { ThemeMode } from "@/types"

export default function FiveCleanestCitiesPage() {
  const themeMode: ThemeMode = "sad"
  return (
    <>
      <SecondaryBar themeMode={themeMode} pagesLinks={pagesLinksCleanest} />
      <main>
        <section id="heading" className="container mx-auto">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Disasters
            </span>{" "}
            Info
          </h1>
        </section>

        <section id="contact-us-form" className={`${themeMode} bg`}>
          <article className="container mx-auto">
            <h3> 5 Cleanest Cities</h3>
          </article>
        </section>
      </main>
    </>
  )
}
