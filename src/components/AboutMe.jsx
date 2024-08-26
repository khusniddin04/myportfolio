import React from "react";
import "../style/aboutMe.css";
import js_img from "../images/javascript_img.svg";
import react_img from "../images/react_img.svg";
import html_img from "../images/html_img.svg";
import css_img from "../images/css_img.svg";
import sass_img from "../images/sass_image.png";
import aboutBg from "../images/aboutBg.jpg"
function AboutMe() {
  return (
    <section id="aboutMe" className="aboutMe" style={{backgroundImage:`url(${aboutBg})`}}>
      <div className="container">
        <div className="aboutMe__wrapper">
          <div className="aboutMe__context">
            <h2>About Me</h2>
            <p>
              I'm a Frontend Developer. I have been working in this field for 1
              year. I studied at the It-park studing center where I also
              completed a 6-month course. I'm currently working on my own. So
              far I have worked on some amazing projects.
            </p>
          </div>
          <div className="my_skills">
            <h2>My Skills</h2>
            <div className="skills__wrapper">
              <div className="skills_images">
                <img src={js_img} alt="" />
                <h4>Javascript</h4>
              </div>
              <div className="skills_images">
                <img src={html_img} alt="" />
                <h4>Html</h4>
              </div>
              <div className="skills_images">
                <img src={css_img} alt="" />
                <h4>Css</h4>
              </div>
              <div className="skills_images">
                <img src={react_img} alt="" />
                <h4>React js</h4>
              </div>
              <div className="skills_images">
                <img width={150} src={sass_img} alt="" />
                <h4>Sass</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
