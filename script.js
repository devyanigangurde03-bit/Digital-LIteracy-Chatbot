const input = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const chatBox = document.getElementById("chat-box");

input.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        sendButton.click();
    }
})

sendButton.addEventListener("click", function () {

    const userMessage = input.value.trim();

    if (userMessage === "") {
        return;
    }

    // Display user's message
    const userDiv = document.createElement("div");
    userDiv.className = "user-message";
    userDiv.textContent = userMessage;
    chatBox.appendChild(userDiv);

    // Clear input box
    input.value = "";

    // Find the chatbot's response
    const botResponse = getBotResponse(userMessage);

    // Display bot's response
    const botDiv = document.createElement("div");
    botDiv.className = "bot-message";
    botDiv.textContent = botResponse;
    chatBox.appendChild(botDiv);

    // Scroll to latest message
    chatBox.scrollTop = chatBox.scrollHeight;
});


function getBotResponse(message) {

    const text = message.toLowerCase();

    if (text.includes("digital literacy")) {
        return "Digital literacy is the ability to use digital devices, applications, and the internet safely and effectively.";
    }

    if (text.includes("computer")) {
        return "A computer is an electronic device that processes data and performs different tasks according to instructions.";
    }

    if (text.includes("internet")) {
        return "The internet is a global network that connects computers and devices, allowing people to communicate and share information.";
    }

    if (text.includes("password")) {
        return "A strong password should be long, unique, and difficult to guess. Avoid using your name, birthday, or simple passwords.";
    }

    if (text.includes("phishing")) {
        return "Phishing is an online scam where attackers try to trick people into sharing sensitive information such as passwords or bank details.";
    }

    if (text.includes("cyber security") || text.includes("cybersecurity")) {
        return "Cybersecurity means protecting computers, networks, devices, and personal information from digital threats.";
    }

    if (text.includes("social media")) {
        return "Use social media carefully. Protect your personal information, use privacy settings, and avoid accepting requests from unknown people.";
    }

    if (text.includes("thank")) {
        return "You're welcome! 😊";
    }

    if (text.includes("hello") || text.includes("hi")) {
        return "Hello! 👋 How can I help you learn about digital literacy?";
    }

    return "Sorry, I don't know the answer to that yet. Please ask me about digital literacy, computers, internet, passwords, phishing, cybersecurity, or social media.";
}