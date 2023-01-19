import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
const { motion } = require("framer-motion");
import classes from "./HeroSection.module.css";

import HeroAnimation from "../HeroAnimation/HeroAnimation";

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
              Dostarczamy<br></br>
              <motion.span
                animate={{ Color: ["#ffff", "#58effb", "#ffff"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                className="span__accentSecond"
              >
                dane
              </motion.span>{" "}
              , dla Twojego biznesu
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, delay: 2 }}
              className={classes.hero__subtxt}
            >
              Skorzystaj z naszych usług i zacznij rozwijać swój biznes.
              <br></br> Dane, które Ci dostarczymy, pozwolą na lepsze planowanie
              i prognozowanie, oraz na uniknięcie potencjalnych problemów i
              zwiększenie efektywności działania twojego biznesu.
            </motion.p>
          </motion.div>
        </div>
        <motion.div
          className={classes.hero__animation_container}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 2 }}
        >
          <HeroAnimation />
          <div className={classes.hero__background}></div>
        </motion.div>
        <motion.div
          className={"btn"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <Link href="/#about" scroll={false}>
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
