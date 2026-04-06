# AI Chatbot
final submission for AI CHATBOT project.
## What I Built

I built a working AI chatbot with a vanilla JavaScript frontend and a Node.js Express backend. The frontend allows users to type messages and view the conversation, while the backend securely handles the AI API call and returns responses. The chatbot also maintains conversation context by sending the full message history with every request.

## API and Model

**API:** OpenRouter  
**Model:** openai/gpt-4o-mini

## Why Backend Instead of Frontend

The API call is made from the backend because if the API key is placed in frontend JavaScript, anyone can open browser DevTools, inspect the source code or network requests, and steal the key. Keeping the key in the backend `.env` file prevents it from being exposed to users.

## Fallback Provider

If OpenRouter runs out of credits, I would switch to **Google Gemini API**. The two changes required in the code would be:

1. Change the base URL to `https://generativelanguage.googleapis.com/v1beta/openai/`
2. Change the model name to `gemini-1.5-flash`

## Live Deployment

**Frontend:** https://animated-valkyrie-d2b9e0.netlify.app/  
**Backend:** https://ai-chatbot-kalvuim.onrender.com/

## Features

- Chat interface with user input and send button
- Full conversation history for context
- Secure backend API integration
- Live deployed frontend and backend
- Error handling for failed API requests

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **API:** OpenRouter
- **Deployment:** Netlify / Vercel for frontend, Render for backend
