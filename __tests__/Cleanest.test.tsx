import SecondaryBar from "@/app/_components/SecondaryBar/SecondaryBar"
import Cleanest from "@/app/cleanest/page"
import { getByTestId, render,screen } from "@testing-library/react"


describe("Cleanest Page", () => {

    it("should render the cleanest page with Heading Cleanest", async () => {
        render(<Cleanest  />)
        const heading = screen.getByText(/Cleanest/i)
        expect(heading).toBeInTheDocument()
      })
    //   do it on class name 
      it('renders with happy as default', () => {
       render(<Cleanest thememode={thememode}  />) 
       const {thememode}
    })
})