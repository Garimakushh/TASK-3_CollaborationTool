const socket = io();
const editor = document.getElementById("editor");

// Emit changes
editor.addEventListener("input", () => {
  socket.emit("text-change", editor.value);
});

// Receive changes
socket.on("text-update", (data) => {
  editor.value = data;
});