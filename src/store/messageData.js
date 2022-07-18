import React, { useEffect, useState } from "react";
import firebase from "./firebase";

const Messages = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  const ref = firebase.firestore().collection("requests");

  const dat = {
    name: "Los Angeles",
    state: "CA",
    country: "USA",
  };

  // Add a new document in collection "cities" with ID 'LA'
  const res = async () => {
    await ref.doc("LA").set(dat);
  };

  useEffect(() => {
    res();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [load]);

  return <></>;
};

export default Messages;
