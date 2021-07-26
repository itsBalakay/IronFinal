import React from "react";
import "../favs.css";
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
      <div className="fav-list-container">
        <ul key={eachPost._id}>
          <li>
            <img
              classname="favs-img"
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
      </div>
    ));

  return (
    <div>
      <div className="favList">
        <ShowPosts />
      </div>
    </div>
  );
}

export default Favs;
