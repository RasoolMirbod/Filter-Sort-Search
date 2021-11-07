import React, { Component } from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import RegComp from "./RegComp";
class ParentCom extends Component {
  state = {
    name: "Rasool",
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Rasool" });
    }, 1000);
  }
  render() {
    console.log("parrent Comp -----------------------------");
    return (
      <div>
        parent component
        <RegComp name={this.state.name} />
        {/* <PureComp name={this.state.name} /> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentCom;
