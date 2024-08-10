const ALPHABETS = new Array(26).fill('').map((e, index) => String.fromCharCode(65 + index)); // We will get all the Alphabets

function LetterButtons(){

    const buttons = ALPHABETS.map(letter => {
        return (
            <button key={`button-${letter}`} className={`h-12 w-12 m-1 rounded-md focus:outline-none text-white bg-blue-600 border-blue-700 hover:bg-blue-700`}>
                {letter}
            </button>
        );
    })

    return (
        <>
            {buttons}
        </>
    )
}

export default LetterButtons;