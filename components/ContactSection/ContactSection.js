import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-scroll";

import Form from "../Form/Form";
import SectionHeading from "../SectionHeading/SectionHeading";

const ContactSection = () => {
  return (
    <section id="contact">
      <SectionHeading heading={"Contact"} />
      <div className="contact__img-container">
        <h1 className="hero__txt">
          Ready to <span className="span__accentSecond">start</span> working
          with us ?
        </h1>
        <div className="contact__buttons-container">
          <div className="hero__btn contact__btn-one">
            <Link to="form" spy={true} smooth={true}>
              Contact us
            </Link>
          </div>
          <p className="contact__or">or</p>
          <div className="hero__btn contact__btn-two">
            <Link to="offer" spy={true} smooth={true}>
              Learn more
            </Link>
          </div>
        </div>
      </div>
      <div className="contact__container">
        <div className="contact__details">
          <img
            className="contact__img"
            src="/about.png"
            alt="phone email details"
          ></img>
          <div className="social__icons social__icons-contact ">
            <Icon icon="entypo-social:facebook-with-circle" />
            <Icon icon="entypo-social:linkedin-with-circle" />
            <Icon icon="entypo-social:twitter-with-circle" />
          </div>
          <p className="contact__details-txt">Phone : +48 001 001 001</p>
          <p className="contact__details-txt">Email : comptrends@gmail.com</p>
        </div>
      </div>
      <Form />
    </section>
  );
};

export default ContactSection;
