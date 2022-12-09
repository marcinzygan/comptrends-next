import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Link } from "react-scroll";

const AboutSection = () => {
  return (
    <section id="about">
      <SectionHeading heading={"Who we are ?"} />
      <div className="about__container">
        <div className="about__txt-container">
          <h3 className="heading__h3">
            <span className="span__accentSecond">Data</span> engineering and web
            development company
          </h3>
          <p className="paragraph__txt">
            Lorem ipsum dolor sit amet consectetur. Vitae odio quis sit velit
            dui. Elit risus morbi etiam diam tempus. Vitae amet metus ante
            gravida nisi eget imperdiet. Consectetur ut lorem mattis felis
            sapien diam arcu
          </p>
          <p className="paragraph__txt">
            Lorem ipsum dolor sit amet consectetur. Vitae odio quis sit velit
            dui. Elit risus morbi etiam diam tempus.{" "}
          </p>
        </div>
        <img
          src="../../public/about.png"
          alt="robot showing graph on coputer screen"
        ></img>
        <div className="hero__btn">
          <Link to="offer" spy={true} smooth={true}>
            Our offer
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
