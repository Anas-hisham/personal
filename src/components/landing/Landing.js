import TypeAuto from "../typeauto/TypeAuto";
import SocialMedia from "../common/social/SocialMedia";
function Landing() {
  return (
    <section className="home" id="home">
      <div className="photo">
        <div className="container">
          <div class="overlay">
            <div className="text-center content " data-aos="zoom-in">
              <h5 className="poppins-bold">Hello, World.</h5>
              <h1 className="text-white poppins-medium">I'm Anas Hisham</h1>
              <TypeAuto />
            </div>
            <div
              className="landingSocial"
              data-aos="zoom-in"
              data-aos-offset="0"
            >
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
