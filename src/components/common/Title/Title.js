import "./Title.css";
import React from "react";

function Title(props) {
  const intro = props.introduction;

  return (
    <div className="intro" data-aos="fade-up">
      <h5 className="maintitle poppins-bold">{intro.maintitle}</h5>
      <h1 className="maintext poppins-semibold">{intro.maintext}</h1>
      {intro.text && <p className="summary ">{intro.text}</p>}

      {intro.sectitle && <h2 className="poppins-semibold">{intro.sectitle}</h2>}
    </div>
  );
}

export default Title;
