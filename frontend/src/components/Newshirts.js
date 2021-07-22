import React, { useState, useEffect } from "react";
import actions from "../api";

function NewShirts(props) {
  const [newShirt, setNewShirt] = useState([]);

  useEffect(async () => {
    let res = await actions.shirts();
    console.log(res);
    setNewShirt(res.data);
  }, []);

  const ShowNew = () => {
    let filterNew = newShirt.filter((newShirt) => newShirt.year > 2020);
    return filterNew.map((newest) => {
      return (
        <>
          <ul className="shirtList">
            <li>
              <img
                className="shirtImages"
                src={newest.imageUrl[0]}
                alt="shirtpic"
              />
            </li>
            <li>{newest.year}</li>
            <li>{newest.club}</li>
            <li>{newest.size}</li>
            <li style={{ color: `red`, fontWeight: `bold` }}>
              ${newest.price}
            </li>
            <li>
              <button>Add to Cart</button>
            </li>
          </ul>
        </>
      );
    });
  };
  return (
    <div>
      <h2>New Shirts Collection</h2>
      <div className="shirtsPage">
        <ShowNew />
      </div>
    </div>
  );
}

export default NewShirts;
