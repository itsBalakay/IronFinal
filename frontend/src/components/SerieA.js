import React from "react";
import { useState, useEffect } from "react";
import actions from "../api";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

function SerieA(props) {
  const [serieA, setSerieA] = useState([]);

  //added for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(18);

  const getShirts = async () => {
    let res = await actions.shirts();
    setSerieA(res.data);
  };

  useEffect(async () => {
    getShirts();
  }, []);

  let filterSerieA = serieA.filter((serieA) => serieA.league === "Serie A");
  //added for pagination
  const indexOfLastShirt = currentPage * postPerPage;
  const indexOfFirstShirt = indexOfLastShirt - postPerPage;
  const currentShirt = filterSerieA.slice(indexOfFirstShirt, indexOfLastShirt);

  //change page
  const paginate = (pageNumber) => {
    console.log(pageNumber);
    setCurrentPage(pageNumber);
  };
  const ShowSerieA = () => {
    return currentShirt.map((serieAShirt) => {
      return (
        <ul className="shirtList">
          <li>
            <Link to={`/Shirts/${serieAShirt._id}`}>
              <img
                className="shirtImages"
                src={serieAShirt.imageUrl[0]}
                alt="shirtpic"
              />
            </Link>
          </li>
          <li>{serieAShirt.year}</li>
          <li>{serieAShirt.club}</li>
          <li>{serieAShirt.size}</li>
          <li style={{ color: `red`, fontWeight: `bold` }}>
            ${serieAShirt.price}
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
      <h2>Serie A</h2>
      {/* <Search shirts={filterBun} /> */}
      <div className="shirtsPage">
        <ShowSerieA />
      </div>
      <div>
        <Pagination
          postPerPage={postPerPage}
          totalPosts={filterSerieA.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default SerieA;
