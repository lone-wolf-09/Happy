// script.js

function displayGreeting() {
    const name = document.getElementById("nameInput").value;
    const greetingMessage = document.getElementById("greetingMessage");
    greetingMessage.innerText = `Happy Diwali, ${name}! ✨`;

    // Trigger fireworks when greeting is displayed
    createFireworks();
}

// Fireworks animation function
function createFireworks() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const firework = document.createElement("div");
            firework.classList.add("firework");
            document.body.appendChild(firework);

            // Randomize firework position
            firework.style.top = Math.random() * window.innerHeight + "px";
            firework.style.left = Math.random() * window.innerWidth + "px";

            // Remove firework after animation
            setTimeout(() => firework.remove(), 1000);
        }, i * 100);
    }
}

// Add diya icon
function addDiya() {
    const diya = document.createElement("div");
    diya.classList.add("diya");
    diya.innerHTML = "🪔";
    document.body.appendChild(diya);
}

// Initialize diya on load
window.onload = addDiya;