import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import YoutubeEmbed from "./YoutubeEmbed";
import actions from "../api";

function Home(props) {
  const [latest, setLatest] = useState([]);

  const getLatest = async () => {
    let res = await actions.shirts();
    setLatest(res.data);
    let result = res.data.splice(res.data.length - 3, res.data.length);
    setLatest(result);
    console.log(result);
  };

  useEffect(async () => {
    getLatest();
  }, []);

  function ShowLatest() {
    return latest.map((latestShirt) => {
      return (
        <div className="home-latest">
          <ul className="shirtList" style={{ border: `#7dba5d` }}>
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
      <div className="header-img-div">
        {/* <img className="cfs-header" src={"/photos/cfs11.jpeg"} alt="cfs" /> */}
        <ImageSlider className="cfs-header" slides={SliderData} />
      </div>
      {/* <div className="showPostDiv">
        <ul><ShowPosts /></ul>
      </div> */}

      <h1>⚽Shop by League⚽</h1>
      <div className="bottomHome">
        <div className="halfHome-1">
          <Link
            to="/Bundesliga"
            style={{
              textDecoration: `none`,
              backgroundColor: `white`,
              color: `black`,
            }}
          >
            <h1 className="bun-h1">Bundesliga</h1>
          </Link>
        </div>

        <div className="halfHome-2">
          <Link
            to="/PremierLeague"
            style={{
              textDecoration: `none`,
              color: `black`,
              backgroundColor: "white",
            }}
          >
            <h1 className="prem-h1">Premier League</h1>
          </Link>
        </div>
      </div>

      <div className="bottomHome-2">
        <div className="halfHome-3">
          <Link
            to="/LaLiga"
            style={{
              textDecoration: `none`,
              color: `black`,
              backgroundColor: "white",
            }}
          >
            <h1>La Liga</h1>
          </Link>
        </div>
        <div className="halfHome-4">
          <Link
            to="/SerieA"
            style={{
              textDecoration: `none`,
              backgroundColor: `white`,
              color: `black`,
            }}
          >
            <h1>Serie A</h1>
          </Link>
        </div>
      </div>
      <h1>🔥Latest Arrivals🔥</h1>
      <div className="shirtsLatest">
        <ShowLatest />
      </div>
      <div className="container-home">
        Make
        <div className="flip">
          <div>
            <div>wOrK</div>
          </div>
          <div>
            <div>lifeStyle</div>
          </div>
          <div>
            <div>Everything</div>
          </div>
        </div>
        AweSoMe!
      </div>

      <YoutubeEmbed />
      {/* embedId="KlbRiCYE-OQ" */}
    </>
  );
}

export default Home;
