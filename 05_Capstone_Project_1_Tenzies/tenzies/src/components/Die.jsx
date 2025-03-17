import './css/Die.css'
export default function Die(props) {
  const { value, isHeld, hold } = props;

  return (
    <button className='die'
      style={{ backgroundColor: isHeld ? "#59E391" : "white" }}
      onClick={hold}
      aria-pressed={isHeld}
      aria-label={`Die with value ${value}, 
            ${isHeld ? "held" : "not held"}`}>
      {value}
    </button>
  )
}
