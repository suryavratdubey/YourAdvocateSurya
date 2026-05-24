// js/modules/text-flipper.js

export function initTextFlipper() {
    const textElement = document.getElementById('flipping-text');
    if (!textElement) return;

    // Define your array of text statements to cycle through
    const statements = [
        "We safeguard your rights through precision strategy, rigorous preparation, and fearless representation.",
        "We deliver clear strategic thinking, unyielding courtroom advocacy, and a defense deeply rooted in experience."
    ];

    let currentIndex = 0;
    const changeInterval = 4000; // Time in milliseconds (4 seconds)

    setInterval(() => {
        // 1. Kick off the slide up & fade out animation state
        textElement.classList.add('fade-out');

        setTimeout(() => {
            // 2. Increment index counter once text is completely hidden
            currentIndex = (currentIndex + 1) % statements.length;
            textElement.innerText = statements[currentIndex];

            // 3. Swap out classes instantly to prepare text at the bottom position
            textElement.classList.remove('fade-out');
            textElement.classList.add('fade-in');

            // 4. Force a micro-repaint window to animate back to the center position smoothly
            requestAnimationFrame(() => {
                textElement.classList.remove('fade-in');
            });

        }, 500); // Matches the 0.5s CSS transition speed

    }, changeInterval);
}
