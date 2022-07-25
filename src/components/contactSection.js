import React from "react";
import {
  ContactOuter,
  ContactInner,
  TopSection,
  BottomSection,
  CardOuter,
  CardLeft,
  CardRight,
  TopHeading,
  TopPara,
  LeftHeader,
  Contacts,
  LeftDisc,
  LeftPhone,
  LeftLoc,
  LeftMessage,
  LeftIcons,
  LeftContacts,
  LeftMail,
} from "./contactSectionStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Strings } from "../constant/stringConstants";
import AppColors from "../constant/colors";
import ContactForm from "./contactForm";
import useGetCollection from "../customHooks/useGetCollection";

const ContactSection = () => {
  const [socials, socialsError, isSocialsLoading] = useGetCollection("socials");
  const [contact, contactsError, isContactsLoading] = useGetCollection(
    "contacts"
  );

  if (!contact || !socials) {
    return <div>wait</div>;
  }

  return (
    <>
      <ContactOuter>
        <ContactInner>
          <TopSection>
            <TopHeading>Contact Me</TopHeading>
            <TopPara>
              Do you have a technical or development question? Simply leave a
              message.
            </TopPara>
          </TopSection>
          <BottomSection>
            <CardOuter>
              <CardLeft>
                <LeftHeader>Contact Information</LeftHeader>
                <LeftDisc>
                  Fill out the form, and I will contact you within 24 hours
                </LeftDisc>
                <Contacts>
                  {contact.map((contact) => (
                    <LeftContacts>
                      <FontAwesomeIcon
                        icon={contact.icon}
                        color={AppColors.white}
                        style={{
                          width: "1em",
                          marginRight: "2em",
                        }}
                      />
                      {contact.label}
                    </LeftContacts>
                  ))}
                </Contacts>
                <LeftMessage>{Strings.contactMessage}</LeftMessage>
                <LeftIcons>
                  {socials.map((i) => (
                    <a href={i.link}>
                      <FontAwesomeIcon
                        icon={i.icon}
                        color={AppColors.white}
                        style={{ paddingRight: "2em" }}
                      />
                    </a>
                  ))}
                </LeftIcons>
              </CardLeft>
              <CardRight>
                <ContactForm />
              </CardRight>
            </CardOuter>
          </BottomSection>
        </ContactInner>
      </ContactOuter>
    </>
  );
};

export default ContactSection;
