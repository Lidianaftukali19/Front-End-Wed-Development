import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    constructor() {
        super();
        // Create the state object
        this.state = {
            angka1: "0",
            angka2: "0",
            result: "0"
        };
    }
    
    // Set values
    setVal1 = (val1) => {
        this.setState({ angka1: "" + val1 });
    }

    setVal2 = (val2) => {
        this.setState({ angka2: "" + val2 });
    }

    // Arithmetic operations
    funcMultiply = () => {
        let hasil = parseInt(this.state.angka1) * parseInt(this.state.angka2);
        this.setState({ result: "" + hasil });
    }

    funcDivide = () => {
        let hasil = parseInt(this.state.angka1) / parseInt(this.state.angka2);
        this.setState({ result: "" + hasil });
    }

    funcSubtract = () => {
        let hasil = parseInt(this.state.angka1) - parseInt(this.state.angka2);
        this.setState({ result: "" + hasil });
    }

    funcAdd = () => {
        let hasil = parseInt(this.state.angka1) + parseInt(this.state.angka2);
        this.setState({ result: "" + hasil });
    }

    render() {
        return (
            <div>
                <h1>Simple Calculator ReactJs</h1>
                Input 1: <input value={this.state.angka1} onChange={(e) => this.setVal1(e.target.value)} /> <br />
                Input 2: <input value={this.state.angka2} onChange={(e) => this.setVal2(e.target.value)} /> 
                <h1>Result: {this.state.result}</h1>
                <button onClick={this.funcMultiply}>Multiply</button>
                <button onClick={this.funcDivide}>Division</button>
                <button onClick={this.funcSubtract}>Subtract</button>
                <button onClick={this.funcAdd}>Addition</button>
            </div>
        );
    }
}

// Render the component to the RealDOM
ReactDOM.render(<Header />, document.getElementById("app"));
