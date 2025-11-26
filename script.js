// Create shard background
const bg = document.querySelector('.background');
if (bg) {
  for (let i = 0; i < 30; i++) {
    const shard = document.createElement('span');
    const width = Math.random() * 100 + 100;
    const height = Math.random() * 20 + 10;
    shard.style.width = `${width}px`;
    shard.style.height = `${height}px`;
    shard.style.left = `${Math.random() * 100}%`;
    shard.style.top = `${Math.random() * 100}%`;
    shard.style.background = `linear-gradient(90deg, rgba(0,255,255,0.4), rgba(255,255,255,0.15))`;
    shard.style.transform = `rotate(${Math.random() * 360}deg)`;
    shard.style.animationDuration = `${6 + Math.random() * 8}s`;
    shard.style.opacity = (Math.random() * 0.5 + 0.2).toString();
    bg.appendChild(shard);
  }
}

// Fade the background out as user scrolls past the hero
const hero = document.querySelector('.hero');
let ticking = false;

function updateBgOpacity() {
  const heroHeight = hero?.offsetHeight || window.innerHeight;
  const fadeStart = heroHeight * 0.2;  // start fading after 20% of hero
  const fadeEnd   = heroHeight * 0.8;  // fully faded at 80% of hero
  const y = window.scrollY;

  let opacity = 1;
  if (y > fadeStart) {
    opacity = Math.max(0, 1 - (y - fadeStart) / (fadeEnd - fadeStart));
  }
  if (bg) bg.style.opacity = opacity.toString();
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateBgOpacity);
    ticking = true;
  }
});

// Initialize on load (handles refresh mid-scroll)
window.addEventListener('load', updateBgOpacity);

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
