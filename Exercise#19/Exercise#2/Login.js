// creating button login
function LoginButton(props) {
    return (
        <buton onClick={props.onClick}>
            Login
        </buton>
    );
}

// creating button logout
function LogoutButton(Props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}