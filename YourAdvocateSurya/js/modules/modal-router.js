// js/modules/modal-router.js

import { serviceData, aboutData, careersData, helpCenterData, tosData } from '../config/data-store.js';
import { toggleMenu } from './navigation.js';

// Central UI Element Refs
let overlay, catEl, titleEl, listEl, applyTrigger, appForm;

export function initModalRouter() {
    overlay = document.getElementById('details-overlay');
    catEl = document.getElementById('m-cat');
    titleEl = document.getElementById('m-title');
    listEl = document.getElementById('m-list');
    applyTrigger = document.getElementById('apply-trigger');
    appForm = document.getElementById('application-form');

    if (!overlay) return;

    // Close modal when clicking the overlay backing itself
    overlay.addEventListener('click', closeDetails);

    // Stop propagation so clicks inside the modal content panel don't close it
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', (e) => e.stopPropagation());
    }

    // Bind Close Button Exits
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeDetails);
    }

    // Bind Join Vision CTA to Form Reveal Workflow
    if (applyTrigger) {
        applyTrigger.addEventListener('click', openForm);
    }

    // Bind Form Submission Validation Engine
    if (appForm) {
        appForm.addEventListener('submit', validateSubmit);
    }

    // Bind Field Input Character Sanitizers
    const nameInput = document.getElementById('f-name');
    const phoneInput = document.getElementById('f-phone');

    if (nameInput) {
        nameInput.addEventListener('input', (e) => {
            // Strip out non-alphabetical characters in real-time
            e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
        });
    }

    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            // Force strict numerical entries and truncate at 10 digits max
            e.target.value = e.target.value.replace(/[^0-9]/g, '').substring(0, 10);
        });
    }

    // Attach dynamic click event triggers to all service cards on the main landing grid
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.addEventListener('click', () => openCard(index));
    });

    // Expose routing hooks globally ONLY for menu/footer interactions where inline JS calls remain
    window.openAbout = openAbout;
    window.openCareers = openCareers;
    window.openHelpCenter = openHelpCenter;
    window.openToS = openToS;
    window.closeDetails = closeDetails;
}

function resetModal() {
    if (!listEl || !applyTrigger || !appForm || !overlay) return;
    listEl.style.display = 'block';
    applyTrigger.style.display = 'none';
    appForm.style.display = 'none';
    overlay.style.display = 'flex';
}

function renderModal(cat, title, points) {
    if (!catEl || !titleEl || !listEl) return;
    catEl.innerText = cat;
    titleEl.innerText = title;
    listEl.innerHTML = "";
    
    points.forEach(p => {
        let li = document.createElement('li');
        li.innerHTML = p;
        listEl.appendChild(li);
    });
}

export function closeDetails() {
    if (overlay) overlay.style.display = 'none';
}

export function openCard(index) {
    resetModal();
    if (serviceData[index]) {
        renderModal(serviceData[index].cat, serviceData[index].title, serviceData[index].points);
    }
}

export function openAbout() {
    toggleMenu();
    resetModal();
    renderModal(aboutData.cat, aboutData.title, aboutData.points);
}

export function openCareers() {
    toggleMenu();
    resetModal();
    renderModal(careersData.cat, careersData.title, careersData.points);
    if (applyTrigger) applyTrigger.style.display = 'block';
}

export function openHelpCenter() {
    resetModal();
    renderModal(helpCenterData.cat, helpCenterData.title, helpCenterData.points);
}

export function openToS() {
    resetModal();
    renderModal(tosData.cat, tosData.title, tosData.points);
}

function openForm() {
    if (!listEl || !applyTrigger || !titleEl || !appForm) return;
    listEl.style.display = 'none';
    applyTrigger.style.display = 'none';
    titleEl.innerText = "Application Portal";
    appForm.style.display = 'block';
}

function validateSubmit(e) {
    e.preventDefault();
    const phoneVal = document.getElementById('f-phone')?.value || "";
    const emailVal = document.getElementById('f-email')?.value || "";

    // Production-ready email expression supporting standard consumer and professional business domains
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (phoneVal.length !== 10) {
        alert("Phone number must be exactly 10 digits.");
        return;
    }

    if (!emailRegex.test(emailVal)) {
        alert("Please provide a valid, structured email address (e.g., corporate or consumer domain).");
        return;
    }

    alert("Application Submitted Successfully!");
    closeDetails();
    if (appForm) appForm.reset();
}