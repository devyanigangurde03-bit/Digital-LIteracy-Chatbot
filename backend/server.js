require("dotenv").config();
const OpenAI = require("openai");

const client = new OpenAI({
    baseURL: "https://router.huggingface.co/v1",
    apiKey: process.env.HF_TOKEN
});

async function testAI() {
    console.log("AI test started");
    console.log(process.env.HF_TOKEN ? "HF token loaded" : "HF token NOT loaded");

    try {
        const response = await client.chat.completions.create({
            model: "openai/gpt-oss-120b:fastest",
            messages: [
                {
                    role: "user",
                    content: "Say hello in English, Hindi, and Marathi."
                }
            ]
        });

        console.log("AI response:");
        console.log(response.choices[0].message.content);

    } catch (error) {
        console.log("AI ERROR:");
        console.log(error.message);
    }
}

testAI();