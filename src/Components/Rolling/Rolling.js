import React, { Component } from "react";
import "./Rolling.css";

class Rolling extends Component {
  constructor(props) {
    super(props);
    this.state = { rollingOrNot: false, current: "Roll Dice" };
  }

  rollingOrNot = () => {
    this.setState({ rollingOrNot: true, current: "Rolling..." });
    this.interval = setTimeout(() => {
      this.setState({ rollingOrNot: false, current: "Roll Dice" });
    }, 1000);
  };

  render() {
    return (
      <div className="center">
        <button
          disabled={this.state.rollingOrNot}
          className={`buttonStyle ${this.state.rollingOrNot ? "shaking" : ""}`}
          onClick={() => {
            this.props.click();
            this.rollingOrNot();
          }}
        >
          {this.state.current}
        </button>
      </div>
    );
  }
}

export default Rolling;
