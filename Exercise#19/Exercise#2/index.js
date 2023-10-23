// handle login class
class loginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLoginClick.bind(this);
        this.state = {isLoggedIn: false}; // private data
        
    }
    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }
    handleLoginClick() {
        this.setState({isLoggedIn: false});
}

render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
        button =<loginButton onClick={this.handleLoginClick} />
    }
    return (
        <div>
            <greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    );
}

}

// render komponen ke realDOM
reactDom.render(<LoginControl/>, document.getElementById("app"));