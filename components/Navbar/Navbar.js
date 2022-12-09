import { Icon } from "@iconify/react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavigation } from "../../State/navSlice";
import classes from "./Navbar.module.css";
import { useRouter } from "next/router";
const { motion } = require("framer-motion");

export default function Navbar() {
  const dispatch = useDispatch();
  const router = useRouter();
  // STATE imports
  const isNavOpen = useSelector((state) => state.nav.isNavOpen);
  const displayAnimation = useSelector(
    (state) => state.animation.displayAnimation
  );

  function closeNav() {
    dispatch(toggleNavigation(isNavOpen));
    // router.replace("/#home", undefined, { shallow: true });

    console.log("router obj", router);
  }
  return (
    <header>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4 }}
        className={classes.nav}
      >
        <Link href="/#home" scroll={false} className={classes.logo}>
          <img src="/logo.svg" alt="comptrends logo"></img>
        </Link>

        <motion.button
          onClick={() => dispatch(toggleNavigation(isNavOpen))}
          className={classes.nav__button}
          aria-label="toggle navigation"
        >
          <div className={classes.nav__button_circle}>
            {/* ADD DIFFRENT ICON , FOR NAV BUTTON */}
            {isNavOpen ? (
              <Icon icon="ooui:close" color="#ff11c7" />
            ) : (
              <Icon icon="ci:menu-alt-01" color="#ff11c7" />
            )}
          </div>
        </motion.button>

        <ul
          className={
            !isNavOpen
              ? classes.nav__list
              : classes.nav__list + " " + classes.nav__open
          }
        >
          {/* DISPLAY ANIMATION CONDITIONALLY DEPENDING ON SCREEN SIZE  and IF NAVIGATION IS OPEN*/}
          {isNavOpen && displayAnimation && (
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
          )}

          <div className={classes.link__container}>
            <motion.li whileHover={"hover"} className={classes.nav__li}>
              <motion.div
                className={classes.nav__rectangle}
                initial={{ y: -30, x: -27, opacity: 1 }}
                transition={{ duration: 1 }}
                variants={{
                  hover: { y: 50, opacity: 1, backgroundColor: "#ff11c7" },
                }}
              ></motion.div>

              <Link
                onClick={closeNav}
                href="/#home"
                scroll={false}
                className={classes.nav__link}
              >
                Home
              </Link>
              <motion.div
                className={classes.nav__circle}
                initial={{ y: 25, x: -39, opacity: 0 }}
                transition={{ duration: 2 }}
                variants={{
                  hover: {
                    y: -39,
                    x: -39,
                    opacity: 1,
                    backgroundColor: "#ffff",
                  },
                }}
              ></motion.div>
            </motion.li>
          </div>
          <div className={classes.link__container}>
            <motion.li whileHover={"hover"} className={classes.nav__li}>
              <motion.div
                className={classes.nav__rectangle}
                initial={{ y: -30, x: -27, opacity: 1 }}
                transition={{ duration: 1 }}
                variants={{
                  hover: { y: 50, opacity: 1, backgroundColor: "#ff11c7" },
                }}
              ></motion.div>

              <Link
                onClick={closeNav}
                href="/#about"
                className={classes.nav__link}
                scroll={false}
              >
                About us
              </Link>
              <motion.div
                className={classes.nav__circle}
                initial={{ y: 50, x: -39, opacity: 0 }}
                transition={{ duration: 2 }}
                variants={{
                  hover: {
                    y: -39,
                    x: -39,
                    opacity: 1,
                    backgroundColor: "#ffff",
                  },
                }}
              ></motion.div>
            </motion.li>
          </div>
          <div className={classes.link__container}>
            <motion.li whileHover={"hover"} className={classes.nav__li}>
              <motion.div
                className={classes.nav__rectangle}
                initial={{ y: -30, x: -27, opacity: 1 }}
                transition={{ duration: 1 }}
                variants={{
                  hover: { y: 50, opacity: 1, backgroundColor: "#ff11c7" },
                }}
              ></motion.div>

              <Link
                onClick={closeNav}
                href="/#offer"
                className={classes.nav__link}
                scroll={false}
              >
                Our offer
              </Link>
              <motion.div
                className={classes.nav__circle}
                initial={{ y: 50, x: -39, opacity: 0 }}
                transition={{ duration: 2 }}
                variants={{
                  hover: {
                    y: -39,
                    x: -39,
                    opacity: 1,
                    backgroundColor: "#ffff",
                  },
                }}
              ></motion.div>
            </motion.li>
          </div>
          <div className={classes.link__container}>
            <motion.li whileHover={"hover"} className={classes.nav__li}>
              <motion.div
                className={classes.nav__rectangle}
                initial={{ y: -30, x: -27, opacity: 1 }}
                transition={{ duration: 1 }}
                variants={{
                  hover: { y: 50, opacity: 1, backgroundColor: "#ff11c7" },
                }}
              ></motion.div>

              <Link
                onClick={closeNav}
                href="/#contact"
                scroll={false}
                className={classes.nav__link}
              >
                Contact
              </Link>
              <motion.div
                className={classes.nav__circle}
                initial={{ y: 50, x: -39, opacity: 0 }}
                transition={{ duration: 2 }}
                variants={{
                  hover: {
                    y: -39,
                    x: -39,
                    opacity: 1,
                    backgroundColor: "#ffff",
                  },
                }}
              ></motion.div>
            </motion.li>
          </div>
        </ul>
      </motion.nav>
    </header>
  );
}
