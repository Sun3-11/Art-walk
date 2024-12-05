import { Zoom, Fade, Flip, Rotate, Bounce, Roll } from "react-reveal";

const Title = ({ title, subTitle }) => {
  return (
    <div className="section-title">
      <h2>
        {title}
        <Bounce>
          <span>{subTitle}</span>
        </Bounce>
      </h2>
    </div>
  );
};
export default Title;
