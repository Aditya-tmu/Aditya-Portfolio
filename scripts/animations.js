// Scroll-based Reveal Animations

window.initAnimations = () => {
  // Skill bars & Counter animation
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-fill').forEach(bar => {
          const w = bar.getAttribute('data-width');
          bar.style.width = w + '%';
        });
        
        // Counter animation for stats
        entry.target.querySelectorAll('[data-count]').forEach(el => {
          const target = parseInt(el.getAttribute('data-count'));
          let current = 0;
          const duration = 2000; // 2 seconds
          const stepTime = 20;
          const totalSteps = duration / stepTime;
          const stepIncrement = target / totalSteps;
          
          const id = setInterval(() => {
            current += stepIncrement;
            if (current >= target) {
              current = target;
              clearInterval(id);
            }
            el.textContent = Math.floor(current) + (target === 100 ? '%' : '+');
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  // General Reveal on Scroll
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '-50px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  document.querySelectorAll('#skills, #about').forEach(el => skillObserver.observe(el));
};
