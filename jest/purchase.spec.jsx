import { render } from "@testing-library/react"
import Purchase from "../src/pages/Purchase"

describe("Purchase Page", () => {
    it("Should Render 6 Products", () => {
        const { getAllByTestId } = render(<Purchase />)

        const cards = getAllByTestId("card")

        expect(cards.length).toBe(6)
    })
})