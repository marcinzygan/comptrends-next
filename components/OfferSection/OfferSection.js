import SectionHeading from "../SectionHeading/SectionHeading";
import classes from "./OfferSection.module.css";
import { useDispatch, useSelector } from "react-redux";
import { showHelp, showData } from "../../State/checkScreenSizeSlice";
const { motion, AnimatePresence } = require("framer-motion");

const OfferSection = () => {
  const dispatch = useDispatch();
  const isDataSHown = useSelector((state) => state.screen.isDataShown);
  const isHelpSHown = useSelector((state) => state.screen.isHelpShown);

  function toggleHelp() {
    dispatch(showHelp());
    console.log(isHelpSHown);
  }

  function toggleData() {
    dispatch(showData());
  }

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
                y: 0,
                transition: { duration: 1, delay: 0.5 },
              },
              hidden: { opacity: 0, y: -100 },
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
            onClick={toggleHelp}
            className={classes.offer__btn + " " + classes.help__btn}
          >
            {isHelpSHown ? "Read Less" : "Read More"}
            {/* <Icon
             icon="ph:magnifying-glass-light"
              className={classes.icon__read}
            />  */}
          </div>
          <motion.p
            initial={isHelpSHown ? { opacity: 0 } : { opacity: 1 }}
            animate={isHelpSHown ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            exit={{
              opacity: 0,
              transition: { duration: 1, ease: "easeOut" },
            }}
            className={"paragraph__txt" + " " + classes.offer__more_txt}
          >
            Lorem ipsum dolor sit amet consectetur. Vitae odio quis sit velit
            dui. Elit risus morbi etiam diam tempus. Lorem ipsum dolor sit amet
            consectetur. Vitae odio quis sit velit dui. Elit risus morbi etiam
            diam tempus. Lorem ipsum dolor sit amet consectetur. Vitae odio quis
            sit velit dui. Elit risus morbi etiam diam tempus. Lorem ipsum dolor
            sit amet consectetur. Vitae odio quis sit velit dui. Elit risus
            morbi etiam diam tempus. diam tempus. Lorem ipsum dolor sit amet
            consectetur. Vitae odio quis sit velit dui. Elit risus morbi etiam
            diam tempus. Lorem ipsum dolor sit amet consectetur. Vitae odio quis
            sit velit dui. Elit risus morbi etiam diam tempus. diam tempus.
            Lorem ipsum dolor sit amet consectetur. Vitae odio quis sit velit
            dui. Elit risus morbi etiam diam tempus. Lorem ipsum dolor sit amet
            consectetur. Vitae odio quis sit velit dui. Elit risus morbi etiam
            diam tempus.
          </motion.p>

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

                transition: { duration: 4, delay: 0.5 },
              },
              hidden: { opacity: 0 },
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
                transition={{ duration: 1, ease: "easeOut" }}
                exit={{
                  opacity: 0,
                  transition: { duration: 1, ease: "easeOut" },
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
          <AnimatePresence>
            {isDataSHown && (
              <motion.img
                src="/about.png"
                alt="comp"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                exit={{
                  opacity: 0,
                  transition: { duration: 1, ease: "easeOut" },
                }}
                className={
                  isDataSHown
                    ? classes.offer__img + " " + classes.offer__img_data
                    : classes.offer__img
                }
              ></motion.img>
            )}
          </AnimatePresence>
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
                y: 0,
                transition: { duration: 1, delay: 0.5 },
              },
              hidden: { opacity: 0, y: -100 },
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
          <div onClick={toggleData} className={classes.offer__btn}>
            {isDataSHown ? "Read Less" : "Read More"}
            {/* <Icon
              icon="ph:magnifying-glass-light"
              className={classes.icon__read}
            /> */}
          </div>

          <motion.p
            initial={isDataSHown ? { opacity: 1 } : { opacity: 1 }}
            animate={isDataSHown ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            exit={{
              opacity: 0,
              transition: { duration: 1, ease: "easeOut" },
            }}
            className={"paragraph__txt" + " " + classes.offer__more_txt}
          >
            Lorem ipsum dolor sit amet consectetur. Vitae odio quis sit velit
            dui. Elit risus morbi etiam diam tempus.Lorem ipsum dolor sit amet
            consectetur. Vitae odio quis sit velit dui.<br></br> Elit risus
            morbi etiam diam tempus. Lorem ipsum dolor sit amet consectetur.
            Vitae odio quis sit velit dui. Elit risus morbi etiam diam
            tempus.Lorem ipsum dolor sit amet consectetur.
            <br></br> Vitae odio quis sit velit dui. Elit risus morbi etiam diam
            tempus. Lorem ipsum dolor sit amet consectetur. Vitae odio quis sit
            velit dui. <br></br>
            Elit risus morbi etiam diam tempus.
          </motion.p>

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

                transition: { duration: 4, delay: 0.5 },
              },
              hidden: { opacity: 0 },
            }}
          ></motion.img>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
