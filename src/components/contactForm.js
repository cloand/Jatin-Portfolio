import React, { useEffect, useState } from "react";
import {
  Form,
  TextInput,
  MessageInput,
  Labels,
  ServiceLabels,
  CheckInput,
  Service,
  ServiceHeading,
  InputOutline,
  InputOutlineMessage,
  ServiceOutline,
  Submit,
  ButtonSubmit,
} from "./contactFormStyle";
import { Button } from "./Button";
import AppColors from "../constant/colors";
import firebase from "../store/firebase";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState(null);
  const [otherService, setOtherService] = useState(null);
  const [message, setMessage] = useState("");
  const [radio, setRadio] = useState(null);

  const currentData = {
    firstName: firstName,
    lastname: lastName,
    mail: mail,
    phone: phone,
    otherService: otherService,
    message: message,
    requestType: radio,
  };

  const ref = firebase.firestore().collection("requests");
  let documentReference = null;

  const setID = async () => {
    const d = new Date();
    const date = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    const time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    const check = await ref.doc(documentReference.id).update({
      referenceId: documentReference.id,
      date: date,
      time: time,
    });
    console.log(documentReference.id);
  };

  const sendData = async (e) => {
    e.preventDefault();

    documentReference = await ref.add(currentData);

    setFirstName("");
    setLastName("");
    setMail("");
    setPhone("");
    setOtherService(null);
    setRadio(null);
    setMessage("");
    setID();

    // await documentReference.update({
    //   requestID: documentReference.id,
    // });
  };

  return (
    <Form>
      <InputOutline className="grid-span">
        <Labels for="firstName">First Name</Labels>
        <TextInput
          type="text"
          value={firstName}
          id="firstName"
          placeholder="Jatin"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </InputOutline>

      <InputOutline>
        <Labels>
          <Labels for="lastName">Last Name</Labels>
          <TextInput
            type="text"
            value={lastName}
            id="lastName"
            placeholder="Kumar"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Labels>
      </InputOutline>
      <InputOutline>
        <Labels for="mail">Mail</Labels>
        <TextInput
          type="text"
          value={mail}
          id="mail"
          placeholder="your@mail.com"
          onChange={(e) => setMail(e.target.value)}
        />
      </InputOutline>

      <InputOutline>
        <Labels for="phone">Phone</Labels>
        <TextInput
          type="text"
          value={phone}
          id="phone"
          placeholder="123456789"
          onChange={(e) => setPhone(e.target.value)}
        />
      </InputOutline>

      <Service>
        <Labels>What Kind Of Service You Need?</Labels>
        <ServiceOutline>
          <CheckInput
            type="radio"
            id="flutter"
            value="flutter"
            checked={radio === "flutter"}
            onChange={(e) => setRadio(e.target.value)}
            required
          />
          <ServiceLabels for="flutter">Flutter </ServiceLabels>
          <br />
          <CheckInput
            type="radio"
            id="python"
            value="python"
            checked={radio === "python"}
            onChange={(e) => setRadio(e.target.value)}
            required
          />
          <ServiceLabels for="python">Python</ServiceLabels>
          <br />

          <CheckInput
            type="radio"
            id="other"
            checked={radio === "other"}
            value="other"
            onChange={(e) => setRadio(e.target.value)}
            required
          />
          <ServiceLabels for="other">Other</ServiceLabels>
          <br />
        </ServiceOutline>
      </Service>
      <InputOutline
        style={radio === "other" ? { display: "block" } : { display: "none" }}
      >
        <Labels for="otherService">Other Service</Labels>
        <TextInput
          type="text"
          value={otherService}
          id="otherService"
          placeholder="Specify reason"
          onChange={(e) => setOtherService(e.target.value)}
        />
      </InputOutline>
      <InputOutlineMessage>
        <Labels for="message">Message</Labels>
        <MessageInput
          cols="10"
          rows="3"
          type="text"
          id="message"
          value={message}
          placeholder="Your message for me."
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </InputOutlineMessage>
      <ButtonSubmit>
        {/* <Submit type="submit" value="Send Message" /> */}
        <Button
          children={"Submit"}
          color={AppColors.secondary500}
          onClick={(e) => sendData(e)}
          type="button"
        ></Button>
      </ButtonSubmit>
    </Form>
  );
};

export default ContactForm;
