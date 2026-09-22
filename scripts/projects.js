/**
 * AK-OS Project Engine
 * Dynamic injection, 3D tilt effects, and modal system
 */

const projects = [
  {
    id: 'vindywashini',
    name: 'Vindywashini Books',
    tagline: 'Modern Desktop Accounting, Billing & GST Suite',
    badge: 'LATEST / FLAGSHIP',
    badgeType: 'flagship',
    icon: '📚',
    desc: 'An all-in-one desktop and web enterprise application engineered for Indian MSMEs, wholesalers, and retailers. Combines GST-compliant billing, double-entry bookkeeping (Day Book, Trial Balance, P&L, Balance Sheet), real-time inventory tracking with threshold alerts, dynamic UPI QR code payments, multi-format printing (A4, A5, 80mm Thermal POS), and automated GSTR-1 / GSTR-3B Excel & JSON exports into an offline-first experience.',
    highlights: [
      'GST Billing & Invoicing: B2B, B2C, Interstate (IGST), Intrastate (CGST+SGST), HSN/SAC automated tax calculation.',
      'Double-Entry Accounting: Complete Journal, Payment, Receipt, Contra, Sales & Purchase vouchers with live Trial Balance and Balance Sheet.',
      'Inventory & Stock Tracking: Real-time stock alerts, unit conversions (PCS, KGS, BAG, BOX), automated adjustments on invoices.',
      'Government GST Exports: One-click generation of official GSTR-1 Excel workbooks & GSTR-3B summaries.'
    ],
    stack: ['Electron', 'React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Vite'],
    github: 'https://github.com/Aditya-tmu/Vindywashini-Books',
    live: 'https://vindywashini-books.vercel.app/',
    image: 'assets/images/projects/Vindywashini_Book.png'
  },
  {
    id: 'skillnest',
    name: 'SkillNest Platform',
    tagline: 'AI-Driven Student Networking & Skill Verification',
    badge: 'FEATURED',
    badgeType: 'featured',
    icon: '🚀',
    desc: 'A cutting-edge student networking and marketplace ecosystem. Features automated skill verification powered by Google Gemini AI, location-based peer discovery using geospatial Haversine calculations, bidirectional WebSocket messaging, and a secure session booking marketplace.',
    highlights: [
      'AI-driven skill testing with dynamic questions and automated scoring via Google Gemini.',
      'Geospatial peer discovery mapping nearby campus developers and study partners.',
      'Real-time chat channels built on Django Channels and WebSockets with message receipt status.'
    ],
    stack: ['Django', 'React.js', 'WebSockets', 'PostgreSQL', 'Google Gemini AI', 'DRF', 'TypeScript'],
    github: 'https://github.com/Aditya-tmu/SkillNest',
    live: null,
    image: 'assets/images/projects/skillnest.png'
  },
  {
    id: 'invoice',
    name: 'Invoice Generator Pro',
    tagline: 'Full-Stack Invoicing & UPI Automation',
    badge: 'UTILITY',
    badgeType: 'normal',
    icon: '🧾',
    desc: 'A comprehensive full-stack invoicing solution designed for freelancers and small businesses. Generates pixel-perfect PDF receipts in real time, pre-fills dynamic UPI QR codes for instant mobile settlements, and automates Excel data exports for accounting.',
    highlights: [
      'Dynamic UPI QR code generation that embeds recipient UPI ID and invoice total directly into scanning apps.',
      'High-performance PDF generation with custom company branding and digital signature overlays.',
      'Instant invoice forwarding via WhatsApp API link integration.'
    ],
    stack: ['React', 'Node.js', 'Express.js', 'PDFKit', 'ExcelJS', 'UPI QR', 'Vite'],
    github: 'https://github.com/Aditya-tmu/invoice-generator',
    live: null,
    image: 'assets/images/projects/invoice.png'
  },
  {
    id: 'vanaspati',
    name: 'Vanaspati Botanical AI',
    tagline: 'Bilingual Plant Classification & Care Assistant',
    badge: 'MOBILE / AI',
    badgeType: 'normal',
    icon: '🌿',
    desc: 'An AI-powered botanical identification mobile application. Users can search by plant name or snap a photo to receive detailed taxonomy, growing seasons, watering schedules, and care guidelines with full bilingual Hindi and English localization.',
    highlights: [
      'On-device image classification utilizing TensorFlow Lite models for offline plant identification.',
      'Bilingual interface catering to non-English speakers across rural and urban India.',
      'Firebase cloud synchronization with offline caching.'
    ],
    stack: ['Flutter', 'Dart', 'TensorFlow Lite', 'Firebase', 'Python API'],
    github: 'https://github.com/Aditya-tmu/Vanaspati',
    live: null,
    image: 'assets/images/projects/vanaspati.png'
  },
  {
    id: 'more',
    name: 'Open Source & Experimental Labs',
    tagline: '8+ Public Repositories & Automation Scripts',
    badge: 'REPOSITORIES',
    badgeType: 'normal',
    icon: '⚙️',
    desc: 'Exploration of system engineering, automation bots, CLI tools, algorithm implementations, and open-source contributions spanning Python, JavaScript, and systems programming.',
    highlights: [
      'Python workflow automation and web scraping pipelines.',
      'Modern web components and algorithmic problem solutions.'
    ],
    stack: ['Python', 'JavaScript', 'Django', 'React', 'Git'],
    github: 'https://github.com/Aditya-tmu?tab=repositories',
    live: null,
    image: 'assets/images/projects/more.png'
  }
];

window.openProjectModal = (projectId) => {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.createElement('div');
  modal.id = 'project-modal';
  modal.className = 'modal-overlay';
  
  modal.innerHTML = `
    <div class="modal-content">
      <button id="close-modal" class="modal-close" title="Close">&times;</button>
      <div style="height: 360px; background: #000; display: flex; align-items: center; justify-content: center; overflow: hidden;">
        <img src="${project.image}" onerror="this.src='https://via.placeholder.com/900x450/020509/00f5ff?text=${encodeURIComponent(project.name)}'" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div style="padding: 40px;">
        <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 24px;">
          <span style="font-size: 2.8rem;">${project.icon}</span>
          <div>
            <h2 style="font-family: var(--font-orbitron, 'Orbitron', monospace); font-size: 2rem; color: #fff;">${project.name}</h2>
            <div style="font-family: var(--font-share-tech, 'Share Tech Mono', monospace); font-size: 0.9rem; color: var(--cyan, #00f5ff); margin-top: 4px;">${project.tagline}</div>
          </div>
        </div>
        <p style="font-size: 1.05rem; line-height: 1.85; color: #7aa5c0; margin-bottom: 28px;">${project.desc}</p>
        
        ${project.highlights ? `
          <div style="margin-bottom: 28px;">
            <h4 style="font-family: var(--font-share-tech, 'Share Tech Mono', monospace); color: var(--cyan, #00f5ff); margin-bottom: 12px; letter-spacing: 2px;">KEY HIGHLIGHTS</h4>
            <ul style="list-style: none; padding-left: 0; font-size: 0.92rem; color: #7aa5c0; line-height: 1.7;">
              ${project.highlights.map(h => `<li style="margin-bottom: 6px; padding-left: 18px; position: relative;"><span style="position: absolute; left: 0; color: var(--cyan, #00f5ff);">▸</span>${h}</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        <div style="margin-bottom: 32px;">
          <h4 style="font-family: var(--font-share-tech, 'Share Tech Mono', monospace); color: var(--cyan, #00f5ff); margin-bottom: 16px; letter-spacing: 2px;">TECH STACK</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            ${project.stack.map(s => `<span class="stack-badge">${s}</span>`).join('')}
          </div>
        </div>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          ${project.live ? `
            <a href="${project.live}" target="_blank" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 8px;">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> LIVE DEMO
            </a>
          ` : ''}
          <a href="${project.github}" target="_blank" class="btn btn-outline" style="display: inline-flex; align-items: center; gap: 8px;">
            <i class="fa-brands fa-github"></i> SOURCE CODE
          </a>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  setTimeout(() => modal.classList.add('active'), 10);

  const closeModal = () => {
    modal.classList.remove('active');
    setTimeout(() => {
      modal.remove();
      document.body.style.overflow = '';
    }, 400);
  };

  modal.querySelector('#close-modal').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
};

window.initProjects = () => {
  const grid = document.querySelector('.projects-grid') || document.getElementById('projects-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  projects.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'project-card tilt-card reveal';
    card.innerHTML = `
      <div class="project-card-image-wrap">
        <img src="${project.image}" alt="${project.name}" onerror="this.src='https://via.placeholder.com/800x450/020509/00f5ff?text=${encodeURIComponent(project.name)}'">
        <div class="project-card-image-overlay"></div>
        ${project.badge ? `<div class="project-badge ${project.badgeType === 'flagship' ? 'project-badge-flagship' : 'project-badge-featured'}">${project.badge}</div>` : ''}
        <div class="project-num">0${index + 1}</div>
      </div>
      <div class="project-content">
        <div class="project-header-row">
          <div class="project-icon">${project.icon}</div>
          <div>
            <div class="project-name">${project.name}</div>
            <div style="font-family: 'Share Tech Mono', monospace; font-size: 0.75rem; color: var(--cyan);">${project.tagline}</div>
          </div>
        </div>
        <p class="project-desc">${project.desc.substring(0, 130)}...</p>
        <div class="project-stack">
          ${project.stack.slice(0, 4).map(s => `<span class="stack-badge">${s}</span>`).join('')}
          ${project.stack.length > 4 ? `<span class="stack-badge">+${project.stack.length - 4}</span>` : ''}
        </div>
        <div class="project-actions">
          ${project.live ? `
            <a href="${project.live}" target="_blank" class="btn-card-action btn-card-live">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
            </a>
          ` : ''}
          <a href="${project.github}" target="_blank" class="btn-card-action btn-card-code">
            <i class="fa-brands fa-github"></i> Code
          </a>
          <button type="button" class="btn-card-action btn-card-details">
            <i class="fa-solid fa-circle-info"></i> Details
          </button>
        </div>
      </div>
      <div class="card-glare"></div>
    `;

    card.addEventListener('click', (e) => {
      if (!e.target.closest('a')) window.openProjectModal(project.id);
    });

    grid.appendChild(card);
  });
};
