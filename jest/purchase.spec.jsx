import { fireEvent, getAllByText, render } from "@testing-library/react"
import Purchase from "../src/pages/Purchase"

describe("Purchase Page", () => {
    it("Should Render 6 Products", () => {
        const { getAllByTestId } = render(<Purchase />)

        const cards = getAllByTestId("card")

        expect(cards.length).toBe(6)
    })

    it("Should Show That the cart is empty when open", () => {
        const { getByTestId, getByText } = render(<Purchase />)

        const arrow = getByTestId("arrow-up")
        fireEvent.click(arrow)
        
        expect(getByText("O Cart está vazio")).toBeInTheDocument()
    })

    it("Should Show some purchase in the cart after buy", () => {
        const {debug, getByTestId, getAllByTestId, getAllByText } = render(<Purchase />)

        const addToCartBtn = getAllByTestId("add-cart")
        fireEvent.click(addToCartBtn[0])

        const arrow = getByTestId("arrow-up")
        fireEvent.click(arrow)
        
        const titles = getAllByText("Nendoroid")
        
        expect(titles.length).toBe(2)
    })
})