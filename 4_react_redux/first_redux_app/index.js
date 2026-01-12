import { createStore, bindActionCreators } from "redux";
import reducer from "./src/reducer";
import * as actions from "./src/actions";

const store = createStore(reducer);

const { dispatch, getState } = store;

const update = () => {
  document.getElementById("counter").textContent = getState().value;
};

store.subscribe(update);

/* const bindActionCreator =
  (creator, dispatch) =>
  (...arg) => {
    dispatch(creator(...arg));
  };

const incDispatch = bindActionCreator(inc, dispatch);
const decDispatch = bindActionCreator(dec, dispatch);
const rndDispatch = bindActionCreator(rnd, dispatch); */

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

document.getElementById("inc").addEventListener("click", inc);
document.getElementById("dec").addEventListener("click", dec);
document.getElementById("rnd").addEventListener("click", () => {
  const value = Math.floor(Math.random() * 10);
  rnd(value);
});
