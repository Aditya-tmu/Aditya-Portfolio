/**
 * Futuristic Terminal Interface
 */

const terminalCommands = {
  help: 'Available commands: about, skills, projects, contact, clear, exit, whoami',
  about: 'Aditya Kumar — Software Engineer & Full-Stack Developer. Building the future with code.',
  skills: 'Frontend: React, TypeScript | Backend: Django, Node.js | DB: PostgreSQL, Firebase',
  projects: '1. SkillNest 2. Invoice Generator 3. Student-Professor App. Type "projects" for more.',
  contact: 'Email: hpaditya87857.contact@gmail.com | Phone: +91 7505762707',
  whoami: 'User: Guest | Permissions: Read-only | Status: Connected to AK-OS',
  clear: 'CLEAR',
  exit: 'EXIT'
};

window.initTerminal = () => {
  const terminalBtn = document.createElement('button');
  terminalBtn.id = 'terminal-toggle';
  terminalBtn.innerHTML = '👉 ENTER TERMINAL MODE';
  terminalBtn.className = 'btn btn-outline';
  terminalBtn.style.cssText = `
    position: fixed; bottom: 30px; right: 30px; z-index: 1000;
    padding: 10px 20px; font-size: 0.7rem;
  `;
  document.body.appendChild(terminalBtn);

  const terminalOverlay = document.createElement('div');
  terminalOverlay.id = 'terminal-overlay';
  terminalOverlay.className = 'terminal-hidden';
  terminalOverlay.innerHTML = `
    <div class="terminal-window">
      <div class="terminal-header">
        <div class="terminal-dots">
          <span></span><span></span><span></span>
        </div>
        <div class="terminal-title">AK-OS TERMINAL v1.0.4</div>
      </div>
      <div class="terminal-body" id="terminal-output">
        <div class="terminal-line">Welcome to Aditya's Portfolio Terminal.</div>
        <div class="terminal-line">Type 'help' to see available commands.</div>
      </div>
      <div class="terminal-input-line">
        <span class="terminal-prompt">guest@ak-portfolio:~$</span>
        <input type="text" id="terminal-input" autofocus spellcheck="false">
      </div>
    </div>
  `;
  document.body.appendChild(terminalOverlay);

  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');

  const addLine = (text, type = '') => {
    const line = document.createElement('div');
    line.className = `terminal-line ${type}`;
    line.textContent = text;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
  };

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim().toLowerCase();
      addLine(`guest@ak-portfolio:~$ ${cmd}`, 'user-cmd');
      
      if (cmd === 'clear') {
        output.innerHTML = '';
      } else if (cmd === 'exit') {
        terminalOverlay.classList.add('terminal-hidden');
      } else if (terminalCommands[cmd]) {
        addLine(terminalCommands[cmd], 'system-res');
      } else if (cmd !== '') {
        addLine(`Command not found: ${cmd}. Type 'help' for assistance.`, 'error-res');
      }
      
      input.value = '';
    }
  });

  terminalBtn.addEventListener('click', () => {
    terminalOverlay.classList.toggle('terminal-hidden');
    if (!terminalOverlay.classList.contains('terminal-hidden')) {
      input.focus();
      window.showNotification('system', 'Terminal interface engaged.');
    }
  });

  // Focus input on any click inside terminal
  terminalOverlay.querySelector('.terminal-window').addEventListener('click', () => {
    input.focus();
  });
};
