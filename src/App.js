import React, { useState, useEffect, useRef } from "react";
import LeftSection from "./components/leftSection";
import NavBar from "./components/NavBar";
import styledComponents from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCircleXmark,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import AboutComp from "./components/About";
import ProjectsCard from "./components/Projects";
import { Api } from "./constant/constant";
import Loading from "./assets/loading.riv";
import Rive from "rive-react";

export const myContext = React.createContext();

library.add(fab, faCheckSquare, faCoffee);

const HomeSection = styledComponents.div`

  max-width:2400px;
margin:auto;
  `;

const App = () => {
  const [post, setPost] = useState({});
  const [check, setCheck] = useState(false);
  const [clickChange, setClickChange] = useState(true);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const getApi = async () => {
    const res = await fetch(Api.baseUrl);
    setPost(await res.json());
    setCheck(true);
  };

  useEffect(() => {
    getApi();
  }, [clickChange]);

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
      <Rive
        src={Loading}
        style={{ height: "100vh", width: "100" }}
        useOffscreenRenderer={false}
      />
    );
  }

  return (
    <>
      <myContext.Provider value={{ clickChange }}>
        <NavBar
          ref={{ homeRef, aboutRef, projectRef, experienceRef, contactRef }}
          method={scrollToComp}
          change={changingMethod}
        />
      </myContext.Provider>
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
      <div style={projectStyle} ref={projectRef}>
        {post.projects.map((i) => (
          <ProjectsCard key={i.id} name={i.name} tags={i.tags} />
        ))}
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
  height: "100vh",
  paddingTop: "4em",
};
