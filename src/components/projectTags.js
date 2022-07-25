import TagsApi from "@mailchimp/mailchimp_transactional/src/api/TagsApi";
import React from "react";
import useGetDoc from "../customHooks/useGetData";
import { SingleTag } from "./projectCardStyle";

const ProjectTags = ({ tag }) => {
  tag.map((i, index) => {
    return <SingleTag color={tag.color}>{tag.label}</SingleTag>;
  });
};

export default ProjectTags;
