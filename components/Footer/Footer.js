import React from "react";

import Link from "next/link";
import classes from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <section className={classes.section__footer}>
      <footer className={classes.footer}>
        <div className={classes.footer__container}>
          <div className={classes.footer__links_container}>
            <h4 className="h4__txt">
              Mapa strony <span className="span__accentFirst">.</span>
            </h4>
            <Link href="/#home" className={classes.footer__link} scroll={false}>
              Strona Główna
            </Link>
            <Link
              href="/#about"
              className={classes.footer__link}
              scroll={false}
            >
              Kim Jesteśmy ?
            </Link>
            <Link
              href="/#offer"
              className={classes.footer__link}
              scroll={false}
            >
              Nasza Oferta
            </Link>
            <Link
              href="/#contact"
              className={classes.footer__link}
              scroll={false}
            >
              Kontakt
            </Link>
            <Link className={classes.footer__link} href="/attribution">
              Prawa autorskie
            </Link>
            <Link className={classes.footer__link} href="/privacy-policy">
              Polityka prywatności
            </Link>
          </div>
          <div className={classes.footer__links_container}>
            <h4 className="h4__txt">
              Kontakt <span className="span__accentFirst">.</span>
            </h4>
            <>
              <p className={classes.footer__link}>Phone : +48 570 569 599</p>
            </>
            <>
              <p className={classes.footer__link}>
                Email : comptrends.eu@gmail.com
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
              Podziękowania <span className="span__accentFirst">.</span>
            </h4>
            <Link className={classes.footer__link} href="/attribution">
              Prawa autorskie
            </Link>
          </div>
          {/* PRIVACY */}
          {/* CREDITS */}
          <div className={classes.footer__links_container}>
            <h4 className="h4__txt">
              Prywatność <span className="span__accentFirst">.</span>
            </h4>
            <Link className={classes.footer__link} href="/privacy-policy">
              Polityka prywatności
            </Link>
          </div>
        </div>

        <div className={classes.footer__copyright_container}>
          <p className={classes.copyrights}> {year}</p>
          <p className={classes.copyrights}>© comptrends.eu</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
