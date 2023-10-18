// Create Header component
class HeaderPage extends React.Component {
    render() {
        return <h1>This is header 111</h1>;
    }
}

// Create Content component
class ContentPage extends React.Component {
    render() {
        return <h1>This is content 111</h1>;
    }
}

// Create Footer component
class FooterPage extends React.Component {
    render() {
        return <h1>This is footer 111</h1>;
    }
}

// Main WebPage
class App extends React.Component {
    render() {
        return (
            <div>
                <HeaderPage />
                <ContentPage />
                <FooterPage />
            </div>
        );
    }
}

// Render the main App component to the DOM
ReactDOM.render(<App />, document.getElementById("app"));
