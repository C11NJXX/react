import './css/KeyBoard.css'
export default function KeyBoard(props) {

    const { addGuessedLetter } = props;

    const keyBoardLetters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    const keyBoardLettersArray = keyBoardLetters.split('');
    const keyBoardStyle = {
        width: '70px',
        height: '70px',
        borderRadius: '10px',
        padding: '6px',
        borderWidth: '1px',
        backgroundColor: '#FCBA29',
        border: '1px solid #D7D7D7',
        fontFamily: 'Hanken Grotesk',
        fontWeight: 600,
        fontSize: '30px',
        lineHeight: '100%',
        letterSpacing: '0%',
        textAlign: 'center'
    };
    const keyBoardElement = keyBoardLettersArray.map(letter => (
        <button
            key={letter}
            style={keyBoardStyle}
            onClick={() => {
                addGuessedLetter(letter);
            }}
        >
            {letter}
        </button >
    ));
    return (
        <section className="keyboard-container">
            {keyBoardElement}
        </section>
    )
}
