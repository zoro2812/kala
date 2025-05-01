// Enhanced Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    const loader = document.querySelector('.loader');
    
    // Add more balloons dynamically
    for (let i = 0; i < 8; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.top = `${Math.random() * 100}%`;
        balloon.style.animationDelay = `${Math.random() * 3}s`;
        balloon.style.animationDuration = `${2 + Math.random() * 2}s`;
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        loader.appendChild(balloon);
    }

    // Add sparkles
    for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.animationDelay = `${Math.random() * 2}s`;
        sparkle.style.animationDuration = `${1 + Math.random() * 2}s`;
        loader.appendChild(sparkle);
    }

    // Add loading text
    const loadingText = document.createElement('div');
    loadingText.className = 'loading-text';
    loadingText.textContent = 'Loading Birthday Wishes...';
    loader.appendChild(loadingText);

    // Fade out preloader
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
            startMainAnimations();
        }, 500);
    }, 2000);
});

// Main Animations
function startMainAnimations() {
    // Add floating elements to hero section
    const heroSection = document.querySelector('.hero');
    for (let i = 0; i < 20; i++) {
        const element = document.createElement('div');
        element.className = Math.random() > 0.5 ? 'balloon' : 'sparkle';
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        element.style.animationDelay = `${Math.random() * 5}s`;
        element.style.animationDuration = `${3 + Math.random() * 2}s`;
        if (element.className === 'balloon') {
            element.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        }
        heroSection.appendChild(element);
    }

    // Add confetti effect
    createConfetti();

    // Add scroll animations
    addScrollAnimations();
}

// Enhanced Confetti Animation
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#ffd166', '#ff8e8e', '#a8e6cf', '#ff9ff3', '#feca57'];
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-container';
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        confetti.style.animationDuration = `${3 + Math.random() * 2}s`;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 10 + 5}px`;
        confettiContainer.appendChild(confetti);
    }
}

// Scroll Animations
function addScrollAnimations() {
    const elements = document.querySelectorAll('.message-card, .gallery-item, .timer-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease-out';
        observer.observe(element);
    });
}

// Enhanced Audio Player
const audioPlayer = document.getElementById('birthdayMusic');
const playPauseBtn = document.getElementById('playPauseBtn');
let isPlaying = false;

// Set audio to loop
audioPlayer.loop = true;

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-music"></i>';
        playPauseBtn.style.transform = 'scale(1) rotate(0deg)';
    } else {
        audioPlayer.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        playPauseBtn.style.transform = 'scale(1.1) rotate(360deg)';
    }
    isPlaying = !isPlaying;
});

// Enhanced Wish Modal
const modal = document.getElementById('wishModal');
const btn = document.getElementById('sendWishBtn');
const span = document.getElementsByClassName('close')[0];
const wishForm = document.getElementById('wishForm');

btn.onclick = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    createFireworksAtMouse();
}

span.onclick = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

wishForm.onsubmit = (e) => {
    e.preventDefault();
    const wish = wishForm.querySelector('textarea').value;
    
    // Create celebration effect
    createCelebrationEffect();
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <p>Thank you for your birthday wish! 🎉</p>
    `;
    document.body.appendChild(successMessage);
    
    setTimeout(() => {
        successMessage.remove();
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        wishForm.reset();
    }, 2000);
}

// Celebration Effect
function createCelebrationEffect() {
    const colors = ['#ff6b6b', '#4ecdc4', '#ffd166', '#ff8e8e', '#a8e6cf'];
    const container = document.createElement('div');
    container.className = 'celebration-container';
    document.body.appendChild(container);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'celebration-particle';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${1 + Math.random() * 2}s`;
        container.appendChild(particle);
    }

    setTimeout(() => {
        container.remove();
    }, 2000);
}

// Enhanced Fireworks
class Firework {
    constructor(x, y, targetX, targetY) {
        this.x = x;
        this.y = y;
        this.targetX = targetX;
        this.targetY = targetY;
        this.distance = Math.sqrt(Math.pow(targetX - x, 2) + Math.pow(targetY - y, 2));
        this.angle = Math.atan2(targetY - y, targetX - x);
        this.speed = 2;
        this.particles = [];
        this.exploded = false;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.trail = [];
        this.maxTrailLength = 10;
    }

    update() {
        if (!this.exploded) {
            this.x += Math.cos(this.angle) * this.speed;
            this.y += Math.sin(this.angle) * this.speed;
            
            // Add to trail
            this.trail.push({x: this.x, y: this.y});
            if (this.trail.length > this.maxTrailLength) {
                this.trail.shift();
            }
            
            if (Math.abs(this.x - this.targetX) < 5 && Math.abs(this.y - this.targetY) < 5) {
                this.explode();
            }
        } else {
            this.particles.forEach(particle => particle.update());
            this.particles = this.particles.filter(particle => particle.life > 0);
        }
    }

    explode() {
        this.exploded = true;
        for (let i = 0; i < 200; i++) {
            this.particles.push(new Particle(this.x, this.y, this.color));
        }
    }

    draw(ctx) {
        if (!this.exploded) {
            // Draw trail
            ctx.beginPath();
            ctx.moveTo(this.trail[0].x, this.trail[0].y);
            for (let i = 1; i < this.trail.length; i++) {
                ctx.lineTo(this.trail[i].x, this.trail[i].y);
            }
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 2;
            ctx.stroke();

            // Draw firework
            ctx.beginPath();
            ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        } else {
            this.particles.forEach(particle => particle.draw(ctx));
        }
    }
}

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 5;
        this.life = 100;
        this.color = color;
        this.size = Math.random() * 3 + 1;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.2;
    }

    update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.life--;
        this.size *= 0.98;
        this.rotation += this.rotationSpeed;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.beginPath();
        ctx.rect(-this.size/2, -this.size/2, this.size, this.size);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }
}

// Initialize Fireworks
const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.getElementById('fireworks').appendChild(canvas);
const ctx = canvas.getContext('2d');

let fireworks = [];

function createFirework() {
    const x = Math.random() * canvas.width;
    const y = canvas.height;
    const targetX = Math.random() * canvas.width;
    const targetY = Math.random() * canvas.height * 0.5;
    fireworks.push(new Firework(x, y, targetX, targetY));
}

function createFireworksAtMouse() {
    const x = Math.random() * canvas.width;
    const y = canvas.height;
    const targetX = Math.random() * canvas.width;
    const targetY = Math.random() * canvas.height * 0.5;
    fireworks.push(new Firework(x, y, targetX, targetY));
}

function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    fireworks.forEach(firework => {
        firework.update();
        firework.draw(ctx);
    });

    fireworks = fireworks.filter(firework => !firework.exploded || firework.particles.length > 0);

    if (Math.random() < 0.05) {
        createFirework();
    }

    requestAnimationFrame(animate);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Add celebration styles
const style = document.createElement('style');
style.textContent = `
    .loading-text {
        position: absolute;
        bottom: -30px;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        font-size: 1.2rem;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }

    .celebration-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1000;
    }

    .celebration-particle {
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        animation: celebration 1s ease-out forwards;
    }

    @keyframes celebration {
        0% {
            transform: scale(0) translateY(0);
            opacity: 1;
        }
        100% {
            transform: scale(1) translateY(-100px);
            opacity: 0;
        }
    }

    .success-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        z-index: 1001;
        animation: successFade 2s ease-out forwards;
    }

    .success-message i {
        color: #4ecdc4;
        font-size: 2rem;
        margin-bottom: 10px;
    }

    @keyframes successFade {
        0% {
            opacity: 0;
            transform: translate(-50%, -60%);
        }
        20% {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
        80% {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -40%);
        }
    }
`;
document.head.appendChild(style); 