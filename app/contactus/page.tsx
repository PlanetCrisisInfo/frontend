import type { PageProps } from "@/types"

import ContactUsForm from "../_components/ContactUsForm/ContactUsForm"

export default function ContactUsPage({}: PageProps) {
  return (
    <main>
      <section id="heading" className="container mx-auto">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Contact
          </span>{" "}
          Us
        </h1>
      </section>

      <section id="contact-us-form" className="happy">
        <article className="container mx-auto">
          <ContactUsForm />
        </article>
      </section>
    </main>
  )
}
