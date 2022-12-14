import React from "react";
import { Icon } from "@iconify/react";
import emailjs from "@emailjs/browser";
import classes from "./Form.module.css";

export default function Form() {
  const [emailSent, setEmailSent] = React.useState(false);
  const form = React.useRef();
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
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
    setLastName("");
    setName("");
  }

  return (
    <form
      id="form"
      ref={form}
      onSubmit={sendEmail}
      className={classes.form__container}
    >
      <label className={classes.form__label}>
        First Name <span className="span__accentFirst">.</span>
      </label>
      <input
        type="text"
        name="user_name"
        className={classes.form__input}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label className={classes.form__label}>
        Last Name <span className="span__accentFirst">.</span>
      </label>
      <input
        type="text"
        name="user_lastName"
        className={classes.form__input}
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label className={classes.form__label}>
        Email <span className="span__accentFirst">.</span>
      </label>
      <input type="email" name="user_email" className={classes.form__input} />
      <label className={classes.form__label}>
        Message <span className="span__accentFirst">.</span>
      </label>
      <textarea
        name="message"
        className={classes.form__input + " " + classes.form__textarea}
      />
      <input
        type="submit"
        value="Send"
        className={"btn" + " " + classes.form__btn}
      />
      <div
        className={
          !emailSent
            ? classes.email__message
            : classes.email__message + " " + classes.email__message_visible
        }
      >
        <Icon
          className={classes.close__message_icon}
          icon="ep:close-bold"
          onClick={closeEmailAlert}
        />

        <h3 className={classes.email__alert_heading}>
          Thank You for your message
          <span className={classes.email__alert_name}>
            {" " + name.charAt(0).toUpperCase() + name.slice(1)}
          </span>{" "}
          <span className={classes.email__alert_name}>
            {" " + lastName.charAt(0).toUpperCase() + lastName.slice(1)}
          </span>
        </h3>

        <p className={classes.email__alert_message}>
          We will get back to You as soon as possible . <br></br>
          Have a nice day !
        </p>
        <p className={classes.email__alert_message}>Comptrends.eu</p>
      </div>
    </form>
  );
}
