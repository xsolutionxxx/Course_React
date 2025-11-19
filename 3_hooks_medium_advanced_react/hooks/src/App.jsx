import { Component, useState, useEffect, useCallback, useMemo } from "react";
import { Container } from "react-bootstrap";
import FormRef from "./FormRef";
import OwnHooks from "./OwnHooks";
import Memo from "./Memo";
import "./App.css";

const countTotal = (num) => {
  console.log("counting...");
  return num + 10;
};

/* const getSomeImages = () => {
  console.log("fetching");
  return [
    "https://png.pngtree.com/thumb_back/fw800/background/20230518/pngtree-one-of-the-waterfalls-in-iceland-with-a-dark-cloudy-setting-image_2584805.jpg",
    "https://img.freepik.com/fotos-premium/islandia-nascer-do-sol-foto-livre-fundo-hd_915071-95366.jpg",
  ];
}; */

/* class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: false,
      slide: 0,
    };
  }

  componentDidMount = () => {
    document.title = `Slide: ${this.state.slide}`
  }

  componentDidUpdate = () => {
    document.title = `Slide: ${this.state.slide}`
  }

  changeSlide = (i) => {
    this.setState(({ slide }) => ({
      slide: slide + i,
    }));
  };

  toggleAutoplay = () => {
    this.setState(({ autoplay }) => ({
      autoplay: !autoplay,
    }));
  };

  render() {
    return (
      <Container>
        <div className="slider w-50 m-auto">
          <img
            className="d-block w-100"
            src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            alt="slide"
          />
          <div className="text-center mt-5">
            Active slide {this.state.slide} <br />{" "}
            {this.state.autoplay ? "auto" : null}
          </div>
          <div className="buttons mt-3">
            <button
              className="btn btn-primary me-2"
              onClick={() => this.changeSlide(-1)}
            >
              -1
            </button>
            <button
              className="btn btn-primary me-2"
              onClick={() => this.changeSlide(1)}
            >
              +1
            </button>
            <button
              className="btn btn-primary me-2"
              onClick={this.toggleAutoplay}
            >
              toggle autoplay
            </button>
          </div>
        </div>
      </Container>
    );
  }
} */

const clacValue = () => {
  console.log("random");

  return Math.floor(Math.random() * (50 - 1) + 1);
};

const Slider = () => {
  /* const slideStateArray = useState();
  console.log(slideStateArray); */

  const [slide, setSlide] = useState(clacValue());
  const [autoplay, setAutoplay] = useState(false);
  /* const [state, setState] = useState({ slide: 0, autoplay: false }); */

  const getSomeImages = useCallback(() => {
    console.log("fetching");
    return [
      "https://png.pngtree.com/thumb_back/fw800/background/20230518/pngtree-one-of-the-waterfalls-in-iceland-with-a-dark-cloudy-setting-image_2584805.jpg",
      "https://img.freepik.com/fotos-premium/islandia-nascer-do-sol-foto-livre-fundo-hd_915071-95366.jpg",
    ];
  }, []);

  function logging() {
    console.log("log!");
  }

  useEffect(() => {
    console.log("effect");
    document.title = `Slide: ${slide}`;

    window.addEventListener("click", logging);

    return () => {
      window.removeEventListener("click", logging);
    };
  }, [slide]);

  useEffect(() => {
    console.log("autoplay");
  }, [autoplay]);

  function changeSlide(i) {
    setSlide((slide) => slide + i);
    /* setSlide((slide) => slide + i);
    setSlide(slide + i);
    setSlide(slide + i); */
  }

  function toggleAutoplay() {
    setAutoplay((autoplay) => !autoplay);
  }

  /* function changeSlide(i) {
    setState((state) => ({ ...state, slide: state.slide + i }));
  }

  function toggleAutoplay() {
    setState((state) => ({ ...state, autoplay: !state.autoplay }));
  } */

  const total = useMemo(() => {
    return countTotal(slide);
  }, [slide]);

  /* const style = {
    color: slide > 4 ? "red" : "black",
  }; */

  const style = useMemo(
    () => ({
      color: slide > 4 ? "red" : "black",
    }),
    [slide]
  );

  useEffect(() => {
    console.log("styles!");
  }, [style]);

  return (
    <Container>
      <div className="slider w-50 m-auto">
        {/* <img
          className="d-block w-100"
          src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
          alt="slide"
        /> */}

        {/* {getSomeImages().map((url, i) => {
          return (
            <img key={i} className="d-block w-100" src={url} alt="slide" />
          );
        })} */}

        <Slide getSomeImages={getSomeImages} />

        <div className="text-center mt-5">
          Active slide {slide} <br /> {autoplay ? "auto" : null}
        </div>
        <div style={style} className="text-center mt-5">
          Total slides: {total}
        </div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(-1)}
          >
            -1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(1)}
          >
            +1
          </button>
          <button className="btn btn-primary me-2" onClick={toggleAutoplay}>
            toggle autoplay
          </button>
        </div>
      </div>
    </Container>
  );
};

const Slide = ({ getSomeImages }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(getSomeImages());
  }, [getSomeImages]);

  return (
    <>
      {images.map((url, i) => (
        <img key={i} className="d-block w-100" src={url} alt="slide" />
      ))}
    </>
  );
};

function App() {
  /* const [slider, setSlider] = useState(true); */
  const [data, setData] = useState({
    mail: {
      name: "name@example.com",
    },
    text: "some text",
  });

  const onLog = useCallback(() => {
    console.log("wow");
  }, []);

  return (
    <>
      {/* <button onClick={() => setSlider(false)}>Click</button>
      {slider ? <Slider /> : null}
      <FormRef />
      <OwnHooks /> */}
      <Memo mail={data.mail} text={data.text} onLog={onLog} />
      <button
        onClick={() =>
          setData({
            mail: {
              name: "name@example.com",
            },
            text: "some text",
          })
        }
      >
        Click me
      </button>
    </>
  );
}

export default App;
