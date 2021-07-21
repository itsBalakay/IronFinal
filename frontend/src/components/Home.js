import { useEffect, useState } from "react";
import axios from "axios";
import actions from "../api";
import { Link } from "react-router-dom";

function Home(props) {
  // const [allPosts, setAllPosts] = useState([]);

  // useEffect(async () => {
  //   let res = await actions.getAllPosts();
  //   console.log(res);
  //   setAllPosts(res.data);
  // }, []);

  // const ShowPosts = () =>
  //   allPosts.map((eachPost) => (
  //     <li key={eachPost._id}>
  //       {eachPost.post} <i>created by ...{eachPost.userId?.name}</i>
  //     </li>
  //   ));

  return (
    <>
      <div className="header-img-div">
        <img className="cfs-header" src={"/photos/cfs11.jpeg"} alt="cfs" />
      </div>
      {/* <div className="showPostDiv">
        <ul><ShowPosts /></ul>
      </div> */}
      <div className="bottomHome">
        <div className="halfHome-1">
          <Link
            to="/Bundesliga"
            style={{
              textDecoration: `none`,
              backgroundColor: `grey`,
              color: `black`,
            }}
          >
            <h1 className="bun-h1">Bundesliga</h1>
          </Link>
        </div>

        <div className="halfHome-2">
          <Link
            to="/PremierLeague"
            style={{ textDecoration: `none`, color: `white` }}
          >
            <h1 className="prem-h1">Premier League</h1>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
