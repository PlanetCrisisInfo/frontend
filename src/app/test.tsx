export default function TestPage() {
  const theme = "sad"
  return (
    <main>
      <section className="sad bg">
        <h1>Planet Crisis</h1>
        <h2>Second Heading</h2>
        <p>
          Join Planet Crisis in our journey to save our beautiful Earth!
          Discover easy tips, fun facts, and inspiring stories about fighting
          climate change and protecting nature. Perfect for everyday heroes of
          all ages who want to make a difference. Lets learn, share, and act
          together for a happier, healthier planet!
        </p>
        <button className="sad link">Sad Link</button>
      </section>
      <section className="happy bg">
        <h1>Planet Crisis</h1>
        <p>
          Join Planet Crisis in our journey to save our beautiful Earth!
          Discover easy tips, fun facts, and inspiring stories about fighting
          climate change and protecting nature. Perfect for everyday heroes of
          all ages who want to make a difference. Lets learn, share, and act
          together for a happier, healthier planet!
        </p>
        <button className="happy link">Sad Link</button>
      </section>
      <section className="neutral bg">
        <h1>Planet Crisis</h1>
        <p>
          Join Planet Crisis in our journey to save our beautiful Earth!
          Discover easy tips, fun facts, and inspiring stories about fighting
          climate change and protecting nature. Perfect for everyday heroes of
          all ages who want to make a difference. Lets learn, share, and act
          together for a happier, healthier planet!
        </p>
        <button className="neutral link">Sad Link</button>
      </section>
    </main>
  )
}
