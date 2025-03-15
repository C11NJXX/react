import avatar from "./icons/user.png"

export default function Header(props) {
    const { userName } = props;
    return (
        <header>
            <img src={avatar} />
            <p>{userName}</p>
        </header>
    )
}
