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

  const [like, setLike] = useState([]);

  const getLike = async (props) => {
    let res = await actions.shirts();
    setLike(res.data);
    let random = res.data.sort(() => Math.random() - Math.random()).slice(0, 3);
    setLike(random);
  };

  useEffect(async () => {
    getLike();
  }, []);

  //function to save retro shirt into the api
  const addRetroToCart = async (singleShirt) => {
    console.log("is this working?");
    let res = await actions.addCart(singleShirt);
    console.log(res);
  };

  function ShowLikes() {
    return like.map((latestShirt) => {
      return (
        <div className="home-latest">
          <ul className="shirtList">
            <li>
              <Link to={`/Shirts/${latestShirt._id}`}>
                <img
                  className="shirtImages"
                  src={latestShirt.imageUrl[0]}
                  alt="shirtpic"
                />
              </Link>
            </li>

            <li>
              <Link
                style={{ color: `black` }}
                to={`/Shirts/${latestShirt._id}`}
              >
                {latestShirt.club}
              </Link>
            </li>

            <li style={{ color: `red`, fontWeight: `bold` }}>
              ${latestShirt.price}
            </li>
            <li>
              <Link to="/Mycart">
                <button>Add to Cart</button>
              </Link>
            </li>
          </ul>
        </div>
      );
    });
  }

  return (
    <>
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
              Notes:{" "}
              <span style={{ color: `maroon` }}>{singleShirt?.notes}</span>
            </li>
            <li>
              <Link to="/Mycart">
                <button
                  className="mylist-popbutton"
                  onClick={() => addRetroToCart(singleShirt)}
                >
                  Add to Cart
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2>You may also like...</h2>
      </div>
      <div className="shirtsLatest">
        <ShowLikes />
      </div>
    </>
  );
}

export default Singleshirt;
