
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fetch = require("node-fetch");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("AI Chatbot backend is live");
});


app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/chat", async (req, res) => {
  try {
    // 1. Extract messages from request body
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "messages array is required" });
    }

    // 2. Read API key from .env
    const apiKey = process.env.OPENROUTER_API_KEY;
    console.log("API key exists:", !!apiKey);
    console.log("API key prefix:", apiKey ? apiKey.slice(0, 12) : "missing");
    console.log("API key length:", apiKey ? apiKey.length : 0);

    if (!apiKey) {
      return res.status(500).json({ error: "OPENROUTER_API_KEY is missing in .env" });
    }

    // 3. Call OpenRouter with full conversation history
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",
        messages
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("OpenRouter API error:", data);
      return res.status(response.status).json({ error: data });
    }

    // 4. Return AI reply
    res.json({
      reply: data.choices[0].message
    });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});