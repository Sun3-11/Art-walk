import { pageLinks, socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";
import { Zoom, Fade } from "react-reveal";

const Footer = () => {
  return (
    <Fade>
      <footer className="section footer">
        <PageLinks parentClass="footer-links" itemClass="footer-link" />
        <ul className="footer-icons">
          {socialLinks.map((link) => {
            return (
              <SocialLink key={link.id} {...link} itemClass="footer-icon" />
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; ArtWalk Art Company
          <span id="date">{new Date().getFullYear()}</span>. all rights reserved
        </p>
      </footer>
    </Fade>
  );
};
export default Footer;
