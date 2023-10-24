import { Server } from "socket.io";

const io = new Server(9000, {
  cors: {
    origin: "http://localhost:3000",
  },
});
let users = [];

const addUser = (userData, socketId) => {
    const userExists = users.some((user) => user.sub === userData.sub) 
  if (!userExists) {
    users.push({ ...userData, socketId });
  }
};
const getUser = (userId) => {
  console.log("userid", userId);
  return users.find((user) => user.sub === userId);
};

io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("addUser", (userData) => {
    addUser(userData, socket.id);
    io.emit("getUsers", users);
  });

  socket.on("sendMessage", (data) => {
    const user = getUser(data.receiverId);
    if (user) {
      const userSocketId = user.socketId;
      console.log("usersocketid",userSocketId);
      io.to(userSocketId).emit('getMessage', data);
      console.log("data",data);
    } else {
      console.log("User not found");
    }
  });
});
