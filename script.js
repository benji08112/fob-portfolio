// ===== Smooth Scrolling for Navigation =====
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith("#")) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===== Glowing FOB Logo Animation =====
const logo = document.querySelector('.logo h1');
let glow = true;

setInterval(() => {
    logo.style.textShadow = glow
        ? "0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88"
        : "none";
    glow = !glow;
}, 800);

// ===== Typing Effect for Hero Tagline =====
const tagline = document.querySelector('.hero-content h3');
const text = "Cybersecurity Student | Tech Enthusiast | Future Global Brand Owner";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        tagline.textContent = text.slice(0, index + 1);
        index++;
        setTimeout(typeEffect, 80); // typing speed
    }
}

typeEffect();
