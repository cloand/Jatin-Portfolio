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

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState();

  const [otherService, setOtherService] = useState(null);
  const [message, setMessage] = useState("");

  const [radio, setRadio] = useState(null);

  useEffect(() => {
    console.log(firstName);
  }, [firstName]);

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
          />
          <ServiceLabels for="flutter">Flutter </ServiceLabels>

          <CheckInput
            type="radio"
            id="python"
            value="python"
            checked={radio === "python"}
            onChange={(e) => setRadio(e.target.value)}
          />
          <ServiceLabels for="python">Python</ServiceLabels>

          <CheckInput
            type="radio"
            id="other"
            checked={radio === "other"}
            value="other"
            onChange={(e) => setRadio(e.target.value)}
          />
          <ServiceLabels for="other">Other</ServiceLabels>
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
        />
      </InputOutlineMessage>
      <ButtonSubmit>
        {/* <Submit type="submit" value="Send Message" /> */}
        <Button children={"Submit"} color={AppColors.secondary500}></Button>
      </ButtonSubmit>
    </Form>
  );
};

export default ContactForm;
