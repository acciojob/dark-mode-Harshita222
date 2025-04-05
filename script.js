//your JS code here. If required.
const toggleButton = document.getElementById('toggleMode');

    // Step 1: Check if dark mode is saved in localStorage
    const savedMode = localStorage.getItem('darkMode');

    if (savedMode === 'enabled') {
      document.body.classList.add('dark-mode');
    }

    // Step 2: Add click event to toggle button
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');

      // Step 3: Save user preference in localStorage
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
    });