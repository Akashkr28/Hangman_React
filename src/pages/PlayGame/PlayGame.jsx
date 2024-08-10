import { Link, useLocation } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
import LetterButtons from "../../components/LetterButtons/LetterButtons";
import { useState } from "react";

function PlayGame() {

    const [usedLetters, setUsedLetters] = useState([]);

    const location = useLocation();
    const wordsSelected = location.state?.wordsSelected; //If the state is not defined, it will return undefined, otherwise it will return the value of wordSelected

    const handleLetterClick = function(letter) {
        setUsedLetters([...usedLetters, letter]);
    }

    return (
        <div>
            <h1>Play Game</h1>
            <MaskedText text={wordsSelected} usedLetters={usedLetters}/>
            <hr/>

            <LetterButtons text={wordsSelected} usedLetters={usedLetters} onLetterClick={handleLetterClick}/>
            <hr/>

            <Link to='/start' className="text-blue-600 underline hover:text-blue-700">Start Game</Link>
        </div>
    )
}
export default PlayGame;