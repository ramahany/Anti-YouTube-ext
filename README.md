# Anti YouTube Extension

A Chrome extension designed to help you overcome YouTube addiction by removing distractions and unwanted content.

## 🎯 Features

### 🏠 Homepage Cleanup
- **Hides the YouTube feed** - Removes the endless scroll of recommended videos
- **Shows only the search bar** - Forces you to search for specific content instead of mindless browsing
- **Eliminates trending sections** - No more "Trending" or "Popular" distractions

### 🎬 Video Page Focus
- **Removes sidebar suggestions** - No "Up Next" videos to keep you watching
- **Hides comments section** - Eliminates comment rabbit holes
- **Removes related videos** - No more video recommendations below the player
- **Blocks shorts shelf** - Removes YouTube Shorts distractions

### 🔄 Smart Toggle
- **One-click enable/disable** - Instantly show or hide content as needed
- **Persistent state** - Remembers your preference across page reloads
- **Visual feedback** - Clear indication of whether hiding is active
- **Works across all YouTube pages** - Consistent behavior everywhere

### ⚡ Technical Features
- **Vanilla JavaScript only** - No frameworks, no bloat, pure performance
- **DOM-based approach** - Simple CSS class hiding, no API calls
- **Real-time updates** - Dynamically adapts to YouTube's SPA navigation
- **Minimal permissions** - Only requires what's absolutely necessary

## 🚀 Installation

1. Download the extension files
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension directory
5. The extension will appear in your Chrome toolbar

## 📖 Usage

### Basic Usage
1. **Click the extension icon** in your Chrome toolbar
2. **Toggle hiding on/off** with the single button
3. **Visit YouTube** to see the cleaned-up interface

### What You'll See
- **Homepage**: Clean search interface with no feed
- **Video pages**: Just the video player, no distractions
- **Toggle state**: Saved automatically for next visits

### When to Disable
- When you need to browse YouTube normally
- To access comments or suggestions intentionally
- For research or content discovery

## 🛠️ How It Works

The extension uses a simple approach:
1. **Content Script Injection** - Runs on all YouTube pages
2. **CSS Class Hiding** - Adds `.anti-yt-hide` classes to unwanted elements
3. **DOM Observation** - Watches for YouTube's dynamic content changes
4. **State Management** - Uses Chrome storage to remember preferences

## 🎯 Target Elements

The extension hides these YouTube elements:
- `ytd-rich-grid-renderer` (homepage feed)
- `ytd-watch-next-secondary-results-renderer` (video suggestions)
- `ytd-comments` (comments section)
- `ytd-compact-video-renderer` (related videos)
- `ytd-reel-shelf-renderer` (shorts)
- And many more distraction elements

## 🔧 Development

Built with:
- **Vanilla JavaScript** - No dependencies, pure performance
- **CSS** - Simple hiding rules
- **Chrome Extension API** - Minimal, focused permissions
- **DOM Manipulation** - Direct element targeting

## 📄 License

Free to use and modify. Built to help people focus on what matters.

## 🤝 Contributing

Feel free to improve the extension by:
- Adding new element selectors
- Improving the toggle interface
- Creating better icons
- Reporting bugs or issues

---

**Take back control of your YouTube experience. Focus on what you searched for, not what YouTube wants you to watch.**
