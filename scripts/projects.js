/**
 * Updated Project Logic
 * Ensures clean injection and modal behavior
 */

const projects = [
  {
    id: 'skillnest',
    name: 'SkillNest Platform',
    icon: '🚀',
    desc: 'A comprehensive student networking and marketplace ecosystem. Features AI-driven skill verification via Google Gemini API, allowing students to list services and verify expertise through automated testing. Includes location-based peer discovery, real-time messaging with WebSockets, and a secure help-session booking system.',
    stack: ['Django', 'React.js', 'WebSockets', 'PostgreSQL', 'Google Gemini AI', 'DRF', 'TypeScript'],
    github: 'https://github.com/Aditya-tmu/SkillNest',
    image: 'assets/images/projects/skillnest.png'
  },
  {
    id: 'invoice',
    name: 'Invoice Generator Pro',
    icon: '🧾',
    desc: 'Full-stack invoicing automation tool designed for freelancers. Implements real-time PDF generation with customized branding, dynamic UPI QR code integration for instant payments, and automated Excel exports for bookkeeping. Streamlines client management and billing cycles.',
    stack: ['React', 'Node.js', 'Express.js', 'PDFKit', 'ExcelJS', 'UPI API', 'Vite'],
    github: 'https://github.com/Aditya-tmu/invoice-generator',
    image: 'assets/images/projects/invoice.png'
  },
  {
    id: 'student-prof',
    name: 'Academic Bridge App',
    icon: '💬',
    desc: 'Real-time communication platform optimized for educational environments. Facilitates seamless interactions between students and professors through high-performance chat and peer-to-peer video conferencing using WebRTC. Features secure resource sharing and automated scheduling.',
    stack: ['React', 'Node.js', 'WebRTC', 'Socket.io', 'Firebase Auth'],
    github: 'https://github.com/Aditya-tmu',
    image: 'assets/images/projects/student-prof.png'
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
      <button id="close-modal" class="modal-close">×</button>
      <div style="height: 350px; background: #000; display: flex; align-items: center; justify-content: center; overflow: hidden;">
        <img src="${project.image}" onerror="this.src='https://via.placeholder.com/800x400/020509/00f5ff?text=${project.name}'" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.6;">
      </div>
      <div style="padding: 40px;">
        <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 24px;">
          <span style="font-size: 3rem;">${project.icon}</span>
          <h2 style="font-family: var(--font-orbitron); font-size: 2rem; color: #fff;">${project.name}</h2>
        </div>
        <p style="font-size: 1.05rem; line-height: 1.8; color: #7aa5c0; margin-bottom: 32px;">${project.desc}</p>
        <div style="margin-bottom: 32px;">
          <h4 style="font-family: var(--font-share-tech); color: var(--cyan); margin-bottom: 16px; letter-spacing: 2px;">TECH STACK</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            ${project.stack.map(s => `<span class="stack-badge">${s}</span>`).join('')}
          </div>
        </div>
        <a href="${project.github}" target="_blank" class="btn btn-primary">SOURCE CODE</a>
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
  const grid = document.querySelector('.projects-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  projects.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.innerHTML = `
      <div class="project-num">0${index + 1}</div>
      <div class="project-icon">${project.icon}</div>
      <h3 class="project-name">${project.name}</h3>
      <p class="project-desc">${project.desc.substring(0, 100)}...</p>
      <div class="project-stack">
        ${project.stack.slice(0, 3).map(s => `<span class="stack-badge">${s}</span>`).join('')}
      </div>
      <div style="margin-top: 20px; font-family: var(--font-share-tech); color: var(--cyan); font-size: 0.7rem; letter-spacing: 2px;">ACCESS DATABASE →</div>
    `;
    
    card.addEventListener('click', () => window.openProjectModal(project.id));
    grid.appendChild(card);
  });
};
