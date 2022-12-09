import React from "react";
import { Link } from "react-scroll";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <section>
      <footer>
        <div className={classes.footer__container}>
          <div className={classes.footer__links_container}>
            <h4 className="h4__txt">
              Site map <span className="span__accentFirst">.</span>
            </h4>
            <Link smooth={true} to="home" className={classes.footer__link}>
              Home
            </Link>
            <Link smooth={true} to="about" className={classes.footer__link}>
              About us
            </Link>
            <Link smooth={true} to="offer" className={classes.footer__link}>
              Our offer
            </Link>
            <Link smooth={true} to="contact" className={classes.footer__link}>
              Contact us
            </Link>
          </div>
          <div className={classes.footer__links_container}>
            <h4 className="h4__txt">
              Contact info <span className="span__accentFirst">.</span>
            </h4>
            <>
              <p className={classes.footer__link}>Phone :</p>
              <span className={classes.footer__link}>+48 009 009 234</span>
            </>
            <>
              <p className={classes.footer__link}>Email :</p>
              <span className={classes.footer__link}>comptrends@gmail.com</span>
            </>
          </div>
          <div className={classes.footer__links_container}>
            <h4 className="h4__txt">
              Social media <span className="span__accentFirst">.</span>
            </h4>
            <a className={classes.footer__link} href="https://facebook.com">
              Facebook
            </a>
            <a className={classes.footer__link} href="https://facebook.com">
              LinkedIn
            </a>
            <a className={classes.footer__link} href="https://facebook.com">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
