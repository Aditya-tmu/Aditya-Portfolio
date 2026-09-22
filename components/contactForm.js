/**
 * Functional Contact Form using EmailJS
 */

window.initContactForm = () => {
  const contactSection = document.getElementById('contact-form-wrapper');
  if (!contactSection) return;

  const formContainer = document.createElement('div');
  formContainer.className = 'reveal';
  formContainer.style.marginTop = '40px';
  formContainer.innerHTML = `
    <form id="contact-form" style="display: grid; gap: 20px; text-align: left; max-width: 650px; margin: 0 auto;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div class="form-group">
          <label><i class="fa-solid fa-user"></i> NAME</label>
          <div class="input-wrapper">
            <i class="fa-solid fa-user input-icon"></i>
            <input type="text" name="user_name" placeholder="Your Name" required>
          </div>
        </div>
        <div class="form-group">
          <label><i class="fa-solid fa-envelope"></i> EMAIL</label>
          <div class="input-wrapper">
            <i class="fa-solid fa-envelope input-icon"></i>
            <input type="email" name="user_email" placeholder="your.email@example.com" required>
          </div>
        </div>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div class="form-group">
          <label><i class="fa-solid fa-phone"></i> PHONE</label>
          <div class="input-wrapper">
            <i class="fa-solid fa-phone input-icon"></i>
            <input type="tel" name="user_phone" placeholder="+91 7505762707">
          </div>
        </div>
        <div class="form-group">
          <label><i class="fa-brands fa-whatsapp" style="color: #25D366;"></i> WHATSAPP</label>
          <div class="input-wrapper">
            <i class="fa-brands fa-whatsapp input-icon" style="color: #25D366;"></i>
            <input type="tel" name="user_whatsapp" placeholder="+91 7505762707">
          </div>
        </div>
      </div>
      <div class="form-group">
        <label><i class="fa-solid fa-briefcase"></i> DESIGNATION</label>
        <div class="input-wrapper">
          <i class="fa-solid fa-briefcase input-icon"></i>
          <input type="text" name="user_designation" placeholder="e.g. Software Engineer / Recruiter">
        </div>
      </div>
      <div class="form-group">
        <label><i class="fa-solid fa-comment-dots"></i> REASON / MESSAGE</label>
        <div class="input-wrapper">
          <i class="fa-solid fa-comment-dots input-icon textarea-icon"></i>
          <textarea name="message" required placeholder="Write your message here..."></textarea>
        </div>
      </div>
      <button type="submit" class="btn btn-primary" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 10px;">
        <i class="fa-solid fa-paper-plane"></i> TRANSMIT MESSAGE
      </button>
    </form>
  `;

  contactSection.appendChild(formContainer);

  const form = document.getElementById('contact-form');
  
  // Add focus effects
  form.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('focus', () => el.style.borderColor = 'var(--cyan)');
    el.addEventListener('blur', () => el.style.borderColor = 'var(--glass-border)');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const originalText = btn.textContent;
    
    btn.textContent = 'ESTABLISHING UPLINK...';
    btn.disabled = true;

    // --- EMAILJS INTEGRATION ---
    // Replace these strings with your actual IDs from the EmailJS Dashboard
    const SERVICE_ID = 'service_al0a43q'; 
    const TEMPLATE_ID = 'template_47xkkwc';
    const PUBLIC_KEY = 'p9IPVMT5xy5-sN8m6';

    emailjs.init(PUBLIC_KEY);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form)
      .then(() => {
        window.showNotification('success', 'Transmission successful. I will respond shortly.', { title: 'UPLINK ESTABLISHED' });
        form.reset();
      }, (error) => {
        window.showNotification('error', 'Transmission failed: ' + error.text, { title: 'SIGNAL LOST' });
        console.error('EmailJS Error:', error);
      })
      .finally(() => {
        btn.textContent = originalText;
        btn.disabled = false;
      });
  });
};
