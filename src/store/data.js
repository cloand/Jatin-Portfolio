//getCollection
import firebase from "./firebase";

const getColl = async (collection) => {
  const ref = firebase.firestore().collection(collection);
  const res = await ref.get();
  const data = [];
  res.forEach((doc) => {
    data.push(doc.data());
  });

  return data;
};

//getDoc

const getDoc = async ({ collection, doc }) => {
  const ref = firebase
    .firestore()
    .collection(collection)
    .doc(doc);
  let res = await ref.get();
  return res.data();
};

//updateProjects

const getTagList = async (tags) => {
  let tagList = [];
  for (let [_, tag] of tags.entries()) {
    tagList.push(await getDoc({ collection: tag.parent.id, doc: tag.id }));
  }
  return tagList;
};

export const projectData = async ({ collection = null, doc = null }) => {
  let dataDocument = null;
  let projectReferences = null;
  if (doc === null) {
    projectReferences = await getColl(collection);
  }
  if (doc != null) {
    dataDocument = await getDoc({ collection: collection, doc: doc });
    projectReferences = dataDocument.projects;
  }

  let projects = [];

  const logData = async () => {
    for (let [i, projectRef] of projectReferences.entries()) {
      const tags = null;
      const tagList = null;
      const projectData = null;
      let project = null;
      if (doc != null) {
        project = await getDoc({
          collection: projectRef.parent.id,
          doc: projectRef.id,
        });
        tags = project.tags;
        tagList = await getTagList(tags);
        projectData = { ...project, tags: tagList };
      } else {
        tags = projectRef.tags;
        tagList = await getTagList(tags);
        projectData = { ...projectRef, tags: tagList };
      }

      projects.push(projectData);
    }
  };
  await logData();
  // console.log(projects);

  return projects;
};
