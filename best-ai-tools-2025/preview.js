// Add preview modal functionality
document.addEventListener('DOMContentLoaded', function() {
  // Create modal container
  const modal = d3.select("body")
    .append("div")
    .attr("class", "preview-modal")
    .style("position", "fixed")
    .style("top", "0")
    .style("left", "0")
    .style("width", "100%")
    .style("height", "100%")
    .style("background", "rgba(0, 0, 0, 0.7)")
    .style("display", "flex")
    .style("justify-content", "center")
    .style("align-items", "center")
    .style("z-index", "2000")
    .style("opacity", "0")
    .style("pointer-events", "none")
    .style("transition", "opacity 0.3s ease");
  
  // Create modal content
  const modalContent = modal.append("div")
    .attr("class", "modal-content")
    .style("background", "white")
    .style("border-radius", "10px")
    .style("width", "90%")
    .style("max-width", "600px")
    .style("max-height", "80vh")
    .style("overflow-y", "auto")
    .style("padding", "25px")
    .style("box-shadow", "0 5px 30px rgba(0, 0, 0, 0.3)")
    .style("transform", "translateY(20px)")
    .style("transition", "transform 0.3s ease");
  
  // Create close button
  modalContent.append("div")
    .attr("class", "close-btn")
    .style("position", "absolute")
    .style("top", "15px")
    .style("right", "15px")
    .style("font-size", "1.5rem")
    .style("cursor", "pointer")
    .style("color", "#555")
    .style("width", "30px")
    .style("height", "30px")
    .style("display", "flex")
    .style("justify-content", "center")
    .style("align-items", "center")
    .style("border-radius", "50%")
    .style("transition", "background 0.2s")
    .html("&times;")
    .on("mouseover", function() {
      d3.select(this).style("background", "#f0f0f0");
    })
    .on("mouseout", function() {
      d3.select(this).style("background", "transparent");
    })
    .on("click", closeModal);
  
  // Create modal header
  const modalHeader = modalContent.append("div")
    .attr("class", "modal-header")
    .style("margin-bottom", "20px");
  
  // Create modal body
  const modalBody = modalContent.append("div")
    .attr("class", "modal-body");
  
  // Preview data
  const previewData = {
    // Students & Graduates
    "ChatGPT": {
      title: "ChatGPT",
      icon: "fa-solid fa-robot",
      type: "Student Assistant",
      color: "#4285F4",
      description: "AI assistant that helps with essay writing, research questions, and study materials. Perfect for students needing help with assignments and research.",
      features: ["Essay writing assistance", "Research question answering", "Study material generation", "Concept explanations", "Language translation"],
      useCases: ["Writing essays and papers", "Understanding complex topics", "Generating study guides", "Research assistance"],
      link: "https://chat.openai.com"
    },
    "Perplexity": {
      title: "Perplexity",
      icon: "fa-solid fa-brain",
      type: "Research Assistant",
      color: "#4285F4",
      description: "AI-powered search engine that provides detailed answers with citations, making it ideal for academic research and fact-checking.",
      features: ["Cited answers", "Academic search", "Real-time information", "Multi-source verification"],
      useCases: ["Academic research", "Thesis preparation", "Fact-checking", "Literature review"],
      link: "https://www.perplexity.ai"
    },
    
    // Developers
    "GitHub Copilot": {
      title: "GitHub Copilot",
      icon: "fa-solid fa-code",
      type: "Coding Assistant",
      color: "#34A853",
      description: "AI pair programmer that suggests code completions in real-time, helping developers write code faster and with fewer errors.",
      features: ["Code completion", "Function suggestions", "Comment-to-code generation", "Multiple language support"],
      useCases: ["Software development", "Learning new languages", "Rapid prototyping", "Code refactoring"],
      link: "https://github.com/features/copilot"
    },
    "Cursor": {
      title: "Cursor",
      icon: "fa-solid fa-keyboard",
      type: "AI-Powered IDE",
      color: "#34A853",
      description: "AI-powered code editor designed for efficient coding with AI assistance, featuring chat interfaces and advanced code generation.",
      features: ["AI chat interface", "Code generation", "Code explanation", "Debugging assistance"],
      useCases: ["Professional development", "Learning to code", "Complex problem solving", "Code refactoring"],
      link: "https://cursor.sh"
    },
    
    // Scientists & Engineers
    "Wolfram Alpha": {
      title: "Wolfram Alpha",
      icon: "fa-solid fa-calculator",
      type: "Computational Engine",
      color: "#9C27B0",
      description: "Computational knowledge engine for mathematical and scientific calculations, providing step-by-step solutions and visualizations.",
      features: ["Mathematical computations", "Data analysis", "Scientific calculations", "Visualization tools"],
      useCases: ["Engineering calculations", "Scientific research", "Data analysis", "Academic problem-solving"],
      link: "https://www.wolframalpha.com"
    },
    
    // Job Seekers
    "Jobscan": {
      title: "Jobscan",
      icon: "fa-solid fa-magnifying-glass",
      type: "Resume Optimizer",
      color: "#FF9800",
      description: "Tool that analyzes your resume against job descriptions for ATS optimization, helping you get past automated screening systems.",
      features: ["ATS compatibility check", "Keyword optimization", "Resume formatting", "Job match scoring"],
      useCases: ["Resume optimization", "Job application preparation", "Career transitions", "Skills matching"],
      link: "https://www.jobscan.co"
    },
    
    // Content Creators
    "Midjourney": {
      title: "Midjourney",
      icon: "fa-solid fa-image",
      type: "AI Image Generator",
      color: "#EA4335",
      description: "AI image generation tool that creates high-quality visuals from text prompts, enabling creators to visualize concepts without traditional design skills.",
      features: ["Text-to-image generation", "Style customization", "High-resolution output", "Creative variations"],
      useCases: ["Social media content", "Marketing materials", "Concept visualization", "Artistic exploration"],
      link: "https://www.midjourney.com"
    },
    
    // Business / Ecommerce
    "Shopify Magic": {
      title: "Shopify Magic",
      icon: "fa-solid fa-store",
      type: "Ecommerce AI",
      color: "#3F51B5",
      description: "AI tools integrated with Shopify for content creation and store management, helping merchants create product descriptions and marketing content.",
      features: ["Product description generation", "Email content creation", "Blog post writing", "SEO optimization"],
      useCases: ["Ecommerce store management", "Product marketing", "Content creation", "Customer communication"],
      link: "https://www.shopify.com/magic"
    },
    
    // Productivity
    "Notion AI": {
      title: "Notion AI",
      icon: "fa-solid fa-note-sticky",
      type: "Productivity Assistant",
      color: "#00BCD4",
      description: "AI-powered writing assistant integrated with Notion for notes and documents, helping users draft, edit, and summarize content.",
      features: ["Writing assistance", "Content summarization", "Translation", "Brainstorming help"],
      useCases: ["Note-taking", "Project documentation", "Content creation", "Knowledge management"],
      link: "https://www.notion.so/product/ai"
    },
    
    // Video Editing
    "RunwayML": {
      title: "RunwayML",
      icon: "fa-solid fa-film",
      type: "AI Video Editor",
      color: "#F44336",
      description: "AI creative suite for video editing and generation, allowing creators to produce professional-quality videos with minimal technical expertise.",
      features: ["Text-to-video generation", "Video inpainting", "Motion tracking", "Style transfer"],
      useCases: ["Content creation", "Social media videos", "Marketing materials", "Creative projects"],
      link: "https://runwayml.com"
    }
  };
  
  // Default preview for tools not in the detailed data
  function getDefaultPreview(toolData) {
    return {
      title: toolData.tool.name,
      icon: toolData.tool.icon,
      type: getTypeFromClass(toolData.cssClass),
      color: getColorFromClass(toolData.cssClass),
      description: `AI tool for ${toolData.tool.description}.`,
      features: ["AI-powered functionality", "Specialized for " + toolData.tool.description],
      useCases: ["Professional use in " + getTypeFromClass(toolData.cssClass)],
      link: "#"
    };
  }
  
  // Helper functions
  function getTypeFromClass(cssClass) {
    const types = {
      "students": "Student Tool",
      "developers": "Developer Tool",
      "scientists": "Scientific Tool",
      "jobseekers": "Job Search Tool",
      "creators": "Creative Tool",
      "business": "Business Tool",
      "productivity": "Productivity Tool",
      "video": "Video Editing Tool"
    };
    return types[cssClass] || "AI Tool";
  }
  
  function getColorFromClass(cssClass) {
    const colors = {
      "students": "#4285F4",
      "developers": "#34A853",
      "scientists": "#9C27B0",
      "jobseekers": "#FF9800",
      "creators": "#EA4335",
      "business": "#3F51B5",
      "productivity": "#00BCD4",
      "video": "#F44336"
    };
    return colors[cssClass] || "#333";
  }
  
  // Add click event to tool items
  d3.selectAll(".tool-item").on("click", function(event, d) {
    const toolName = d.tool.name;
    const preview = previewData[toolName] || getDefaultPreview(d);
    
    // Set modal content
    modalHeader.html(`
      <div style="display: flex; align-items: center; gap: 15px;">
        <div style="width: 40px; height: 40px; border-radius: 50%; background: ${preview.color}; display: flex; justify-content: center; align-items: center; color: white; font-size: 1.2rem;">
          <i class="${preview.icon}"></i>
        </div>
        <div>
          <h2 style="margin: 0; font-size: 1.5rem;">${preview.title}</h2>
          <div style="color: #666; font-size: 0.9rem;">${preview.type}</div>
        </div>
      </div>
    `);
    
    modalBody.html(`
      <div style="margin-bottom: 20px;">
        <p>${preview.description}</p>
      </div>
      
      <div style="margin-bottom: 20px;">
        <h3 style="font-size: 1.1rem; margin-bottom: 8px; color: ${preview.color};">Key Features</h3>
        <ul style="padding-left: 20px; margin: 0;">
          ${preview.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
      </div>
      
      <div style="margin-bottom: 20px;">
        <h3 style="font-size: 1.1rem; margin-bottom: 8px; color: ${preview.color};">Use Cases</h3>
        <ul style="padding-left: 20px; margin: 0;">
          ${preview.useCases.map(useCase => `<li>${useCase}</li>`).join('')}
        </ul>
      </div>
      
      <div style="margin-top: 25px; text-align: center;">
        <a href="${preview.link}" target="_blank" style="display: inline-block; padding: 10px 20px; background: ${preview.color}; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Learn More</a>
      </div>
    `);
    
    // Show modal
    openModal();
  });
  
  // Function to open modal
  function openModal() {
    modal.style("opacity", "1")
      .style("pointer-events", "auto");
    
    modalContent.style("transform", "translateY(0)");
    
    // Add event listener to close when clicking outside
    modal.on("click", function(event) {
      if (event.target === this) {
        closeModal();
      }
    });
    
    // Add escape key listener
    d3.select("body").on("keydown", function(event) {
      if (event.key === "Escape") {
        closeModal();
      }
    });
  }
  
  // Function to close modal
  function closeModal() {
    modal.style("opacity", "0")
      .style("pointer-events", "none");
    
    modalContent.style("transform", "translateY(20px)");
    
    // Remove event listeners
    modal.on("click", null);
    d3.select("body").on("keydown", null);
  }
}); 