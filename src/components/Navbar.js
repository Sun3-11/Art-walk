import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";
import { Zoom, Fade, Flip, Rotate, Bounce, Roll } from "react-reveal";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Flip>
            <img
              style={{ width: "8rem" }}
              src={logo}
              className="nav-logo"
              alt="backroads"
            />
          </Flip>
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}

        <PageLinks parentClass="nav-links" itemClass="nav-link" />

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return <SocialLink {...link} key={link.id} itemClass="nav-icon" />;
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
