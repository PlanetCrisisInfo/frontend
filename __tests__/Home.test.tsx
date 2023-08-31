import HomePage from "@/app/page"
import { render, screen } from "@testing-library/react"

describe("Home Page", () => {
  // it("should render the home page with Heading", async () => {
  //   const HomePageResolved = await resolvedComponentAsync(HomePage, {})

  //   render(<HomePageResolved />)

  //   const heading = screen.getByText(/Planet/i)
  //   expect(heading).toBeInTheDocument()
  // })

  it("should render the home page with Heading", async () => {
    render(<HomePage />)
    const heading = screen.getByText(/Planet/i)
    expect(heading).toBeInTheDocument()
  })
  it("should render the home page with Button", async () => {
    render(<HomePage />)
    const button = screen.getByRole("button", { name: /Button/i })
    expect(button).toBeInTheDocument()
  })
})
