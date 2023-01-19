import React from "react";
import { Link } from "react-scroll";
import classes from "./SideNavbar.module.css";
export default function SideNavbar() {
  return (
    <aside className={classes.side__nav}>
      <div className={classes.side__item}>
        <Link
          to="home"
          activeClass={classes.side__link_selected}
          spy={true}
          offset={-150}
          className={classes.side__link}
        ></Link>
        <span className={classes.side__label}>Strona główna</span>
      </div>

      <div className={classes.side__item}>
        <Link
          to="about"
          activeClass={classes.side__link_selected}
          spy={true}
          offset={-30}
          className={classes.side__link}
        ></Link>
        <span className={classes.side__label}>O nas</span>
      </div>

      <div className={classes.side__item}>
        <Link
          to="offer"
          activeClass={classes.side__link_selected}
          spy={true}
          offset={-30}
          className={classes.side__link}
        ></Link>
        <span className={classes.side__label}>Oferta</span>
      </div>

      <div className={classes.side__item}>
        <Link
          to="contact"
          activeClass={classes.side__link_selected}
          spy={true}
          offset={-30}
          className={classes.side__link}
        ></Link>
        <span className={classes.side__label}>Kontakt</span>
      </div>
    </aside>
  );
}
