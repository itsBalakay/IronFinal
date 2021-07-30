import React, { useEffect, useState } from "react";
import actions from "../api";
import { Link } from "react-router-dom";
import "../singleShirt.css";

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
          </ul>
        </div>
      );
    });
  }

  return (
    <>
      {/* Start of new Single CSS */}
      <div className="card-wrapper">
        <div className="card">
          {/* <!-- card left --> */}
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                <img
                  className="singleImg"
                  src={singleShirt?.imageUrl[0]}
                  alt="shirtimage1"
                />
                <img
                  className="singleImg"
                  src={singleShirt?.imageUrl[1]}
                  alt="shirtimage2"
                />
              </div>
            </div>
            <div className="img-select">
              <div className="img-item">
                <a href="#" data-id="2">
                  <img
                    className="singleImg"
                    src={singleShirt?.imageUrl[1]}
                    alt="shirtimage"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* <!-- card right --> */}
          <div className="product-content">
            <h2 className="product-title">{singleShirt?.club}</h2>
            <a href="#" className="product-link">
              visit our store
            </a>

            <div className="product-price">
              <h5 className="new-price">
                <b>
                  Price:{" "}
                  <span>
                    <b>${singleShirt?.price}</b>
                  </span>
                </b>
              </h5>
            </div>

            <div className="product-detail">
              <h2>about this item: </h2>
              <div className="product-detail-notes">
                <h6>{singleShirt?.notes}</h6>
              </div>

              <ul>
                <li>
                  Player: <span>{singleShirt?.player}</span>
                </li>
                <li>
                  Year: <span>{singleShirt?.year}</span>
                </li>
                <li>
                  League: <span>{singleShirt?.league}</span>
                </li>
                <li>
                  Condition: <span>{singleShirt?.condition}</span>
                </li>
                <li>
                  Size: <span>{singleShirt?.size}</span>
                </li>
              </ul>
            </div>

            <div className="purchase-info">
              {/* <input readOnly="true" type="number" min="0" value="1" /> */}
              <button
                type="button"
                className="btn"
                onClick={() => addRetroToCart(singleShirt)}
              >
                Add to Cart
              </button>
            </div>

            {/* <div className="social-links">
              <p>Share At: </p>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#">
                <i className="fab fa-pinterest"></i>
              </a>
            </div> */}
          </div>
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
