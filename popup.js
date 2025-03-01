document.getElementById('toggleDarkMode').addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['toggleDark.js']
    });
  });
// Donate Button - Redirect to your donation page
donateButton.addEventListener("click", () => {
  window.open("https://buymeacoffee.com/medsolutech", "_blank");
});