import React from "react";
import { Link } from "react-scroll";
import classes from "./SideNavbar.module.css";
export default function SideNavbar() {
  return (
    <aside className={classes.side__nav}>
      <div className={classes.side__item}>
        <Link
          to="home"
          href="#home"
          aria-label="home section"
          activeClass={classes.side__link_selected}
          spy={true}
          offset={-195}
          className={classes.side__link}
        ></Link>
        <span className={classes.side__label}>Strona główna</span>
      </div>

      <div className={classes.side__item}>
        <Link
          to="about"
          href="#about"
          aria-label="about section"
          activeClass={classes.side__link_selected}
          spy={true}
          offset={-120}
          className={classes.side__link}
        ></Link>
        <span className={classes.side__label}>O nas</span>
      </div>

      <div className={classes.side__item}>
        <Link
          to="offer"
          href="#offer"
          aria-label="offer section"
          activeClass={classes.side__link_selected}
          spy={true}
          offset={-120}
          className={classes.side__link}
        ></Link>
        <span className={classes.side__label}>Oferta</span>
      </div>

      <div className={classes.side__item}>
        <Link
          to="contact"
          href="#contact"
          aria-label="contact section"
          activeClass={classes.side__link_selected}
          spy={true}
          offset={-120}
          className={classes.side__link}
        ></Link>
        <span className={classes.side__label}>Kontakt</span>
      </div>
    </aside>
  );
}
