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
import Messages from "./store/messageData";

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

  const getApi = () => {
    fetch(Api.baseUrl, {
      // origin: "http://localhost:8080",
      mode: "cors",
      any: {
        // "strict-origin-when-cross-origin": "*",
        // "X-Http-Method-Override": "*",
        "Cache-Control": "no-cache, no-store",
        Connection: " keep-alive",
        "Content-Length": "506",
        "Content-Type": "text/html; charset=utf-8",
        Date: "Sun, 17 Jul 2022 17:01:45 GMT",
        Server: "Cowboy",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "strict-origin-when-cross-origin, X-Http-Method-Override, Origin, X-Requested-With, Content-Type, Accept",
        // "RateLimit-Remaining": "allowed requests remaining in current interval",
        // "Access-Control-Allow-Origin": "$http_origin",
        // "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
        // "Access-Control-Max-Age": "3600",
        // "Access-Control-Allow-Credentials": "true",
        // "Access-Control-Allow-Headers": "Content-Type",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPost(data);
        setCheck(true);
        console.log(data);
      })
      .catch(console.error);
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

  useEffect(() => {
    getApi();
  }, []);

  useEffect(() => {
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
    return <RiveComponent style={{ height: "100vh", width: "100" }} />;
  }

  return (
    <>
      {/* <Messages /> */}
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

export default App;

const projectStyle = {
  maxWidth: "1750px",
  margin: "auto",
  display: "flex",
  flexWrap: "wrap",

  paddingTop: "4em",
};
