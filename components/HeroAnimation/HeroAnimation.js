import classes from "./HeroAnimation.module.css";
const { motion } = require("framer-motion");

const HeroAnimation = () => {
  return (
    <div className={classes.hero__animation}>
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
          delay: 1,
          repeat: Infinity,
          repeatDelay: 3,
        }}
        className={classes.hero__dot}
      ></motion.div>

      {/* <motion.div
        animate={{ backgroundColor: ["#ffff", "#ff11c7", "#ffff"] }}
        transition={{
          duration: 2,
          delay: 4,
          repeat: Infinity,
          repeatDelay: 3,
        }}
        className={classes.hero__line}
      ></motion.div> */}
    </div>
  );
};

export default HeroAnimation;
