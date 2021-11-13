const router = require("express").Router();
const Recipe = require("../models/Recipe.model");

router.post("/create", (req, res, next) => {
  //console.log(req.body)
  Recipe.create({
    createdBy: req.body.createdBy,
    title: req.body.title,
    image: req.body.image,
    portions: req.body.portions,
    howToCookIt: req.body.howToCookIt,
    kcal: req.body.kcal,
    carbohydrates: req.body.carbohydrates,
    proteins: req.body.proteins,
    fats: req.body.fats,
  })
    .then((data) => res.json(data))
    .catch((err) => next(err));
});

router.get("/list", (req, res, next) => {
  Recipe.find({}, { title: 1 })
    .then((data) => res.json(data))
    .catch((err) => next(err));
});

router.get("/:id", (req, res, next) => {
  Recipe.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
});
router.patch("/:id", (req, res, next) => {
  Recipe.findByIdAndUpdate(
    req.params.id,
    {
      createdBy,
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
