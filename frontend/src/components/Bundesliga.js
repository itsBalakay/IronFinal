import React from "react";
import { useState, useEffect } from "react";
import actions from "../api";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import Search from "./Search";

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
          <li style={{ color: `red`, fontWeight: `bold` }}>
            ${bunShirt.price}
          </li>
          <li>
            <Link to="/Mycart">
              <button>Add to Cart</button>
            </Link>
          </li>
        </ul>
      );
    });
  };
  return (
    <div>
      <h2>Bundesliga</h2>
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
