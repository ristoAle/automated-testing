import { Question } from "@/types/questions";

type quizProps = {
    handleAnswerSelect: (answer: string) => void
    handleNextQuestion: () => void
    score: number
    totalQuestions: number
    currentQuestion: Question
    currentQuestionIndex: number
    selectedAnswer: string | null
}

const Quiz = ({
    handleAnswerSelect,
    handleNextQuestion,
    score,
    totalQuestions,
    currentQuestion,
    currentQuestionIndex,
    selectedAnswer
}: quizProps) => {

    return (
        <section className="px-4 py-10 sm:px-6">
            <div className="mx-auto max-w-2xl">
                <img
                    src={currentQuestion.imageUrl}
                    alt="Quiz question"
                    className="w-full rounded-xl"
                />

                <h2 className="mt-6 text-xl font-semibold sm:text-2xl">
                    {currentQuestion.question}
                </h2>
                
                <div className="mt-4 flex justify-between">
                    <p> Question {currentQuestionIndex + 1} of {totalQuestions}</p>
                    <p>Score: {score}</p>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                    {currentQuestion.options.map((option, index) => {
                        let buttonStyle =
                            "rounded border p-3 text-left hover:cursor-pointer"

                        if (selectedAnswer !== null) {
                            if (option === currentQuestion.correctAnswer) {
                                buttonStyle = "rounded border p-3 text-left text-green-800"
                            }
                        }
                        
                        if (
                            selectedAnswer === option &&
                            option !== currentQuestion.correctAnswer
                        ) {
                            buttonStyle =
                                "rounded border p-3 text-left text-red-800"
                        }

                        return (
                            <button
                                key={index}
                                data-testid="quiz-button"
                                onClick={() => handleAnswerSelect(option)}
                                className={buttonStyle}
                            >
                                {option}
                            </button>
                        )
                    })}
                </div>
                {selectedAnswer && (
                    <button
                        data-testid="next-question"
                        onClick={handleNextQuestion}
                        className="mt-6 rounded bg-amber-400 px-6 py-3 font-semibold hover:cursor-pointer hover:bg-amber-600"
                    >
                        {currentQuestionIndex === totalQuestions - 1
                            ? "See results"
                            : "Next question"
                        }
                    </button>
                )}
            </div>
        </section>
    )
}

export default Quiz