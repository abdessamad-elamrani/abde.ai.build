# Best AI Tools 2025 Visualization

A comprehensive, interactive visualization of the top AI tools in 2025, categorized by domain and functionality.

## Overview

This visualization presents AI tools across multiple categories in an organized, interactive format. It allows users to explore tools based on their field, see detailed information about each tool, and access external links to the tools' websites.

## Project Structure

```
best-ai-tools-2025/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── data.js             # Tool data and categories
├── script.js           # Main visualization logic
├── progress.js         # Progress indicators
├── tooltip.js          # Tooltip functionality
├── preview.js          # Preview functionality
├── logo-utils.js       # Logo management utilities
├── logos/              # Directory for tool logos
├── README.md           # This file
└── README-LOGOS.md     # Logo management documentation
```

## Key Features

- **Interactive Visualization**: Organized by categories and fields
- **Detailed Tool Information**: Scores, pricing, and descriptions
- **Real Logos**: Support for displaying actual tool logos
- **Responsive Design**: Works across different screen sizes and zoom levels
- **Expandable Sections**: "Show more" functionality for long lists
- **Tooltips**: Detailed information on hover

## Data Structure

The visualization is powered by four main data arrays in `data.js`:

1. `engineeringTechnicalData`: Engineering and technical tools
2. `businessProductivityData`: Business and productivity tools
3. `contentMediaData`: Content creation and media tools
4. `scienceLiteratureData`: Science and literature tools

Each array contains fields, which contain levels, which contain tools.

### Tool Object Structure

```javascript
{
  name: "Tool Name",                      // Name of the tool
  description: "Short description",       // Brief description
  icon: "fa-solid fa-icon",               // Font Awesome icon class OR "custom-logo"
  logoUrl: "logos/tool-logo.png",         // Path to logo image (if using custom logo)
  fallbackIcon: "fa-solid fa-icon",       // Fallback icon if logo fails to load
  url: "https://tool-website.com",        // URL to the tool's website
  scores: {                               // Scores out of 10
    education: 8,                         // Educational value
    popularity: 7,                         // Popularity
    complexity: 6                         // Complexity/sophistication
  },
  paidStatus: "Free tier; Pro: $20/mo",   // Pricing information
  detailedDescription: "Longer description..." // Detailed description for tooltips
}
```

## How to Update the Visualization

### Adding a New Tool

1. Identify the appropriate section and field in `data.js`
2. Add a new tool object to the appropriate `tools` array
3. Include all required properties (name, description, icon, url, scores, etc.)
4. If using a custom logo, follow the instructions in `README-LOGOS.md`

### Adding a New Field

1. Identify the appropriate section in `data.js`
2. Add a new field object with the following structure:

```javascript
{
  field: "Field Name",
  icon: "🔍",
  cssClass: "field-css-class",
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

### Adding a New Section

1. Create a new data array in `data.js`
2. Follow the structure of existing sections
3. Update the initialization code in `script.js` to include your new section

## Custom Logos

The visualization supports using custom logos for tools instead of Font Awesome icons. See `README-LOGOS.md` for detailed instructions on:

- How to add custom logos
- The fallback mechanism
- Troubleshooting logo issues
- Utility functions for logo management

## Responsive Design

The visualization is designed to be responsive across different screen sizes and zoom levels:

- **Desktop**: Full grid layout with multiple columns
- **Tablet**: Adjusted layout with fewer columns
- **Mobile**: Single column layout with optimized spacing
- **Zoom Levels**: Dynamically adjusts to browser zoom levels

## Browser Compatibility

The visualization is compatible with modern browsers:

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Performance Considerations

- **Image Optimization**: Keep logo files small (under 100KB)
- **Lazy Loading**: Tools are loaded progressively
- **Debounced Resizing**: Prevents performance issues during window resizing

## Customization

### Colors

Tool categories and sections use color variables defined in `styles.css`. To change the color scheme, update the CSS variables in the `:root` selector.

### Typography

The visualization uses the system font stack. To change fonts, update the `font-family` property in the `body` selector in `styles.css`.

### Layout

The layout is controlled by CSS Grid and Flexbox. To adjust the layout, modify the grid and flex properties in `styles.css`.

## Troubleshooting

### Visualization Not Loading

- Check the browser console for errors
- Verify that all required files are present
- Ensure data.js has valid JSON structure

### Logos Not Displaying

- Run `printLogoReport()` in the browser console
- Check that logo files exist in the logos directory
- Verify that the path in `logoUrl` is correct

### Layout Issues

- Run `ensureFullWidthLayout()` in the browser console
- Check CSS media queries in `styles.css`
- Verify that the container has the correct width settings

## Contributing

To contribute to this visualization:

1. Fork the repository
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 