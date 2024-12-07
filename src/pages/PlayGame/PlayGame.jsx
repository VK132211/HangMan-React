import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
import LetterButtons from "../../components/LetterButtons/LetterButtons";
import HangMan from "../../components/HangMan/HangMan";
function PlayGame() {
  const [usedLetters, setUsedLetters] = useState([]);
  const [step, setStep] = useState(0);
  const [gameStatus, setGameStatus] = useState(null);
  const maxSteps = 7;

  const location = useLocation();
  const wordSelected = location.state?.wordSelected;

  useEffect(() => {
    if (step > maxSteps) {
      setGameStatus("lose");
    } else if (
      wordSelected &&
      wordSelected
        .toUpperCase()
        .split("")
        .every((letter) => usedLetters.includes(letter))
    ) {
      setGameStatus("win");
    }
  }, [step, usedLetters, wordSelected]);

  const handleLetterClick = function (letter) {
    if (wordSelected.toUpperCase().includes(letter)) {
      console.log("Correct");
    } else {
      console.log("InCorrect");
      setStep(step + 1);
    }
    setUsedLetters([...usedLetters, letter]);
  };

  return (
    <div>
      <h1>Play Game</h1>

      {gameStatus === "win" ? (
        <div className="text-green-500 text-2xl">🎉 Congratulations! You guessed the word! 🎉</div>
      ) : gameStatus === "lose" ? (
        <div className="text-red-500 text-2xl">💀 Game Over! The word was "{wordSelected}". 💀</div>
      ) : (
        <>
          <MaskedText text={wordSelected} usedLetters={usedLetters} />
          <hr />
          <div className="flex justify-between items-center">
            <div className="basis-2/4">
              <LetterButtons text={wordSelected} usedLetters={usedLetters} onLetterClick={handleLetterClick} />
            </div>
            <div className="basis-2/4 flex justify-center items-center">
              <HangMan step={step} />
            </div>
          </div>
        </>
      )}

      <hr />
      <Link to="/start" className="text-blue-600 underline hover:text-blue-700">
        Start Game
      </Link>
    </div>
  );
}
export default PlayGame;
