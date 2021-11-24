const router = require("express").Router();
const User = require("../models/User.model");

router.get("/list", (req, res, next) => {
  User.find({}, { username: 1 })
    .then((data) => res.json(data))
    .catch((err) => next(err));
});

router.get("/:id", (req, res, next) => {
  User.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
});

router.patch("/:id", (req, res, next) => {
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
  User.findByIdAndUpdate(
    req.params.id,
    {
      username,
      password,
      image,
      email,
      name,
      lastName,
      city,
      country,
      typeOfDiet,
    },
    { new: true }
  )
    .then((data) => res.json(data))
    .catch((err) => next(err));
});

router.delete("/:id", (req, res, next) => {
  User.findByIdAndDelete(req.params.id)
    .then((data) => {
      // here destroy the sessions. check how it is done in auth routes
      res.status(200).json("ok" + data._id);
    })
    .catch((err) => next(err));
});

module.exports = router;
