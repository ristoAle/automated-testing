type InformationProps = {
  startQuiz: () => void
}

const Information = ({ startQuiz }: InformationProps) => {
  return (
    <section className="flex flex-1 items-center justify-center px-4 py-10 sm:px-6">
      <div className="w-full max-w-2xl text-left">
        <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
          Name that bird? Not this time!
        </h1>

        <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg">
          In the API assignment, it was all about birds. This time,
          we're taking the quiz to 30,000 feet! Test yourself with five
          everyday airplane situations and find out what kind of
          passenger you really are.
        </p>

        <button
          data-testid="start-quiz"
          onClick={startQuiz}
          className="mt-8 rounded bg-amber-400 px-6 py-3 text-base font-semibold transition hover:bg-amber-600 hover:cursor-pointer sm:px-8 sm:py-4 sm:text-lg"
        >
          Start the quiz
        </button>
      </div>
    </section>
  )
}

export default Information