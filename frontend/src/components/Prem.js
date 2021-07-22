import React from "react";
import { useState, useEffect } from "react";
import actions from "../api";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

function Prem(props) {
  const [prem, setPrem] = useState([]);
  //added for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(18);

  const getShirts = async () => {
    let res = await actions.shirts();
    console.log(res);
    setPrem(res.data);
  };

  useEffect(async () => {
    getShirts();
  }, []);

  let filterPrem = prem.filter((prem) => prem.league === "Premier League");
  //added for pagination
  const indexOfLastShirt = currentPage * postPerPage;
  const indexOfFirstShirt = indexOfLastShirt - postPerPage;
  const currentShirt = filterPrem.slice(indexOfFirstShirt, indexOfLastShirt);

  //change page
  const paginate = (pageNumber) => {
    console.log(pageNumber);
    setCurrentPage(pageNumber);
  };

  const ShowPrem = () => {
    return currentShirt.map((premShirt) => {
      return (
        <ul className="shirtList">
          <li>
            <Link to={`/Shirts/${premShirt._id}`}>
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
          <li style={{ color: `red`, fontWeight: `bold` }}>
            ${premShirt.price}
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
      <h2>Premier League</h2>
      <div className="shirtsPage">
        <ShowPrem />
      </div>
      <div>
        <Pagination
          postPerPage={postPerPage}
          totalPosts={filterPrem.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Prem;
