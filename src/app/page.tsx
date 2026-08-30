'use client'
import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Information from "@/components/Information";
import Quiz from "@/components/Quiz";
import Score from "@/components/Score";
import { quizQuestions } from "@/data/quizQuestions";

export default function Home() {
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [score, setScore] = useState(0)

  const totalQuestions = quizQuestions.length
  const currentQuestion = quizQuestions[currentQuestionIndex]

  const startQuiz = () => {
    setQuizStarted(true)
  }

  const handleAnswerSelect = (answer: string) => {
    if (selectedAnswer !== null) {
      return
    }
    setSelectedAnswer(answer)

    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
    setSelectedAnswer(null)
  }

  const restartQuiz = () => {
    setQuizStarted(false)
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setScore(0)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {!quizStarted && (
          <Information startQuiz={startQuiz} /> 
        )}

        {quizStarted && currentQuestionIndex < totalQuestions && (
          <Quiz 
            handleAnswerSelect={handleAnswerSelect}
              handleNextQuestion={handleNextQuestion}
              score={score}
              totalQuestions={totalQuestions}
              currentQuestion={currentQuestion}
              currentQuestionIndex={currentQuestionIndex}
              selectedAnswer={selectedAnswer}
          />
        )}

        {quizStarted && currentQuestionIndex === totalQuestions && (
          <Score 
            restartQuiz={restartQuiz}
            score={score}
            totalQuestions={totalQuestions}
          />
        )}
      </main>
      <Footer />
    </div>
  )
}
