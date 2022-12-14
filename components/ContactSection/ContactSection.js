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
      <SectionHeading
        heading={"Contact"}
        subHeading={"Use any method below to get in touch."}
      />
      <div className={classes.contact__img_container}>
        <h1 className={"h1__txt" + " " + classes.h1__contact}>
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
        {/* <div className={classes.contact__details}> */}
        <img
          className={classes.contact__img}
          src="/about.png"
          alt="phone email details"
        ></img>
        <div className={"social__icons" + " " + classes.social__icons_contact}>
          <Icon icon="entypo-social:facebook-with-circle" />
          <Icon icon="entypo-social:linkedin-with-circle" />
          <Icon icon="entypo-social:twitter-with-circle" />
        </div>
        <p
          className={
            classes.contact__details_txt + " " + classes.contact__details_phone
          }
        >
          Phone<span className="span__accentFirst"> : </span> +48 001 001 001
        </p>
        <p
          className={
            classes.contact__details_txt + " " + classes.contact__details_email
          }
        >
          Email<span className="span__accentFirst"> : </span>
          comptrends@gmail.com
        </p>
        {/* </div> */}
        <Form />
      </div>
    </section>
  );
};

export default ContactSection;
