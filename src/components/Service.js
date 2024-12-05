import { Zoom, Fade, Flip, Rotate, Bounce, Roll } from "react-reveal";

const Service = ({ icon, title, text }) => {
  return (
    <Fade>
      <article className="service">
        <span className="service-icon">
          <i className={icon}></i>
        </span>
        <div className="service-info">
          <h4 className="service-title">{title}</h4>
          <p className="service-text">{text}</p>
        </div>
      </article>
    </Fade>
  );
};
export default Service;
