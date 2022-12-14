const { motion } = require("framer-motion");
import classes from "./DotAnimation.module.css";
const DotAnimation = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 3,
          repeatDelay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={classes.dot__main + " " + classes.dot__1}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 3,
          repeatDelay: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={classes.dot__main + " " + classes.dot__2}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 3,
          repeatDelay: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={classes.dot__main + " " + classes.dot__3}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 3,
          repeatDelay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={classes.dot__main + " " + classes.dot__4}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 3,
          repeatDelay: 2.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={classes.dot__main + " " + classes.dot__5}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 3,
          repeatDelay: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={classes.dot__main + " " + classes.dot__6}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 3,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={classes.dot__main + " " + classes.dot__7}
      ></motion.div>
    </>
  );
};

export default DotAnimation;
