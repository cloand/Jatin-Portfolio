import { getMetadata } from "firebase/storage";
import React, { useEffect, useState } from "react";
import firebase from "../store/firebase";

const getData = async (collection, doc) => {
  const ref = firebase
    .firestore()
    .collection(collection)
    .doc(doc);
  const res = await ref.get();
  return res;
};

const getDoc = async (collection, doc) => {
  const data = await getData(collection, doc);
  return data.data();
};
const useGetDoc = (collection, doc) => {
  const [doce, setDoce] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    setDoce(await getDoc(collection, doc));
    setLoading(false);
  }, []);

  return [doce, error, loading];
};

export default useGetDoc;
