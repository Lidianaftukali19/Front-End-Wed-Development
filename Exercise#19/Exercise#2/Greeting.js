// welcome
function UserGreetinga(props) {
    return <h1>Welcome back!</h1>;
}

//sign in
function GuestGreeting(props) {
    return<h1>Please sign up.</h1>
}

//choose Greetings
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLonggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting />;
}