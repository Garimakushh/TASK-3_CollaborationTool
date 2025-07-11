const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public")); // Serve frontend

io.on("connection", (socket) => {
  console.log("A user connected");

  // When one user edits, broadcast to others
  socket.on("text-change", (data) => {
    socket.broadcast.emit("text-update", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log("Server running on ",'http://localhost:${PORT}');
});