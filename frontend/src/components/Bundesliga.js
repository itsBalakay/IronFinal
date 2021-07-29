import React from "react";
import { useState, useEffect } from "react";
import actions from "../api";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

function Bundesliga(props) {
  const [bun, setBun] = useState([]);

  //added for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(18);

  const getShirts = async () => {
    let res = await actions.shirts();
    setBun(res.data);
  };

  useEffect(async () => {
    getShirts();
  }, []);

  let filterBun = bun.filter((bun) => bun.league === "Bundesliga");
  //added for pagination
  const indexOfLastShirt = currentPage * postPerPage;
  const indexOfFirstShirt = indexOfLastShirt - postPerPage;
  const currentShirt = filterBun.slice(indexOfFirstShirt, indexOfLastShirt);

  //change page
  const paginate = (pageNumber) => {
    console.log(pageNumber);
    setCurrentPage(pageNumber);
  };
  const ShowBun = () => {
    return currentShirt.map((bunShirt) => {
      return (
        <ul className="shirtList">
          <li>
            <Link to={`/Shirts/${bunShirt._id}`}>
              <img
                className="shirtImages"
                src={bunShirt.imageUrl[0]}
                alt="shirtpic"
              />
            </Link>
          </li>
          <li>
            <Link style={{ color: `black` }} to={`/Shirts/${bunShirt._id}`}>
              {bunShirt.year}
            </Link>
          </li>
          <li>
            <Link style={{ color: `black` }} to={`/Shirts/${bunShirt._id}`}>
              {bunShirt.club}
            </Link>
          </li>
          <li>
            <Link style={{ color: `black` }} to={`/Shirts/${bunShirt._id}`}>
              {bunShirt.size}
            </Link>
          </li>
          <li style={{ color: `red`, fontWeight: `bold` }}>
            ${bunShirt.price}
          </li>
        </ul>
      );
    });
  };
  return (
    <div>
      <h2
        style={{
          textShadow: `2px 8px 6px rgba(0, 0, 0, 0.2),
    0px -5px 35px rgba(255, 255, 255, 0.3)`,
        }}
      >
        Bundesliga
      </h2>
      {/* <Search shirts={filterBun} /> */}
      <div className="shirtsPage">
        <ShowBun />
      </div>
      <div>
        <Pagination
          postPerPage={postPerPage}
          totalPosts={filterBun.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Bundesliga;
