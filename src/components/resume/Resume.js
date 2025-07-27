import "./Resume.css";
import gdgImage from "../../assets/imgs/resume/gdg.png";
import reactImg from "../../assets/imgs/resume/react.png";
import GL from "../../assets/imgs/resume/gl.jpg";
import Itida from "../../assets/imgs/resume/ITIDA.logo.png";
import open from "../../assets/imgs/resume/logo.png";
import Title from "../common/Title/Title";

const experiences = [
  {
    icon: <img className="gl" src={GL} alt="Gamers Lounge" />,
    title: "Gamers Lounge",
    date: "May 2025 – August 2025",
    position: "Full Stack Developer",
    description:
      "Delivered a production-ready Electron + Vue 3 desktop application to manage live stream data used internally by tournament operators and stream teams for esports tournaments.",
  },
  {
    icon: <img className="react" src={reactImg} alt="Freelancer" />,
    title: "Freelancer",
    date: "November 2024 - Present",
    position: "Full Stack Developer",
    description:
      "Developing dynamic and responsive web applications using React and modern JavaScript frameworks.",
  },
  {
    icon: <img className="gdg" src={gdgImage} alt="Google Groups" />,
    title: "Google Groups",
    date: "December 2024 - May 2025",
    position: "UI & UX Design",
    description:
      "Collaborating with GDG to build community-driven projects and enhance user experiences.",
  },
  {
    icon: <img src={Itida} alt="ITIDA" />,
    title: "ITIDA Internship",
    date: "Jan 2025 - May 2025",
    position: "Web Developer",
    description:
      "Delivered freelance web development projects via ITIDA and GIGS, ensuring client satisfaction with custom solutions and timely delivery.",
  },
  {
    icon: <img src={open} alt="OpenQQuantify" />,
    title: "OpenQQuantify",
    date: "Jan 2025 - Mar 2025",
    position: "Frontend Developer",
    description:
      "Collaborated with international teams to build dynamic, user-friendly interfaces.",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.744 7.452v.81h.844l-.042 3.29-.801.802-.802.802L4.1 14h-.801l-.042-3.291L0 10.699v-.788l2.459-2.46h3.285ZM14 11.516 11.53 14v-2.484H14Zm-11.53 0V14L0 11.516h2.47Zm4.495.66 1.25 1.1v.704H5.782v-.704l1.184-1.1Zm4.501-4.8 2.46 2.46v.789l-3.257.008-.042 3.292h-.801l-.844-.844-.801-.802-.802-.802-.042-3.29h.844v-.81h3.285Zm2.46-1.656v2.484h-.689l-1.034-1.246 1.034-1.238h.688Zm-13.27 0 1.066 1.238L.656 8.204H0V5.72h.656Zm6.68.828v.828h-.823v-.828h.824ZM10.628 0l.042 3.291 3.256.01v.788l-2.459 2.46H8.181v-.81h-.844l.042-3.292.802-.801.801-.802L9.826 0h.801ZM4.1 0l.844.844.802.802.801.801.042 3.292h-.843l-.001.81H2.459L0 4.088V3.3l3.256-.009L3.298 0h.801ZM2.471.075V2.56H0L2.47.075ZM11.529 0 14 2.484h-2.47V0ZM8.18.02v.67l-1.251.984L5.744.69V.02H8.18Z"
          fill="#FF773B"
        />
      </svg>
    ),
    title: "Manara Diploma",
    date: "July 2024 - October 2024",
    position: "Software Engineer",
    description:
      "Completed a diploma focused on data structures, algorithms, problem-solving, and software development skills.",
  },
];

const introduction = {
  maintitle: "RESUME",
  maintext: "More of my credentials.",
  sectitle: "Experience",
};

function Resume() {
  return (
    <section className="resume text-center" id="resume">
      <div className="container">
        <Title introduction={introduction} />

        <div className="experience">
          {experiences.map(({ icon, title, date, position, description }, index) => (
            <div
              key={index}
              className="timeline-block row justify-content-between"
              data-aos="fade-up"
            >
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="timeline-ico">
                  <div className="icon">{icon}</div>
                </div>
                <div className="timeline-header">
                  <h3 className="poppins-semibold">{title}</h3>
                  <p className="poppins-regular">{date}</p>
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12 timeline-content">
                <h4 className="poppins-semibold">{position}</h4>
                <p className="poppins-regular">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
