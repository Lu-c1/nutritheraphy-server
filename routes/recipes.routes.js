const router = require("express").Router();
const Recipe = require("../models/Recipe.model");

router.post("/create", (req, res, next) => {
  const {
    createdBy,
    title,
    image,
    portions,
    howToCookIt,
    kcal,
    carbohydrates,
    proteins,
    fats,
  } = req.body;
  Recipe.create({
    createdBy: req.session.user._id,
    title,
    image,
    portions,
    howToCookIt,
    kcal,
    carbohydrates,
    proteins,
    fats,
  })
    .then((data) => res.json(data))
    .catch((err) => next(err));
});

router.get("/list", (req, res, next) => {
  Recipe.find({}, { title: 1 })
    .populate("createdBy")
    .then((data) => res.json(data))
    .catch((err) => next(err));
});

router.get("/:id", (req, res, next) => {
  Recipe.findById(req.params.id)

    .then((data) => res.json(data))
    .catch((err) => next(err));
});
router.patch("/:id", (req, res, next) => {
  const {
    title,
    image,
    portions,
    howToCookIt,
    kcal,
    carbohydrates,
    proteins,
    fats,
  } = req.body;
  Recipe.findByIdAndUpdate(
    req.params.id,
    {
      title,
      image,
      portions,
      howToCookIt,
      kcal,
      carbohydrates,
      proteins,
      fats,
    },
    { new: true }
  )
    .then((data) => res.json(data))
    .catch((err) => next(err));
});
router.delete("/:id", (req, res, next) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then((data) => res.json("ok" + data._id))
    .catch((err) => next(err));
});

module.exports = router;
