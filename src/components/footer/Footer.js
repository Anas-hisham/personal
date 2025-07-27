import "./Footer.css";
import SocialMedia from "../common/social/SocialMedia"; // Correct import for SocialMedia
function Footer() {
  return (
    <footer>
      <div className="row">
        <div
          className="col-lg-7 col-md-7 col-sm-12 copyright"
          // data-aos="fade-right"
          // data-aos-offset="0"
        >
          <p className="poppins-regular">
            Copy Right 2024 © By <span>Anas</span> All Rights Reserved
          </p>
        </div>
        <SocialMedia />
      </div>
    </footer>
  );
}

export default Footer;
