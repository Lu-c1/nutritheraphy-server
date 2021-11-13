const router = require("express").Router();
const User = require("../models/User.model");

router.get("/:id", (req, res, next) => {
  User.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
});

router.patch("/:id", (req, res, next) => {
  Recipe.findByIdAndUpdate(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
});

router.delete("/:id", (req, res, next) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then((data) => res.json("ok" + data._id))
    .catch((err) => next(err));
});
