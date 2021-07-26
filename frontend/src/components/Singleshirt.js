import React, { useEffect, useState } from "react";
import actions from "../api";
import { Link } from "react-router-dom";

function Singleshirt(props) {
  const [singleShirt, setSingleShirt] = useState();

  useEffect(async () => {
    console.log("is useEffect working?");
    let res = await actions.oneShirt(props.match.params.shirtId);
    console.log(res.data);
    setSingleShirt(res.data);
  }, []);

  return (
    <div className="singleShirtContainer">
      <div className="singleShirtFlex">
        <img
          style={{ width: `100%` }}
          src={singleShirt?.imageUrl[0]}
          alt="single-shirt-pic"
        />
        <img
          style={{ width: `100%` }}
          src={singleShirt?.imageUrl[1]}
          alt="single-shirt-pic"
        />
      </div>
      <div className="singleDescription">
        <ul>
          <li>
            Club: <span style={{ color: `maroon` }}>{singleShirt?.club}</span>
          </li>
          <li>
            Year: <span style={{ color: `maroon` }}>{singleShirt?.year}</span>
          </li>
          <li>
            Player:{" "}
            <span style={{ color: `maroon` }}>{singleShirt?.player}</span>
          </li>
          <li>
            League:{" "}
            <span style={{ color: `maroon` }}>{singleShirt?.league}</span>
          </li>
          <li>
            Size: <span style={{ color: `maroon` }}>{singleShirt?.size}</span>
          </li>
          <li>
            Condition:{" "}
            <span style={{ color: `maroon` }}>{singleShirt?.condition}</span>
          </li>
          <li>
            Price: $<span style={{ color: `red` }}>{singleShirt?.price}</span>
          </li>
          <li>
            Notes: <span style={{ color: `maroon` }}>{singleShirt?.notes}</span>
          </li>
          <li>
            <Link to="/Mycart">
              <button className="mylist-popbutton">➕ Add to Cart</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Singleshirt;
