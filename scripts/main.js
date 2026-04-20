// Main Initialization & Global Helpers

window.addEventListener('load', () => {
  const fill = document.getElementById('loaderFill');
  if (fill) fill.style.width = '100%';
  
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
    
    // Initialize animations after loader is hidden
    if (window.initAnimations) window.initAnimations();
    if (window.initTyped) window.initTyped();
  }, 2000);
});

// Typed Text Effect
window.initTyped = () => {
  const lines = [
    'Building scalable systems from scratch.',
    'Integrating AI into real-world apps.',
    'Turning ideas into working products.',
    'Currently shipping → SkillNest Platform.',
  ];
  let li = 0, ci = 0, deleting = false;
  const el = document.getElementById('typed');
  if (!el) return;

  function typeEffect() {
    const line = lines[li];
    if (!deleting) {
      el.textContent = line.slice(0, ++ci);
      if (ci === line.length) {
        deleting = true;
        setTimeout(typeEffect, 2000);
        return;
      }
    } else {
      el.textContent = line.slice(0, --ci);
      if (ci === 0) {
        deleting = false;
        li = (li + 1) % lines.length;
      }
    }
    setTimeout(typeEffect, deleting ? 35 : 65);
  }
  
  setTimeout(typeEffect, 500);
};
