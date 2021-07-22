import React, { useState, useEffect } from "react";

function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState({});

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    let results = shirts.filter((shirt) =>
      shirt.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
      
    <div className="search">
      <input
        type="text"
        placeholder="Search Item..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map((item) => (
            <li>
            <Link to={`/Shirts/${item._id}`}>
              <img
                className="shirtImages"
                src={item.imageUrl[0]}
                alt="shirtpic"
              />
            </Link></li>
            {/* <li>{item.year}</li>
          <li>{item.club}</li>
          <li>{item.size}</li>
          <li style={{ color: `red`, fontWeight: `bold` }}>
            ${item.price}
          </li> */}
        ))}
      </ul>
    </div>
    
  );
}

export default Search;
