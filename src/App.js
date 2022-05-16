import React, { useState, useEffect, useRef } from "react";
import LeftSection from "./components/leftSection";
import NavBar from "./components/NavBar";
import styledComponents from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import AboutComp from "./components/About";
import ProjectsCard from "./components/Projects";
import { Api } from "./constant/constant";
import Loading from "./assets/loading.riv";
import Rive from "rive-react";

library.add(fab, faCheckSquare, faCoffee);

const HomeSection = styledComponents.div`

  max-width:2400px;
margin:auto;
  `;

const App = () => {
  const [post, setPost] = useState({});
  const [check, setCheck] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();
  const allRef = useRef({homeRef,aboutRef,projectRef,contactRef});

  
  const getApi = async () => {
    const res = await fetch(Api.baseUrl);
    setPost(await res.json());
    setCheck(true);
  };


  useEffect(() => {
    getApi();
    console.log(homeRef.current.offsetHeight);
  },[homeRef]);

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
    <div ref = {homeRef}>
      <NavBar />
      <HomeSection>
        <LeftSection post={post} />
      </HomeSection>
      <AboutComp>
        <LeftSection />
      </AboutComp>
      {post.projects.map((i) => (
        <ProjectsCard
          key={i.id}
          name={i.name}
          tags={["Flutter", "Ui/Ux", "Firebase", "API"]}
        />
      ))}
    </div>
  );
};
// };
export default App;
