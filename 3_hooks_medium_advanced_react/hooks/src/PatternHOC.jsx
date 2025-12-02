import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./App.css";

const withSlider = (BaseComponent, getData) => {
  return (props) => {
    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    useEffect(() => {
      setSlide(getData());
    }, []);

    function changeSlide(i) {
      setSlide((slide) => slide + i);
    }

    return (
      <BaseComponent
        {...props}
        slide={slide}
        autoplay={autoplay}
        changeSlide={changeSlide}
        setAutoplay={setAutoplay}
      />
    );
  };
};

const getDataFromFirstFetch = () => {
  return 10;
};
const getDataFromSecondFetch = () => {
  return 20;
};

const SliderFirst = (props) => {
  return (
    <Container>
      <div className="slider w-50 m-auto">
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz273dfQAWjtwVQQnHM7PI6NM89kVMDRRFLw&s"
          alt="slide"
        />
        <div className="text-center mt-5">Active slide {props.slide}</div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => props.changeSlide(-1)}
          >
            -1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => props.changeSlide(1)}
          >
            +1
          </button>
        </div>
      </div>
    </Container>
  );
};

const SliderSecond = (props) => {
  return (
    <Container>
      <div className="slider w-50 m-auto">
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz273dfQAWjtwVQQnHM7PI6NM89kVMDRRFLw&s"
          alt="slide"
        />
        <div className="text-center mt-5">
          Active slide {props.slide} <br />
          {props.autoplay ? "auto" : null}{" "}
        </div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => props.changeSlide(-1)}
          >
            -1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => props.changeSlide(1)}
          >
            +1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => props.setAutoplay(() => !props.autoplay)}
          >
            toggle autoplay
          </button>
        </div>
      </div>
    </Container>
  );
};

const withLogger = (WrappedComponent) => (props) => {
  useEffect(() => {
    console.log("first render!");
  }, []);

  return <WrappedComponent {...props} />;
};

const Hello = () => {
  return <h1>Hello</h1>;
};

export const HelloWithLogger = withLogger(Hello);

export const SliderWithFirstFetch = withSlider(
  SliderFirst,
  getDataFromFirstFetch
);
export const SliderWithSecondFetch = withSlider(
  SliderSecond,
  getDataFromSecondFetch
);
