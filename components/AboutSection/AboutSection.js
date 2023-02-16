import React from "react";
import Image from "next/image";
import SectionHeading from "../SectionHeading/SectionHeading";
import Link from "next/link";
import classes from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section id="about">
      <SectionHeading
        heading={"Kim Jesteśmy ?"}
        subHeading={"Dane to nasza pasja "}
      />
      <div className={classes.about__container}>
        <div className={classes.about__txt_container}>
          <div>
            <h2 className={"h2__txt" + " " + classes.about__h2}>
              Jesteśmy liderem w dostarczaniu aktualnych
              <span className={"span__accentSecond"}> danych </span>
              rynkowych.
            </h2>
            <p className={"paragraph__txt"}>
              Nasza firma specjalizuje się w dostarczaniu firmom dokładnych i
              aktualnych danych dotyczących ich konkurencji. Dzięki naszej
              usłudze zbierania danych będziesz mieć codzienny dostęp do ważnych
              informacji, w tym cen, zmian cen i więcej.
            </p>
            <p className={"paragraph__txt"}>
              Dzięki śledzeniu najnowszych trendów i zmian w twojej branży,
              będziesz mógł podejmować mądrzejsze decyzje i pozostać
              konkurencyjnym.<br></br>
              Comptrends ułatwia śledzenie konkurencji, dzięki czemu możesz
              skupić się na rozwijaniu swojego biznesu.
            </p>
          </div>
          <div className={"next__img"}>
            <Image
              fill
              sizes="(max-width: 768px) 50vw,
            (max-width: 1200px) 100vw,
            33vw"
              src="/about.png"
              alt="robot showing graph on coputer screen"
              className={classes.about__img}
            />
          </div>
        </div>

        <div
          className={
            classes.about__txt_container + " " + classes.about__txt_container2
          }
        >
          <div>
            <p className={"paragraph__txt"}>
              Nasze dane są zbierane z różnych źródeł, co zapewnia ich
              dokładność i niezawodność. Dzięki Comptrends będziesz mieć
              informacje potrzebne do podejmowania informowanych decyzji
              dotyczących swoich produktów i cen.
            </p>
            <p className={"paragraph__txt"}>
              Zapisz się na naszą usługę już dziś i zacznij zyskiwać przewagę
              konkurencyjną, której potrzebujesz, aby odnieść sukces. Dzięki
              Comptrends zawsze będziesz jeden krok przed konkurencją.
            </p>
          </div>
          <div className={"next__img"}>
            <Image
              src="/profit2.svg"
              alt="data flowing and profit increased graph"
              className={classes.about__img}
              fill
              sizes="(max-width: 768px) 50vw,
            (max-width: 1200px) 100vw,
            33vw"
            />
          </div>
        </div>

        <div className={"btn" + " " + classes.about__btn}>
          <Link href="/#offer" scroll={false}>
            Oferta
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
