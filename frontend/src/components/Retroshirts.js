import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import actions from "../api";

function Retroshirts(props) {
  const [retro, setRetro] = useState([]);

  useEffect(async () => {
    let res = await actions.shirts();
    console.log(res);
    setRetro(res.data);
  }, []);

  const ShowRetro = () =>
    retro.map(({ _id, imageUrl, year, club, size, price }) => {
      <ul>
        <li>{imageUrl[0]}</li>
        <li>{year}</li>
        <li>{club}</li>
        <li>{size}</li>
        <li>{price}</li>
      </ul>;
    });

  return (
    <div>
      <h2>Retro collection</h2>
      <ShowRetro />
    </div>
  );
}

export default Retroshirts;
