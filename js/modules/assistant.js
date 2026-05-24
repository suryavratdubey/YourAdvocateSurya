// js/modules/assistant.js

import { chatbotBrain } from '../config/data-store.js';

// ⚠️ STEP 1: PASTE YOUR ACTUAL GEMINI API KEY HERE BETWEEN THE QUOTES
const GEMINI_API_KEY = "AIzaSyDgBrh6q_8vrygQ5te4dmiLejmi-Aak20Y"; 
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

let container, messagesContainer, inputField;

// We pull the entire knowledge base from your data-store.js file dynamically to feed to the AI context
const KNOWLEDGE_BASE = JSON.stringify(chatbotBrain);

const SYSTEM_INSTRUCTION = `
You are the elite, context-aware AI Assistant for "ShubhShree & Accounts", a premium logistics finance and corporate accounting firm.
Your tone is professional, sophisticated, accurate, and highly concise.

Here is the exact company knowledge base, services list, rules, and contact information you must use to answer questions:
${KNOWLEDGE_BASE}

Rules:
1. Always base your answers on the provided company knowledge base.
2. Keep answers brief (max 2-3 sentences) so they look clean inside a floating chat layout.
3. Speak as an executive employee of ShubhShree & Accounts.
4. If a user asks about completely unrelated topics (e.g., cooking, gaming, pop culture), politely guide them back to our corporate services.
`;

export function initChatbot() {
    container = document.getElementById('bot-container');
    messagesContainer = document.getElementById('bot-messages');
    inputField = document.getElementById('bot-input');

    const toggleBtn = document.getElementById('bot-toggle');
    const closeBtn = document.querySelector('#bot-header span');
    const sendBtn = document.querySelector('#bot-input-area button');

    // Bind panel visibility triggers
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleBot);
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', toggleBot);
    }

    // Bind message dispatch triggers
    if (sendBtn) {
        sendBtn.addEventListener('click', (e) => {
            e.preventDefault();
            sendBotMessage();
        });
    }

    // Also bind 'Enter' key inside the input box cleanly
    if (inputField) {
        inputField.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendBotMessage();
            }
        });
    }

    // Expose toggleBot globally to handle inline footer buttons cleanly
    window.toggleBot = toggleBot;
}

export function toggleBot() {
    if (!container) return;
    container.style.display = (container.style.display === 'flex') ? 'none' : 'flex';
}

export async function sendBotMessage() {
    if (!inputField || !messagesContainer) return;
    
    const userText = inputField.value.trim();
    if (!userText) return;

    // 1. Render and append the User's input bubble
    const userDiv = document.createElement('div');
    userDiv.className = 'msg user';
    userDiv.innerText = userText;
    messagesContainer.appendChild(userDiv);
    
    // Clear out input track and auto-scroll the dialogue window
    inputField.value = "";
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Safety fallback layout checker
    if (GEMINI_API_KEY === "YOUR_GEMINI_API_KEY_HERE") {
        const devErrorDiv = document.createElement('div');
        devErrorDiv.className = 'msg bot';
        devErrorDiv.innerText = "Developer Setup Error: Please open js/modules/assistant.js and replace 'YOUR_GEMINI_API_KEY_HERE' with your real key from Google AI Studio.";
        messagesContainer.appendChild(devErrorDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        return;
    }

    // 2. Render Loading/Thinking state bubble
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'msg bot loading-state';
    loadingDiv.innerText = "Thinking...";
    messagesContainer.appendChild(loadingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // 3. Automated AI Processing Loop via API Fetch request
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [
                    {
                        role: 'user',
                        parts: [{ text: `${SYSTEM_INSTRUCTION}\n\nUser Question: ${userText}` }]
                    }
                ],
                generationConfig: {
                    maxOutputTokens: 150,
                    temperature: 0.3 // Keeps answers highly realistic, focused, and objective
                }
            })
        });

        const data = await response.json();
        loadingDiv.remove(); // Drop the thinking bubble frame

        const botDiv = document.createElement('div');
        botDiv.className = 'msg bot';

        if (data.error) {
            botDiv.innerText = `API Error: ${data.error.message}`;
        } else if (data.candidates && data.candidates[0].content.parts[0].text) {
            botDiv.innerText = data.candidates[0].content.parts[0].text;
        } else {
            botDiv.innerText = "I apologize, I am experiencing temporary network limits. Please email support directly.";
        }

        messagesContainer.appendChild(botDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

    } catch (error) {
        console.error("AI Connection Failure:", error);
        if (loadingDiv) loadingDiv.remove();
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'msg bot';
        errorDiv.innerText = "Connection error. Please try again or reach out via email.";
        messagesContainer.appendChild(errorDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}
