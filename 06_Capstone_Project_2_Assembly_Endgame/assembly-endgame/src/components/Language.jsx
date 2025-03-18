import { clsx } from "clsx";
import './css/Language.css'
export default function Language(props) {
  const { name, bgc, color, isEliminate } = props;
  return (
    <div
      className={clsx({ ['language-item-eliminate']: isEliminate })}
      style={{
        backgroundColor: bgc,
        color: color,
        borderRadius: "3px",
        padding: "6px"
      }}
    >
      {name}
    </div>
  )
}