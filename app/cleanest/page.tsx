import type { ThemeMode } from "@/types"
import Button from "../_components/Button/Button"
import SecondaryBar from "../_components/SecondaryBar/SecondaryBar"

export default function CleanestPage() {
  const themeMode: ThemeMode = "happy"
  return (
    <>
      <SecondaryBar themeMode={themeMode} />
      <main>
        <section id="heading" className="container mx-auto">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Cleanest
            </span>{" "}
            Info
          </h1>
        </section>

        <section id="contact-us-form" className={`${themeMode} bg`}>
          <article className="container mx-auto">
            <h3>Testing</h3>
            <Button text="Button" themeMode={themeMode} />
          </article>
        </section>
      </main>
    </>
  )
}
