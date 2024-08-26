import React from "react";
import "../style/hero.css";
import hero_bg from "../images/hero_bg.png";
function Hero() {
  return (
    <section id="hero" className="hero" style={{ backgroundImage: `url(${hero_bg})` }}>
      <div className="container">
        <div className="hero__context">
          <h4>Hello my name is</h4>
          <h1>Kamoliddinov Khusniddin</h1>
          <h3>
            and I'm a <span>Frontend Devoloper</span>
          </h3>
          <button>My Resume</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
