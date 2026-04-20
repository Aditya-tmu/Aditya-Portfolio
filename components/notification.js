/**
 * Futuristic Notification System
 */

const createNotificationContainer = () => {
  let container = document.getElementById('notification-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'notification-container';
    document.body.appendChild(container);
  }
  return container;
};

const icons = {
  success: '✔',
  error: '✖',
  info: 'ℹ',
  warning: '⚠',
  system: '⧉'
};

const titles = {
  success: 'System Success',
  error: 'System Error',
  info: 'Information',
  warning: 'Alert',
  system: 'Kernel Process'
};

/**
 * Shows a futuristic notification
 * @param {string} type - success, error, info, warning, system
 * @param {string} message - The message to display
 * @param {object} options - { duration, title, sound }
 */
window.showNotification = (type, message, options = {}) => {
  const container = createNotificationContainer();
  const duration = options.duration || 5000;
  
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  
  const icon = icons[type] || icons.info;
  const title = options.title || titles[type] || titles.info;
  
  notification.innerHTML = `
    <div class="notification-icon">${icon}</div>
    <div class="notification-content">
      <div class="notification-title">${title}</div>
      <div class="notification-message">${message}</div>
    </div>
    <button class="notification-close">×</button>
    <div class="notification-progress"></div>
  `;
  
  container.appendChild(notification);
  
  // Trigger animation
  requestAnimationFrame(() => {
    notification.classList.add('show');
  });
  
  const progressBar = notification.querySelector('.notification-progress');
  let startTime = Date.now();
  let remainingTime = duration;
  let animationId;
  let isPaused = false;
  
  const updateProgress = () => {
    if (!isPaused) {
      const elapsed = Date.now() - startTime;
      const progress = Math.max(0, 1 - elapsed / duration);
      progressBar.style.transform = `scaleX(${progress})`;
      
      if (progress <= 0) {
        closeNotification();
        return;
      }
    }
    animationId = requestAnimationFrame(updateProgress);
  };
  
  const closeNotification = () => {
    notification.classList.remove('show');
    notification.classList.add('hide');
    cancelAnimationFrame(animationId);
    setTimeout(() => {
      notification.remove();
    }, 4000);
  };
  
  notification.querySelector('.notification-close').addEventListener('click', closeNotification);
  
  notification.addEventListener('mouseenter', () => {
    isPaused = true;
    const elapsed = Date.now() - startTime;
    remainingTime = duration - elapsed;
  });
  
  notification.addEventListener('mouseleave', () => {
    isPaused = false;
    startTime = Date.now() - (duration - remainingTime);
  });
  
  animationId = requestAnimationFrame(updateProgress);

  // Sound feedback could be added here if audio files existed
};

// Example usage on startup
window.addEventListener('load', () => {
  setTimeout(() => {
    // window.showNotification('system', 'INITIALIZING NEURAL INTERFACE...', { duration: 3000 });
  }, 2500);
});
