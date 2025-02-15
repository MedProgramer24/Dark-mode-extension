if (!document.body.classList.contains("dark-mode")) {
    const darkStyle = document.createElement("style");
    darkStyle.id = "dark-mode-style";
    darkStyle.textContent = `
        :root {
          --bg-color: #121212 !important;
          --text-color: #ffffff !important;
          --link-color: #bbbbbb !important;
          --input-bg: #1e1e1e !important;
          --border-color: #333333 !important;
          --btn-bg: #333333 !important;
          --btn-text: #ffffff !important;
        }
  
        html, body, div, section, article, main, aside, footer, header, nav, form, iframe, table, tbody, thead, tfoot, tr, th, td, .artdeco-card, .artdeco-card * {
          background-color: var(--bg-color) !important;
          color: var(--text-color) !important;
        }
  
        h1, h2, h3, h4, h5, h6, p, span, label, strong, em, i, b, code, pre, blockquote {
          color: var(--text-color) !important;
        }
  
        a, a:visited, a:active, a:hover {
          color: var(--link-color) !important;
        }
  
        input, textarea, select, button, optgroup, option {
          background-color: var(--input-bg) !important;
          color: var(--text-color) !important;
          border: 1px solid var(--border-color) !important;
        }
  
        button, input[type="submit"], input[type="button"], .btn {
          background-color: var(--btn-bg) !important;
          color: var(--btn-text) !important;
          border: none !important;
        }
  
        svg, img, video {
          filter: brightness(0.8) contrast(1.2) !important;
        }
  
        code, pre {
          background-color: var(--input-bg) !important;
          color: var(--text-color) !important;
        }
  
        table, th, td {
          border: 1px solid var(--border-color) !important;
        }
  
        input::placeholder, textarea::placeholder {
          color: #aaa !important;
        }
  
        ::-webkit-scrollbar {
          width: 10px !important;
        }
        ::-webkit-scrollbar-track {
          background: var(--bg-color) !important;
        }
        ::-webkit-scrollbar-thumb {
          background-color: var(--border-color) !important;
          border-radius: 5px !important;
          border: 2px solid var(--bg-color) !important;
        }
      `;
    document.head.appendChild(darkStyle);
    document.body.classList.add("dark-mode");
  
    const elements = document.querySelectorAll('*');
    elements.forEach(el => {
      el.style.setProperty('background-color', '#121212', 'important');
      el.style.setProperty('color', '#ffffff', 'important');
      el.style.setProperty('border-color', '#333333', 'important');
    });
  
} else {
    const darkStyleElement = document.getElementById("dark-mode-style");
    if (darkStyleElement) {
      darkStyleElement.remove();
    }
    document.body.classList.remove("dark-mode");
  
    // Resetting styles to default by removing the inline styles
    const elements = document.querySelectorAll('*');
    elements.forEach(el => {
      el.style.removeProperty('background-color');
      el.style.removeProperty('color');
      el.style.removeProperty('border-color');
    });
}
