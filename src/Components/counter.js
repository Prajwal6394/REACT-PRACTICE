import React, { Component } from "react";

class counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  func() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => console.log("this is the callback value", this.state.count)
    // );

    this.setState()
    console.log(this.state.count);
  }

  Icefun(){
      this.func()
      this.func()
      this.func()
      this.func()
  }
  render() {
    return (
      <div>
        <h1>Count - {this.state.count}</h1>
        <button onClick={() => this.Icefun()}>On Click</button>
      </div>
    );
  }
}

export default counter;
