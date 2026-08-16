import { render, screen } from "@testing-library/react"
import Footer from "@/components/Footer"

describe("Footer displays correct information", () => {
  test("Footer has a h3 with correct text", () => {
    render(<Footer />)

    const contactTitle = screen.getByRole("heading", { level: 3, "name": /Contact us/i })

    expect(contactTitle).toBeInTheDocument()
  })

  test("Footer displays phone number", () => {
    render(<Footer />)

    const contactPhone = screen.getByTestId("phone")

    expect(contactPhone).toHaveTextContent(/please do not call us/i)
  })

  test("Footer displays copyright text", () => {
    render(<Footer />)

    const copyright = screen.getByTestId("copyright")

    expect(copyright).toHaveTextContent(/copyright/i)
  })

  test("Footer displays mailto link", () => {
    render(<Footer />)

    const mailto = screen.getByRole("link")

    expect(mailto).toHaveTextContent(/no@cheating.com/i)
  })
})