import { render, screen, fireEvent } from "@testing-library/react"
import Information from "@/components/Information"

describe("Information displays correct information ", () => {
  test("that there is only one h1 on the page", () => {
    const handleOnClick = jest.fn();
    render(<Information startQuiz={handleOnClick} />)

    const pageTitle = screen.getByRole("heading", { level: 1 })

    expect(pageTitle).toBeInTheDocument()
  })

  test("That the Information page renders with an h1 and specific text", () => {
    const handleOnClick = jest.fn();
    render(<Information startQuiz={handleOnClick} />)

    const pageTitle = screen.getByRole("heading", { level: 1, "name": /name that bird/i })

    expect(pageTitle).toBeInTheDocument()
  })

  test("the paragraph information renders correctly", () => {
    const handleOnClick = jest.fn();
    render(<Information startQuiz={handleOnClick} />)

    const paragraph = screen.getByRole("paragraph")

    expect(paragraph).toHaveTextContent(/In the API assignment/i)
  })

  test("Start button is clickable", () => {
    const handleOnClick = jest.fn();

    const { getByTestId } = render(<Information startQuiz={handleOnClick} />);
    const startQuizButton = getByTestId("start-quiz");

    fireEvent.click(startQuizButton);

    expect(handleOnClick).toHaveBeenCalled();
  });
})