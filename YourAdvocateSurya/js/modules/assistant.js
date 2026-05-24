// js/modules/assistant.js

import { chatbotBrain } from '../config/data-store.js';

let container, messagesContainer, inputField;

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
        sendBtn.addEventListener('click', sendBotMessage);
    }

    // Expose toggleBot globally to handle inline footer buttons or external event loops cleanly
    window.toggleBot = toggleBot;
}

export function toggleBot() {
    if (!container) return;
    container.style.display = (container.style.display === 'flex') ? 'none' : 'flex';
}

export function sendBotMessage() {
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

    // 2. Automated Processing Loop
    setTimeout(() => {
        const botDiv = document.createElement('div');
        botDiv.className = 'msg bot';
        
        let foundAnswers = [];
        // Sanitize string variables down to lowercase and remove punctuation assets
        const cleanInput = userText.toLowerCase().replace(/[^\w\s]/gi, '');

        // Match normalized strings against keyword mappings stored inside config layers
        chatbotBrain.forEach(entry => {
            if (entry.keywords.some(word => cleanInput.includes(word))) {
                foundAnswers.push(entry.response);
            }
        });

        // 3. Render and append the Bot response bubble
        if (foundAnswers.length > 0) {
            // Join multiple matched topics securely using line breaks
            botDiv.innerHTML = foundAnswers.join("<br><br>");
        } else {
            botDiv.innerText = "I'm not quite sure about that. Could you try asking about tracking, billing, compliance, or contact details? Alternatively, email our experts.";
        }
        
        messagesContainer.appendChild(botDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 800);
}