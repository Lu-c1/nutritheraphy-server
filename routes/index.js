const router = require("express").Router();
const authRoutes = require("./auth.routes");
const recipesRoutes = require("./recipes.routes.js");
const profileRoutes = require("./profile.routes.js");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", authRoutes);
router.use("/recipes", recipesRoutes);
router.use("/profile", profileRoutes);

module.exports = router;
