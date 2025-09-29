import { Component } from "react";

class WhoAmI131 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: "add +",
      position: "",
    };

    // this.nextYear = this.nextYear.bind(this),
    // this.nextYear - звичайна властивість, що буде в екземпляра класу
    // this.nextYear - далі звертаєося до цього методу в класі
    // .bind(this) - прив`язуємо до конкретного екземпляру класа
    // Простими словами - Екземпляр класу -> беремо цей метод з cправжнього твого класу -> і жорстко тобі його прив`язуємо, щоб ти ніколи не втрачав this
  }

  nextYear = () => {
    this.setState((state) => ({
      /* years: ++this.state.years, */
      /* years: this.state.years + 1, */
      years: state.years + 1,
    }));
  };

  commitInputChanges = (e, color) => {
    // console.log(e.target.value);
    console.log(color);
    this.setState({
      position: e.target.value,
    });
  };

  render() {
    const { name, surname, link } = this.props;
    const { years, text, position } = this.state;

    console.log(this);

    return (
      <div>
        <button onClick={this.nextYear}>{text}</button>
        <h2>
          My name is {name}, surname - {surname}, age - {years}, position -{" "}
          {position}
        </h2>
        <a href={link}>My profile</a>
        <form>
          <span>Your rate:</span>
          <input
            type="text"
            onChange={(e) => this.commitInputChanges(e, "some color")}
          />
        </form>
      </div>
    );
  }
}

export default WhoAmI131;
