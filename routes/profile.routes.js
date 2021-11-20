const router = require("express").Router();
const User = require("../models/User.model");

router.get("/list", (req, res, next) => {
  User.find({}, { title: 1 })
    .then((data) => res.json(data))
    .catch((err) => next(err));
});

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

module.exports = router;
