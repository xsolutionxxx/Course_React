import React, { Component } from "react";
import Form from "./Ref_Form";

const DynamicGreating = (props) => {
  return (
    <>
      <div style={{ margin: "23px", border: `1px solid ${props.color}` }}>
        {React.Children.map(props.children, (child) => {
          return React.cloneElement(child, {
            style: { color: "yellow", border: "5px solid blue" },
          });
        })}
      </div>
    </>
  );
};

// спеціалізація, композиція
const HelloGreating = () => {
  return (
    <div style={{ width: 600, margin: "0 auto" }}>
      <DynamicGreating color={"red"}>
        <h2>adac2 9- -14u-95 </h2>
      </DynamicGreating>
    </div>
  );
};

const Message = (props) => {
  return <h2>The counter is {props.counter}</h2>;
};

class Counter extends Component {
  state = {
    counter: 0,
  };

  changeCounter = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  };

  render() {
    return (
      <>
        <button
          style={{ backgroundColor: "gray", color: "white" }}
          onClick={this.changeCounter}
        >
          Click me!
        </button>
        {this.props.render(this.state.counter)}
        {/* <Message counter={this.state.counter} /> */}
      </>
    );
  }
}

function App() {
  return (
    <>
      <Form />

      <Counter render={(counter) => <Message counter={counter} />} />

      <HelloGreating />
      <DynamicGreating color={"red"}>
        <h2>asasdasd</h2>
        <h2>adac2 9- -14u-95 </h2>
      </DynamicGreating>
    </>
  );
}

export default App;
