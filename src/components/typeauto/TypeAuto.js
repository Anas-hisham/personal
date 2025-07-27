import Typewriter from "typewriter-effect";
import "./TypeAuto.css";

function TypeAuto() {
  return (
    <div className="Type" style={{ width: "300px" }}>
      <Typewriter
        options={{
          strings: [
            "Software Engineer",
            "Frontend Developer",
            "Backend Developer",
            "Full Stack Developer",
            "Web Developer",
            "Desktop Developer",
            "Mobile Developer",
            "UI & UX Designer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,

        }}
      />
    </div>
  );
}

export default TypeAuto;
