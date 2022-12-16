import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Link from "next/link";
import classes from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section id="about">
      <SectionHeading
        heading={"Who we are ?"}
        subHeading={"Data is our passion "}
      />
      <div className={classes.about__container}>
        <div className={classes.about__txt_container}>
          <div>
            <h2 className={"h2__txt" + " " + classes.about__h2}>
              <span className={"span__accentSecond"}>Data</span> engineering and
              web development company
            </h2>
            <p className={"paragraph__txt"}>
              Lorem ipsum dolor sit amet consectetur. Vitae odio quis sit velit
              dui. Elit risus morbi etiam diam tempus. Vitae amet metus ante
              gravida nisi eget imperdiet. Consectetur ut lorem mattis felis
              sapien diam arcu
            </p>
            <p className={"paragraph__txt"}>
              Lorem ipsum dolor sit amet consectetur. Vitae odio quis sit velit
              dui. Elit risus morbi etiam diam tempus.{" "}
            </p>
          </div>
          <img
            src="/about.png"
            alt="robot showing graph on coputer screen"
            className={classes.about__img}
          ></img>
        </div>

        <div
          className={
            classes.about__txt_container + " " + classes.about__txt_container2
          }
        >
          <div>
            <p className={"paragraph__txt"}>
              Lorem ipsum dolor sit amet consectetur. Vitae odio quis sit velit
              dui. Elit risus morbi etiam diam tempus. Vitae amet metus ante
              gravida nisi eget imperdiet. Consectetur ut lorem mattis felis
              sapien diam arcu
            </p>
            <p className={"paragraph__txt"}>
              Lorem ipsum dolor sit amet consectetur. Vitae odio quis sit velit
              dui. Elit risus morbi etiam diam tempus.{" "}
            </p>
          </div>
          <img
            src="/about.png"
            alt="robot showing graph on coputer screen"
            className={classes.about__img}
          ></img>
        </div>

        <div className={"btn" + " " + classes.about__btn}>
          <Link href="/#offer" scroll={false}>
            Our offer
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
