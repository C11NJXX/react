import starFilled from "../images/star-filled.png"
import starEmpty from "../images/star-empty.png"
export default function Star(props) {
    const { isFavorite, handleClick } = props;
    let starIcon = isFavorite ? starFilled : starEmpty

    return (
        <button
            onClick={handleClick}
            aria-pressed={isFavorite}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            className="favorite-button"
        >
            <img
                src={starIcon}
                alt={isFavorite ? "filled star icon" : "empty star icon"}
                className="favorite"
            />
        </button>
    )
}
