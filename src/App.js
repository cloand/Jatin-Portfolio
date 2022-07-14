import React, { useState, useEffect, useRef } from "react";
import LeftSection from "./components/leftSection";
import NavBar from "./components/NavBar";
import styledComponents from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import {
  faCheckSquare,
  faCircleXmark,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import AboutComp from "./components/About";
import ProjectsCard from "./components/Projects";
import { Api, Strings } from "./constant/constant";
import Loading from "./assets/loading.riv";
import Rive, { useRive } from "rive-react";
import NavDataMobile from "./components/navDataMobile";
import ContactSection from "./components/contactSection";
import ProjectSection from "./components/projectSection";

export const myContext = React.createContext();
export const navState = React.createContext();

library.add(fab, faCheckSquare, faCoffee, far, fas);

const HomeSection = styledComponents.div`

  max-width:2400px;
margin:auto;
  `;

const App = () => {
  const [post, setPost] = useState({});
  const [check, setCheck] = useState(false);
  const [clickChange, setClickChange] = useState(true);
  const [hanburgStateCheck, setHanburgStateCheck] = useState(false);
  const [navMenu, setNavMenu] = useState(false);
  const [active, setActive] = useState(Strings.home);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const getApi = async () => {
    const res = await fetch(Api.baseUrl, { mode: "cors" });
    setPost(await res.json());
    setCheck(true);
  };

  const scrollIntoView = (myRef) => {
    const axis = myRef.getBoundingClientRect();
    if (axis.top < window.innerHeight / 2 && axis.bottom > 0) {
      return true;
    }

    return false;
  };

  const highlights = () => {
    if (scrollIntoView(projectRef.current)) {
      setActive(Strings.projects);
    } else if (scrollIntoView(aboutRef.current)) {
      setActive(Strings.about);
    } else if (scrollIntoView(contactRef.current)) {
      setActive(Strings.contact);
    } else {
      setActive(Strings.home);
    }
  };

  const mailchimp = require("@mailchimp/mailchimp_marketing");

  // mailchimp.setConfig({
  //   apiKey: "Basic <base64-encoding of anystring:flGtJYe6JHobvPcHuhz3WQ-us17>",
  //   server: "us17",
  // });

  // async function callPing() {
  //   const response = await mailchimp.ping.get();
  //   console.log(response);
  // }

  // callPing();

  // const mailchimpTx = require("mailchimp_transactional")(
  //   "flGtJYe6JHobvPcHuhz3WQ"
  // );

  // async function run() {
  //   const response = await mailchimpTx.users.ping();
  //   console.log(response);
  // }

  // run();

  useEffect(() => {
    getApi();
    if (homeRef.current) {
      window.addEventListener("scroll", highlights);
    }
  });

  const { RiveComponent, rive } = useRive({
    src: Loading,
    animations: "Animation 1",
    useOffscreenRenderer: false,
  });

  const changingHanburgState = () => {
    setHanburgStateCheck((prevHanburgStateCheck) => !prevHanburgStateCheck);
  };

  const changingActiveState = (myString) => {
    setActive(myString);
  };

  const scrollToComp = (ref) => {
    if (ref != null) {
      ref.scrollIntoView({
        behavior: "smooth",
      });

      console.log("njkk");
    }
  };

  const changingMethod = () => {
    setClickChange((prevClickChange) => !prevClickChange);
  };

  if (!check) {
    return (
      <RiveComponent style={{ height: "100vh", width: "100" }} />
      // <Rive
      //   src={Loading}
      //   style={{ height: "100vh", width: "100" }}
      //   useOffscreenRenderer={false}
      // />
    );
  }

  return (
    <>
      <myContext.Provider value={{ clickChange }}>
        <NavBar
          ref={{ homeRef, aboutRef, projectRef, experienceRef, contactRef }}
          method={scrollToComp}
          change={changingMethod}
          stateCheck={hanburgStateCheck}
          setHanburgStateCheck={changingHanburgState}
          active={active}
          changingActive={changingActiveState}
        />
      </myContext.Provider>
      <NavDataMobile
        ref={{ homeRef, aboutRef, projectRef, experienceRef, contactRef }}
        method={scrollToComp}
        change={changingMethod}
        stateCheck={hanburgStateCheck}
        setHanburgStateCheck={changingHanburgState}
      />
      <div ref={homeRef}>
        <HomeSection>
          <LeftSection post={post} />
        </HomeSection>
      </div>
      <div className="hello" ref={aboutRef}>
        <AboutComp data={post.about} />
      </div>
      <div ref={projectRef}>
        <ProjectSection projects={post.projects} />
      </div>
      <div ref={contactRef}>
        <ContactSection contacts={post.contacts} socials={post.socials} />
      </div>
    </>
  );
};
// };
export default App;

const projectStyle = {
  maxWidth: "1750px",
  margin: "auto",
  display: "flex",
  flexWrap: "wrap",

  paddingTop: "4em",
};
