import React from "react";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '0',
            num1: '',
            num2: ''
        };

        this.updateNum1 = this.updateNum1.bind(this);
        this.updateNum2 = this.updateNum2.bind(this);
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.multiply = this.multiply.bind(this);
        this.divide = this.divide.bind(this);
    }

    updateNum1 = (event) =>{ 
        event.preventDefault();
        this.setState({ num1: event.currentTarget.value });
    }
    updateNum2 = (event) => {
        event.preventDefault();
        this.setState({ num2: event.currentTarget.value });
    }
    add = _ => {
        event.preventDefault();
        this.state.result = this.state.num1 + this.state.num2;
        this.setState({ result: this.state.result });
    }
    subtract = _ => {
        event.preventDefault();
        this.state.result = this.state.num1 - this.state.num2;
        this.setState({ result: this.state.result });
    }
    multiply = _ => {
        event.preventDefault();
        this.state.result = this.state.num1 * this.state.num2;
        this.setState({ result: this.state.result });
    }
    divide = _ => {
        event.preventDefault();
        this.state.result = this.state.num1 / this.state.num2;
        this.setState({ result: this.state.result });
    }
    clear = _ =>{
        event.preventDefault();
        this.setState({
            result: '0',
            num1: '',
            num2: ''
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.result}</h1> 
                <input onChange={this.updateNum1} value={this.state.num1}/>
                <input onChange={this.updateNum2} value={this.state.num2}/>
                <button className="clear" onClick={this.clear}>Clear</button>
                <br></br>
                <button className="add-btn" onClick={this.add}>+</button>
                <button className="subtract-btn" onClick={this.subtract}>-</button>
                <button className="multiply-btn" onClick={this.multiply}>*</button>
                <button className="divide-btn" onClick={this.divide}>/</button>
            </div>
        );
    }
}

export default Calculator;

