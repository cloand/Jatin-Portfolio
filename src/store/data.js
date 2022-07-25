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

const getDoc = async ({collection, doc}) => {
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
  for (let [_,tag] of tags.entries()){ 
   tagList.push(await getDoc({collection:tag.parent.id,doc:tag.id}));
  
  }
  return tagList;
}

export const projectData = async () => {
  let dataDocument = await getDoc({collection:"dashboard",doc:"data"});
  let projects = [];
  let projectReferences = dataDocument.projects;
 
  const logData = async() =>{
    for (let [i,projectRef]of projectReferences.entries()) {
      console.log(projectRef,"ref");
      let project = await getDoc({collection: projectRef.parent.id,doc:projectRef.id});
      const tags = project.tags;
      const tagList = await getTagList(tags);
      const projectData = {...project,tags : tagList};
      projects.push(projectData);
    }
  }
  await logData();
  // console.log(projects);
  
  return projects;
};


