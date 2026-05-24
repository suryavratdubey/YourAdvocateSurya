// js/modules/cursor-engine.js

export function initCursorEngine() {
    const cursor = document.getElementById('cursor');
    const video = document.getElementById('mainVideo');

    if (!cursor || !video) return;

    document.addEventListener('mousemove', (e) => {
        // Hardware accelerated 2D translation for the custom cursor ring
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate3d(-50%, -50%, 0)`;

        // 3D Parallax calculation for background video depth mechanics
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * -10;

        // Center the video securely (-50%, -50%) then inject the dynamic 3D rotation properties
        video.style.transform = `translate3d(-50%, -50%, 0) scale(1.08) rotateY(${x}deg) rotateX(${y}deg)`;
    });
}