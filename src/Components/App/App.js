import React, { Component } from "react";
import Die from "../Die/Die";
import "./App.css";
import Rolling from "../Rolling/Rolling";

class App extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };

  constructor(props) {
    super(props);
    this.state = { diceOne: "one", diceTwo: "one" };
  }

  roll = () => {
    let randOne = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    let randTwo = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    this.setState({ diceOne: randOne, diceTwo: randTwo });
  };

  render() {
    return (
      <div className="RollDice container">
        <div className="RollDice-container">
          <Die side={this.state.diceOne} />
          <Die side={this.state.diceTwo} />
        </div>
        <Rolling click={this.roll} />
      </div>
    );
  }
}

export default App;
