const router = require("express").Router();
const Chat = require("../models/Chat.model");
const Message = require("../models/Message.model");

router.post("/create", (req, res, next) => {
  

  const user1Id = req.session.user._id;
  const user2Id = req.body.userId;

  let participants = [user1Id, user2Id];

 
  Chat.findOne({ participants: { $all: participants } })
    .then((foundChat) => {
      if (foundChat) {
        res.status(200).json(foundChat);
      } else {
       
        Chat.create({ participants })
          .then((newChat) => {
           
            res.status(200).json(newChat);
          })
          .catch((err) => next(err));
      }
    })
    .catch((err) => next(err));
});

router.get("/messages/:chatId", (req, res, next) => {
  const { chatId } = req.params;
  
  Message.find({ chatId })
  
    .populate("sender")
    
    .then((allMessages) => res.status(200).json(allMessages))
    .catch((err) => next(err));
});

module.exports = router;
