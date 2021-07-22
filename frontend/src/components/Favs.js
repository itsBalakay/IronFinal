import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import actions from "../api";

function Favs(props) {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(async () => {
    let res = await actions.getAllPosts();
    console.log(res);
    setAllPosts(res.data);
  }, []);

  const ShowPosts = () =>
    allPosts.map((eachPost) => (
      <ul key={eachPost._id}>
        <li>
          <img
            style={{ width: "25%" }}
            src={eachPost.imageUrl}
            alt="shirtcollection"
          />
        </li>
        <li>Club: {eachPost.club}</li>
        <li>League: {eachPost.league}</li>
        <li>Player: {eachPost.player}</li>
        <li>Notes: {eachPost.notes}</li>
        <li>
          <i>posted by: {eachPost.userId?.name}</i>
        </li>
      </ul>
    ));

  return (
    <div>
      <ul>
        <ShowPosts />
      </ul>
    </div>
  );
}

export default Favs;
