import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from "../assets/logos/html.png";
import css from "../assets/logos/css.png";
import javascript from "../assets/logos/javascript.png";
import react from "../assets/logos/react.png";
import redux from "../assets/logos/redux.png";
import tailwind from "../assets/logos/tailwind.png";
import bootstrap from "../assets/logos/bootstrap.png";
import mui from "../assets/logos/mui.png";
import node from "../assets/logos/nodejs.png";
import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Leveraged a dynamic skill set to excel in the modern tools &
                frameworks, demonstrating a proven track record in software
                development. Showcased innovative achievements, technical
                prowess, and a passion for ongoing professional growth.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="Image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={redux} alt="Image" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={node} alt="Image" />
                  <h5>Node JS</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={mui} alt="Image" />
                  <h5>Material UI</h5>
                </div>
                <div className="item">
                  <img src={tailwind} alt="Image" />
                  <h5>Tailwind CSS</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
export default Skills;
