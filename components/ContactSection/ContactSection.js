import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import classes from "./ContactSection.module.css";
// Import Components
import Form from "../Form/Form";
import SectionHeading from "../SectionHeading/SectionHeading";

const ContactSection = () => {
  return (
    <section id="contact">
      <SectionHeading heading={"Contact"} />
      <div className={classes.contact__img_container}>
        <h1 className="h1__txt">
          Ready to <span className="span__accentSecond">start</span> working
          with us ?
        </h1>
        <div className={classes.contact__buttons_container}>
          <div className={"btn " + " " + classes.contact__btn_one}>
            <Link href="/#form" scroll={false}>
              Contact us
            </Link>
          </div>
          <p className={classes.contact__or}>or</p>
          <div className={"btn" + " " + classes.contact__btn_two}>
            <Link href="/#offer" scroll={false}>
              Learn more
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.contact__container}>
        <div className={classes.contact__details}>
          <img
            className={classes.contact__img}
            src="/about.png"
            alt="phone email details"
          ></img>
          <div
            className={"social__icons" + " " + classes.social__icons_contact}
          >
            <Icon icon="entypo-social:facebook-with-circle" />
            <Icon icon="entypo-social:linkedin-with-circle" />
            <Icon icon="entypo-social:twitter-with-circle" />
          </div>
        </div>
      </div>
      <Form />
      <p className={classes.contact__details_txt}>Phone : +48 001 001 001</p>
      <p className={classes.contact__details_txt}>
        Email : comptrends@gmail.com
      </p>
    </section>
  );
};

export default ContactSection;
