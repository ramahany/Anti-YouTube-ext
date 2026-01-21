// Anti YouTube Extension - Content Script
// Hides unwanted YouTube content to reduce distractions

let isHiding = true;

// Function to add hiding classes to YouTube elements
function hideYouTubeContent() {
  if (!isHiding) return;
  
  // Hide homepage feed
  const homepageFeed = document.querySelector('ytd-rich-grid-renderer');
  if (homepageFeed) {
    homepageFeed.classList.add('anti-yt-hide');
  }
  
  // Hide video suggestions (right sidebar)
  const videoSuggestions = document.querySelector('ytd-watch-next-secondary-results-renderer');
  if (videoSuggestions) {
    videoSuggestions.classList.add('anti-yt-hide');
  }
  
  // Hide related videos below player
  const relatedVideos = document.querySelector('ytd-compact-video-renderer');
  if (relatedVideos) {
    const allRelated = document.querySelectorAll('ytd-compact-video-renderer');
    allRelated.forEach(video => video.classList.add('anti-yt-hide'));
  }
  
  // Hide comments section
  const comments = document.querySelector('ytd-comments');
  if (comments) {
    comments.classList.add('anti-yt-hide');
  }
  
  // Hide shorts shelf
  const shortsShelf = document.querySelector('ytd-reel-shelf-renderer');
  if (shortsShelf) {
    shortsShelf.classList.add('anti-yt-hide');
  }
}

// Function to remove hiding classes
function showYouTubeContent() {
  const hiddenElements = document.querySelectorAll('.anti-yt-hide');
  hiddenElements.forEach(element => {
    element.classList.remove('anti-yt-hide');
  });
}

// Toggle hiding state
function toggleHiding() {
  isHiding = !isHiding;
  if (isHiding) {
    hideYouTubeContent();
  } else {
    showYouTubeContent();
  }
  // Save state to storage
  chrome.storage.sync.set({ isHiding: isHiding });
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'toggle') {
    toggleHiding();
    sendResponse({ status: 'success', isHiding: isHiding });
  }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Get saved state
  chrome.storage.sync.get(['isHiding'], (result) => {
    isHiding = result.isHiding !== false; // Default to true
    if (isHiding) {
      hideYouTubeContent();
    }
  });
});

// Watch for dynamic content changes (YouTube is a SPA)
const observer = new MutationObserver(() => {
  if (isHiding) {
    hideYouTubeContent();
  }
});

// Start observing the document body for changes
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Initial hide
setTimeout(() => {
  if (isHiding) {
    hideYouTubeContent();
  }
}, 1000);