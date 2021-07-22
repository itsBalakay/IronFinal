const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Post = require("./models/Post");
const Shirts = require("./models/Shirts");
const User = require("./models/User");
/**ALL OUR BACKEND ROUTES */

router.get("/", (req, res) => {
  res.json({ serverWorking: true });
});

router.get("/get-the-user", authorize, async (req, res) => {
  let user = await User.findById(res.locals.user._id);
  res.json(user);
});

router.post("/add-post", authorize, async (req, res) => {
  let newPost = req.body;
  console.log(newPost, "pineapple");
  newPost.userId = res.locals.user._id;
  Post.create(newPost).then((post) => {
    res.json(post);
  });
});

router.get("/all-the-posts", (req, res) => {
  Post.find()
    .populate("userId")
    .then((posts) => {
      res.json(posts);
    });
});

router.get("/all-the-shirts", (req, res) => {
  Shirts.find().then((shirts) => {
    res.json(shirts);
  });
});

//Fix Route for single shirt page
router.get("/one-shirt/:shirtId", (req, res) => {
  Shirts.findById(req.params.shirtId).then((shirt) => {
    res.json(shirt);
  });
});
//fix above route for single shirt page

router.post("/authenticate", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });

  if (!user) {
    user = await User.create(req.body);
  }

  jwt.sign({ user }, "secret key", { expiresIn: "180min" }, (err, token) => {
    res.json({ user, token });
  });
});

//Middle ware >>> Put this in the middle of any route where you want to authorize
function authorize(req, res, next) {
  let token = req.headers.authorization.split(" ")[1]; //Token from front end
  if (token) {
    jwt.verify(token, "secret key", (err, data) => {
      if (!err) {
        res.locals.user = data.user; //Set global variable with user data in the backend
        next();
      } else {
        res.status(403).json({ message: err });
        //throw new Error({ message: "ahhh" })
      }
    });
  } else {
    res.status(403).json({ message: "Must be logged in!" });
  }
}

module.exports = router;
