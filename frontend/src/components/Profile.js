import { useContext } from "react";
import TheContext from "../TheContext";
import "../profile.css";

function Profile(props) {
  let { user, setUser } = useContext(TheContext);

  const logOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <div>
      <h2>{props.user?.name}</h2>
      <img src={user?.imageUrl} />
      <div className="button-logout-div">
        <button className="cart-remove" onClick={logOut}>
          Log out
        </button>
      </div>
    </div>
  );
}

export default Profile;
