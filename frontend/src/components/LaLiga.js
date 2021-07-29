import React from "react";
import { useState, useEffect } from "react";
import actions from "../api";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

function LaLiga(props) {
  const [liga, setLiga] = useState([]);

  //added for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(18);

  const getShirts = async () => {
    let res = await actions.shirts();
    setLiga(res.data);
  };

  useEffect(async () => {
    getShirts();
  }, []);

  let filterLiga = liga.filter((liga) => liga.league === "La Liga");
  //added for pagination
  const indexOfLastShirt = currentPage * postPerPage;
  const indexOfFirstShirt = indexOfLastShirt - postPerPage;
  const currentShirt = filterLiga.slice(indexOfFirstShirt, indexOfLastShirt);

  //change page
  const paginate = (pageNumber) => {
    console.log(pageNumber);
    setCurrentPage(pageNumber);
  };
  const ShowLiga = () => {
    return currentShirt.map((ligaShirt) => {
      return (
        <ul className="shirtList">
          <li>
            <Link to={`/Shirts/${ligaShirt._id}`}>
              <img
                className="shirtImages"
                src={ligaShirt.imageUrl[0]}
                alt="shirtpic"
              />
            </Link>
          </li>
          <li>
            <Link style={{ color: `black` }} to={`/Shirts/${ligaShirt._id}`}>
              {ligaShirt.year}
            </Link>
          </li>
          <li>
            <Link style={{ color: `black` }} to={`/Shirts/${ligaShirt._id}`}>
              {ligaShirt.club}
            </Link>
          </li>
          <li>
            <Link style={{ color: `black` }} to={`/Shirts/${ligaShirt._id}`}>
              {ligaShirt.size}
            </Link>
          </li>
          <li style={{ color: `red`, fontWeight: `bold` }}>
            ${ligaShirt.price}
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
        La Liga
      </h2>
      {/* <Search shirts={filterBun} /> */}
      <div className="shirtsPage">
        <ShowLiga />
      </div>
      <div>
        <Pagination
          postPerPage={postPerPage}
          totalPosts={filterLiga.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default LaLiga;
