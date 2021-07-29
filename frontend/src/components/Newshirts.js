import React, { useState, useEffect } from "react";
import actions from "../api";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

function NewShirts(props) {
  const [newShirt, setNewShirt] = useState([]);
  //added for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(18);

  useEffect(async () => {
    let res = await actions.shirts();
    console.log(res);
    setNewShirt(res.data);
  }, []);

  let filterNew = newShirt.filter((newShirt) => newShirt.year > 2020);
  //added for pagination
  const indexOfLastShirt = currentPage * postPerPage;
  const indexOfFirstShirt = indexOfLastShirt - postPerPage;
  const currentShirt = filterNew.slice(indexOfFirstShirt, indexOfLastShirt);

  //change page
  const paginate = (pageNumber) => {
    console.log(pageNumber);
    setCurrentPage(pageNumber);
  };

  const ShowNew = () => {
    let filterNew = newShirt.filter((newShirt) => newShirt.year > 2020);
    return currentShirt.map((newest) => {
      return (
        <>
          <ul className="shirtList">
            <li>
              <Link to={`/Shirts/${newest._id}`}>
                <img
                  className="shirtImages"
                  src={newest.imageUrl[0]}
                  alt="shirtpic"
                />
              </Link>
            </li>
            <li>
              <Link style={{ color: `black` }} to={`/Shirts/${newest._id}`}>
                {newest.year}
              </Link>
            </li>
            <li>
              <Link style={{ color: `black` }} to={`/Shirts/${newest._id}`}>
                {newest.club}
              </Link>
            </li>
            <li>
              <Link style={{ color: `black` }} to={`/Shirts/${newest._id}`}>
                {newest.size}
              </Link>
            </li>
            <li style={{ color: `red`, fontWeight: `bold` }}>
              ${newest.price}
            </li>
          </ul>
        </>
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
        New Shirts Collection
      </h2>
      <div className="shirtsPage">
        <ShowNew />
      </div>
      <div>
        <Pagination
          postPerPage={postPerPage}
          totalPosts={filterNew.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default NewShirts;
