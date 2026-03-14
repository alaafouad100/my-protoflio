const text = "Eng. Alaa Fouad";
const typewriterElement = document.getElementById('typewriter');
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typewriterElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 120);
    }
}

document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    hero.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(0, 210, 255, 0.1) 0%, transparent 70%)`;
});

ScrollReveal({ distance: '60px', duration: 2000, delay: 200 });
ScrollReveal().reveal('.hero-content', { origin: 'left' });
ScrollReveal().reveal('.hero-image', { origin: 'right', delay: 400 });
ScrollReveal().reveal('.section-title', { origin: 'top' });
ScrollReveal().reveal('.edu-card, .project-card', { interval: 200 });
ScrollReveal().reveal('.skill-bubble', { interval: 100, scale: 0.8 });
ScrollReveal().reveal('.cert-item', { interval: 150 });

window.onload = typeWriter;