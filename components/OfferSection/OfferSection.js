import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import classes from "./OfferSection.module.css";
const { motion } = require("framer-motion");

const OfferSection = () => {
  return (
    <section id="offer">
      <SectionHeading heading={"Offer"} />
      <div className={classes.offer__info_container}>
        <h3 className="h3__txt">
          <span className="span__accentFirst">Help</span> to promote your
          business
        </h3>
        <p className="paragraph__txt">
          Lorem ipsum dolor sit amet consectetur. Vitae odio quis sit velit dui.
          Elit risus morbi etiam diam tempus. Vitae amet metus ante gravida nisi
          eget imperdiet. Consectetur ut lorem mattis felis sapien diam arcu
        </p>
        <p className="paragraph__txt">
          Lorem ipsum dolor sit amet consectetur. Vitae odio quis sit velit dui.
          Elit risus morbi etiam diam tempus.
        </p>
      </div>
      <div className={classes.offer__animation_container}>
        <motion.div
          className={classes.circle__animation}
          // initial={{ translateX: "50%", translateY: "50%" }}
          animate={{ rotate: 90 }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
        >
          <img
            src="/circle__one.png"
            alt="dashed pink circle"
            className={classes.circle__one}
          ></img>
        </motion.div>
        <motion.div
          className={classes.circle__animation}
          // initial={{ translateX: "50%", translateY: "50%" }}
          animate={{ rotate: -90 }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
        >
          <img
            src="/circle__two.png"
            alt="dashed blue circle"
            className={classes.circle__two}
          ></img>
        </motion.div>
      </div>
      <div className={classes.offer__info_container}>
        <h3 className="h3__txt">
          Bring your <span className="span__accentSecond">data</span> to live
        </h3>
        <p className="paragraph__txt">
          Lorem ipsum dolor sit amet consectetur. Vitae odio quis sit velit dui.
          Elit risus morbi etiam diam tempus. Vitae amet metus ante gravida nisi
          eget imperdiet. Consectetur ut lorem mattis felis sapien diam arcu
        </p>
        <p className="paragraph__txt">
          Lorem ipsum dolor sit amet consectetur. Vitae odio quis sit velit dui.
          Elit risus morbi etiam diam tempus.
        </p>
      </div>
    </section>
  );
};

export default OfferSection;
