# Adding Custom Logos to AI Tools Visualization

This guide explains how to manually add custom logos to the AI Tools visualization.

## Overview

The visualization supports using real logos for AI tools instead of generic Font Awesome icons. The system includes a fallback mechanism, so if a logo image fails to load, it will automatically use the specified Font Awesome icon instead.

## How to Add a Logo Manually

### Step 1: Obtain the Logo Image

1. Find a high-quality logo for the AI tool (preferably PNG with transparent background)
2. Ideally, the logo should be square or have similar width and height
3. Recommended size: 512x512 pixels or similar

### Step 2: Save the Logo to the Logos Directory

1. Save the logo image to the `logos` directory
2. Use a descriptive filename, e.g., `chatgpt-logo.png`, `claude-logo.png`

### Step 3: Update the Data File

In `data.js`, find the tool entry you want to update and modify it as follows:

```javascript
{
  name: "Tool Name",
  description: "Tool description",
  icon: "custom-logo",           // This tells the system to use a custom logo
  logoUrl: "logos/your-logo.png", // Path to your logo file
  fallbackIcon: "fa-solid fa-cube", // Font Awesome icon to use as fallback
  url: "https://tool-website.com",
  // ... other properties
}
```

### Step 4: Test Your Changes

1. Refresh the page to see your changes
2. Open the browser console (F12 or right-click > Inspect > Console)
3. Run `printLogoReport()` to see a report of all logo statuses
4. If your logo isn't showing, check the console for error messages

## Utility Functions

The following utility functions are available in the browser console:

- `checkLogoExists(logoPath)`: Check if a specific logo file exists
- `getToolsWithCustomLogos()`: Get a list of all tools using custom logos
- `checkAllLogos()`: Check all logos and return their status
- `printLogoReport()`: Print a detailed report of all logo statuses
- `showLogoInstructions()`: Show instructions for adding logos

## Troubleshooting

If a logo isn't displaying:

1. Check if the file exists in the `logos` directory
2. Verify the path in `logoUrl` is correct
3. Make sure the image format is supported (PNG, JPG, SVG)
4. Check for CORS issues if loading from external sources
5. Ensure the image isn't corrupted

## Example

Here's an example of updating the ChatGPT entry to use a custom logo:

```javascript
{
  name: "ChatGPT",
  description: "Multimodal AI assistant for brainstorming, translation, coding, and data analysis.",
  icon: "custom-logo",
  logoUrl: "logos/chatgpt-logo.png",
  fallbackIcon: "fa-solid fa-comment",
  url: "https://chat.openai.com",
  // ... other properties
}
```

## Best Practices

- Use transparent PNG files for best results
- Keep logo files small (under 100KB) for better performance
- Use square or nearly square logos when possible
- Always provide a fallback icon
- Test your changes in different browsers 