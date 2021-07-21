import React from "react";
import { useState, useEffect } from "react";
import actions from "../api";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

function Bundesliga(props) {
  const [bun, setBun] = useState([]);

  //added for pagination
  //const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(9);

  const getShirts = async () => {
    let res = await actions.shirts();
    //setLoading(true);
    console.log(res);
    setBun(res.data);
    //setLoading(false); //added for pagination
    console.log(postPerPage);
  };

  useEffect(async (e) => {
    await getShirts();
  }, []);

  let filterBun = bun.filter((bun) => bun.league === "Bundesliga");
  //added for pagination
  const indexOfLastShirt = currentPage * postPerPage;
  const indexOfFirstShirt = indexOfLastShirt - postPerPage;
  const currentShirt = filterBun.slice(indexOfFirstShirt, indexOfLastShirt);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
