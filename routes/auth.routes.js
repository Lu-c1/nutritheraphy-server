const router = require("express").Router();
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");

router.post("/signup", (req, res, next) => {
  const {
    username,
    password,
    image,
    email,
    name,
    lastName,
    city,
    country,
    typeOfDiet,
  } = req.body;

  //verification
  if (!username || password.length < 7) {
    return res.status(400).json({
      errorMessage: `You need ${
        username ? "at least seven characters" : "a username"
      }`,
    });
  }

  User.findOne({ username: username }).then((foundUser) => {
    if (foundUser) {
      return res.status(400).json({
        errorMessage: "This username already exists",
      });
    }
    //encrypt
    const saltRounds = 12;
    return bcrypt
      .genSalt(saltRounds)
      .then((salt) => bcrypt.hash(password, salt))
      .then((hashedPassword) => {
        return User.create({
          username,
          password: hashedPassword,
          image,
          email,
          name,
          lastName,
          city,
          country,
          typeOfDiet,
        });
      })
      .then((user) => {
        req.session.user = user;
        res.status(201).json(user);
      })
      .catch((err) => {
        return res.status(500).json({ errorMessage: "user not created" });
      });
  });
});

router.post("/login", (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      errorMessage: `you need a ${
        username ? "password" : "username and a password"
      }`,
    });
  }
  User.findOne({ username })
    .then((user) => {
      if (!user) {
        return res
          .status(400)
          .json({ errorMessage: "please, create an account" });
      }
      bcrypt.compare(password, user.password).then((isSamePassword) => {
        if (!isSamePassword) {
          return res.status(400).json({ errorMessage: "Wrong password" });
        }
        console.log(req.session);
        req.session.user = user;
        return res.status(201).json(user);
      });
    })
    .catch((err) => next(err));
});

router.post("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ errorMessage: "something went wrong" });
    }
    res.json({ successMessage: "session has finished" });
  });
});
router.get("/loggedin", (req, res, next) => {
  //console.log(req.session)
  if (req.session.user) {
    return res.json({ user: req.session.user });
  }
  res
    .status(403)
    .json({ errorMessage: "Please, try again, you are not logged in" });
});

module.exports = router;
