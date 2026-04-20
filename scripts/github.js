/**
 * GitHub Data Integration
 */

window.fetchGitHubData = async (username = 'Aditya-tmu') => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error('GitHub API failure');
    
    const data = await response.json();
    
    // Update stats if they exist in the DOM
    const repoCountEl = document.querySelector('[data-count="8"]');
    if (repoCountEl && data.public_repos) {
      repoCountEl.setAttribute('data-count', data.public_repos);
      // If reveal observer already triggered, manually update
      if (repoCountEl.textContent !== '0') {
        repoCountEl.textContent = data.public_repos + '+';
      }
    }

    // Optionally fetch languages or specific repo details
    // const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
    // const repos = await reposResponse.json();
    
    window.showNotification('info', `GitHub data synchronized for ${username}.`, { duration: 3000 });
    
  } catch (error) {
    console.error('GitHub fetch error:', error);
    // Silent fail or minimal notification
  }
};

window.addEventListener('load', () => {
  setTimeout(() => {
    window.fetchGitHubData();
  }, 4000);
});
