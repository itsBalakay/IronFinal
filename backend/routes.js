const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_TEST);
const Post = require("./models/Post");
const Shirts = require("./models/Shirts");
const User = require("./models/User");
const Cart = require("./models/Cart");
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

router.post("/add-feedback", authorize, async (req, res) => {
  let newFeedback = req.body;
  console.log(newFeedback, "pineapple");
  // newFeedback.userId = res.locals.user._id;
  Feedback.create(newFeedback).then((feedback) => {
    res.json(feedback);
  });
});

router.post("/add-to-cart", authorize, async (req, res) => {
  let newItem = req.body;
  console.log(newItem, "guava");
  newItem.userId = res.locals.user._id;
  Cart.create(newItem).then((shirtCart) => {
    res.json(shirtCart);
  });
});

router.get("/get-cart", authorize, async (req, res) => {
  console.log(res.locals, "getcart");
  Cart.find({ userId: res.locals.user._id }).then((cartItems) => {
    console.log(cartItems);
    res.json(cartItems);
  });
});

router.delete("/delete-cart-item", authorize, async (req, res) => {
  Cart.findByIdAndDelete(req.query.id).then((removeItem) => {
    res.json(removeItem);
  });
});

router.post("/payment", authorize, async (req, res) => {
  let { amount, id } = req.body;
  console.log(amount, id, "monkey");
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Retro Shirts Football",
      payment_method: id,
      confirm: true,
    });
    console.log("Payment", payment);
    res.json({
      message: "Payment successful",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
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
  console.log(token, "snail");

  if (token) {
    jwt.verify(token, "secret key", (err, data) => {
      console.log(err, data);
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
