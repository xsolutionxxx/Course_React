import { Component } from "react";
/* import { connect } from "react-redux"; */
/* import * as actions from "../../actions"; */
import { inc, dec, rnd } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

import "./Counter.css";

function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <h1 className="title">Redux App. Counter</h1>

      <span id="counter">{counter}</span>

      <div className="btn-wrap">
        <button
          onClick={() => dispatch(inc())}
          id="inc"
          className="btn btn-inc"
        >
          INC
        </button>
        <button
          onClick={() => dispatch(dec())}
          id="dec"
          className="btn btn-dec"
        >
          DEC
        </button>
        <button
          onClick={() => dispatch(rnd())}
          id="rnd"
          className="btn btn-rnd"
        >
          RND
        </button>
      </div>
    </div>
  );
}

/* class Counter extends Component {
  render() {
    const { counter, inc, dec, rnd } = this.props;
    return (
      <div className="wrapper">
        <h1 className="title">Redux App. Counter</h1>

        <span id="counter">{counter}</span>

        <div className="btn-wrap">
          <button onClick={inc} id="inc" className="btn btn-inc">
            INC
          </button>
          <button onClick={dec} id="dec" className="btn btn-dec">
            DEC
          </button>
          <button onClick={rnd} id="rnd" className="btn btn-rnd">
            RND
          </button>
        </div>
      </div>
    );
  }
} */

/* const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
}; */

/* const mapDispatchToProps = (dispatch) => {
  const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

  return {
    inc: inc,
    dec: dec,
    rnd: () => {
      const value = Math.floor(Math.random() * 10);
      rnd(value);
    },
  };
}; 

export default connect(mapStateToProps, actions)(Counter); */
export default Counter;
