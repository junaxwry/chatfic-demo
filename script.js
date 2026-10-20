const story = [
  { sender: "received", text: "Jun?" },
  { sender: "sent", text: "iya, kenapa dis?" },
  { sender: "received", text: "bisa ketemu?" },
  { sender: "sent", text: "dimana?" }
];

let currentIndex = 0;
const screen = document.querySelector(".screen");
const chatBox = document.getElementById("chat-box");

screen.addEventListener("click", () => {
  if (currentIndex < story.length) {
    const msgData = story[currentIndex];
    
    const bubble = document.createElement("div");
    bubble.classList.add("message", msgData.sender);
    bubble.textContent = msgData.text;

    chatBox.appendChild(bubble);
    chatBox.scrollTop = chatBox.scrollHeight;

    currentIndex++;
  }
});
