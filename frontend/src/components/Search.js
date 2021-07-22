import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Search({ shirts }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    console.log(e);
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    let results = shirts.filter((shirt) => {
      return shirt.toString().toLowerCase().includes(searchTerm);
    });
    setSearchResults(results);
  }, [searchTerm]);

  const ShowSearch = () => {
    return searchResults.map((item) => {
      return (
        <ul>
          <li>
            <Link to={`/Shirts/${item._id}`}>
              <li>
                <img
                  className="shirtImages"
                  src={item.imageUrl[0]}
                  alt="shirtpic"
                />
              </li>
            </Link>
            <li>{item.year}</li>
            <li>{item.club}</li>
            <li>{item.size}</li>
            <li style={{ color: `red`, fontWeight: `bold` }}>${item.price}</li>
          </li>
        </ul>
      );
    });
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search Item..."
        value={searchTerm}
        onChange={handleChange}
      />
      <div>
        <ShowSearch />
      </div>
    </div>
  );
}

export default Search;
