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

  const ShowRetro = () => {
    let filterRetro = retro.filter((retro) => retro.year <= 2020);
    return filterRetro.map((retroShirt) => {
      return (
        <ul className="shirtList">
          <li>
            <img
              className="shirtImages"
              src={retroShirt.imageUrl[0]}
              alt="shirtpic"
            />
          </li>
          <li>{retroShirt.year}</li>
          <li>{retroShirt.club}</li>
          <li>{retroShirt.size}</li>
          <li>${retroShirt.price}</li>
        </ul>
      );
    });
  };
  return (
    <div>
      <h2>Retro collection</h2>
      <div className="shirtsPage">
        <ShowRetro />
      </div>
    </div>
  );
}

export default Retroshirts;
