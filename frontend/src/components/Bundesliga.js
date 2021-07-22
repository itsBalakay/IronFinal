import React from "react";
import { useState, useEffect } from "react";
import actions from "../api";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

function Bundesliga(props) {
  const [bun, setBun] = useState([]);

  //added for pagination
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); //state not setting after render so only renders whatever number page is there or state not setting at all
  const [postPerPage] = useState(9);

  const getShirts = async () => {
    let res = await actions.shirts();
    // setLoading(true);
    setBun(res.data);
    // setLoading(false); //added for pagination
  };

  useEffect(async () => {
    getShirts();
  }, []);

  let filterBun = bun.filter((bun) => bun.league === "Bundesliga");
  console.log(filterBun);
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
    // if (loading) {
    //   return <h2>Loading...</h2>;
    // }
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
            <button>Add to Cart</button>
          </li>
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
      <div>
        {/* added for pagination */}
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
