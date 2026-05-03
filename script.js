function sendMessage() {
  let input = document.getElementById("userInput");
  let message = input.value;
  if (message.trim() === "") return;

  addMessage("You", message);
  botReply(message.toLowerCase());
  input.value = "";
}

function addMessage(sender, text) {
  let chatBox = document.getElementById("chatBox");
  chatBox.innerHTML += `<p><b>${sender}:</b> ${text}</p>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(msg) {

  if (msg.includes("vote") || msg.includes("voting")) {
    addMessage("Bot", "Voting process: Register → Get voter ID → Visit polling booth → Use EVM → Cast vote.");
  }

  else if (msg.includes("register")) {
    addMessage("Bot", "To register as voter: Visit electoral website, fill Form 6, upload ID proof.");
  }

  else if (msg.includes("timeline")) {
    addMessage("Bot", "Election Timeline: Registration → Verification → Nomination → Campaign → Voting → Counting.");
  }

  else if (msg.includes("eligible")) {
    addMessage("Bot", "Eligibility: Must be 18+, Indian citizen, valid address proof required.");
  }

  else {
    addMessage("Bot", "I can help with voting, registration, eligibility, and election timeline.");
  }
}

function quickReply(type) {
  if (type === "voting") {
    addMessage("You", "Voting process");
    addMessage("Bot", "Voting: Go to booth → Show ID → Use EVM → Press candidate button → Confirm vote.");
  }

  if (type === "registration") {
    addMessage("You", "Voter registration");
    addMessage("Bot", "Register online via Election Commission portal using Form 6.");
  }

  if (type === "timeline") {
    addMessage("You", "Election timeline");
    addMessage("Bot", "Registration → Verification → Campaign → Voting → Counting → Results.");
  }

  if (type === "eligibility") {
    addMessage("You", "Eligibility");
    addMessage("Bot", "Must be 18+, Indian citizen, valid ID proof required.");
  }
}