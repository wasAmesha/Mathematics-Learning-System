import "../styles/QuizHome.css";
import Menu from "../components/MainMenu";
import Quiz from "../components/Quiz";
import EndScreen from "../components/EndScreen";
import { useState } from "react";
import { GameStateContext } from "../helpers/Contexts";
// ['menu', 'playing', 'finished']

function QuizHome() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="quizHome">
      <h1>Quiz</h1>
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  );
}

export default QuizHome;