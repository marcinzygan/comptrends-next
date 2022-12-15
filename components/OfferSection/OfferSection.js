import React, { useState } from "react";
import { Icon } from "@iconify/react";
import SectionHeading from "../SectionHeading/SectionHeading";
import classes from "./OfferSection.module.css";
const { motion, AnimatePresence } = require("framer-motion");

const OfferSection = () => {
  const [isHelpSHown, setIsHelpSHown] = useState(false);
  function showHelp() {
    setIsDataSHown(false);
    setIsHelpSHown((prevState) => !prevState);
  }
  const [isDataSHown, setIsDataSHown] = useState(false);
  function showData() {
    setIsHelpSHown(false);
    setIsDataSHown((prevState) => !prevState);
  }
  console.log(isHelpSHown);
  return (
    <section id="offer">
      <SectionHeading
        heading={"Our offer"}
        subHeading={"We will deliver the quality "}
      />
      <div className={classes.offer__wrapper}>
        <div
          className={
            classes.offer__info_container + " " + classes.offer__info_help
          }
        >
          <motion.h2
            className="h2__txt"
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false }}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.5 },
              },
              hidden: { opacity: 0, x: -100 },
            }}
          >
            <span className="span__accentFirst">Help</span> to promote your
            business
          </motion.h2>
          <p className="paragraph__txt">
            Lorem ipsum dolor sit amet consectetur. Vitae odio quis sit velit
            dui. Elit risus morbi etiam diam tempus. Vitae amet metus ante
            gravida nisi eget imperdiet. Consectetur ut lorem mattis felis
            sapien diam arcu
          </p>
          <div
            onClick={showHelp}
            className={classes.offer__btn + " " + classes.help__btn}
          >
            {isHelpSHown ? "Read less" : "Read more"}
            <Icon icon="ph:magnifying-glass-light" />
          </div>
          <p
            className={
              isHelpSHown
                ? "paragraph__txt" +
                  " " +
                  classes.offer__more_txt +
                  " " +
                  classes.help__visible
                : "paragraph__txt" + " " + classes.offer__more_txt
            }
          >
            Lorem ipsum dolor sit amet consectetur. Vitae odio quis sit velit
            dui. Elit risus morbi etiam diam tempus. Lorem ipsum dolor sit amet
            consectetur. Vitae odio quis sit velit dui. Elit risus morbi etiam
            diam tempus. Lorem ipsum dolor sit amet consectetur. Vitae odio quis
            sit velit dui. Elit risus morbi etiam diam tempus. Lorem ipsum dolor
            sit amet consectetur. Vitae odio quis sit velit dui. Elit risus
            morbi etiam diam tempus.
          </p>

          <motion.img
            src="/about.png"
            alt="comp"
            className={classes.offer__img_mobile}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true }}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 2, delay: 0.5 },
              },
              hidden: { opacity: 0, y: -100 },
            }}
          ></motion.img>
        </div>

        <div className={classes.offer__animation_container}>
          <AnimatePresence>
            {isHelpSHown && (
              <motion.img
                src="/about.png"
                alt="comp"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                exit={{
                  opacity: 0,
                  transition: { duration: 2, ease: "easeOut" },
                }}
                className={
                  isHelpSHown
                    ? classes.offer__img + " " + classes.offer__img_help
                    : classes.offer__img
                }
              ></motion.img>
            )}
          </AnimatePresence>
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
          <img
            src="/about.png"
            alt="comp"
            className={
              isDataSHown
                ? classes.offer__img + " " + classes.offer__img_data
                : classes.offer__img
            }
          ></img>
        </div>
        <div
          className={
            classes.offer__info_container + " " + classes.offer__info_data
          }
        >
          <motion.h2
            className="h2__txt"
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false }}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.5 },
              },
              hidden: { opacity: 0, x: +100 },
            }}
          >
            Bring your <span className="span__accentSecond">data</span> to live
          </motion.h2>
          <p className={"paragraph__txt" + " " + classes.offer__data_txt}>
            Lorem ipsum dolor sit amet consectetur. Vitae odio quis sit velit
            dui. Elit risus morbi etiam diam tempus. Vitae amet metus ante
            gravida nisi eget imperdiet. Consectetur ut lorem mattis felis
            sapien diam arcu
          </p>
          <div onClick={showData} className={classes.offer__btn}>
            {isDataSHown ? "Read less" : "Read more"}
            <Icon icon="ph:magnifying-glass-light" />
          </div>
          <p
            className={
              isDataSHown
                ? "paragraph__txt" +
                  " " +
                  classes.offer__more_txt +
                  " " +
                  classes.data__visible
                : "paragraph__txt" + " " + classes.offer__more_txt
            }
          >
            Lorem ipsum dolor sit amet consectetur. Vitae odio quis sit velit
            dui. Elit risus morbi etiam diam tempus.Lorem ipsum dolor sit amet
            consectetur. Vitae odio quis sit velit dui.<br></br> Elit risus
            morbi etiam diam tempus. Lorem ipsum dolor sit amet consectetur.
            Vitae odio quis sit velit dui. Elit risus morbi etiam diam
            tempus.Lorem ipsum dolor sit amet consectetur.<br></br> Vitae odio
            quis sit velit dui. Elit risus morbi etiam diam tempus. Lorem ipsum
            dolor sit amet consectetur. Vitae odio quis sit velit dui. <br></br>
            Elit risus morbi etiam diam tempus.
          </p>
          <motion.img
            src="/about.png"
            alt="comp"
            className={classes.offer__img_mobile}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true }}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 2, delay: 0.5 },
              },
              hidden: { opacity: 0, y: -100 },
            }}
          ></motion.img>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
