import "./Counter.css";

function Counter({ counter, inc, dec, rnd }) {
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

export default Counter;
