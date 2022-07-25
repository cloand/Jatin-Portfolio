//collection
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

//doc

const getDoc = async (collection, doc) => {
  const ref = firebase
    .firestore()
    .collection(collection)
    .doc(doc);
  let res = await ref.get();
  return new Promise((resolve) => {
    resolve(res.data());
  });
};

export const projectData = async () => {
  // console.log(projects[0].tags);
  // let loading = true;
  let projects = null;
  projects = await getColl("projects");
  for (let i = 0; i < projects.length; i++) {
    const tags = i.tags;
    for (let j = 0; j < tags.length; j++) {
      console.log(tags[j]);
    }
  }

  // projects.forEach((data) => {
  //   // const [key, value] = data;
  //   const tags = data.tags;
  //   tags.forEach(async (tag) => {
  //     console.log(tag.parent.id);

  //     tagings.push(await getDoc(tag.parent.id, tag.id));
  //   });

  // console.log(await consoleList(coll, doc));

  // Object.entries(data).forEach((subData) => {
  //   const [innerKey, innerValue] = subData;
  //   console.log("inner", innerKey, innerValue);
  //       Object.entries(subData.tags).forEach((tag) => {
  //         console.log(tag, "tags");
  //   });
  // });

  // loading = false;
};

let tagings = [];
const socials = {};
const dashboard = {};
const contacts = {};
