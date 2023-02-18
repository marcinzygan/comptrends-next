import React from "react";
import classes from "./SectionHeading.module.css";
const { motion } = require("framer-motion");

const SectionHeading = (props) => {
  return (
    <div className={classes.section__heading_container}>
      <div className={classes.section__animation}>
        <motion.div
          className={classes.section__line_1}
          initial={{ height: "5px", width: "65px" }}
          animate={{ width: "85px" }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            repeatDelay: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
        <motion.div
          initial={{ height: "5px", width: "48px" }}
          animate={{ width: "55px" }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            repeatDelay: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={classes.section__line_2}
        ></motion.div>
        <motion.div
          initial={{ height: "5px", width: "85px" }}
          animate={{ width: "50px" }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            repeatDelay: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={classes.section__line_3}
        ></motion.div>
        <motion.div
          className={classes.section__line_4}
          initial={{ height: "5px", width: "62px" }}
          animate={{ width: "35px" }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            repeatDelay: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
        <motion.div
          className={classes.section__line_5}
          initial={{ height: "5px", width: "22px" }}
          animate={{ width: "70px" }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            repeatDelay: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
      </div>
      <div className={classes.section__heading_wrapper}>
        <div className={classes.section__heading_txt}>{props.heading}</div>
        <p className={classes.section__sub_heading}>
          {props.subHeading}
          <span className="span__accentFirst">.</span>
        </p>
      </div>
    </div>
  );
};

export default SectionHeading;
