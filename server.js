const app = require("./app");

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 5005;

const myServer = app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});

const { Server } = require("socket.io");
const Message = require("./models/Message.model");
const io = new Server(myServer, {
  cors: {
    origin: process.env.ORIGIN || "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  socket.on("join_chat", (chatId) => {
    console.log("user joined chat room:", chatId);
    socket.join(chatId);
  });
  socket.on("send_message", (newMessage) => {
    Message.create(newMessage)
      .then((data) => {
        socket.to(newMessage.chatId).emit("receive_message", newMessage);
        socket.emit("receive_message", newMessage);
      })

      .catch((err) => console.log(err));
  });
});
