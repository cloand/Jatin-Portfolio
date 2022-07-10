import React from "react";
import ProjectsCard from "./Projects";
import {
  Project,
  ProjectInner,
  TopSection,
  TopHeading,
  BottomSection,
} from "./projectSectionStyle";

const ProjectSection = ({ projects }) => {
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
            .reverse()
            .slice(0, 6)}
        </BottomSection>
      </ProjectInner>
    </Project>
  );
};

export default ProjectSection;
