import SectionHeading from "../SectionHeading/SectionHeading";
import Image from "next/image";
import classes from "./OfferSection.module.css";
import { useDispatch, useSelector } from "react-redux";
import { showHelp, showData } from "../../State/checkScreenSizeSlice";
import { Icon } from "@iconify/react";
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
        heading={"Nasza Oferta"}
        subHeading={"Comptrends dla twojego Biznesu "}
      />
      <div className={classes.offer__wrapper}>
        <div
          className={
            classes.offer__info_container + " " + classes.offer__info_help
          }
        >
          <div>
            <motion.h2
              className="h2__txt"
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ once: true }}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.5 },
                },
                hidden: { opacity: 0, y: -100 },
              }}
            >
              <span className="span__accentFirst">Pomagamy</span> w zdobywaniu
              przewagi konkurencyjnej.
            </motion.h2>
            <p className={"paragraph__txt" + " " + classes.offer__data_txt}>
              Oferujemy szeroki zakres usług, które pomogą Ci w zdobywaniu
              przewagi konkurencyjnej na rynku. Nasze dane pochodzą z różnych
              źródeł, co zapewnia ich dokładność i aktualność. Dzięki nim,
              będziesz mieć wgląd w ceny produktów konkurencji, zmiany cen, a
              także trendy rynkowe. To pozwoli Ci na odpowiednie dostosowanie
              swojej oferty, cen oraz strategii marketingowej.
            </p>
            <div
              onClick={toggleHelp}
              className={classes.offer__btn + " " + classes.help__btn}
            >
              {isHelpSHown ? "Czytaj Mniej" : "Czytaj Wjęcej"}
              <Icon icon="ph:book-open-light" className={classes.icon__read} />
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
              Nasze usługi pozwolą Ci również na monitorowanie działań
              konkurencji, co pozwoli Ci na reagowanie na ich działania, a także
              na wykorzystywanie ich słabych punktów. Dzięki temu, będziesz mógł
              skuteczniej walczyć o klientów i rozwijać swój biznes. <br></br>
              <br></br>
              Dane, które Ci dostarczymy, pozwolą Ci również na lepsze
              planowanie i prognozowanie, co pozwoli na uniknięcie potencjalnych
              problemów i zwiększenie efektywności działania twojego biznesu.
            </motion.p>{" "}
          </div>
          <img
            className={classes.offer__img_mobile}
            alt="profit graph"
            src="/profit.svg"
          ></img>
        </div>

        <div className={classes.offer__animation_container}>
          <AnimatePresence>
            {isHelpSHown && (
              <motion.img
                src="/profit.svg"
                alt="profit graph"
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
                src="/data.svg"
                alt="data graph"
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
          <div>
            <motion.h2
              className="h2__txt"
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ once: true }}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.5 },
                },
                hidden: { opacity: 0, y: -100 },
              }}
            >
              Dostarczamy
              <span className="span__accentSecond"> dane </span>, które pozwolą
              Ci na sukces.
            </motion.h2>
            <p className={"paragraph__txt" + " " + classes.offer__data_txt}>
              Nasze dane pozwolą Ci na lepsze rozumienie rynku, a tym samym na
              odpowiednie dostosowanie oferty, cen oraz strategii marketingowej.
              Dzięki nim będziesz miał wgląd w ceny produktów konkurencji,
              zmiany cen, a także trendy rynkowe.
            </p>
            <div onClick={toggleData} className={classes.offer__btn}>
              {isDataSHown ? "Czytaj Mniej" : "Czytaj Wjęcej"}
              <Icon icon="ph:book-open-light" className={classes.icon__read} />
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
              W Comptrends, pomagamy Ci w osiągnięciu sukcesu poprzez
              dostarczanie Ci niezbędnych danych i usług, które pozwolą Ci na
              podejmowanie skutecznych decyzji i rozwój twojego biznesu.
            </motion.p>
          </div>
          <img
            className={classes.offer__img_mobile}
            alt="data graph"
            src="/data.svg"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
