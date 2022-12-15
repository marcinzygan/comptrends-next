import { Icon } from "@iconify/react";
import Link from "next/link";
import classes from "./ContactSection.module.css";
const { motion } = require("framer-motion");
// Import Components
import Form from "../Form/Form";
import SectionHeading from "../SectionHeading/SectionHeading";
import DotAnimation from "../DotAnimation/DotAnimation";
const ContactSection = () => {
  return (
    <section id="contact">
      <SectionHeading
        heading={"Contact"}
        subHeading={"Use any method below to get in touch "}
      />
      <div className={classes.contact__img_container}>
        <DotAnimation />
        <motion.h1
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: false }}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.5 },
            },
            hidden: { opacity: 0, y: -100 },
          }}
          className={"h1__txt" + " " + classes.h1__contact}
        >
          Ready to <span className="span__accentSecond">start</span> working
          with us ?
        </motion.h1>
        <div className={classes.contact__buttons_container}>
          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true }}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.5 },
              },
              hidden: { opacity: 0, x: -100 },
            }}
            className={"btn " + " " + classes.contact__btn_one}
          >
            <Link href="/#form" scroll={false}>
              Contact us
            </Link>
          </motion.div>
          <motion.p
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true }}
            variants={{
              visible: {
                opacity: 1,

                transition: { duration: 1, delay: 2 },
              },
              hidden: { opacity: 0 },
            }}
            className={classes.contact__or}
          >
            or
          </motion.p>
          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true }}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.5 },
              },
              hidden: { opacity: 0, x: -100 },
            }}
            className={"btn" + " " + classes.contact__btn_two}
          >
            <Link href="/#offer" scroll={false}>
              Learn more
            </Link>
          </motion.div>
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
