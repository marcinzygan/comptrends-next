import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-scroll";
const { motion } = require("framer-motion");
import classes from "./HeroSection.module.css";

const Home = () => {
  return (
    <section id="home" className={classes.hero__section}>
      <div className={classes.hero__container}>
        <div className={classes.hero__txt_container}>
          <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
          >
            <h1 className="h1__txt">
              <span className="span__accentSecond">Data</span> solution for your
              business .
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, delay: 2 }}
              className={classes.hero__subtxt}
            >
              Lorem ipsum dolor sit amet consectetur. Bibendum et mauris porta
              id sapien varius risus. Condimentum posuere habitant netus
              pellentesque leo arcu.
            </motion.p>
          </motion.div>
        </div>
        <motion.div
          className={classes.hero__animation_container}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 2 }}
        >
          <div className={classes.hero__animation}>
            <motion.div
              animate={{ backgroundColor: ["#ffff", "#58effb", "#ffff"] }}
              transition={{
                duration: 2,
                delay: 1,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className={classes.hero__dot}
            ></motion.div>
            <motion.div
              animate={{ backgroundColor: ["#ffff", "#58effb", "#ffff"] }}
              transition={{
                duration: 2,
                delay: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className={classes.hero__dot}
            ></motion.div>
            <motion.div
              animate={{ backgroundColor: ["#ffff", "#58effb", "#ffff"] }}
              transition={{
                duration: 2,
                delay: 3,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className={classes.hero__dot}
            ></motion.div>
            <motion.div
              animate={{ backgroundColor: ["#ffff", "#ff11c7", "#ffff"] }}
              transition={{
                duration: 2,
                delay: 4,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className={classes.hero__line}
            ></motion.div>
          </div>
          <div className={classes.hero__background}></div>
        </motion.div>
        <motion.div
          className={"btn"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <Link to="about" spy={true} smooth={true}>
            Learn more
          </Link>
        </motion.div>
        <div className="social__icons">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4.5 }}
          >
            <Icon icon="entypo-social:facebook-with-circle" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 5 }}
          >
            <Icon icon="entypo-social:linkedin-with-circle" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 5.5 }}
          >
            <Icon icon="entypo-social:twitter-with-circle" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
