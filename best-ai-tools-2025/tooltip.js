// Add tooltips for additional information
document.addEventListener('DOMContentLoaded', function() {
  // Create tooltip element
  const tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background", "rgba(0, 0, 0, 0.85)")
    .style("color", "white")
    .style("padding", "10px 15px")
    .style("border-radius", "6px")
    .style("font-size", "0.85rem")
    .style("max-width", "250px")
    .style("box-shadow", "0 4px 10px rgba(0, 0, 0, 0.1)")
    .style("z-index", "1000")
    .style("pointer-events", "none")
    .style("transition", "opacity 0.2s");

  // Define tooltips data
  const tooltipData = {
    // Students & Graduates
    "ChatGPT": "AI assistant that helps with essay writing, research questions, and study materials",
    "Notion AI": "AI-powered writing assistant integrated with Notion for notes and documents",
    "Elicit": "AI research assistant that helps find and summarize academic papers",
    "Scholarcy": "AI tool that reads research papers and creates summaries with key findings",
    "Consensus": "AI search engine specifically designed for academic and scientific papers",
    "Perplexity": "AI-powered search engine that provides detailed answers with citations",
    "ResearchRabbit": "AI tool that creates visual maps of academic citations and related papers",
    "Scite.ai": "Platform that analyzes how scientific papers have been cited by others",
    
    // Developers
    "GitHub Copilot": "AI pair programmer that suggests code completions in real-time",
    "Replit": "Online IDE with AI coding assistance for multiple programming languages",
    "Cursor": "AI-powered code editor designed for efficient coding with AI assistance",
    "CodeWhisperer": "Amazon's AI code assistant that provides code suggestions",
    "Tabnine": "AI code completion tool that learns your coding patterns",
    "Codeium": "Free AI coding assistant with advanced code generation capabilities",
    "Devin": "Autonomous AI software engineer that can complete coding tasks",
    "Continue.dev": "Open-source coding assistant that connects to various AI models",
    
    // Scientists & Engineers
    "Wolfram Alpha": "Computational knowledge engine for mathematical and scientific calculations",
    "SciSpace": "AI-powered platform for exploring and understanding research papers",
    "Semantic Scholar": "AI-powered search engine for academic papers with citation analysis",
    "AlphaFold": "DeepMind's AI system for predicting protein structures with high accuracy",
    "Galactica": "AI model trained on scientific knowledge to assist with research",
    "Anthropic Claude": "Large language model with strong capabilities in scientific reasoning",
    "GPT-4o": "OpenAI's multimodal model capable of complex scientific analysis",
    
    // Job Seekers
    "Resume.io": "AI-powered resume builder with templates and optimization tools",
    "Kickresume": "Resume builder with AI suggestions for improving your CV",
    "Jobscan": "Tool that analyzes your resume against job descriptions for ATS optimization",
    "Rezi": "AI resume builder that optimizes for applicant tracking systems",
    "Teal": "Job tracking platform with AI tools for job search management",
    "HireYou.ai": "AI interview preparation tool with practice questions and feedback",
    "Adzuna ValueMyCV": "Tool that analyzes your CV and estimates your market value",
    "Skillroads": "AI career assistant for resume building and job search",
    
    // Content Creators
    "Canva": "Design platform with AI features for creating visual content",
    "Jasper": "AI writing assistant specialized for marketing and creative content",
    "Midjourney": "AI image generation tool that creates high-quality visuals from text prompts",
    "Descript": "All-in-one audio/video editor with AI transcription and editing tools",
    "RunwayML": "AI creative suite for video editing and generation",
    "Leonardo.ai": "AI image generation platform with fine-tuning capabilities",
    "Synthesia": "AI video creation platform that generates videos with virtual avatars",
    "Suno": "AI music generation tool that creates original songs from text prompts",
    
    // Business / Ecommerce
    "Shopify Magic": "AI tools integrated with Shopify for content creation and store management",
    "Copy.ai": "AI copywriting tool for marketing and product descriptions",
    "Klaviyo": "Email marketing platform with AI-powered personalization",
    "Mutiny": "AI website personalization platform for improving conversion rates",
    "Nosto": "AI-powered product recommendation engine for ecommerce",
    "Algolia": "AI search and discovery platform for ecommerce websites",
    "Bloomreach": "Commerce experience platform with AI-powered personalization",
    "Syte": "Visual AI platform for product discovery in ecommerce",
    
    // Productivity
    "Otter.ai": "AI meeting assistant that transcribes and summarizes conversations",
    "Mem.ai": "AI-powered knowledge management system that connects your notes",
    "Reclaim.ai": "AI calendar assistant that optimizes your schedule",
    "Superhuman": "AI-enhanced email client for faster email processing",
    "Taskade": "AI-powered productivity platform for teams with project management tools",
    "Zapier AI": "Automation platform with AI capabilities for connecting apps and workflows",
    "Motion": "AI time management tool that optimizes your calendar and tasks",
    
    // Video Editing
    "CapCut": "User-friendly video editing app with AI-powered effects and templates",
    "Descript": "Video editor that allows editing video by editing text transcripts",
    "RunwayML": "AI-powered video editing platform with advanced generation capabilities",
    "Pictory": "AI tool that converts text to video with visuals and voiceover",
    "Synthesia": "Platform for creating AI videos with virtual presenters",
    "Fliki": "Text-to-video platform with AI voices and stock footage",
    "D-ID": "AI platform for creating videos with digital humans",
    "Elai": "AI video platform for creating presenter videos without filming"
  };
  
  // Add tooltip functionality to tool items
  d3.selectAll(".tool-item")
    .on("mouseover", function(event, d) {
      const toolName = d.tool.name;
      const description = tooltipData[toolName] || "AI tool for " + d.tool.description;
      
      // Position tooltip
      tooltip
        .style("visibility", "visible")
        .style("opacity", 1)
        .style("left", (event.pageX + 15) + "px")
        .style("top", (event.pageY - 20) + "px")
        .html(`
          <div style="font-weight: bold;">${toolName}</div>
          <div style="margin-top: 5px;">${description}</div>
        `);
        
      // Highlight current tool
      d3.select(this)
        .style("background", "rgba(0, 0, 0, 0.06)");
    })
    .on("mousemove", function(event) {
      // Move tooltip with mouse
      tooltip
        .style("left", (event.pageX + 15) + "px")
        .style("top", (event.pageY - 20) + "px");
    })
    .on("mouseout", function() {
      // Hide tooltip
      tooltip
        .style("visibility", "hidden")
        .style("opacity", 0);
        
      // Remove highlight
      d3.select(this)
        .style("background", "transparent");
    });
}); 