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
    <form id="contact-form" style="display: grid; gap: 20px; text-align: left; max-width: 600px; margin: 0 auto;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div class="form-group">
          <label style="display: block; font-family: var(--font-share-tech); color: var(--cyan); margin-bottom: 8px; font-size: 0.8rem;">NAME</label>
          <input type="text" name="user_name" required style="width: 100%; background: var(--glass); border: 1px solid var(--glass-border); padding: 12px; color: #fff; border-radius: 4px; outline: none; transition: border-color 0.3s;">
        </div>
        <div class="form-group">
          <label style="display: block; font-family: var(--font-share-tech); color: var(--cyan); margin-bottom: 8px; font-size: 0.8rem;">EMAIL</label>
          <input type="email" name="user_email" required style="width: 100%; background: var(--glass); border: 1px solid var(--glass-border); padding: 12px; color: #fff; border-radius: 4px; outline: none; transition: border-color 0.3s;">
        </div>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div class="form-group">
          <label style="display: block; font-family: var(--font-share-tech); color: var(--cyan); margin-bottom: 8px; font-size: 0.8rem;">PHONE</label>
          <input type="tel" name="user_phone" style="width: 100%; background: var(--glass); border: 1px solid var(--glass-border); padding: 12px; color: #fff; border-radius: 4px; outline: none; transition: border-color 0.3s;">
        </div>
        <div class="form-group">
          <label style="display: block; font-family: var(--font-share-tech); color: var(--cyan); margin-bottom: 8px; font-size: 0.8rem;">DESIGNATION</label>
          <input type="text" name="user_designation" style="width: 100%; background: var(--glass); border: 1px solid var(--glass-border); padding: 12px; color: #fff; border-radius: 4px; outline: none; transition: border-color 0.3s;">
        </div>
      </div>
      <div class="form-group">
        <label style="display: block; font-family: var(--font-share-tech); color: var(--cyan); margin-bottom: 8px; font-size: 0.8rem;">REASON / MESSAGE</label>
        <textarea name="message" required style="width: 100%; background: var(--glass); border: 1px solid var(--glass-border); padding: 12px; color: #fff; border-radius: 4px; outline: none; min-height: 120px; resize: vertical; transition: border-color 0.3s;"></textarea>
      </div>
      <button type="submit" class="btn btn-primary" style="width: 100%;">TRANSMIT MESSAGE</button>
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
