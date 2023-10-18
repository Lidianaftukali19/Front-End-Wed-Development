"use strict";

class MainComponents extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <strong>Display Components:</strong><br />
                <Component1 /><br />
                <Component2 /><br />
                <Component3 /><br />
                <Component4 /><br />
                <Component5 />
            </div>
        );
    }
}

// This should be outside the class
ReactDOM.render(<MainComponents />, document.getElementById("root-react"));
