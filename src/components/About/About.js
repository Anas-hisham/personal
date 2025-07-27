import React from "react";
import "./About.css";
import "../../App.css";
import Title from "../common/Title/Title";

const introduction = {
  maintitle: "ABOUT",
  maintext: "Let me introduce myself.",
  text: "Hello! I'm Anas Hisham, a passionate Full-Stack Developer with expertise in building scalable web, mobile, and desktop applications. I specialize in the MERN stack, React Native, and Electron, combining clean architecture with user-centered design. With experience in API integration, responsive UI, and agile collaboration, I deliver impactful digital solutions that align technology with business goals.",
};

const profileInfo = [
  { label: "Fullname", value: "Anas Hisham" },
  { label: "Job", value: "Full Stack Developer" },
  { label: "Email", value: "anashisham.dev@gmail.com" },
];

const skillsColumn1 = [
  "HTML5 / CSS3",
  "Bootstrap",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
];

const skillsColumn2 = [
  "Redux",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Electron",
];

function About() {
  return (
    <section className="about text-center" id="about">
      <div className="container">
        <Title introduction={introduction} />

        <div className="row AboutContent">
          {/* Profile Section */}
          <div className="profile col-lg-6 col-md-6 col-sm-12">
            <h4 data-aos="fade-right">Profile</h4>
            <ul>
              {profileInfo.map((item, index) => (
                <li key={index} data-aos="fade-right">
                  <strong>{item.label}:</strong>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Section */}
          <div className="skills col-lg-6 col-md-6 col-sm-12">
            <h4 data-aos="fade-left">Main Skills</h4>
            <div className="row skills justify-content-around">
              {[skillsColumn1, skillsColumn2].map((col, colIndex) => (
                <ul key={colIndex} className="col-3">
                  {col.map((skill, index) => (
                    <li key={index} data-aos="fade-left">
                      <strong>{skill}</strong>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="button-section">
          <div
            className="button-div d-inline-block"
            data-aos="fade-right"
            data-aos-offset="50"
          >
            <a className="ahire" href="#contact">
              <button className="hire">HIRE ME</button>
            </a>
          </div>
          <div
            className="button-div d-inline-block"
            data-aos="fade-left"
            data-aos-offset="50"
          >
            <a
              href="https://drive.google.com/file/d/1VrC5u8kA_aHfwDkZDRryWkhobxYat9-m/view"
              target="_blank"
              rel="noreferrer"
            >
              <button className="cv">DOWNLOAD CV</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
