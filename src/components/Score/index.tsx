type ScoreProps = {
  restartQuiz: () => void
  score: number
  totalQuestions: number
}

const Score = ({ restartQuiz, score, totalQuestions }: ScoreProps) => {
  let passengerType = ""

  if (score === 5) {
    passengerType = "Dream passenger"
  } else if (score >= 3) {
    passengerType = "Frequent flyer"
  } else if (score >= 1) {
    passengerType = "Needs improvement"
  } else {
    passengerType = "Cabin crew nightmare"
  }
  return (
    <section className="flex flex-1 items-center justify-center px-4 py-10 sm:px-6">
      <div className="w-full max-w-2xl text-left">
        <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
          Quiz complete!
        </h2>

        <p className="mt-6 sm:text-lg">
          Your score is{" "}
          <span data-testid="score" className="font-semibold">{score}</span>
          {" "}out of{" "}
          <span data-testid="total-questions" className="font-semibold">{totalQuestions}</span>
        </p>

		<h3 className="mt-6 text-2xl font-semibold">
          You are a:  {passengerType}!
        </h3>

        <button
          data-testid="restart-quiz"
          onClick={restartQuiz}
          className="mt-8 rounded bg-amber-400 px-6 py-3 text-base font-semibold transition hover:cursor-pointer hover:bg-amber-600 sm:px-8 sm:py-4 sm:text-lg"
        >
          Play again
        </button>
      </div>
    </section>
  )
}

export default Score