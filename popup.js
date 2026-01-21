// Anti YouTube Extension - Popup Script
// Handles toggle button functionality

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggleButton');
  const status = document.getElementById('status');
  
  // Get current state from storage
  chrome.storage.sync.get(['isHiding'], (result) => {
    updateUI(result.isHiding !== false); // Default to true
  });
  
  // Toggle button click handler
  toggleButton.addEventListener('click', () => {
    chrome.storage.sync.get(['isHiding'], (result) => {
      const currentState = result.isHiding !== false; // Default to true
      const newState = !currentState;
      
      // Save new state
      chrome.storage.sync.set({ isHiding: newState });
      
      // Update UI
      updateUI(newState);
      
      // Send message to content script
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0] && tabs[0].url.includes('youtube.com')) {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'toggle' }, (response) => {
            if (response && response.status === 'success') {
              console.log('Toggle successful, new state:', response.isHiding);
            }
          });
        }
      });
    });
  });
  
  // Function to update UI based on state
  function updateUI(isHiding) {
    if (isHiding) {
      toggleButton.textContent = 'Disable Hiding';
      toggleButton.classList.remove('disabled');
      status.textContent = 'Hiding YouTube content';
    } else {
      toggleButton.textContent = 'Enable Hiding';
      toggleButton.classList.add('disabled');
      status.textContent = 'Showing all YouTube content';
    }
  }
});