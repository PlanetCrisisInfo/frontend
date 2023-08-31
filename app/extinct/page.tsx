import type { ThemeMode } from "@/types"

import Navbar from "../_components/Navbar/Navbar"

export default function ExtinctPage() {
  const themeMode: ThemeMode = "sad"
  return (
    <>
      <Navbar themeMode={themeMode} />
      <main>
        <section id="heading" className="container mx-auto">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Extinct
            </span>{" "}
            Info
          </h1>
        </section>

        <section id="contact-us-form" className={`${themeMode} bg`}>
          <article className="container mx-auto">
            <h3>Testing</h3>
          </article>
        </section>
      </main>
    </>
  )
}
