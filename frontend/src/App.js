import logo from "./logo.svg";
import { useEffect, useState } from "react";
import actions from "./api";
import "./App.css";
import { Switch, Link, Route } from "react-router-dom";
import TheContext from "./TheContext";
import Home from "./components/Home";
import Auth from "./components/Auth";
import AddPost from "./components/AddPost";
import Favs from "./components/Favs";
import Profile from "./components/Profile";
import Retroshirts from "./components/Retroshirts";
import Newshirts from "./components/Newshirts";
import Singleshirt from "./components/Singleshirt";
import Bundesliga from "./components/Bundesliga";
import Prem from "./components/Prem";
import Cart from "./components/Cart";

function App() {
  let [user, setUser] = useState({});

  const getTheUser = async () => {
    let res = await actions.getUser();
    setUser(res.data);
  };

  useEffect(() => {
    getTheUser();
  }, []);

  return (
    <TheContext.Provider value={{ user, setUser, getTheUser }}>
      <div className="App">
        <h1>Retro Football Shirts</h1>
        <i>{user?.name}</i>
        <nav className="navBar">
          <Link to="/">Home</Link>
          <Link to="/NewShirts">New Shirts</Link>
          <Link to="/RetroShirts">Retro Shirts</Link>
          <Link to="/Favourites">Favorites</Link>
          <Link to="/Mycart">Cart</Link>

          {user?.name ? (
            <>
              <Link to="/AddPost">AddPost</Link>
              <Link to="/Profile">Profile</Link>
            </>
          ) : (
            <Link to="/Auth">Login/Signup</Link>
          )}
        </nav>

        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/AddPost"
            render={(props) => <AddPost {...props} />}
          />
          <Route
            exact
            path="/Favourites"
            render={(props) => <Favs {...props} user={user} />}
          />
          <Route exact path="/Auth" render={(props) => <Auth {...props} />} />
          <Route
            exact
            path="/Profile"
            render={(props) => <Profile {...props} user={user} />}
          />
          <Route
            exact
            path="/RetroShirts"
            render={(props) => <Retroshirts {...props} user={user} />}
          />
          <Route
            exact
            path="/NewShirts"
            render={(props) => <Newshirts {...props} user={user} />}
          />
          <Route
            exact
            path="/Shirts/:shirtId"
            render={(props) => <Singleshirt {...props} />}
          />
          <Route
            exact
            path="/Bundesliga"
            render={(props) => <Bundesliga {...props} />}
          />
          <Route
            exact
            path="/PremierLeague"
            render={(props) => <Prem {...props} />}
          />
          <Route exact path="/Mycart" render={(props) => <Cart {...props} />} />
        </Switch>
      </div>
    </TheContext.Provider>
  );
}

export default App;
