// js/app.js

import { skills } from './config/data-store.js';
import { initCursorEngine } from './modules/cursor-engine.js';
import { initNavigation } from './modules/navigation.js';
import { initModalRouter } from './modules/modal-router.js';
import { initChatbot } from './modules/assistant.js';
import { initTextFlipper } from './modules/text-flipper.js'; 

document.addEventListener('DOMContentLoaded', () => {
    // 1. Core Module Execution Triggers
    initCursorEngine();
    initNavigation();
    initModalRouter();
    initChatbot();
    initTextFlipper();

    // 2. Dynamic Hero Skills Cloud Hydration Matrix
    const cloudContainer = document.getElementById('skillsCloud');
    if (cloudContainer) {
        // Clear out any placeholder content to prevent double-rendering bugs
        cloudContainer.innerHTML = "";

        skills.forEach((skill, index) => {
            const span = document.createElement('span');
            span.className = 'skill-tag';
            span.innerText = skill;
            
            // Assign incremental animation staggers to preserve the clean fade-in sequence from your original design
            span.style.animationDelay = `${index * 0.05}s`;
            
            cloudContainer.appendChild(span);
        });
    }

    // 3. System Level Form Key Listener Fallbacks
    // Intercept Enter keypresses globally on the assistant text area to execute chat responses cleanly
    const botInput = document.getElementById('bot-input');
    if (botInput) {
        botInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                // Fetch the exposed module instance dynamically if called manually
                const sendBtn = document.querySelector('#bot-input-area button');
                if (sendBtn) sendBtn.click();
            }
        });
    }
});