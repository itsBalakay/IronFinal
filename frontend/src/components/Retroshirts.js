import React, { useState, useEffect } from "react";
import actions from "../api";
import { Link } from "react-router-dom";
// import TheContext from "../TheContext";

function Retroshirts(props) {
  const [retro, setRetro] = useState([]);
  const [skip, setSkip] = useState(0);

  const getShirts = async () => {
    let res = await actions.shirts();
    console.log(res);
    setRetro(res.data);
  };

  useEffect(async () => {
    getShirts();
  }, []);

  const ShowRetro = () => {
    let filterRetro = retro.filter((retro) => retro.year <= 2020);
    return filterRetro.map((retroShirt) => {
      return (
        <ul className="shirtList">
          <li>
            <Link to="/Shirts/:shirtId">
              <img
                className="shirtImages"
                src={retroShirt.imageUrl[0]}
                alt="shirtpic"
              />
            </Link>
          </li>
          <li>{retroShirt.year}</li>
          <li>{retroShirt.club}</li>
          <li>{retroShirt.size}</li>
          <li style={{ color: `red`, fontWeight: `bold` }}>
            ${retroShirt.price}
          </li>
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
