import React from "react";

import Link from "next/link";
import classes from "./Footer.module.css";
import HeroAnimation from "../HeroAnimation/HeroAnimation";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <section className={classes.section__footer}>
      <footer className={classes.footer}>
        <div className={classes.footer__container}>
          <div className={classes.footer__links_container}>
            <h4 className="h4__txt">
              Site map <span className="span__accentFirst">.</span>
            </h4>
            <Link href="/#home" className={classes.footer__link} scroll={false}>
              Home
            </Link>
            <Link
              href="/#about"
              className={classes.footer__link}
              scroll={false}
            >
              About us
            </Link>
            <Link
              href="/#offer"
              className={classes.footer__link}
              scroll={false}
            >
              Our offer
            </Link>
            <Link
              href="/#contact"
              className={classes.footer__link}
              scroll={false}
            >
              Contact us
            </Link>
            <Link className={classes.footer__link} href="/attribution">
              Attribution
            </Link>
            <Link className={classes.footer__link} href="/privacy-policy">
              Privacy policy
            </Link>
          </div>
          <div className={classes.footer__links_container}>
            <h4 className="h4__txt">
              Contact info <span className="span__accentFirst">.</span>
            </h4>
            <>
              <p className={classes.footer__link}>Phone : +48 009 009 234</p>
            </>
            <>
              <p className={classes.footer__link}>
                Email : comptrends@gmail.com
              </p>
            </>
          </div>
          {/* SOCIAL MEDIA */}
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
          {/* CREDITS */}
          <div className={classes.footer__links_container}>
            <h4 className="h4__txt">
              Credits <span className="span__accentFirst">.</span>
            </h4>
            <Link className={classes.footer__link} href="/attribution">
              Attribution
            </Link>
          </div>
          {/* PRIVACY */}
          {/* CREDITS */}
          <div className={classes.footer__links_container}>
            <h4 className="h4__txt">
              Privacy <span className="span__accentFirst">.</span>
            </h4>
            <Link className={classes.footer__link} href="/privacy-policy">
              Privacy policy
            </Link>
          </div>
        </div>

        <div className={classes.footer__copyright_container}>
          <p className={classes.copyrights}> {year}</p>
          <p className={classes.copyrights}> Copyright © comptrends.eu</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
