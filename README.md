# AI Chatbot

## What I Built

I built a fully functional AI chatbot using a Node.js Express backend and a vanilla JavaScript frontend. The frontend allows users to type messages and view chat history, while the backend securely handles API requests to the AI model.

The chatbot maintains full conversation context by sending the entire message history with every request, allowing it to give meaningful follow-up responses.

---

## API and Model

**API:** OpenRouter
**Model:** openai/gpt-4o-mini

---

## Why Backend Instead of Frontend

The API call is made from the backend because if the API key is placed in frontend JavaScript, it can be easily accessed by anyone using browser DevTools (Network tab or page source). This would allow others to steal the key and use it to make unauthorized API calls, potentially exhausting credits or causing misuse.

---

## Fallback Provider

If OpenRouter runs out of credits, I would switch to **Google Gemini API (AI Studio)**.

The two changes required in the code would be:

1. Change the base URL to:
   https://generativelanguage.googleapis.com/v1beta/openai/
2. Change the model name to:
   gemini-1.5-flash

---

## Live Deployment

**Frontend:** https://your-frontend-url.netlify.app
**Backend:** https://your-backend-url.onrender.com

---

## How It Works

1. User types a message in the frontend interface
2. The message is added to a conversation history array
3. The frontend sends the full message history to the backend `/chat` route
4. The backend reads the API key from `.env`
5. The backend sends the request to OpenRouter API
6. The AI response is returned to the frontend
7. The response is displayed and added to conversation history

---

## Features

* Real-time AI chat responses
* Maintains conversation context
* Secure API key handling using `.env`
* Clean and simple chat UI
* Error handling for API and server issues

---

## Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express
* **API:** OpenRouter (GPT model)
* **Deployment:** Render (backend), Netlify (frontend)

---

## Project Structure

```
challenge 1.12/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env (not committed)
│   └── .env.example
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── README.md
└── .gitignore
```

---

## Setup Instructions (Local)

1. Clone the repository
2. Navigate to backend:

   ```
   cd backend
   ```
3. Install dependencies:

   ```
   npm install
   ```
4. Create `.env` file:

   ```
   OPENROUTER_API_KEY=your-api-key
   PORT=3000
   ```
5. Start backend:

   ```
   npm start
   ```
6. Open `frontend/index.html` in browser

---

## Important Note

The API key is stored securely in the backend `.env` file and is never exposed to the frontend. This prevents unauthorized access and ensures safe usage of the AI API.

---

## Future Improvements

* Add typing indicator
* Improve UI design
* Add authentication system
* Store chat history in database
* Support multiple AI models dynamically

---
