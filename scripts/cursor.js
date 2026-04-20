// Modern Minimalist Cursor

const initCursor = () => {
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  if (!cursor || !ring) return;

  // New Modern Styles
  cursor.style.cssText = `
    width: 6px; height: 6px; background: #fff; border-radius: 50%;
    position: fixed; pointer-events: none; z-index: 10000;
    mix-blend-mode: difference; transition: transform 0.2s;
  `;
  
  ring.style.cssText = `
    width: 40px; height: 40px; border: 1px solid rgba(255,255,255,0.3);
    border-radius: 50%; position: fixed; pointer-events: none; z-index: 9999;
    transition: width 0.3s, height 0.3s, border-color 0.3s, transform 0.15s ease-out;
  `;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
    cursor.style.transform = 'translate(-50%, -50%)';
  });

  (function animateCursor() {
    rx += (mx - rx) * 0.15;
    ry += (my - ry) * 0.15;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    ring.style.transform = 'translate(-50%, -50%)';
    requestAnimationFrame(animateCursor);
  })();

  document.querySelectorAll('a, button, .project-card, input, textarea').forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.width = '70px';
      ring.style.height = '70px';
      ring.style.borderColor = 'var(--cyan)';
      ring.style.backgroundColor = 'rgba(0, 245, 255, 0.05)';
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.width = '40px';
      ring.style.height = '40px';
      ring.style.borderColor = 'rgba(255,255,255,0.3)';
      ring.style.backgroundColor = 'transparent';
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  });
};

initCursor();
