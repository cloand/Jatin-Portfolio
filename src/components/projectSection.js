import React, { useState,useEffect } from "react";
import useGetCollection from "../customHooks/useGetCollection";
import useGetDoc from "../customHooks/useGetData";
import { projectData } from "../store/data";
import ProjectsCard from "./Projects";
import {
  Project,
  ProjectInner,
  TopSection,
  TopHeading,
  BottomSection,
} from "./projectSectionStyle";

const ProjectSection = () => {
  const [projects,setProjects] = useState(null);
 
  useEffect(async () => {
     setProjects( await projectData());
    
  },[])

  if (!projects) {
    return <div>wait</div>;
  }
  
  return (
    <Project>
      <ProjectInner>
        <TopSection>
          <TopHeading>Projects</TopHeading>
        </TopSection>
        <BottomSection>
          {projects
            .map((i) => (
              <ProjectsCard
                key={i.id}
                name={i.name}
                tags={i.tags}
                icon={i.icon}
              />
            ))
            }
        </BottomSection>
      </ProjectInner>
    </Project>
  );
};

export default ProjectSection;
