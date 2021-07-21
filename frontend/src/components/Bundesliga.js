import React from "react";
import { useState, useEffect } from "react";
import actions from "../api";
import { Link } from "react-router-dom";

function Bundesliga(props) {
  const [bun, setBun] = useState([]);

  const getShirts = async () => {
    let res = await actions.shirts();
    console.log(res);
    setBun(res.data);
  };

  useEffect(async () => {
    getShirts();
  }, []);

  const ShowBun = () => {
    let filterBun = bun.filter((bun) => bun.league === "Bundesliga");
    return filterBun.map((bunShirt) => {
      return (
        <ul className="shirtList">
          <li>
            <Link to="/Shirts/:shirtId">
              <img
                className="shirtImages"
                src={bunShirt.imageUrl[0]}
                alt="shirtpic"
              />
            </Link>
          </li>
          <li>{bunShirt.year}</li>
          <li>{bunShirt.club}</li>
          <li>{bunShirt.size}</li>
          <li>${bunShirt.price}</li>
        </ul>
      );
    });
  };
  return (
    <div>
      <h2>Bundesliga</h2>
      <div className="shirtsPage">
        <ShowBun />
      </div>
    </div>
  );
}

export default Bundesliga;
