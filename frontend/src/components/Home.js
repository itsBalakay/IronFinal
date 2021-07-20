import { useEffect, useState } from "react";
import axios from "axios";
import actions from "../api";

function Home(props) {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(async () => {
    let res = await actions.getAllPosts();
    console.log(res);
    setAllPosts(res.data);
  }, []);

  const ShowPosts = () =>
    allPosts.map((eachPost) => (
      <li key={eachPost._id}>
        {eachPost.post} <i>created by ...{eachPost.userId?.name}</i>
      </li>
    ));

  return (
    <>
      <div className="header-img-div">
        <img className="cfs-header" src={"/photos/cfs11.jpeg"} alt="cfs" />
      </div>
      <div className="showPostDiv">
        <ul>
          <ShowPosts />
        </ul>
      </div>
    </>
  );
}

export default Home;
