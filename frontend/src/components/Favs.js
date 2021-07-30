import React from "react";
import "../favs.css";
import { useEffect, useState } from "react";
import axios from "axios";
import actions from "../api";

function Favs(props) {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(async () => {
    let res = await actions.getAllPosts();
    console.log(res);
    setAllPosts(res.data);
  }, []);

  const ShowPosts = () =>
    allPosts.map((eachPost) => (
      <div className="wrap-div">
        <div className="fav-list-container">
          <ul key={eachPost._id}>
            <li>
              <div className="product-tumb">
                <img
                  classname="favs-img"
                  src={eachPost.imageUrl}
                  alt="shirtcollection"
                />
              </div>
            </li>
            <div className="product-details">
              <li>
                <b>
                  Club: <span style={{ color: `blue` }}>{eachPost.club}</span>
                </b>
              </li>
              <li>
                <b>
                  League:{" "}
                  <span style={{ color: `blue` }}>{eachPost.league}</span>
                </b>
              </li>
              <li>
                <b>
                  Player:{" "}
                  <span style={{ color: `blue` }}>{eachPost.player}</span>
                </b>
              </li>
              <li>
                <b>
                  Notes: <span style={{ color: `blue` }}>{eachPost.notes}</span>
                </b>
              </li>
            </div>
            <hr></hr>
            <li>
              <i>
                <b>
                  Posted by:{" "}
                  <span style={{ color: `red` }}>{eachPost.userId?.name}</span>
                </b>
              </i>
            </li>
            <div class="product-links">
              <a href="">
                <i class="fa fa-heart"></i>
              </a>
            </div>
          </ul>
        </div>
      </div>
    ));

  return (
    <div>
      <div>
        <h1
          style={{
            textShadow: `2px 8px 6px rgba(0, 0, 0, 0.2),
    0px -5px 35px rgba(255, 255, 255, 0.3)`,
          }}
        >
          Show off your new shirts!
        </h1>
        <h6>
          {" "}
          <span style={{ color: `red` }}>**</span>{" "}
          <i>Sign in required to show off your favourite shirts</i>{" "}
          <span style={{ color: `red` }}>**</span>
        </h6>
      </div>
      <div className="favList">
        <ShowPosts />
      </div>
    </div>
  );
}

export default Favs;

{
  /* <div class="product-card">
<div class="badge">Hot</div>
<div class="product-tumb">
  <img src="https://i.imgur.com/xdbHo4E.png" alt="">
</div>
<div class="product-details">
  <span class="product-catagory">Women,bag</span>
  <h4><a href="">Women leather bag</a></h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
  <div class="product-bottom-details">
    <div class="product-price"><small>$96.00</small>$230.99</div>
    <div class="product-links">
      <a href=""><i class="fa fa-heart"></i></a>
      <a href=""><i class="fa fa-shopping-cart"></i></a>
    </div>
  </div>
</div>
</div> */
}

// @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');
// *
// {
//     -webkit-box-sizing: border-box;
//             box-sizing: border-box;
//     margin: 0;
//     padding: 0;
// }

// body
// {
//     font-family: 'Roboto', sans-serif;
// }
// a
// {
//     text-decoration: none;
// }
// .product-card {
//     width: 380px;
//     position: relative;
//     box-shadow: 0 2px 7px #dfdfdf;
//     margin: 50px auto;
//     background: #fafafa;
// }

// .badge {
//     position: absolute;
//     left: 0;
//     top: 20px;
//     text-transform: uppercase;
//     font-size: 13px;
//     font-weight: 700;
//     background: red;
//     color: #fff;
//     padding: 3px 10px;
// }

// .product-tumb {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 300px;
//     padding: 50px;
//     background: #f0f0f0;
// }

// .product-tumb img {
//     max-width: 100%;
//     max-height: 100%;
// }

// .product-details {
//     padding: 30px;
// }

// .product-catagory {
//     display: block;
//     font-size: 12px;
//     font-weight: 700;
//     text-transform: uppercase;
//     color: #ccc;
//     margin-bottom: 18px;
// }

// .product-details h4 a {
//     font-weight: 500;
//     display: block;
//     margin-bottom: 18px;
//     text-transform: uppercase;
//     color: #363636;
//     text-decoration: none;
//     transition: 0.3s;
// }

// .product-details h4 a:hover {
//     color: #fbb72c;
// }

// .product-details p {
//     font-size: 15px;
//     line-height: 22px;
//     margin-bottom: 18px;
//     color: #999;
// }

// .product-bottom-details {
//     overflow: hidden;
//     border-top: 1px solid #eee;
//     padding-top: 20px;
// }

// .product-bottom-details div {
//     float: left;
//     width: 50%;
// }

// .product-price {
//     font-size: 18px;
//     color: #fbb72c;
//     font-weight: 600;
// }

// .product-price small {
//     font-size: 80%;
//     font-weight: 400;
//     text-decoration: line-through;
//     display: inline-block;
//     margin-right: 5px;
// }

// .product-links {
//     text-align: right;
// }

// .product-links a {
//     display: inline-block;
//     margin-left: 5px;
//     color: #e1e1e1;
//     transition: 0.3s;
//     font-size: 17px;
// }

// .product-links a:hover {
//     color: #fbb72c;
// }
