// Listen for messages from popup.js or background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'toggleDarkMode') {
      toggleDarkMode();
    }
  });
  
  function toggleDarkMode() {
    if (!document.body.classList.contains('dark-mode')) {
      const darkStyle = document.createElement('style');
      darkStyle.id = 'dark-mode-style';
      darkStyle.textContent = `
        body, html {
          background-color: #121212 !important;
          color: #ffffff !important;
        }
        a, h1, h2, h3, h4, h5, h6, p, span, div {
          color: #ffffff !important;
        }
        img, video {
          filter: brightness(0.8);
        }
      `;
      document.head.appendChild(darkStyle);
      document.body.classList.add('dark-mode');
    } else {
      document.getElementById('dark-mode-style').remove();
      document.body.classList.remove('dark-mode');
    }
  }
  