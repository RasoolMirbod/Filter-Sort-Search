import React, { Component } from "react";
class ClassRef extends Component {
  state = {};
  //   createRef()
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    // console.log(this.inputRef);
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        <input type="tex" ref={this.inputRef} />
      </div>
    );
  }
}

export default ClassRef;
