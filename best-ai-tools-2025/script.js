/**
 * AI Tools: From Zero to Hero
 * Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
  // Data is now imported from data.js
  // roleToolsData, featureToolsData, and levelNames are defined there

  /**
   * Helper function to check if an image exists
   * @param {string} url - The URL of the image to check
   * @returns {Promise<boolean>} - Promise that resolves to true if image exists, false otherwise
   */
  function imageExists(url) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }

  /**
   * Function to ensure the chart uses all available space
   * This is especially important at different zoom levels
   */
  function ensureFullWidthLayout() {
    // Ensure chart container uses full available width
    const chartElement = document.getElementById('chart');
    if (chartElement) {
      chartElement.style.width = '100%';
    }
    
    // Make sure all section rows use full width
    document.querySelectorAll('.section-row').forEach(row => {
      row.style.width = '100%';
    });
    
    // Make sure all diagram containers use full width
    document.querySelectorAll('.diagram-container').forEach(container => {
      container.style.width = '100%';
    });
    
    // Force horizontal layout for fields containers
    document.querySelectorAll('.fields-container').forEach(container => {
      Object.assign(container.style, {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        width: '100%',
        gap: '1rem'
      });
    });
    
    // Force fixed width for field columns
    document.querySelectorAll('.field-column').forEach(column => {
      Object.assign(column.style, {
        flex: '0 0 250px',
        minWidth: '250px',
        width: '250px',
        display: 'block',
        marginRight: '1rem'
      });
      
      // Check if we're on a very small screen
      if (window.innerWidth <= 480) {
        Object.assign(column.style, {
          flex: '1 0 100%',
          width: '100%'
        });
      }
    });
  }

  /**
   * Create the main diagram structure
   */
  function createDiagram(containerId, title, dataSet, sectionLevelNames) {
    // Create the container for our diagram
    const chart = d3.select("#chart")
      .append("div")
      .attr("id", containerId)
      .attr("class", "diagram-container")
      .style("width", "100%"); // Ensure full width
    
    // Add section title
    chart.append("div")
      .attr("class", "section-header")
      .html(`<h2>${sectionLevelNames[0]}</h2>`);
    
    // Create the fields container with all field columns
    createFieldsContainer(chart, dataSet);
    
    // Return the chart for further processing
    return chart;
  }

  /**
   * Create the fields container with all field columns
   */
  function createFieldsContainer(chart, dataSet) {
    // Create container with explicit horizontal layout
    const fieldsContainer = chart.append("div")
      .attr("class", "fields-container")
      .style("width", "100%")
      .style("display", "flex")
      .style("flex-direction", "row")
      .style("flex-wrap", "nowrap")
      .style("overflow-x", "auto");

    // Create horizontal field columns with fixed width
    const fieldColumns = fieldsContainer.selectAll(".field-column")
      .data(dataSet)
      .enter()
      .append("div")
      .attr("class", d => `field-column ${d.cssClass}`)
      .style("flex", "0 0 250px")
      .style("min-width", "250px")
      .style("width", "250px")
      .style("margin-right", "1rem");

    // Add field headers
    fieldColumns.append("div")
      .attr("class", "field-header")
      .html(d => `<span class="field-icon">${d.icon}</span> ${d.field}`);

    // Add level sections to each field
    createLevelSections(fieldColumns);

    // Add animation to field columns
    animateFieldColumns(fieldColumns);
    
    // Return the field columns for further processing
    return fieldColumns;
  }

  /**
   * Create level sections within each field column
   */
  function createLevelSections(fieldColumns) {
    const levelSections = fieldColumns.selectAll(".level-section")
      .data(d => {
        return d.levels.map(level => {
          return {
            name: level.name,
            cssClass: d.cssClass,
            tools: level.tools || []
          };
        });
      })
      .enter()
      .append("div")
      .attr("class", d => `level-section ${d.name.toLowerCase().replace(/\s+/g, '-')}`);

    // Add tools to each level section
    createToolItems(levelSections);
  }

  /**
   * Create tool items within each level section
   */
  function createToolItems(levelSections) {
    const toolItems = levelSections.selectAll(".tool-item")
      .data(d => d.tools)
      .enter()
      .append("div")
      .attr("class", "tool-item")
      .on("click", function(event, d) {
        // Open the tool URL when clicked
        if (d.url) {
          window.open(d.url, '_blank');
        }
      });

    // Add icons to tools
    const toolIcons = toolItems.append("div")
      .attr("class", "tool-icon");
    
    // Process each tool icon
    toolIcons.each(function(d) {
      const iconElement = d3.select(this);
      
      // Check if it's a custom logo
      if (d.icon === 'custom-logo' && d.logoUrl) {
        // Add the custom-logo-container class
        iconElement.classed("custom-logo-container", true);
        
        // Create an image element
        const img = document.createElement('img');
        img.alt = `${d.name} logo`;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain';
        
        // Set up fallback mechanism
        img.onerror = function() {
          console.log(`Failed to load logo for ${d.name}, falling back to icon`);
          // Remove the custom-logo-container class
          iconElement.classed("custom-logo-container", false);
          // Add the fallback icon
          const fallbackIcon = d.fallbackIcon || 'fa-solid fa-cube';
          iconElement.html(`<i class="${fallbackIcon}"></i>`);
        };
        
        // Set the source last to trigger loading
        img.src = d.logoUrl;
        
        // Append the image to the icon element
        iconElement.node().appendChild(img);
      } else {
        // Use Font Awesome icon
        iconElement.html(`<i class="${d.icon}"></i>`);
      }
    });

    // Add tool names, descriptions, and links
    const toolInfo = toolItems.append("div")
      .attr("class", "tool-info");
      
    // Add tool name
    toolInfo.append("div")
      .attr("class", "tool-name")
      .text(d => d.name);
      
    // Add basic tool description (always visible)
    toolInfo.append("div")
      .attr("class", "tool-desc")
      .text(d => d.description);
      
    // Add visible link if URL exists (always visible)
    toolInfo.append("div")
      .attr("class", "tool-link")
      .html(d => {
        if (d.url) {
          // Extract domain name for display
          let domain = d.url.replace(/^https?:\/\//, '');
          domain = domain.split('/')[0];
          return `<a href="${d.url}" target="_blank">[ ${domain} ]</a>`;
        }
        return '';
      });
      
    // Add score badge if scores exist and showScoreBadge is not false
    toolInfo.append("div")
      .attr("class", d => {
        // Don't show score badge if explicitly set to false
        if (d.showScoreBadge === false) return "tool-score-badge-hidden";
        if (!d.scores) return "tool-score-badge-placeholder";
        
        // Calculate weighted score with complexity inverted (lower is better)
        // Formula: (Quality*0.4 + Popularity*0.4 + (11-Complexity)*0.2)
        const invertedComplexity = 11 - d.scores.complexity; // Invert complexity (1-10 scale becomes 10-1)
        const weightedScore = (d.scores.education * 0.4) + (d.scores.popularity * 0.4) + (invertedComplexity * 0.2);
        
        // Determine score class
        let scoreClass = 'poor';
        if (weightedScore >= 8.5) scoreClass = 'excellent';
        else if (weightedScore >= 7) scoreClass = 'good';
        else if (weightedScore >= 6) scoreClass = 'average';
        
        return `tool-score-badge ${scoreClass}`;
      })
      .html(d => {
        // Don't show score badge if explicitly set to false
        if (d.showScoreBadge === false || !d.scores) return '';
        
        // Calculate weighted score with complexity inverted
        const invertedComplexity = 11 - d.scores.complexity;
        const weightedScore = (d.scores.education * 0.4) + (d.scores.popularity * 0.4) + (invertedComplexity * 0.2);
        return weightedScore.toFixed(1);
      })
      .style("position", "absolute")
      .style("top", "8px")
      .style("right", "4px")
      .style("display", d => d.showScoreBadge === false ? "none" : "flex");
      
    // Add hover content container (hidden by default, shown on hover)
    const hoverContent = toolItems.append("div")
      .attr("class", "tool-hover-content");
      
    // Add paid/free status if it exists (inside hover content)
    hoverContent.append("div")
      .attr("class", "tool-paid-status")
      .html(d => {
        if (d.paidStatus) {
          return `
            <div class="score-bar">
              <span class="score-label">Pricing</span>
              <span class="pricing-value">${d.paidStatus}</span>
            </div>
          `;
        }
        return '';
      });
      
    // Add scores if they exist (inside hover content)
    hoverContent.append("div")
      .attr("class", "tool-scores")
      .html(d => {
        if (d.scores) {
          // Helper function to determine score class based on value
          const getScoreClass = (score) => {
            if (score >= 8.5) return 'excellent';
            if (score >= 7) return 'good';
            if (score >= 6) return 'average';
            return 'poor';
          };
          
          // Create score bars with appropriate classes
          const qualityClass = getScoreClass(d.scores.education);
          const popularityClass = getScoreClass(d.scores.popularity);
          
          // For complexity, lower is better, so invert the score for display
          const invertedComplexity = 11 - d.scores.complexity;
          const complexityClass = getScoreClass(invertedComplexity);
          
          // Calculate weighted score using the same formula as the badge
          const weightedScore = (d.scores.education * 0.4) + (d.scores.popularity * 0.4) + (invertedComplexity * 0.2);
          const weightedScoreClass = getScoreClass(weightedScore);
          
          return `
            <div class="score-bars">
              <div class="score-bar">
                <span class="score-label">Quality</span>
                <div class="score-track">
                  <div class="score-fill ${qualityClass}" style="width: ${d.scores.education * 10}%"></div>
                </div>
                <span class="score-value ${qualityClass}">${d.scores.education}/10</span>
              </div>
              <div class="score-bar">
                <span class="score-label">Popularity</span>
                <div class="score-track">
                  <div class="score-fill ${popularityClass}" style="width: ${d.scores.popularity * 10}%"></div>
                </div>
                <span class="score-value ${popularityClass}">${d.scores.popularity}/10</span>
              </div>
              <div class="score-bar">
                <span class="score-label">Simplicity</span>
                <div class="score-track">
                  <div class="score-fill ${complexityClass}" style="width: ${invertedComplexity * 10}%"></div>
                </div>
                <span class="score-value ${complexityClass}">${invertedComplexity}/10</span>
                <span class="score-note">(lower complexity is better)</span>
              </div>
              <div class="score-bar">
                <span class="score-label">Overall</span>
                <div class="score-track">
                  <div class="score-fill ${weightedScoreClass}" style="width: ${weightedScore * 10}%"></div>
                </div>
                <span class="score-value ${weightedScoreClass}">${weightedScore.toFixed(1)}/10</span>
                <span class="score-formula">40% Quality + 40% Popularity + 20% Simplicity</span>
              </div>
            </div>
          `;
        }
        return '';
      });
      
    // Add detailed description (inside hover content)
    hoverContent.append("div")
      .attr("class", "tool-detailed-desc")
      .html(d => {
        // Use the provided detailed description if available
        if (d.detailedDescription) {
          return `<p>${d.detailedDescription}</p>`;
        }
        // Otherwise generate a description based on scores
        else if (d.scores) {
          let details = '';
          
          // Education value
          if (d.scores.education >= 9) {
            details += `<p>Exceptional educational value for ${d.name} users.</p>`;
          } else if (d.scores.education >= 7) {
            details += `<p>Great learning resource with valuable insights.</p>`;
          } else {
            details += `<p>Practical tool with moderate educational benefits.</p>`;
          }
          
          // Complexity vs Popularity
          if (d.scores.complexity > 7 && d.scores.popularity > 7) {
            details += `<p>Despite its complexity, ${d.name} remains popular due to its powerful capabilities.</p>`;
          } else if (d.scores.complexity < 4 && d.scores.popularity > 8) {
            details += `<p>User-friendly interface contributes to its widespread adoption.</p>`;
          } else if (d.scores.complexity > 7 && d.scores.popularity < 7) {
            details += `<p>Advanced tool that requires dedication to master.</p>`;
          }
          
          return details;
        }
        return '';
      });
  }

  /**
   * Add animation to field columns
   */
  function animateFieldColumns(fieldColumns) {
    fieldColumns.style("opacity", 0)
      .style("transform", "translateX(20px)")
      .transition()
      .duration(500)
      .delay((d, i) => i * 100)
      .style("opacity", 1)
      .style("transform", "translateX(0)");
  }

  /**
   * Adjust the height of each level indicator to match the height of its corresponding level sections
   */
  function adjustLevelIndicatorHeights(containerId) {
    // Get the level indicators container
    const indicatorsContainer = document.querySelector(`#${containerId} .level-indicators`);
    if (!indicatorsContainer) return; // Safety check
    
    // Check if we're in mobile view (width <= 480px)
    const isMobileView = window.innerWidth <= 480;
    
    // If mobile view, reset styles and exit early
    if (isMobileView) {
      // Reset container style
      indicatorsContainer.style.display = '';
      indicatorsContainer.style.height = '';
      
      // Reset all level indicators to default styling
      document.querySelectorAll(`#${containerId} .level-indicator`).forEach(indicator => {
        indicator.style.position = '';
        indicator.style.top = '';
        indicator.style.height = '';
        indicator.style.width = '';
      });
      
      return;
    }
    
    // For desktop/tablet view, continue with normal positioning
    // Set up for absolute positioning
    indicatorsContainer.style.display = 'block';
    const containerRect = indicatorsContainer.getBoundingClientRect();
    
    // Track the maximum bottom position for container height
    let maxBottom = 0;
    
    // Process each level
    levelNames.forEach((levelName) => {
      const levelClass = levelName.toLowerCase().replace(/\s+/g, '-');
      
      // Get elements
      const levelSections = document.querySelectorAll(`#${containerId} .level-section.${levelClass}`);
      const levelIndicator = document.querySelector(`#${containerId} .level-indicator.${levelClass}`);
      
      if (levelSections.length > 0 && levelIndicator) {
        const firstSection = levelSections[0];
        const sectionRect = firstSection.getBoundingClientRect();
        const sectionHeight = firstSection.offsetHeight;
        
        // Calculate position relative to container
        const topPosition = sectionRect.top - containerRect.top;
        
        // Style the indicator
        Object.assign(levelIndicator.style, {
          position: 'absolute',
          top: `${topPosition}px`,
          left: '0',
          width: '50px',
          height: `${sectionHeight}px`,
          marginBottom: '0'
        });
        
        // Update max bottom position
        const bottomPosition = topPosition + sectionHeight;
        maxBottom = Math.max(maxBottom, bottomPosition);
      }
    });
    
    // Set container height
    indicatorsContainer.style.height = `${maxBottom}px`;
  }

  // Initialize the diagrams
  const engineeringSection = createDiagram('engineering-section', '', engineeringTechnicalData, engineeringLevelNames);
  const businessSection = createDiagram('business-section', '', businessProductivityData, businessLevelNames);
  const contentSection = createDiagram('content-section', '', contentMediaData, contentLevelNames);
  const scienceSection = createDiagram('science-section', '', scienceLiteratureData, scienceLevelNames);
  
  // Create a grid layout for the sections
  const chartContainer = document.querySelector('#chart');
  
  // Create row containers
  const topRow = document.createElement('div');
  topRow.className = 'section-row';
  
  const bottomRow = document.createElement('div');
  bottomRow.className = 'section-row';
  
  // Move sections into rows
  const engineeringSectionElement = document.getElementById('engineering-section');
  const businessSectionElement = document.getElementById('business-section');
  const contentSectionElement = document.getElementById('content-section');
  const scienceSectionElement = document.getElementById('science-section');
  
  // Remove sections from their current position
  engineeringSectionElement.parentNode.removeChild(engineeringSectionElement);
  businessSectionElement.parentNode.removeChild(businessSectionElement);
  contentSectionElement.parentNode.removeChild(contentSectionElement);
  scienceSectionElement.parentNode.removeChild(scienceSectionElement);
  
  // Add sections to rows
  topRow.appendChild(engineeringSectionElement);
  topRow.appendChild(businessSectionElement);
  bottomRow.appendChild(contentSectionElement);
  bottomRow.appendChild(scienceSectionElement);
  
  // Add rows to chart container
  chartContainer.appendChild(topRow);
  chartContainer.appendChild(bottomRow);
  
  // Limit the number of tools displayed initially to save vertical space
  const MAX_TOOLS_VISIBLE = 4;
  
  // Process each field column separately with a consistent approach
  document.querySelectorAll('.field-column').forEach(fieldColumn => {
    const fieldName = fieldColumn.querySelector('.field-header').textContent.trim();
    console.log(`Processing field: ${fieldName}`);
    
    // Make sure all field columns are visible
    fieldColumn.style.display = 'block';
    
    // Get all level sections in this field
    const levelSections = fieldColumn.querySelectorAll('.level-section');
    let totalVisibleTools = 0;
    
    // First pass: count and hide tools
    levelSections.forEach(section => {
      const tools = section.querySelectorAll('.tool-item');
      const levelName = section.className.split(' ')[1] || 'Unknown';
      console.log(`  Level: ${levelName}, Tools: ${tools.length}`);
      
      // For each tool, decide whether to show or hide it
      tools.forEach((tool, index) => {
        if (totalVisibleTools < MAX_TOOLS_VISIBLE) {
          // Show this tool
          tool.style.display = 'flex';
          totalVisibleTools++;
        } else {
          // Hide this tool
          tool.style.display = 'none';
        }
      });
    });
    
    // Second pass: add "Show more" button to the last section if needed
    const totalTools = Array.from(fieldColumn.querySelectorAll('.tool-item')).length;
    if (totalTools > MAX_TOOLS_VISIBLE) {
      const lastSection = levelSections[levelSections.length - 1];
      
      // Add "Show more" button
      const showMoreBtn = document.createElement('button');
      showMoreBtn.className = 'show-more-btn';
      showMoreBtn.textContent = `+${totalTools - MAX_TOOLS_VISIBLE} more`;
      showMoreBtn.onclick = function() {
        // Show all tools in all sections
        fieldColumn.querySelectorAll('.tool-item').forEach(tool => {
          tool.style.display = 'flex';
        });
        // Remove the button
        this.remove();
      };
      lastSection.appendChild(showMoreBtn);
    }
  });
  
  // Adjust level indicator heights after a delay to ensure all elements are rendered
  setTimeout(() => {
    adjustLevelIndicatorHeights('engineering-section');
    adjustLevelIndicatorHeights('business-section');
    adjustLevelIndicatorHeights('content-section');
    adjustLevelIndicatorHeights('science-section');
  }, 200);
  
  // Also adjust after all images and resources are loaded
  window.addEventListener('load', function() {
    adjustLevelIndicatorHeights('engineering-section');
    adjustLevelIndicatorHeights('business-section');
    adjustLevelIndicatorHeights('content-section');
    adjustLevelIndicatorHeights('science-section');
  });
  
  // Re-adjust heights on window resize with debouncing
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      // Ensure full width layout
      ensureFullWidthLayout();
      
      // Adjust level indicators
      adjustLevelIndicatorHeights('engineering-section');
      adjustLevelIndicatorHeights('business-section');
      adjustLevelIndicatorHeights('content-section');
      adjustLevelIndicatorHeights('science-section');
    }, 100);
  });
  
  // Monitor for zoom changes by checking window.devicePixelRatio
  let lastPixelRatio = window.devicePixelRatio;
  setInterval(() => {
    if (window.devicePixelRatio !== lastPixelRatio) {
      lastPixelRatio = window.devicePixelRatio;
      console.log('Zoom level changed, adjusting layout...');
      ensureFullWidthLayout();
    }
  }, 500);
  
  // Trigger a resize event to ensure proper initial layout
  window.dispatchEvent(new Event('resize'));
  
  // Call ensureFullWidthLayout after a short delay to handle any initial rendering issues
  setTimeout(ensureFullWidthLayout, 500);

  // Add a function to fix layout issues after the page loads
  function fixLayoutIssues() {
    console.log("Fixing layout issues...");
    
    // Force horizontal layout for all fields containers
    document.querySelectorAll('.fields-container').forEach(container => {
      Object.assign(container.style, {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        width: '100%',
        gap: '1rem'
      });
    });
    
    // Force fixed width for all field columns
    document.querySelectorAll('.field-column').forEach(column => {
      Object.assign(column.style, {
        flex: '0 0 250px',
        minWidth: '250px',
        width: '250px',
        display: 'block',
        marginRight: '1rem'
      });
    });
  }

  // Add an additional call to fix layout issues after everything has loaded
  window.addEventListener('load', function() {
    fixLayoutIssues();
    setTimeout(fixLayoutIssues, 1000); // Run again after 1 second to be sure
  });
}); 