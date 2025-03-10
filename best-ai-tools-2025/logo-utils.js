/**
 * Logo Utilities for AI Tools Visualization
 * This file contains helper functions for managing tool logos
 */

/**
 * Check if a logo file exists at the specified path
 * @param {string} logoPath - Path to the logo file
 * @returns {Promise<boolean>} - Promise that resolves to true if the logo exists
 */
function checkLogoExists(logoPath) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = logoPath;
  });
}

/**
 * Get all tools that use custom logos
 * @returns {Array} - Array of tool objects that use custom logos
 */
function getToolsWithCustomLogos() {
  const tools = [];
  
  // Process all sections
  [engineeringTechnicalData, businessProductivityData, contentMediaData, scienceLiteratureData].forEach(section => {
    section.forEach(field => {
      field.levels.forEach(level => {
        level.tools.forEach(tool => {
          if (tool.icon === 'custom-logo') {
            tools.push({
              name: tool.name,
              logoUrl: tool.logoUrl,
              fallbackIcon: tool.fallbackIcon || 'fa-solid fa-cube'
            });
          }
        });
      });
    });
  });
  
  return tools;
}

/**
 * Check all custom logos and report which ones are missing
 * @returns {Promise<Array>} - Promise that resolves to an array of tools with missing logos
 */
async function checkAllLogos() {
  const tools = getToolsWithCustomLogos();
  const results = [];
  
  for (const tool of tools) {
    const exists = await checkLogoExists(tool.logoUrl);
    results.push({
      name: tool.name,
      logoUrl: tool.logoUrl,
      exists: exists,
      fallbackIcon: tool.fallbackIcon
    });
  }
  
  return results;
}

/**
 * Print a report of all logo statuses to the console
 */
async function printLogoReport() {
  const results = await checkAllLogos();
  
  console.log('=== Logo Status Report ===');
  console.log(`Total tools with custom logos: ${results.length}`);
  
  const missing = results.filter(r => !r.exists);
  console.log(`Missing logos: ${missing.length}`);
  
  if (missing.length > 0) {
    console.log('\nMissing Logo Details:');
    missing.forEach(tool => {
      console.log(`- ${tool.name}: ${tool.logoUrl} (using fallback: ${tool.fallbackIcon})`);
    });
  }
  
  const working = results.filter(r => r.exists);
  console.log(`\nWorking logos: ${working.length}`);
  
  if (working.length > 0) {
    console.log('\nWorking Logo Details:');
    working.forEach(tool => {
      console.log(`- ${tool.name}: ${tool.logoUrl}`);
    });
  }
}

/**
 * Instructions for manually adding logos
 */
function showLogoInstructions() {
  console.log(`
=== How to Manually Add Logos ===

1. Download the logo image (preferably PNG with transparent background)
2. Save it to the 'logos' directory with a descriptive name (e.g., 'chatgpt-logo.png')
3. Update the data.js file for the tool:
   - Set icon: "custom-logo"
   - Set logoUrl: "logos/your-logo-filename.png"
   - Set fallbackIcon: "fa-solid fa-icon-name" (choose an appropriate Font Awesome icon)

Example:
{
  name: "Tool Name",
  description: "Tool description",
  icon: "custom-logo",
  logoUrl: "logos/tool-logo.png",
  fallbackIcon: "fa-solid fa-cube",
  url: "https://tool-website.com",
  ...
}

4. Refresh the page to see your changes
5. Run printLogoReport() in the browser console to check all logo statuses
`);
}

// Make functions available globally
window.checkLogoExists = checkLogoExists;
window.getToolsWithCustomLogos = getToolsWithCustomLogos;
window.checkAllLogos = checkAllLogos;
window.printLogoReport = printLogoReport;
window.showLogoInstructions = showLogoInstructions; 