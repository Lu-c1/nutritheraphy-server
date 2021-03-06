const router = require("express").Router();
const authRoutes = require("./auth.routes");
const recipesRoutes = require("./recipes.routes.js");
const profileRoutes = require("./profile.routes.js");
const chatRoutes = require("./chat.routes.js");
const imageUpload = require("../config/cloudinary.config");
const { isLoggedIn } = require("../middlewares/authorization.js");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.post("/upload", imageUpload.single("imageUrl"), (req, res, next) => {
  console.log(req.file);
  if (!req.file) {
    next(new Error("there´s no file"));
    return;
  }
  res.json({ imagePath: req.file.path });
});

router.use("/auth", authRoutes);
router.use("/recipes", recipesRoutes);
router.use("/profile", isLoggedIn, profileRoutes);
router.use("/chat", isLoggedIn, chatRoutes);
module.exports = router;
