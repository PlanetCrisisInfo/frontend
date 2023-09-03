import Cleanest from "@/app/cleanest/page"
import { render,screen } from "@testing-library/react"


describe("Cleanest Page", () => {

    it("should render the cleanest page with Heading Cleanest", async () => {
        render(<Cleanest  />)
        const heading = screen.getByText(/Cleanest/i)
        expect(heading).toBeInTheDocument()
      })

   
})