# AGENTS.md - Anti YouTube Extension

## Project Overview
Chrome extension that helps with YouTube addiction by hiding unwanted content using vanilla JS and DOM manipulation only.

## Development Commands
```bash
# Load extension
# 1. Open chrome://extensions/
# 2. Enable "Developer mode"
# 3. Click "Load unpacked" and select this directory
# 4. Click reload to test changes

# Debug
# Right-click extension icon > "Inspect popup" for popup issues
# Check console on YouTube pages for content script errors
```

## Code Guidelines
- Use vanilla JavaScript only (no frameworks, no APIs)
- Hide YouTube elements with CSS classes
- Simple DOM queries: `document.querySelector()` and `document.querySelectorAll()`
- Add/remove CSS classes to show/hide elements
- No storage, no complex state management

## File Structure
```
/
├── manifest.json          # Extension configuration
├── content.js            # DOM manipulation script
├── styles.css            # CSS rules to hide elements
└── popup.html            # Toggle button interface
```

## Implementation Strategy
- Content script runs on YouTube pages
- Inject CSS to hide suggestions, feed, recommendations
- Toggle button adds/removes hiding classes
- Target selectors: `ytd-rich-grid-renderer`, `ytd-watch-next-secondary-results-renderer`, etc.

## Testing
1. Load extension in Chrome
2. Visit youtube.com - homepage should show only search bar
3. Open any video - suggestions should be hidden
4. Click extension toggle to enable/disable hiding
5. Reload extension after changes

## Key YouTube Selectors
- Homepage feed: `ytd-rich-grid-renderer`
- Video suggestions: `ytd-watch-next-secondary-results-renderer`
- Sidebar recommendations: `ytd-compact-video-renderer`

## Manifest.json Requirements
- Content script for YouTube domains
- CSS injection capability
- Popup action for toggle
- Minimal permissions (activeTab, storage)