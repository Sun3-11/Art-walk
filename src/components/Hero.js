import { Zoom, Fade, Flip, Rotate, Bounce, Roll } from "react-reveal";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <Rotate>
          <h1>art walk</h1>
        </Rotate>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          explicabo debitis est autem dicta.
        </p>
        <a href="#arts" className="btn hero-btn ">
          explore arts
        </a>
      </div>
    </section>
  );
};
export default Hero;
