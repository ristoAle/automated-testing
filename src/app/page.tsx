'use client'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Information from "@/components/Information";

export default function Home() {
  const startQuiz = () => {
    console.log("Quiz started")
  }
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Information startQuiz={startQuiz} />
      </main>
      <Footer />
    </div>
  );
}
