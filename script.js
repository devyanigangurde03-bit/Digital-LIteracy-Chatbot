const input = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const chatBox = document.getElementById("chat-box");
const voiceButton = document.getElementById("voice-button");
const clearButton = document.getElementById("clear-button");


function addMessage(text, type) {

    const message = document.createElement("div");

    if (type === "user") {
        message.className = "user-message";
    } else {
        message.className = "bot-message";
    }

    message.textContent = text;

    chatBox.appendChild(message);

    chatBox.scrollTop = chatBox.scrollHeight;
}


function detectLanguage(text) {

    const lowerText = text.toLowerCase();


    // Marathi Devanagari

    const marathiWords = [
        "मला",
        "माझा",
        "माझी",
        "काय",
        "कसे",
        "कशी",
        "आहे",
        "म्हणजे",
        "करावे",
        "सांगा",
        "तुम्ही",
        "सुरक्षित",
        "पासवर्ड",
        "संगणक"
    ];


    for (let word of marathiWords) {

        if (text.includes(word)) {

            return "marathi";

        }

    }


    // Hindi Devanagari

    const hindiWords = [
        "मुझे",
        "मेरा",
        "मेरी",
        "क्या",
        "कैसे",
        "कैसी",
        "है",
        "बताओ",
        "आप",
        "कंप्यूटर",
        "सुरक्षित",
        "पासवर्ड"
    ];


    for (let word of hindiWords) {

        if (text.includes(word)) {

            return "hindi";

        }

    }


    // Roman Marathi

    const romanMarathiWords = [
        "mala",
        "majha",
        "majhi",
        "kay",
        "kase",
        "kashi",
        "ahe",
        "mhanje",
        "sanga",
        "tumhi",
        "karave"
    ];


    for (let word of romanMarathiWords) {

        if (lowerText.includes(word)) {

            return "marathi";

        }

    }


    // Roman Hindi

    const romanHindiWords = [
        "mujhe",
        "mera",
        "meri",
        "kya",
        "kaise",
        "kaisi",
        "hai",
        "batao",
        "aap"
    ];


    for (let word of romanHindiWords) {

        if (lowerText.includes(word)) {

            return "hindi";

        }

    }


    // Default language

    return "english";
}


function getResponse(message) {

    const text = message.toLowerCase();

    const language = detectLanguage(message);


    /* PHISHING */

    if (
        text.includes("phishing") ||
        text.includes("फिशिंग")
    ) {

        if (language === "hindi") {

            return "Phishing एक ऑनलाइन धोखाधड़ी है जिसमें नकली ईमेल, मैसेज या वेबसाइट के जरिए आपकी personal information, password, OTP या bank details चुराने की कोशिश की जाती है।";

        }

        if (language === "marathi") {

            return "Phishing म्हणजे ऑनलाइन फसवणुकीचा एक प्रकार आहे. यामध्ये बनावट ईमेल, मेसेज किंवा वेबसाइटच्या माध्यमातून password, OTP किंवा bank details चोरण्याचा प्रयत्न केला जातो.";

        }

        return "Phishing is an online scam where attackers use fake emails, messages or websites to trick you into giving away passwords, OTPs, bank details or other personal information.";
    }


    /* DIGITAL LITERACY */

    if (
        text.includes("digital literacy") ||
        text.includes("डिजिटल साक्षरता")
    ) {

        if (language === "hindi") {

            return "Digital literacy का मतलब digital devices, internet और online services का सुरक्षित और प्रभावी तरीके से उपयोग करने की क्षमता है.";

        }

        if (language === "marathi") {

            return "Digital literacy म्हणजे digital devices, internet आणि online services यांचा सुरक्षित आणि प्रभावी वापर करण्याची क्षमता.";

        }

        return "Digital literacy is the ability to use digital devices, the internet and online services safely, effectively and responsibly.";
    }


    /* PASSWORD */

    if (
        text.includes("password") ||
        text.includes("पासवर्ड")
    ) {

        if (language === "hindi") {

            return "एक मजबूत password लंबा और unique होना चाहिए। अपना नाम, जन्मतिथि या mobile number password में इस्तेमाल न करें।";

        }

        if (language === "marathi") {

            return "मजबूत password मोठा आणि unique असावा. तुमचे नाव, जन्मतारीख किंवा mobile number password मध्ये वापरू नका.";

        }

        return "A strong password should be long and unique. Avoid using your name, birthday or phone number. Use a different password for important accounts.";
    }


    /* CYBERSECURITY */

    if (
        text.includes("cybersecurity") ||
        text.includes("cyber security") ||
        text.includes("सायबर सुरक्षा")
    ) {

        if (language === "hindi") {

            return "Cybersecurity का मतलब computers, mobile phones, networks और personal information को digital threats और attacks से सुरक्षित रखना है.";

        }

        if (language === "marathi") {

            return "Cybersecurity म्हणजे computers, mobile phones, networks आणि personal information यांचे digital threats आणि attacks पासून संरक्षण करणे.";

        }

        return "Cybersecurity means protecting computers, mobile phones, networks and personal information from digital threats and attacks.";
    }


    /* INTERNET */

    if (
        text.includes("internet") ||
        text.includes("इंटरनेट")
    ) {

        if (language === "hindi") {

            return "Internet एक global network है जो computers और devices को connect करता है और information sharing तथा communication की सुविधा देता है.";

        }

        if (language === "marathi") {

            return "Internet हे एक global network आहे जे computers आणि devices ला जोडते आणि information sharing व communication करण्यास मदत करते.";

        }

        return "The internet is a global network that connects computers and devices and allows people to communicate and share information.";
    }


    /* COMPUTER */

    if (
        text.includes("computer") ||
        text.includes("कंप्यूटर") ||
        text.includes("संगणक")
    ) {

        if (language === "hindi") {

            return "Computer एक electronic device है जो data को process करता है और दिए गए instructions के अनुसार काम करता है.";

        }

        if (language === "marathi") {

            return "Computer म्हणजे एक electronic device आहे जे data वर process करते आणि दिलेल्या instructions नुसार काम करते.";

        }

        return "A computer is an electronic device that processes data and performs tasks according to instructions.";
    }


    /* OTP */

    if (text.includes("otp")) {

        if (language === "hindi") {

            return "OTP का मतलब One-Time Password है। OTP किसी भी व्यक्ति के साथ share नहीं करना चाहिए, चाहे वह bank employee होने का दावा करे.";

        }

        if (language === "marathi") {

            return "OTP म्हणजे One-Time Password. OTP कोणत्याही व्यक्तीसोबत share करू नये, जरी ती व्यक्ती bank employee असल्याचे सांगत असेल.";

        }

        return "OTP means One-Time Password. Never share your OTP with anyone, even if they claim to be a bank employee.";
    }


    /* UPI */

    if (
        text.includes("upi") ||
        text.includes("gpay") ||
        text.includes("phonepe") ||
        text.includes("paytm") ||
        text.includes("online payment")
    ) {

        if (language === "hindi") {

            return "Online payment करते समय UPI PIN और OTP कभी share न करें। Payment करने से पहले receiver और amount को ध्यान से check करें.";

        }

        if (language === "marathi") {

            return "Online payment करताना UPI PIN आणि OTP कधीही share करू नका. Payment करण्यापूर्वी receiver आणि amount तपासा.";

        }

        return "When making an online payment, never share your UPI PIN or OTP. Always check the receiver and amount before confirming the payment.";
    }


    /* SOCIAL MEDIA */

    if (
        text.includes("social media") ||
        text.includes("सोशल मीडिया")
    ) {

        if (language === "hindi") {

            return "Social media का सुरक्षित उपयोग करें। Personal information कम share करें, privacy settings का उपयोग करें और unknown links से बचें.";

        }

        if (language === "marathi") {

            return "Social media चा सुरक्षित वापर करा. Personal information कमी share करा, privacy settings वापरा आणि unknown links टाळा.";

        }

        return "Use social media safely. Limit the personal information you share, use privacy settings and avoid unknown links.";
    }


    /* GREETING */

    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey") ||
        text.includes("नमस्ते") ||
        text.includes("नमस्कार")
    ) {

        if (language === "hindi") {

            return "नमस्ते! 👋 मैं आपका Digital Literacy Assistant हूँ। आप मुझसे internet, phishing, passwords, cybersecurity, UPI और computers के बारे में पूछ सकते हैं।";

        }

        if (language === "marathi") {

            return "नमस्कार! 👋 मी तुमचा Digital Literacy Assistant आहे. तुम्ही मला internet, phishing, passwords, cybersecurity, UPI आणि computers बद्दल विचारू शकता.";

        }

        return "Hello! 👋 I am your Digital Literacy Assistant. You can ask me about internet, phishing, passwords, cybersecurity, UPI and computers.";
    }


    /* DEFAULT */

    if (language === "hindi") {

        return "मैं Digital Literacy Assistant हूँ। आप मुझसे phishing, cybersecurity, internet, passwords, OTP, UPI और computers के बारे में पूछ सकते हैं.";

    }

    if (language === "marathi") {

        return "मी Digital Literacy Assistant आहे. तुम्ही मला phishing, cybersecurity, internet, passwords, OTP, UPI आणि computers बद्दल विचारू शकता.";

    }

    return "I am your Digital Literacy Assistant. You can ask me about phishing, cybersecurity, internet, passwords, OTP, UPI, computers and online safety.";
}


/* SEND MESSAGE */

function sendMessage(message) {

    if (!message) {
        message = input.value.trim();
    }

    if (message === "") {
        return;
    }


    addMessage(message, "user");

    input.value = "";


    setTimeout(function () {

    const typing = document.createElement("div");

    typing.className = "bot-message";

    typing.textContent = "Typing...";

    chatBox.appendChild(typing);

    chatBox.scrollTop = chatBox.scrollHeight;


    setTimeout(function () {

    const response = getResponse(message);

    typing.textContent = response;

    speak(response, detectLanguage(message));

    chatBox.scrollTop = chatBox.scrollHeight;

}, 800);

}, 300);
}


/* SEND BUTTON */

sendButton.addEventListener("click", function () {

    sendMessage();

});


/* ENTER KEY */

input.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        sendMessage();

    }

});


/* SUGGESTION BUTTONS */

document.querySelectorAll(".suggestion").forEach(function (button) {

    button.addEventListener("click", function () {

        sendMessage(button.textContent.trim());

    });

});


/* CLEAR CHAT */

clearButton.addEventListener("click", function () {

    chatBox.innerHTML = "";

});


/* VOICE INPUT */

const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;


if (SpeechRecognition) {

    const recognition = new SpeechRecognition();

    recognition.continuous = false;

    recognition.interimResults = false;

    recognition.lang = "en-IN";


    voiceButton.addEventListener("click", function () {

    try {

        recognition.start();

        voiceButton.textContent = "🔴";

        voiceButton.title = "Listening... Click to stop";

    } catch (error) {

        recognition.stop();

    }

});


recognition.onresult = function (event) {

    const spokenText =
        event.results[0][0].transcript;

    input.value = spokenText;

    voiceButton.textContent = "🎤";

    voiceButton.title = "Voice input";

    sendMessage(spokenText);

};


recognition.onerror = function () {

    voiceButton.textContent = "🎤";

    voiceButton.title = "Voice input";

};


recognition.onend = function () {

    voiceButton.textContent = "🎤";

    voiceButton.title = "Voice input";

};


    recognition.onresult = function (event) {

        const spokenText =
            event.results[0][0].transcript;

        input.value = spokenText;

        voiceButton.textContent = "🎤";

        sendMessage(spokenText);

    };


    recognition.onerror = function () {

        voiceButton.textContent = "🎤";

    };


    recognition.onend = function () {

        voiceButton.textContent = "🎤";

    };

} else {

    voiceButton.disabled = true;

    voiceButton.title =
        "Voice input is not supported in this browser.";

}

function speak(text, language) {

    if (!("speechSynthesis" in window)) {
        return;
    }

    const speech = new SpeechSynthesisUtterance(text);

    if (language === "hindi") {

        speech.lang = "hi-IN";

    } else if (language === "marathi") {

        speech.lang = "mr-IN";

    } else {

        speech.lang = "en-IN";

    }

    speech.rate = 0.9;

    speech.pitch = 1;

    window.speechSynthesis.cancel();

    window.speechSynthesis.speak(speech);
}