import React, { useState, useEffect } from "react";
import actions from "../api";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

function Retroshirts(props) {
  const [retro, setRetro] = useState([]);

  //added for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(18);

  const getShirts = async () => {
    let res = await actions.shirts();
    console.log(res);
    setRetro(res.data);
  };

  useEffect(async () => {
    getShirts();
  }, []);

  let filterRetro = retro.filter((retro) => retro.year <= 2020);
  //added for pagination
  const indexOfLastShirt = currentPage * postPerPage;
  const indexOfFirstShirt = indexOfLastShirt - postPerPage;
  const currentShirt = filterRetro.slice(indexOfFirstShirt, indexOfLastShirt);

  //change page
  const paginate = (pageNumber) => {
    console.log(pageNumber);
    setCurrentPage(pageNumber);
  };

  const ShowRetro = () => {
    return currentShirt.map((retroShirt) => {
      return (
        <div className="shirt-border">
          <ul className="shirtList">
            <li>
              <Link to={`/Shirts/${retroShirt._id}`}>
                <img
                  className="shirtImages"
                  src={retroShirt.imageUrl[0]}
                  alt="shirtpic"
                />
              </Link>
            </li>
            <li>
              <Link style={{ color: `black` }} to={`/Shirts/${retroShirt._id}`}>
                {retroShirt.year}
              </Link>
            </li>
            <li>
              <Link style={{ color: `black` }} to={`/Shirts/${retroShirt._id}`}>
                {retroShirt.club}
              </Link>
            </li>
            <li>
              <Link style={{ color: `black` }} to={`/Shirts/${retroShirt._id}`}>
                {retroShirt.size}
              </Link>
            </li>
            <li style={{ color: `red`, fontWeight: `bold` }}>
              ${retroShirt.price}
            </li>
          </ul>
        </div>
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
        Retro collection
      </h2>
      <div className="shirtsPage">
        <ShowRetro />
      </div>
      <div>
        <Pagination
          postPerPage={postPerPage}
          totalPosts={filterRetro.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Retroshirts;
