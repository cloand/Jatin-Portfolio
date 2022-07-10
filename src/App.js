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
import { Api } from "./constant/constant";
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

  useEffect(() => {
    getApi();
  }, [clickChange]);

  const { RiveComponent, rive } = useRive({
    src: Loading,
    animations: "Animation 1",
    useOffscreenRenderer: false,
  });

  const changingHanburgState = () => {
    setHanburgStateCheck((prevHanburgStateCheck) => !prevHanburgStateCheck);
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
        <AboutComp>
          <LeftSection />
        </AboutComp>
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
