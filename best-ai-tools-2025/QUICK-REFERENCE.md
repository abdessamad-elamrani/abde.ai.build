# Quick Reference Guide: Best AI Tools 2025

This guide provides quick instructions for common tasks related to the Best AI Tools 2025 visualization.

## Adding a New Tool

```javascript
// In data.js, find the appropriate section and field, then add:
{
  name: "New Tool Name",
  description: "Brief description of the tool",
  icon: "fa-solid fa-cube", // Font Awesome icon
  url: "https://tool-website.com",
  scores: {
    education: 8,
    popularity: 7,
    complexity: 6
  },
  paidStatus: "Free tier; Pro plan ($10/month)",
  detailedDescription: "Detailed description of the tool..."
}
```

## Adding a Tool with Custom Logo

```javascript
// In data.js, find the appropriate section and field, then add:
{
  name: "New Tool Name",
  description: "Brief description of the tool",
  icon: "custom-logo", // Use custom logo
  logoUrl: "logos/tool-logo.png", // Path to logo file
  fallbackIcon: "fa-solid fa-cube", // Fallback icon
  url: "https://tool-website.com",
  scores: {
    education: 8,
    popularity: 7,
    complexity: 6
  },
  paidStatus: "Free tier; Pro plan ($10/month)",
  detailedDescription: "Detailed description of the tool..."
}
```

## Adding a New Field

```javascript
// In data.js, find the appropriate section, then add:
{
  field: "New Field Name",
  icon: "🔍", // Emoji icon
  cssClass: "new-field", // CSS class for styling
  levels: [
    {
      name: "All Levels",
      tools: [
        // Tool objects go here
      ]
    }
  ]
}
```

## Adding a New Section

```javascript
// In data.js, add a new array:
const newSectionData = [
  // Field objects go here
];

// In script.js, add initialization:
const newSection = createDiagram('new-section', '', newSectionData, newSectionLevelNames);

// Add to layout:
someRow.appendChild(document.getElementById('new-section'));
```

## Checking Logo Status

Open the browser console (F12) and run:

```javascript
printLogoReport();
```

## Fixing Layout Issues

Open the browser console (F12) and run:

```javascript
ensureFullWidthLayout();
```

## Showing Logo Instructions

Open the browser console (F12) and run:

```javascript
showLogoInstructions();
```

## Updating the Title

Edit the `<h1>` element in `index.html`:

```html
<h1>🚀 New Title <span class="subtitle">New Subtitle</span></h1>
```

## Changing Section Colors

Edit the CSS variables in `styles.css`:

```css
:root {
  --engineering-color: #2196F3;  /* Blue */
  --business-color: #4CAF50;     /* Green */
  --content-color: #FF9800;      /* Orange */
  --science-color: #9C27B0;      /* Purple */
}
```

## Changing Tool Icon Colors

Edit the CSS in `styles.css`:

```css
#engineering-section .tool-icon {
  background-color: var(--engineering-color);
}
```

## Adjusting Tool Display Limit

Edit the `MAX_TOOLS_VISIBLE` constant in `script.js`:

```javascript
const MAX_TOOLS_VISIBLE = 6; // Change from default 4
```

## Adding a New JavaScript File

1. Create the new file in the project directory
2. Add it to `index.html`:

```html
<script src="new-file.js"></script>
```

## Running the Local Server

```bash
cd public/best-ai-tools-2025
python3 -m http.server 3001
```

Then open http://localhost:3001 in your browser.

## Common Issues and Solutions

### Logo Not Displaying

1. Check the file exists in the `logos` directory
2. Verify the path in `logoUrl` is correct
3. Make sure `icon` is set to `"custom-logo"`
4. Check the browser console for errors

### Layout Issues

1. Run `ensureFullWidthLayout()` in the console
2. Check CSS media queries in `styles.css`
3. Verify container width settings
4. Check for any CSS conflicts

### Tool Not Appearing

1. Verify the tool object has all required properties
2. Check that it's added to the correct field and level
3. Refresh the page to reload the data
4. Check the browser console for errors

### Styling Issues

1. Check CSS classes are correctly applied
2. Verify CSS variables are defined
3. Check for CSS specificity issues
4. Use browser dev tools to inspect elements 