import './css/Die.css'
export default function Die(props) {
  const { value, isHeld, setDies } = props;
  
  return (
    <button className='die' style={{ backgroundColor: isHeld ? "#59E391" : "white" }}>
      {value}
    </button>
  )
}
