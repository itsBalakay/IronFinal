import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Search({ shirts }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // const handleChange = (e) => {
  //   console.log(e);
  //   setSearchTerm(e.target.value);
  // };

  // const submitSearch = (e) => {
  //   e.preventDefault();
  //   //handleOnSubmit();
  // };

  // useEffect(() => {
  //   console.log(shirts, searchTerm);
  //   let results = shirts.filter((shirt) => {
  //     return Object.values(shirt).join(" ").toLowerCase().includes(searchTerm);
  //   });
  //   setSearchResults(results);
  // }, [searchTerm]);

  const ShowSearch = () => {
    return shirts.map((item) => {
      return (
        <>
          <ul className="shirtList">
            <li>
              <Link to={`/Shirts/${item._id}`}>
                <img
                  className="shirtImages"
                  src={item.imageUrl[0]}
                  alt="shirtpic"
                />
              </Link>
            </li>
            <li>{item.year}</li>
            <li>{item.club}</li>
            <li>{item.size}</li>
            <li style={{ color: `red`, fontWeight: `bold` }}>${item.price}</li>
            <li>
              <Link to="/Mycart">
                <button>Add to Cart</button>
              </Link>
            </li>
          </ul>
        </>
      );
    });
  };

  return (
    <div className="search">
      {/* <div>
        <input
          type="text"
          placeholder="Search Item..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div> */}

      <div className="shirtsPage">
        <ShowSearch />
      </div>
    </div>
  );
}

export default Search;
