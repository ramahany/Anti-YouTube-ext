# Testing Instructions

## How to Test the Extension

1. **Load Extension in Chrome:**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" toggle in top right
   - Click "Load unpacked" and select this directory
   - The extension should appear in the list

2. **Test Homepage Hiding:**
   - Navigate to `https://youtube.com`
   - The homepage feed should be hidden (only search bar visible)
   - Click the extension icon to toggle hiding on/off

3. **Test Video Page Hiding:**
   - Open any YouTube video
   - The sidebar suggestions should be hidden
   - Comments section should be hidden
   - Related videos below player should be hidden

4. **Test Toggle Functionality:**
   - Click the extension icon to open popup
   - Click "Disable Hiding" button
   - Content should reappear
   - Click "Enable Hiding" to hide again

5. **Debug if Needed:**
   - Right-click extension icon > "Inspect popup" for popup issues
   - Open Chrome DevTools on YouTube pages for content script errors
   - Check console for any error messages

## Expected Behavior

- Homepage: Only search bar visible, no feed/recommendations
- Video pages: Video player only, no suggestions/comments
- Toggle: Instantly show/hide hidden content
- Persistence: State saved across page reloads