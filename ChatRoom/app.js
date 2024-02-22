const gptSelectorBtn = document.querySelector("#gpt-selector");
const micSelectorBtn = document.querySelector("#mic-selector");
const chatHeader = document.querySelector(".chat-header");
const chatMessages = document.querySelector(".chat-messages");
const chatInputForm = document.querySelector(".chat-input-form");
const chatInput = document.querySelector(".chat-input");
const clearChatBtn = document.querySelector(".clear-chat-button");

const chatMessageElement = (message) =>
  `<div class="message ${message.sender === "GPT" ? "blue-bg" : "gray-bg"}">
    <div class="message-sender">${message.sender}</div>
    <div class="message-text">${message.text}</div>
    <div class="message-timestamp">${message.timestamp}</div>
  </div>`;

let messageSender = "GPT";

const updateMessageSender = (name) => {
  messageSender = name;
  chatHeader.innerHTML = `${messageSender}`;
  chatInput.placeholder = `在此输入消息...`;

  if (name === "GPT") {
    gptSelectorBtn.classList.add("active-person");
    micSelectorBtn.classList.remove("active-person");
  }

  if (name === "Copilot") {
    micSelectorBtn.classList.add("active-person");
    gptSelectorBtn.classList.remove("active-person");
  }

  chatInput.focus();
};

gptSelectorBtn.onclick = () => updateMessageSender("GPT");
micSelectorBtn.onclick = () => updateMessageSender("Copilot");

const messages = JSON.parse(localStorage.getItem("messages")) || []; //本地消息存储
const sendMessage = (e) => {
  e.preventDefault();

  const timestamp = new Date().toLocaleString("zh-cn", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });
  const message = {
    sender: messageSender,
    text: chatInput.value,
    timestamp,
  };

  messages.push(message);
  localStorage.setItem("messages", JSON.stringify(messages));
  chatMessages.innerHTML += chatMessageElement(message);

  chatInputForm.reset();
  chatMessages.scrollTop = chatMessages.scrollHeight;
};

chatInputForm.addEventListener("submit", sendMessage);
clearChatBtn.addEventListener("click", () => {
  localStorage.clear();
  chatMessages.innerHTML = "";
});

window.onload = () => {
  messages.forEach((message) => {
    chatMessages.innerHTML += chatMessageElement(message);
  });
};
