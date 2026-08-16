import { render, screen, fireEvent } from "@testing-library/react"
import Score from "@/components/Score"

describe("Score works as intended", () => {
  test("Score contains a h2 with specific text regarding completing the quiz", () => {
    const handleOnClick = jest.fn();
    const score = 0
    const totalQuestions = 0
    render(<Score restartQuiz={handleOnClick} score={score} totalQuestions={totalQuestions} />)

    const completionTitle = screen.getByRole("heading", { level: 2, "name": /complete/i })

    expect(completionTitle).toBeInTheDocument()
  })

  test("Restart button is clickable", () => {
    const handleOnClick = jest.fn();
    const score = 0
    const totalQuestions = 0

    const { getByTestId } = render(<Score restartQuiz={handleOnClick} score={score} totalQuestions={totalQuestions} />);
    const restartQuizButton = getByTestId("restart-quiz");

    fireEvent.click(restartQuizButton);

    expect(handleOnClick).toHaveBeenCalled();
  });

  test.each([1, 3, 5])("Score shows value passed from props", (score) => {
    const handleOnClick = jest.fn();
    const totalQuestions = 0

    const { getByTestId } = render(<Score restartQuiz={handleOnClick} score={score} totalQuestions={totalQuestions} />)
    const scoreText = getByTestId("score");

    expect(scoreText).toHaveTextContent(score.toString())
  })

  test.each([1, 3, 5])("Total questions shows value passed from props", (totalQuestions) => {
    const handleOnClick = jest.fn();
    const score = 0

    const { getByTestId } = render(<Score restartQuiz={handleOnClick} score={score} totalQuestions={totalQuestions} />)
    const totalQuestionsText = getByTestId("total-questions");

    expect(totalQuestionsText).toHaveTextContent(totalQuestions.toString())
  })
})