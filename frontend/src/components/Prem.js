import React from "react";
import { useState, useEffect } from "react";
import actions from "../api";
import { Link } from "react-router-dom";

function Prem(props) {
  const [prem, setPrem] = useState([]);

  const getShirts = async () => {
    let res = await actions.shirts();
    console.log(res);
    setPrem(res.data);
  };

  useEffect(async () => {
    getShirts();
  }, []);

  const ShowPrem = () => {
    let filterPrem = prem.filter((prem) => prem.league === "Premier League");
    return filterPrem.map((premShirt) => {
      return (
        <ul className="shirtList">
          <li>
            <Link to="/Shirts/:shirtId">
              <img
                className="shirtImages"
                src={premShirt.imageUrl[0]}
                alt="shirtpic"
              />
            </Link>
          </li>
          <li>{premShirt.year}</li>
          <li>{premShirt.club}</li>
          <li>{premShirt.size}</li>
          <li>${premShirt.price}</li>
        </ul>
      );
    });
  };
  return (
    <div>
      <h2>Premier League</h2>
      <div className="shirtsPage">
        <ShowPrem />
      </div>
    </div>
  );
}

export default Prem;
