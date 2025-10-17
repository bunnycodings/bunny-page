// Anti-copy and anti-right-click protection
export const addProtection = () => {
  // Disable right-click
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
  document.addEventListener('keydown', (e) => {
    // Disable F12
    if (e.key === 'F12') {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+Shift+I (Developer Tools)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+S (Save Page)
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+A (Select All)
    if (e.ctrlKey && e.key === 'a') {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+C (Copy)
    if (e.ctrlKey && e.key === 'c') {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+V (Paste)
    if (e.ctrlKey && e.key === 'v') {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+X (Cut)
    if (e.ctrlKey && e.key === 'x') {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+P (Print)
    if (e.ctrlKey && e.key === 'p') {
      e.preventDefault();
      return false;
    }
  });

  // Disable text selection
  document.addEventListener('selectstart', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable drag
  document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable image dragging
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('dragstart', (e) => {
      e.preventDefault();
      return false;
    });
  });

  // Disable copy
  document.addEventListener('copy', (e) => {
    e.clipboardData.setData('text/plain', '');
    e.preventDefault();
    return false;
  });

  // Disable cut
  document.addEventListener('cut', (e) => {
    e.clipboardData.setData('text/plain', '');
    e.preventDefault();
    return false;
  });

  // Disable paste
  document.addEventListener('paste', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable print
  window.addEventListener('beforeprint', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable save as
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'S') {
      e.preventDefault();
      return false;
    }
  });

  // Console warning
  console.clear();
  console.log('%cStop!', 'color: red; font-size: 50px; font-weight: bold;');
  console.log('%cThis is a browser feature intended for developers. If someone told you to copy-paste something here, it is a scam and will give them access to your account.', 'color: red; font-size: 16px;');

  // Disable developer tools detection
  let devtools = {open: false, orientation: null};
  const threshold = 160;

  setInterval(() => {
    if (window.outerHeight - window.innerHeight > threshold || 
        window.outerWidth - window.innerWidth > threshold) {
      if (!devtools.open) {
        devtools.open = true;
        console.clear();
        console.log('%cDeveloper Tools Detected!', 'color: red; font-size: 20px; font-weight: bold;');
        console.log('%cThis website is protected. Please close developer tools.', 'color: red; font-size: 14px;');
      }
    } else {
      devtools.open = false;
    }
  }, 500);

  // Disable inspect element
  document.addEventListener('keydown', (e) => {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'C')) {
      e.preventDefault();
      return false;
    }
  });

  // Add CSS to disable text selection
  const style = document.createElement('style');
  style.textContent = `
    * {
      -webkit-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
      -webkit-touch-callout: none !important;
      -webkit-tap-highlight-color: transparent !important;
    }
    
    img {
      -webkit-user-drag: none !important;
      -khtml-user-drag: none !important;
      -moz-user-drag: none !important;
      -o-user-drag: none !important;
      user-drag: none !important;
      pointer-events: none !important;
    }
  `;
  document.head.appendChild(style);
};

// Remove protection (for development purposes)
export const removeProtection = () => {
  // This function can be used to remove protection if needed
  console.log('Protection removed');
};
