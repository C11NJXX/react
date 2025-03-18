export default function Language(props) {
  const { name, bgc, color } = props;
  return (
    <div style={{
      backgroundColor: bgc,
      color: color,
      borderRadius: "3px",
      padding:"6px"
    }}>
      {name}
    </div>
  )
}