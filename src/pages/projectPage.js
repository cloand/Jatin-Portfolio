import React, { useState, useEffect } from "react";
import Rive, { useRive } from "rive-react";
import useGetCollection from "../customHooks/useGetCollection";
import {
  PageOuter,
  PageInner,
  PageTop,
  Headers,
  PageBottom,
  BottomInner,
  ButtonSection,
} from "../components/projectPageStyle";
import Loading from "../assets/loading.riv";
import ProjectsCard from "../components/Projects";
import { projectData } from "../store/data";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

const ProjectPage = () => {
  const [data, setData] = useState(null);

  const { rive, RiveComponent } = useRive({
    src: "../assets/loading.riv",
  });

  useEffect(async () => {
    setData(await projectData({ collection: "projects" }));
  }, []);

  if (!data) {
    return <Rive src={Loading} style={{ width: "100wh", height: "100vh" }} />;
  }

  return (
    <PageOuter>
      <PageInner>
        <PageTop>
          <Headers>Projects</Headers>
        </PageTop>
        <PageBottom>
          <BottomInner>
            {data.map((x) => (
              <ProjectsCard
                key={x.id}
                name={x.name}
                tags={x.tags}
                icon={x.icon}
              />
            ))}
          </BottomInner>
        </PageBottom>
        <ButtonSection>
          <Link to="/">
            <Button>Back To Home</Button>
          </Link>
        </ButtonSection>
      </PageInner>
    </PageOuter>
  );
};

export default ProjectPage;
