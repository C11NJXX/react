import './css/Die.css'
export default function Die(props) {
  const { value, isHeld} = props;
  function held() {

  }
  return (
    <button className='die' onClick={held}>
      {value}
    </button>
  )
}
