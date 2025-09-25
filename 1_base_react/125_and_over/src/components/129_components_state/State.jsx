import { Component } from "react";

class WhoAmI129 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: "add +",
    };
  }

  nextYear = () => {
    this.setState((state) => ({
      /* years: ++this.state.years, */
      /* years: this.state.years + 1, */
      years: state.years + 1,
    }));
  };

  render() {
    const { name, surname, link } = this.props;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h2>
          My name is {name}, surname - {surname}, age - {this.state.years}
        </h2>
        <a href={link}>My profile</a>
      </div>
    );
  }
}

export default WhoAmI129;
