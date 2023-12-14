export default function ExpoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <section className="happy bg">
        <h1>I am New style of hero</h1>
      </section>
      {children}
    </>
  )
}
