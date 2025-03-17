import './css/Die.css'
export default function Die(props) {
  const { value } = props;
  return (
      <button className='die'>
        {value}
      </button>
  )
}
