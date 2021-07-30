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
      <img src={user?.imageUrl} />
      <h2
        style={{
          textShadow: `2px 8px 6px rgba(0, 0, 0, 0.2),
    0px -5px 35px rgba(255, 255, 255, 0.3)`,
        }}
      >
        {props.user?.name}
      </h2>
      <h3>{user?.email}</h3>
      <div className="button-logout-div">
        <button className="cart-remove" onClick={logOut}>
          Log out
        </button>
      </div>
    </div>
  );
}

export default Profile;
