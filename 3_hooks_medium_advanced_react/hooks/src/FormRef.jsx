import { useRef, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./App.css";

const FormRef = () => {
  const [text, setText] = useState("");

  const myRef = useRef(1);
  /* const myRef = useRef(null);

  const focusFirstTI = () => {
    myRef.current.focus();
  }; */

  /* useEffect(() => {
    myRef.current++;
    console.log(myRef.current);
  }); */

  useEffect(() => {
    myRef.current = text;
  });

  return (
    <Container>
      <form className="w-50 border mt-5 p-3 m-auto">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => setText(e.target.value)}
            /* ref={myRef} */
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            /* onClick={focusFirstTI} */
            value={myRef.current}
            onClick={() => myRef.current++}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
    </Container>
  );
};

export default FormRef;
