import { useState } from "react";

//Images
import Sparkles from "../Images/Sparkles.svg";
import TheSimpsons from "../Images/Logos/the-simpsons.svg";
import Futurama from "../Images/Logos/futurama.svg";
import RiykAndMorty from "../Images/Logos/rick-and-morty.svg";
import FamiliyGuy from "../Images/Logos/family-guy.svg";
import GameOfTrones from "../Images/Logos/game-of-thrones.svg";
import HarryPotter from "../Images/Logos/harry-potter.svg";

export default function Quiz() {
  // Date Management
  // Api state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Quiz Management
  const [questions, setQuestions] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
 
  function selectQuiz(choise) {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.edu.skuflic.com/${choise}");
        const result = response.json();
        setQuestions(result);
      } catch {
        setError(error);
      } finally {
        setSelectedQuiz(choise);
        setLoading(false);
      }
    };
    fetchData();
  }

  function answereClick(chosenAnswer, correctAnswer) {
    if(chosenAnswer === correctAnswer) {
        setScore(score + 1);
        alert('Correct');
    } else {
        alert('Wrong');
    }

    setCurrentQuestion(currentQuestion + 1);

  }

  return (
    <div>
      {!selectedQuiz && (
        <div className="info">
          <p>Select your quiz to get started!</p>
          <div className="general-section quiz-selection">
            <button onClick={() => selectQuiz("the-simpsons")}>
              <img src={TheSimpsons} alt="The Simpsons" className="logo" />
            </button>
            <button>
              <img src={FamiliyGuy} alt="Family Guy" className="logo" />
            </button>
          </div>
        </div>
      )}
      {error && (
        <div className="info">
          <h1>That is error</h1>
          <p>Error description: {error.message}</p>
        </div>
      )}
      {loading && selectedQuiz && (
        <div className="info">
          <h1>Loading.....</h1>
          <p>Please wait while we load your guiz</p>
        </div>
      )}

      <div className="app">
        <div className="question-section">
            <div className="question-text">
                <span>{questions[currentQuestion]?.question}</span>
                <span className="question-count">Question {currentQuestion + 1} / {questions?.lenght}</span>
            </div>
        </div>
        <div className="general-section">
            {questions[currentQuestion]?.possibleAnswears.map((answer) => (
                <button key={crypto.randomUUID()}>{answer}</button>
            ))}
            
        </div>
      </div>

    </div>
  );
}
