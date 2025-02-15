chrome.action.onClicked.addListener((tab) => {
    // Execute the function to toggle dark mode in the context of the current tab
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      func: toggleDarkModeInPage
    });
  });
  
  // Function to toggle dark mode (executed in the tab context)
  function toggleDarkModeInPage() {
    const currentBackgroundColor = document.documentElement.style.getPropertyValue('background-color');
  
    if (currentBackgroundColor === 'rgb(0, 0, 0)') {
      document.documentElement.style.removeProperty('background-color');
      document.documentElement.style.removeProperty('color');
      document.querySelectorAll('*').forEach((element) => {
        element.style.removeProperty('background-color');
        element.style.removeProperty('color');
      });
    } else {
      document.documentElement.style.setProperty('background-color', 'black');
      document.documentElement.style.setProperty('color', 'white');
      document.querySelectorAll('a, h1, h2, h3, p').forEach((element) => {
        element.style.setProperty('color', 'white');
      });
    }
  }
  