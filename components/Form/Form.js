import React from "react";
import { Icon } from "@iconify/react";
import emailjs from "@emailjs/browser";
import classes from "./Form.module.css";

export default function Form() {
  const [emailSent, setEmailSent] = React.useState(false);
  const form = React.useRef();
  const [name, setName] = React.useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m4y9q3v",
        "template_7lswfof",
        form.current,
        "HVZH8z9LUzgQezsQL"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
    setEmailSent(true);
  };

  function closeEmailAlert() {
    setEmailSent((prevState) => !prevState);
  }

  return (
    <form ref={form} onSubmit={sendEmail} className={classes.form__container}>
      <label className="form__label">Name</label>
      <input
        type="text"
        name="user_name"
        className="form__input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label className={classes.form__label}>Email</label>
      <input type="email" name="user_email" className={classes.form__input} />
      <label className={classes.form__label}>Message</label>
      <textarea
        name="message"
        className={classes.form__input + " " + classes.form__textarea}
      />
      <input
        type="submit"
        value="Send"
        className={"hero__btn" + " " + classes.form__btn}
      />
      <div
        className={
          !emailSent
            ? classes.email__message
            : classes.email__message + " " + classes.email__message_visible
        }
      >
        <Icon
          icon="ep:close-bold"
          className="modal__icon email__alert-icon"
          onClick={closeEmailAlert}
        />
        <span className="span span__alert-top">{"<h2>"}</span>
        <h2 className="email__alert-heading">
          Thank You for your message
          <span className="email__alert-name">
            {" " + name.charAt(0).toUpperCase() + name.slice(1)}
          </span>
        </h2>
        <span className="span span__alert-bottom">{"</h2>"}</span>
        <p className="email__alert-message">
          I will get back to You as soon as possible . <br></br>
          Have a nice day !
        </p>
      </div>
    </form>
  );
}
