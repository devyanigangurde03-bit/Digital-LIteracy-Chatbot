const languageSelect = document.getElementById("language-select");

function getLangCode() {
    return languageSelect ? languageSelect.value : "en-US";
}
const input = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const chatBox = document.getElementById("chat-box");
const voiceButton = document.getElementById("voice-button");
const clearButton = document.getElementById("clear-button");


/* =========================================
   ADD MESSAGE
========================================= */

function addMessage(text, type) {

    const message = document.createElement("div");

    message.classList.add("message");

    if (type === "user") {
        message.classList.add("user-message");
    } else {
        message.classList.add("bot-message");
    }

    message.textContent = text;

    chatBox.appendChild(message);

    chatBox.scrollTop = chatBox.scrollHeight;
}


/* =========================================
   LANGUAGE DETECTION
========================================= */

function detectLanguage(text) {

    if (/[\u0900-\u097F]/.test(text)) {
        return "hindi";
    }

    const lower = text.toLowerCase();

    const marathiWords = [
        "kay", "ahe", "aahe", "mala",
        "majha", "majhi", "kasa",
        "kashi", "tumhi", "mi",
        "sanga", "sang", "mhanje"
    ];

    const hindiWords = [
        "kya", "hai", "mujhe", "mera",
        "meri", "kaise", "aap",
        "batao", "bataiye"
    ];

    if (marathiWords.some(word => lower.includes(word))) {
        return "marathi";
    }

    if (hindiWords.some(word => lower.includes(word))) {
        return "hindi";
    }

    return "english";
}


/* =========================================
   BOT RESPONSES
========================================= */

function getResponse(message) {

    const text = message.toLowerCase();
    const languageCode = document.getElementById("language-select").value;
const language = languageCode === "mr-IN" ? "marathi" :
                 languageCode === "hi-IN" ? "hindi" : "english";


    /* MARATHI */

    if (language === "marathi") {

    if (text.includes("phishing") || text.includes("फिशिंग")) {
        return "फिशिंग म्हणजे बनावट मेसेज, ईमेल किंवा वेबसाइट वापरून तुमची वैयक्तिक माहिती चोरण्याचा प्रयत्न.";
    }

    if (text.includes("password") || text.includes("पासवर्ड")) {
        return "मजबूत पासवर्डमध्ये मोठी अक्षरे, लहान अक्षरे, अंक आणि विशेष चिन्हे वापरा.";
    }

    if (text.includes("digital literacy") || text.includes("डिजिटल साक्षरता")) {
        return "डिजिटल साक्षरता म्हणजे कॉम्प्युटर, इंटरनेट, मोबाइल अॅप्स आणि ऑनलाइन सेवा सुरक्षित आणि प्रभावीपणे वापरण्याचे ज्ञान.";
    }

    if (text.includes("upi") || text.includes("payment") || text.includes("यूपीआय") || text.includes("पेमेंट")) {
        return "UPI वापरताना तुमचा UPI PIN कोणालाही सांगू नका. पैसे receive करण्यासाठी PIN टाकण्याची गरज नसते. Unknown payment requests accept करू नका.";
    }

    return "डिजिटल तंत्रज्ञान वापरताना strong passwords, OTP safety, phishing awareness आणि privacy ची काळजी घ्या.";
}

    /* HINDI */

    if (language === "hindi") {

    if (text.includes("phishing") || text.includes("फिशिंग")) {
        return "फिशिंग एक ऑनलाइन धोखाधड़ी है, जिसमें नकली संदेश, ईमेल या वेबसाइट के जरिए आपकी निजी जानकारी चुराने की कोशिश की जाती है।";
    }

    if (text.includes("password") || text.includes("पासवर्ड")) {
        return "मजबूत पासवर्ड में बड़े अक्षर, छोटे अक्षर, अंक और विशेष चिन्हों का उपयोग करें।";
    }


        if (text.includes("digital literacy")) {
           return "डिजिटल साक्षरता का मतलब कंप्यूटर, इंटरनेट, मोबाइल ऐप और ऑनलाइन सेवाओं का सुरक्षित और सही उपयोग करना है।";
        }

        if (text.includes("upi") || text.includes("payment")) {
            return "UPI PIN kisi ke saath share na karein. Paise receive karne ke liye UPI PIN ki zarurat nahi hoti. Unknown payment requests se bachein.";
        }

        return "Online safe rehne ke liye strong passwords, OTP safety, phishing awareness aur privacy ka dhyan rakhein.";
    }


    /* ENGLISH */

    if (
    text === "hi" ||
    text === "hello" ||
    text === "hey" ||
    text.startsWith("hi ") ||
    text.startsWith("hello ") ||
    text.startsWith("hey ")
) {
    return "Hello! 👋 I am your Digital Literacy Assistant. Ask me anything about digital technology, internet safety, cybersecurity or online payments.";
}


    if (text.includes("digital literacy")) {
        return "Digital literacy means having the knowledge and skills to use computers, smartphones, the internet and digital services safely and effectively.";
    }


    if (
        text.includes("phishing") ||
        text.includes("phishing attack")
    ) {
        return "Phishing is an online scam where attackers use fake emails, messages or websites to trick people into sharing passwords, OTPs, bank details or other personal information.";
    }


    if (
        text.includes("password") ||
        text.includes("strong password")
    ) {
        return "A strong password should be long and difficult to guess. Use uppercase and lowercase letters, numbers and special characters. Avoid using your name, birthday or phone number.";
    }


    if (
        text.includes("cybersecurity") ||
        text.includes("cyber security")
    ) {
        return "Cybersecurity means protecting computers, phones, networks and personal information from cyber attacks, malware, scams and unauthorized access.";
    }


    if (
        text.includes("safe online") ||
        text.includes("online safety")
    ) {
        return "To stay safe online, use strong passwords, enable two-factor authentication, avoid suspicious links, never share OTPs and keep your apps and devices updated.";
    }


    if (text.includes("otp")) {
        return "Never share your OTP with anyone. Banks and legitimate services will not ask you to reveal your OTP over a call or message.";
    }


    if (
        text.includes("upi") ||
        text.includes("gpay") ||
        text.includes("google pay") ||
        text.includes("phonepe") ||
        text.includes("paytm") ||
        text.includes("online payment")
    ) {
        return "For safe UPI payments, never share your UPI PIN or OTP. Remember: you do not need to enter your UPI PIN to receive money.";
    }


    if (text.includes("internet")) {
        return "The internet is a global network that connects computers, smartphones and other devices so people can communicate, access information and use online services.";
    }


    if (text.includes("computer")) {
        return "A computer is an electronic device that accepts data, processes it, stores information and produces useful results.";
    }


    if (text.includes("social media")) {
        return "Use social media carefully. Avoid sharing sensitive personal information, use privacy settings and be careful when accepting requests from unknown people.";
    }


    return "I can help you with digital literacy, online safety, phishing, passwords, cybersecurity, OTP, UPI, internet, computers and social media. Try asking me one of these topics.";
}


/* =========================================
   SEND MESSAGE
========================================= */

function sendMessage(message = null) {

    const userMessage = message || input.value.trim();

    if (userMessage === "") {
        return;
    }

    addMessage(userMessage, "user");

    input.value = "";

    const typing = document.createElement("div");

    typing.classList.add("message", "bot-message");

    typing.textContent = "Typing...";

    chatBox.appendChild(typing);

    chatBox.scrollTop = chatBox.scrollHeight;


    setTimeout(() => {
    typing.remove();

    const response = getResponse(userMessage);

    addMessage(response, "bot");

    const speech = new SpeechSynthesisUtterance(response);
    speech.lang = document.getElementById("language-select").value;
    speech.rate = 0.95;
    speech.pitch = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
}, 500);
}


/* =========================================
   SEND BUTTON
========================================= */

sendButton.addEventListener("click", () => {
    sendMessage();
});


/* =========================================
   ENTER KEY
========================================= */

input.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        sendMessage();
    }

});


/* =========================================
   SUGGESTION BUTTONS
========================================= */

document.querySelectorAll(".suggestion").forEach(button => {

    button.addEventListener("click", () => {

        sendMessage(button.textContent.trim());

    });

});


/* =========================================
   CLEAR CHAT
========================================= */

clearButton.addEventListener("click", () => {

    chatBox.innerHTML = `
        <div class="welcome">

            <div class="bot-avatar">🤖</div>

            <h2>Hello! 👋</h2>

            <p>
                I am your Digital Literacy Assistant.
                Ask me anything about computers, internet,
                cybersecurity, online payments, social media,
                passwords and more.
            </p>

            <div class="suggestions">

                <button class="suggestion">
                    What is digital literacy?
                </button>

                <button class="suggestion">
                    How can I stay safe online?
                </button>

                <button class="suggestion">
                    What is phishing?
                </button>

                <button class="suggestion">
                    How to create a strong password?
                </button>

            </div>

        </div>
    `;

    document.querySelectorAll(".suggestion").forEach(button => {

        button.addEventListener("click", () => {
            sendMessage(button.textContent.trim());
        });

    });

});


/* =========================================
   VOICE INPUT
========================================= */

const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

if (SpeechRecognition) {

    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = document.getElementById("language-select").value;

    voiceButton.addEventListener("click", () => {
    recognition.lang = document.getElementById("language-select").value;
        recognition.start();

        voiceButton.textContent = "🔴";

    });


    recognition.onresult = (event) => {

        const spokenText =
            event.results[0][0].transcript;

        input.value = spokenText;

        sendMessage();

    };


    recognition.onerror = () => {

        voiceButton.textContent = "🎤";

    };


    recognition.onend = () => {

        voiceButton.textContent = "🎤";

    };

} else {

    voiceButton.addEventListener("click", () => {

        alert(
            "Voice input is not supported by this browser. Please try Google Chrome."
        );

    });

}