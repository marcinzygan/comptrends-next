import { Icon } from "@iconify/react";
import Link from "next/link";
import classes from "./ContactSection.module.css";
import Image from "next/image";
const { motion } = require("framer-motion");

// Import Components
import Form from "../Form/Form";
import SectionHeading from "../SectionHeading/SectionHeading";
import DotAnimation from "../DotAnimation/DotAnimation";
const ContactSection = () => {
  return (
    <section id="contact">
      <SectionHeading
        heading={"Kontakt"}
        subHeading={"Użyj dowolnej metody kontaktu znajdującej się poniżej "}
      />
      <div className={classes.contact__img_container}>
        <DotAnimation />
        <motion.h1
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: false }}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.5 },
            },
            hidden: { opacity: 0, y: -100 },
          }}
          className={"h1__txt" + " " + classes.h1__contact}
        >
          Gotów <span className="span__accentSecond">rozpocząć</span> z nami
          <br></br>
          współpracę ?
        </motion.h1>
        <div className={classes.contact__buttons_container}>
          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true }}
            variants={{
              visible: {
                opacity: 1,

                transition: { duration: 1, delay: 0.5 },
              },
              hidden: { opacity: 0 },
            }}
            className={"btn" + " " + classes.contact__btn_one}
          >
            <Link href="/#form" scroll={false}>
              Kontakt
            </Link>
          </motion.div>
          <motion.p
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true }}
            variants={{
              visible: {
                opacity: 1,

                transition: { duration: 1, delay: 2 },
              },
              hidden: { opacity: 0 },
            }}
            className={classes.contact__or}
          >
            lub
          </motion.p>
          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true }}
            variants={{
              visible: {
                opacity: 1,

                transition: { duration: 1, delay: 0.5 },
              },
              hidden: { opacity: 0 },
            }}
            className={"btn" + " " + classes.contact__btn_two}
          >
            <Link href="/#offer" scroll={false}>
              Oferta
            </Link>
          </motion.div>
        </div>
      </div>
      <div className={classes.contact__container}>
        {/* <div className={classes.contact__details}> */}
        <div className={`next__img  ${classes.next__img_contact}`}>
          <Image
            className={classes.contact__img}
            src="/contact.jpg"
            alt="phone with email sign"
            fill
            sizes="(max-width: 768px) 50vw,
          (max-width: 1200px) 100vw,
          33vw"
          />
        </div>

        <div className={"social__icons" + " " + classes.social__icons_contact}>
          <Icon icon="entypo-social:facebook-with-circle" />
          <Icon icon="entypo-social:linkedin-with-circle" />
          <Icon icon="entypo-social:twitter-with-circle" />
        </div>
        <p
          className={
            classes.contact__details_txt + " " + classes.contact__details_phone
          }
        >
          Telefon<span className="span__accentFirst"> : </span> +48 001 001 001
        </p>
        <p
          className={
            classes.contact__details_txt + " " + classes.contact__details_email
          }
        >
          Email<span className="span__accentFirst"> : </span>
          comptrends.eu@gmail.com
        </p>
        {/* </div> */}
        <Form />
      </div>
    </section>
  );
};

export default ContactSection;
