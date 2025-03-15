export default function Pad({ id, color, on, toggle }) {
    return (
        <button
            style={{
                backgroundColor: color
            }}
            className={on ? 'on' : undefined}
            onClick={() => {
                toggle(id)
            }}>
        </button>
    )
}
