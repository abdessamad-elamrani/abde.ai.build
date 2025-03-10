// Remove the duplicate responsive configuration
// The configuration is already defined in data.js

// Wrap everything in a self-executing function to create a scope
(function() {
  // Create the chart
  function createChart() {
    // Check if required data is available
    if (typeof window.categories === 'undefined' || typeof window.tools === 'undefined') {
      console.error('Required data not loaded. Make sure data.js is loaded before chart.js');
      return;
    }

    // Clear any existing chart
    d3.select("#chart").html("");

    // Get the container width
    const containerWidth = document.getElementById('chart').clientWidth || window.innerWidth;
    const containerHeight = Math.max(600, window.innerHeight * 0.7);
    
    // Set up the SVG with responsive dimensions
    const svg = d3.select("#chart")
      .append("svg")
      .attr("width", "100%")
      .attr("height", containerHeight)
      .attr("viewBox", `0 0 ${containerWidth} ${containerHeight}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    // Calculate dynamic column widths based on available space
    const margin = { top: 50, right: 20, bottom: 50, left: 20 };
    const width = containerWidth - margin.left - margin.right;
    
    // Determine number of categories and calculate base column width
    const numCategories = window.categories.length;
    let baseColumnWidth = Math.max(120, width / numCategories);
    
    // Adjust column widths based on content - give more space to columns with more items
    const categoryItemCounts = {};
    window.categories.forEach(category => {
      categoryItemCounts[category] = window.tools.filter(d => d.category === category).length;
    });
    
    // Calculate weighted column widths
    const totalItems = Object.values(categoryItemCounts).reduce((a, b) => a + b, 0);
    const columnWidths = {};
    
    window.categories.forEach(category => {
      // Base width plus additional width proportional to number of items
      const itemRatio = categoryItemCounts[category] / totalItems;
      // Use the responsive config from data.js if available
      if (typeof window.getColumnWidth === 'function') {
        columnWidths[category] = window.getColumnWidth(category) * (1 + itemRatio);
      } else {
        columnWidths[category] = baseColumnWidth * (1 + itemRatio);
      }
    });
    
    // Special handling for "Content & Media" category if it exists
    if (columnWidths["Content & Media"]) {
      columnWidths["Content & Media"] *= 1.2; // Give it extra space
    }
    
    // Recalculate total width to ensure it fits
    const totalCalculatedWidth = Object.values(columnWidths).reduce((a, b) => a + b, 0);
    const scaleFactor = width / totalCalculatedWidth;
    
    // Scale all widths to fit the container
    Object.keys(columnWidths).forEach(category => {
      columnWidths[category] *= scaleFactor;
    });

    // Create a group for the chart content with margins
    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Create columns for each category
    let xOffset = 0;
    window.categories.forEach(category => {
      const columnWidth = columnWidths[category];
      
      // Create a group for this column
      const column = g.append("g")
        .attr("class", "column")
        .attr("data-name", category)
        .attr("transform", `translate(${xOffset},0)`)
        .style("width", `${columnWidth}px`);
      
      // Add column header
      column.append("text")
        .attr("class", "column-header")
        .attr("x", columnWidth / 2)
        .attr("y", -20)
        .attr("text-anchor", "middle")
        .style("font-weight", "bold")
        .style("font-size", "16px")
        .text(category);
      
      // Filter tools for this category
      const categoryTools = window.tools.filter(d => d.category === category);
      
      // Create tool items
      categoryTools.forEach((tool, i) => {
        const itemGroup = column.append("g")
          .attr("class", "tool-item")
          .attr("transform", `translate(0,${i * 40})`)
          .style("cursor", "pointer")
          .on("mouseover", function(event) { 
            if (typeof window.showTooltip === 'function') {
              window.showTooltip(event, tool);
            }
          })
          .on("mouseout", function() {
            if (typeof window.hideTooltip === 'function') {
              window.hideTooltip();
            }
          })
          .on("click", function(event) {
            // Handle mobile tooltip if function exists
            if (typeof window.handleMobileTooltip === 'function') {
              window.handleMobileTooltip(event, tool);
            } else {
              // Fallback for mobile
              const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
              if (isTouchDevice && typeof window.showTooltip === 'function') {
                window.showTooltip(event, tool);
                event.stopPropagation();
              }
            }
          });
        
        // Add tool name
        itemGroup.append("text")
          .attr("x", columnWidth / 2)
          .attr("y", 15)
          .attr("text-anchor", "middle")
          .style("font-size", "14px")
          .text(tool.name);
      });
      
      // Update x offset for next column
      xOffset += columnWidth;
    });
  }

  // Make the chart responsive
  function handleResize() {
    createChart();
  }

  // Add event listener for window resize with debounce
  function debounce(func, wait) {
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }

  const debouncedResize = debounce(handleResize, 250);
  window.addEventListener('resize', debouncedResize);

  // Initial chart creation - wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    // Check if data is loaded
    if (typeof window.categories !== 'undefined' && typeof window.tools !== 'undefined') {
      createChart();
    } else {
      // If data isn't loaded yet, wait a bit and try again
      setTimeout(function() {
        if (typeof window.categories !== 'undefined' && typeof window.tools !== 'undefined') {
          createChart();
        } else {
          console.error('Data not loaded properly. Check that data.js is loaded before chart.js');
        }
      }, 500);
    }
  });
})(); 