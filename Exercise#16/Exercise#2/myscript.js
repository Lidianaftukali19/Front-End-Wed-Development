"use strict";

// Assuming the components HeaderPage, ContentPage, and FooterPage are defined in their respective files

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
