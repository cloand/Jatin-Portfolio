import { getMetadata } from "firebase/storage";
import React, { useEffect, useState } from "react";
import firebase from "../store/firebase";

const getData = async (collection) => {
  const ref = firebase.firestore().collection(collection);
  const res = await ref.get();
  const data = [];
  res.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
};

const useGetCollection = (collection) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(async () => {
    setData(await getData(collection));
    setIsLoading(false);
  }, []);

  return [data, error, isLoading];
};

export default useGetCollection;
