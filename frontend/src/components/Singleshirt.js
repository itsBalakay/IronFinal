import React, { useEffect, useState } from "react";
import actions from "../api";

function Singleshirt(props) {
  const [singleShirt, setSingleShirt] = useState([]);

  useEffect(async () => {
    console.log("is useEffect working?");
    let res = await actions.oneShirt;
    console.log(res.data);
    setSingleShirt(res.data);
  }, []);

  return (
    <div className="singlePage">
      <div>
        {/* <img src={singleShirt.imageUrl[0]} alt="single shirt pic" /> */}
        Hello
        {/* {singleShirt.club} */}
      </div>
    </div>
  );
}

export default Singleshirt;
