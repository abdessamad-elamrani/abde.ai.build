/**
 * AI Tools: From Zero to Hero
 * Data Structure
 */

// Section 1: Engineering & Technical
const engineeringTechnicalData = [
  {
    field: "Coding & Development",
    icon: "💻",
    cssClass: "coding",
    levels: [
      {
        name: "All Levels",
        tools: [
          {
            name: "GitHub Copilot",
            description: "AI pair programmer that suggests code completions.",
            icon: "fa-brands fa-github",
            url: "https://github.com/features/copilot",
            scores: {
              education: 8,
              popularity: 9,
              complexity: 6
            },
            paidStatus: "Paid ($10/month); Free for students.",
            detailedDescription: "GitHub Copilot is an AI pair programmer that offers context-aware code suggestions as you type. It supports multiple programming languages and integrates with popular IDEs like VS Code, Visual Studio, and JetBrains."
          },
          {
            name: "Cursor",
            description: "AI-powered code editor with ChatGPT integration.",
            icon: "fa-solid fa-terminal",
            url: "https://cursor.sh",
            scores: {
              education: 7,
              popularity: 7,
              complexity: 5
            },
            paidStatus: "Free tier; Pro plan ($20/month).",
            detailedDescription: "Cursor is an AI-first code editor built on VS Code with integrated AI capabilities. It can explain code, generate functions, and help debug issues through natural language interaction."
          },
          {
            name: "Tabnine",
            description: "AI code completion assistant for multiple languages.",
            icon: "fa-solid fa-code",
            url: "https://www.tabnine.com",
            scores: {
              education: 7,
              popularity: 8,
              complexity: 5
            },
            paidStatus: "Free tier; Pro plan ($12/month).",
            detailedDescription: "Tabnine provides AI-powered code completions for over 20 programming languages. It learns from your coding patterns and offers context-aware suggestions to improve productivity."
          },
          {
            name: "Bubble",
            description: "No-code platform for building web applications.",
            icon: "fa-solid fa-cubes",
            url: "https://bubble.io",
            scores: {
              education: 8,
              popularity: 9,
              complexity: 6
            },
            paidStatus: "Free Plan; Personal Plan $32/month.",
            detailedDescription: "Bubble offers a drag-and-drop editor for building web applications without code. Good for entrepreneurs and small businesses."
          },
          {
            name: "v0",
            description: "Tool for rapid prototyping and code generation, particularly for UIs.",
            icon: "fa-solid fa-cube",
            url: "https://v0.dev",
            scores: {
              education: 8,
              popularity: 7,
              complexity: 6
            },
            paidStatus: "$20/month.",
            detailedDescription: "v0 is designed for rapid prototyping, especially for UIs with React and Tailwind. Good for getting projects started quickly."
          }
        ]
      }
    ]
  },
  {
    field: "Search & Research",
    icon: "🔍",
    cssClass: "search",
    levels: [
      {
        name: "All Levels",
        tools: [
          {
            name: "Perplexity AI",
            description: "AI-powered search engine with cited sources.",
            icon: "fa-solid fa-magnifying-glass",
            url: "https://www.perplexity.ai",
            scores: {
              education: 9,
              popularity: 8,
              complexity: 4
            },
            paidStatus: "Free tier; Pro plan ($20/month).",
            detailedDescription: "Perplexity AI is a search engine that uses AI to generate comprehensive answers with cited sources. It can search the web in real-time and provide up-to-date information on various topics."
          },
          {
            name: "You.com",
            description: "AI-powered search engine with app integrations.",
            icon: "fa-solid fa-globe",
            url: "https://you.com",
            scores: {
              education: 8,
              popularity: 7,
              complexity: 3
            },
            paidStatus: "Free.",
            detailedDescription: "You.com combines traditional search with AI capabilities and app integrations. It offers a chat interface for natural language queries and summarizes information from multiple sources."
          }
        ]
      }
    ]
  },
  {
    field: "Knowledge Management",
    icon: "🧠",
    cssClass: "knowledge",
    levels: [
      {
        name: "All Levels",
        tools: [
          {
            name: "Notion AI",
            description: "AI writing assistant integrated with Notion workspace.",
            icon: "fa-solid fa-book",
            url: "https://www.notion.so/product/ai",
            showScoreBadge: false,
            scores: {
              education: 8,
              popularity: 9,
              complexity: 5
            },
            paidStatus: "Requires Notion subscription + AI add-on ($10/month).",
            detailedDescription: "Notion AI enhances the Notion workspace with AI writing capabilities. It can summarize text, improve writing, generate content, and translate between languages, all within your Notion documents."
          },
          {
            name: "Mem.ai",
            description: "AI-powered note-taking app with knowledge connections.",
            icon: "fa-solid fa-brain",
            url: "https://mem.ai",
            scores: {
              education: 7,
              popularity: 6,
              complexity: 4
            },
            paidStatus: "Free tier; Pro plan ($8/month).",
            detailedDescription: "Mem.ai is a note-taking app that uses AI to organize information and create connections between your notes. It features a powerful search function and can generate summaries and insights from your knowledge base."
          },
          {
            name: "Guru",
            description: "AI-powered knowledge management platform with integrations and verification.",
            icon: "fa-solid fa-graduation-cap",
            url: "https://www.getguru.com",
            scores: {
              education: 8,
              popularity: 8,
              complexity: 7
            },
            paidStatus: "$15/user/month.",
            detailedDescription: "Guru centralizes and streamlines access to company information. Integrates with various platforms. Offers AI-powered search and verification."
          }
        ]
      }
    ]
  },
  {
    field: "Development Tools",
    icon: "🛠️",
    cssClass: "devtools",
    levels: [
      {
        name: "All Levels",
        tools: [
          {
            name: "Replit",
            description: "Online IDE with AI capabilities.",
            icon: "fa-solid fa-laptop-code",
            url: "https://replit.com",
            scores: {
              education: 8,
              popularity: 8,
              complexity: 5
            },
            paidStatus: "Free tier; Pro plan ($10/month).",
            detailedDescription: "Replit is an online IDE that allows you to code in 50+ languages without any setup. It includes AI features for code completion, explanation, and debugging."
          },
          {
            name: "CodeWhisperer",
            description: "Amazon's AI coding assistant.",
            icon: "fa-brands fa-aws",
            url: "https://aws.amazon.com/codewhisperer/",
            scores: {
              education: 7,
              popularity: 7,
              complexity: 6
            },
            paidStatus: "Free tier; Professional tier for enterprise.",
            detailedDescription: "Amazon CodeWhisperer is an AI coding companion that provides code suggestions based on your comments and existing code. It integrates with popular IDEs and supports multiple programming languages."
          }
        ]
      }
    ]
  }
];

// Section 2: Business & Productivity
const businessProductivityData = [
  {
    field: "AI Assistants (Chatbots)",
    icon: "💬",
    cssClass: "chatbots",
    levels: [
      {
        name: "All Levels",
        tools: [
          {
            name: "GPT 4.5/o3-mini-High",
            description: "Multimodal AI assistant for brainstorming, translation, coding, and data analysis.",
            icon: "custom-logo", // DONT FORGET THIS ONE TO HAVE CUSTOM LOGO WORKING
            logoUrl: "logos/chatgpt-logo.png",
            fallbackIcon: "fa-solid fa-comment-dots",
            url: "https://chat.openai.com",
            scores: {
              education: 9,
              popularity: 10,
              complexity: 3
            },
            paidStatus: "Free tier; Plus plan ($20/month).",
            detailedDescription: "ChatGPT is a versatile AI assistant that can help with writing, coding, translation, data analysis, and creative tasks. The Plus version offers GPT-4 capabilities, DALL-E image generation, and web browsing."
          },
          {
            name: "Claude 3.7 Thinking",
            description: "AI assistant with strong reasoning and document analysis capabilities.",
            icon: "custom-logo",
            logoUrl: "logos/claude-logo.png",
            fallbackIcon: "fa-solid fa-robot",
            url: "https://claude.ai",
            showScoreBadge: true,
            scores: {
              education: 9,
              popularity: 8,
              complexity: 6
            },
            paidStatus: "Free tier; Pro plan ($20/month).",
            detailedDescription: "Claude is an AI assistant known for its reasoning capabilities and ability to analyze long documents. It excels at thoughtful, nuanced responses and can handle complex instructions with multiple steps."
          },
          {
            name: "Grok3",
            description: "AI assistant with access to real-time Twitter data and fewer content restrictions.",
            icon: "custom-logo",
            logoUrl: "logos/grok3-logo.png",
            fallbackIcon: "fa-brands fa-x-twitter",
            url: "https://x.ai",
            scores: {
              education: 9,
              popularity: 8,
              complexity: 5
            },
            paidStatus: "Requires X Premium+ subscription at $40/month.",
            detailedDescription: "Grok 3 has direct access to real-time Twitter data. It has fewer content restrictions than other LLMs, but is more expensive."
          },
          {
            name: "DeepSeek R1",
            description: "AI assistant focused on search and coding, known for transparency.",
            icon: "custom-logo",
            logoUrl: "logos/deepseek-logo.png",
            fallbackIcon: "fa-solid fa-search",
            url: "https://deepseek.com",
            scores: {
              education: 8,
              popularity: 7,
              complexity: 7
            },
            paidStatus: "V3 and R1 models free on their site; API access is paid (very cheap).",
            detailedDescription: "DeepSeek offers transparent search and strong coding capabilities (v3 model). Its R1 model competes with ChatGPT's o1. Good for straightforward coding suggestions."
          },
          {
            name: "Gemini",
            description: "Google's multimodal AI assistant with web search integration.",
            icon: "custom-logo",
            logoUrl: "logos/gemini-logo.png",
            fallbackIcon: "fa-solid fa-message",
            url: "https://gemini.google.com",
            scores: {
              education: 8,
              popularity: 8,
              complexity: 6
            },
            paidStatus: "Free tier; Advanced plan ($20/month).",
            detailedDescription: "Gemini (formerly Bard) is Google's AI assistant with strong multimodal capabilities. It can analyze images, process text, and has direct access to Google Search for up-to-date information."
          }
        ]
      }
    ]
  },
  {
    field: "Project Management",
    icon: "📊",
    cssClass: "project",
    levels: [
      {
        name: "All Levels",
        tools: [
          {
            name: "Trello AI",
            description: "AI features for Trello boards and cards.",
            icon: "fa-brands fa-trello",
            url: "https://trello.com/ai",
            scores: {
              education: 6,
              popularity: 8,
              complexity: 3
            },
            paidStatus: "Requires Trello Premium ($5/month) or higher.",
            detailedDescription: "Trello AI enhances project management by automating card creation, summarizing board activity, and generating task descriptions. It helps teams organize work more efficiently and maintain clear communication."
          },
          {
            name: "ClickUp AI",
            description: "AI assistant for project management and documentation.",
            icon: "fa-solid fa-tasks",
            url: "https://clickup.com/ai",
            scores: {
              education: 7,
              popularity: 7,
              complexity: 4
            },
            paidStatus: "Requires ClickUp subscription + AI add-on.",
            detailedDescription: "ClickUp AI helps with writing project documentation, summarizing meetings, generating task descriptions, and automating workflows. It integrates seamlessly with ClickUp's project management platform."
          },
          {
            name: "Asana",
            description: "Work management platform with AI features like Smart Status and Smart Chat.",
            icon: "fa-brands fa-asana",
            url: "https://asana.com",
            scores: {
              education: 9,
              popularity: 9,
              complexity: 6
            },
            paidStatus: "Free plan for up to 10 users; Starter Plan $13.49/user/month.",
            detailedDescription: "Asana offers AI features like Smart Status, Smart Chat, and Smart Summaries. Good for teams needing to plan, track, and manage projects."
          }
        ]
      },
      {
        name: "Scheduling & Email",
        tools: [
          {
            name: "Reclaim",
            description: "AI-powered scheduling assistant for managing tasks, meetings, and breaks.",
            icon: "fa-solid fa-calendar-plus",
            url: "https://reclaim.ai",
            scores: {
              education: 9,
              popularity: 8,
              complexity: 4
            },
            paidStatus: "Lite Plan free; Starter Plan $10/user/month.",
            detailedDescription: "Reclaim optimizes your calendar by automatically managing tasks and meetings. Good for individuals and teams."
          },
          {
            name: "Clockwise",
            description: "AI scheduling assistant for optimizing meeting times and creating focus time.",
            icon: "fa-solid fa-clock",
            url: "https://www.getclockwise.com",
            scores: {
              education: 8,
              popularity: 8,
              complexity: 4
            },
            paidStatus: "Free Plan; Paid plans from $6.75/month (billed annually).",
            detailedDescription: "Clockwise optimizes meeting times and creates uninterrupted focus time. Good for teams needing to coordinate schedules."
          },
          {
            name: "HubSpot AI Email Writer",
            description: "AI-powered email assistant for generating personalized email copy.",
            icon: "fa-brands fa-hubspot",
            url: "https://www.hubspot.com/products/marketing/email",
            scores: {
              education: 8,
              popularity: 9,
              complexity: 4
            },
            paidStatus: "Email writing assistant available for free; Advanced features in Marketing Hub paid packages (from $15/month).",
            detailedDescription: "HubSpot's AI Email Writer generates copy for various email campaigns. Integrates with HubSpot's CRM."
          },
          {
            name: "Shortwave",
            description: "AI-powered email client with summarization, translation, and task management.",
            icon: "fa-solid fa-envelope",
            url: "https://www.shortwave.com",
            scores: {
              education: 8,
              popularity: 7,
              complexity: 5
            },
            paidStatus: "Free plan; Personal plan $8.50/seat/month.",
            detailedDescription: "Shortwave offers AI email summarization, language translation, and task management. Good for users needing to manage a high volume of emails."
          }
        ]
      }
    ]
  },
  {
    field: "Customer Service",
    icon: "👥",
    cssClass: "customer",
    levels: [
      {
        name: "All Levels",
        tools: [
          {
            name: "Intercom",
            description: "AI-powered customer messaging platform.",
            icon: "fa-solid fa-headset",
            url: "https://www.intercom.com",
            scores: {
              education: 7,
              popularity: 9,
              complexity: 6
            },
            paidStatus: "Starts at $74/month.",
            detailedDescription: "Intercom combines human and AI support to provide efficient customer service. It can automatically answer common questions, route complex issues to human agents, and provide personalized responses."
          },
          {
            name: "Zendesk AI",
            description: "AI customer support automation and insights.",
            icon: "fa-solid fa-user-shield",
            url: "https://www.zendesk.com/platform/ai/",
            scores: {
              education: 7,
              popularity: 8,
              complexity: 7
            },
            paidStatus: "Requires Zendesk subscription.",
            detailedDescription: "Zendesk AI enhances customer support with automated responses, ticket routing, and sentiment analysis. It helps support teams handle high volumes of inquiries while maintaining quality service."
          },
          {
            name: "Tidio AI",
            description: "Customer service platform with AI chatbot (Lyro) and Reply Assistant.",
            icon: "fa-solid fa-comments",
            url: "https://www.tidio.com",
            scores: {
              education: 8,
              popularity: 8,
              complexity: 5
            },
            paidStatus: "7-day free trial; Starter plan $29/month.",
            detailedDescription: "Tidio offers an AI chatbot (Lyro) and a Reply Assistant for customer service. Good for businesses needing to handle customer inquiries efficiently."
          }
        ]
      },
      {
        name: "Recruitment & HR",
        tools: [
          {
            name: "Textio",
            description: "AI-powered platform for enhancing recruitment communications.",
            icon: "fa-solid fa-file-signature",
            url: "https://textio.com",
            scores: {
              education: 8,
              popularity: 7,
              complexity: 5
            },
            paidStatus: "14-day free trial.",
            detailedDescription: "Textio helps improve job postings with a Textio Score and suggestions for inclusive language. Good for attracting a diverse pool of candidates."
          },
          {
            name: "CVViZ",
            description: "AI-powered recruitment platform for job posting, resume screening, and candidate engagement.",
            icon: "fa-solid fa-users",
            url: "https://www.cvviz.com",
            scores: {
              education: 8,
              popularity: 6,
              complexity: 7
            },
            paidStatus: "7-day free trial; Starter Plan $99/month.",
            detailedDescription: "CVViZ automates job postings, screens resumes, and engages candidates. Integrates with Applicant Tracking Systems (ATS)."
          }
        ]
      }
    ]
  },
  {
    field: "Social Media",
    icon: "📱",
    cssClass: "social",
    levels: [
      {
        name: "All Levels",
        tools: [
          {
            name: "Vista Social",
            description: "Platform for planning, scheduling, and analyzing social media content.",
            icon: "fa-solid fa-share-alt",
            url: "https://vistasocial.com",
            scores: {
              education: 8,
              popularity: 8,
              complexity: 6
            },
            paidStatus: "Plans from $39/month.",
            detailedDescription: "Vista Social offers visual scheduling, AI-generated captions, and consolidated engagement tools. Good for small to medium-sized businesses and agencies."
          },
          {
            name: "FeedHive",
            description: "AI-driven platform for content suggestions and scheduling.",
            icon: "fa-solid fa-calendar-days",
            url: "https://feedhive.com",
            scores: {
              education: 8,
              popularity: 7,
              complexity: 5
            },
            paidStatus: "From $19/month.",
            detailedDescription: "FeedHive offers AI-driven content suggestions, hashtag recommendations, and visual previews. Good for freelancers and small businesses."
          }
        ]
      }
    ]
  }
];

// Section 3: Content & Media
const contentMediaData = [
  {
    field: "Image Generation",
    icon: "🎨",
    cssClass: "image",
    levels: [
      {
        name: "All Levels",
        tools: [
          {
            name: "DALL-E 3",
            description: "OpenAI's advanced text-to-image generator.",
            icon: "fa-solid fa-robot",
            url: "https://openai.com/dall-e-3",
            scores: {
              education: 8,
              popularity: 9,
              complexity: 5
            },
            paidStatus: "Available through ChatGPT Plus ($20/month) or API.",
            detailedDescription: "DALL-E 3 generates highly detailed images from text descriptions. It excels at following specific instructions and can create images in various styles, from photorealistic to artistic renderings."
          },
          {
            name: "Midjourney",
            description: "AI image generator with artistic style and high-quality output.",
            icon: "fa-solid fa-paint-brush",
            url: "https://www.midjourney.com",
            showScoreBadge: false,
            scores: {
              education: 7,
              popularity: 9,
              complexity: 6
            },
            paidStatus: "Paid only ($10-$60/month).",
            detailedDescription: "Midjourney is an AI image generator known for its artistic style and high-quality output. It operates primarily through Discord and offers various subscription tiers for different usage levels."
          },
          {
            name: "Stable Diffusion",
            description: "Open-source image generation model.",
            icon: "fa-solid fa-layer-group",
            url: "https://stability.ai",
            scores: {
              education: 9,
              popularity: 8,
              complexity: 8
            },
            paidStatus: "Free (self-hosted); Various services offer hosted versions.",
            detailedDescription: "Stable Diffusion is an open-source image generation model that can be run locally or through various services. It offers flexibility for customization and can be fine-tuned for specific use cases."
          }
        ]
      }
    ]
  },
  {
    field: "Video Creation",
    icon: "🎬",
    cssClass: "video",
    levels: [
      {
        name: "All Levels",
        tools: [
          {
            name: "Runway Gen-2",
            description: "AI video generation from text or images.",
            icon: "fa-solid fa-film",
            url: "https://runwayml.com",
            scores: {
              education: 8,
              popularity: 9,
              complexity: 7
            },
            paidStatus: "Standard plan ($15/month); Pro plan ($35/month).",
            detailedDescription: "Runway Gen-2 can generate short videos from text prompts or transform still images into videos. It's used for creating visual effects, motion graphics, and creative video content."
          },
          {
            name: "Synthesia",
            description: "AI video creation with virtual presenters.",
            icon: "fa-solid fa-user-tie",
            url: "https://www.synthesia.io",
            scores: {
              education: 7,
              popularity: 8,
              complexity: 5
            },
            paidStatus: "Personal plan ($30/month); Enterprise plans available.",
            detailedDescription: "Synthesia creates professional-looking videos with AI avatars that speak your script in multiple languages. It's used for training videos, marketing content, and personalized messages."
          }
        ]
      }
    ]
  },
  {
    field: "Writing & Editing",
    icon: "✍️",
    cssClass: "writing",
    levels: [
      {
        name: "All Levels",
        tools: [
          {
            name: "Jasper",
            description: "AI content creation platform for marketing and business.",
            icon: "fa-solid fa-pen-fancy",
            url: "https://www.jasper.ai",
            scores: {
              education: 7,
              popularity: 8,
              complexity: 5
            },
            paidStatus: "Creator plan ($39/month); Teams plan ($99/month).",
            detailedDescription: "Jasper is an AI writing assistant specialized for marketing content. It can generate blog posts, social media content, emails, and ad copy with templates for different content types."
          },
          {
            name: "Grammarly",
            description: "AI writing assistant for grammar and style improvement.",
            icon: "fa-solid fa-spell-check",
            url: "https://www.grammarly.com",
            scores: {
              education: 9,
              popularity: 10,
              complexity: 3
            },
            paidStatus: "Free tier; Premium plan ($12/month).",
            detailedDescription: "Grammarly checks writing for grammar, spelling, punctuation, and style issues. The premium version offers advanced suggestions for clarity, engagement, and tone adjustments."
          },
          {
            name: "Copy.ai",
            description: "AI copywriting tool for marketing content.",
            icon: "fa-solid fa-copy",
            url: "https://www.copy.ai",
            scores: {
              education: 6,
              popularity: 7,
              complexity: 4
            },
            paidStatus: "Free tier; Pro plan ($36/month).",
            detailedDescription: "Copy.ai generates marketing copy for various formats including social media posts, emails, and product descriptions. It offers templates for different content types and business needs."
          }
        ]
      }
    ]
  },
  {
    field: "Voice Generation",
    icon: "🔊",
    cssClass: "voice",
    levels: [
      {
        name: "All Levels",
        tools: [
          {
            name: "ElevenLabs",
            description: "AI voice generator with text-to-speech and voice cloning.",
            icon: "fa-solid fa-microphone-alt",
            url: "https://elevenlabs.io",
            scores: {
              education: 9,
              popularity: 9,
              complexity: 6
            },
            paidStatus: "Free plan (10k credits); Starter Plan $5/month (30k credits).",
            detailedDescription: "ElevenLabs offers high-quality text-to-speech and voice cloning. Allows for adjusting pitch, speed, and tone. Also offers AI Dubbing Studio."
          },
          {
            name: "Play.ht",
            description: "AI voice generator for creating voiceovers.",
            icon: "fa-solid fa-volume-up",
            url: "https://play.ht",
            scores: {
              education: 7,
              popularity: 8,
              complexity: 5
            },
            paidStatus: "Free Plan; Creator Plan $29/month.",
            detailedDescription: "Play.ht generates realistic voices for voiceovers. Offers a wide selection of voices and allows for adjusting parameters. Includes voice cloning."
          }
        ]
      }
    ]
  }
];

// Section 4: Science & Literature
const scienceLiteratureData = [
  {
    field: "Research Assistant",
    icon: "📚",
    cssClass: "research",
    levels: [
      {
        name: "All Levels",
        tools: [
          {
            name: "Elicit",
            description: "AI research assistant for finding and summarizing papers.",
            icon: "fa-solid fa-microscope",
            url: "https://elicit.org",
            scores: {
              education: 10,
              popularity: 7,
              complexity: 5
            },
            paidStatus: "Free for individuals; Team plans available.",
            detailedDescription: "Elicit helps researchers find relevant papers, extract key information, and summarize findings. It can answer research questions by analyzing scientific literature and presenting evidence."
          },
          {
            name: "Consensus",
            description: "AI-powered search engine for scientific papers.",
            icon: "fa-solid fa-chart-line",
            url: "https://consensus.app",
            scores: {
              education: 9,
              popularity: 6,
              complexity: 4
            },
            paidStatus: "Free tier; Premium features available.",
            detailedDescription: "Consensus searches through millions of research papers to find scientific consensus on specific questions. It extracts key findings and provides citations to support its answers."
          }
        ]
      }
    ]
  },
  {
    field: "Note-Taking",
    icon: "📝",
    cssClass: "notetakers",
    levels: [
      {
        name: "All Levels",
        tools: [
          {
            name: "Otter.ai",
            description: "AI meeting transcription and note-taking.",
            icon: "fa-solid fa-file-alt",
            url: "https://otter.ai",
            scores: {
              education: 8,
              popularity: 8,
              complexity: 4
            },
            paidStatus: "Free tier; Pro plan ($16.99/month).",
            detailedDescription: "Otter.ai transcribes meetings and lectures in real-time, generating searchable notes with speaker identification. It can integrate with video conferencing platforms and summarize key points."
          },
          {
            name: "Tldraw",
            description: "AI-enhanced drawing and diagramming tool.",
            icon: "fa-solid fa-pencil-ruler",
            url: "https://tldraw.com",
            scores: {
              education: 7,
              popularity: 6,
              complexity: 3
            },
            paidStatus: "Free.",
            detailedDescription: "Tldraw combines drawing tools with AI capabilities to help create diagrams, flowcharts, and visual notes. It can transform rough sketches into polished diagrams and generate drawings from text descriptions."
          }
        ]
      }
    ]
  },
  {
    field: "Grammar & Language",
    icon: "🔤",
    cssClass: "grammar",
    levels: [
      {
        name: "All Levels",
        tools: [
          {
            name: "DeepL",
            description: "AI-powered language translation with high accuracy.",
            icon: "fa-solid fa-language",
            url: "https://www.deepl.com",
            scores: {
              education: 9,
              popularity: 8,
              complexity: 3
            },
            paidStatus: "Free tier; Pro plan (€7/month).",
            detailedDescription: "DeepL provides highly accurate translations between multiple languages. It's known for preserving the tone and nuance of the original text better than many other translation services."
          },
          {
            name: "Wordtune",
            description: "AI writing assistant for rewriting and rephrasing.",
            icon: "fa-solid fa-pen",
            url: "https://www.wordtune.com",
            scores: {
              education: 8,
              popularity: 7,
              complexity: 4
            },
            paidStatus: "Free tier; Premium plan ($9.99/month).",
            detailedDescription: "Wordtune helps improve writing by suggesting alternative phrasings and sentence structures. It can adjust the tone, formality, and length of your text while preserving the original meaning."
          }
        ]
      }
    ]
  },
  {
    field: "Deep Research",
    icon: "🔬",
    cssClass: "deepresearch",
    levels: [
      {
        name: "All Levels",
        tools: [
          {
            name: "Semantic Scholar",
            description: "AI-enhanced academic search engine.",
            icon: "fa-solid fa-graduation-cap",
            url: "https://www.semanticscholar.org",
            scores: {
              education: 9,
              popularity: 8,
              complexity: 5
            },
            paidStatus: "Free.",
            detailedDescription: "Semantic Scholar uses AI to help researchers find relevant academic papers. It analyzes the content of papers to understand their significance and relationships to other research."
          },
          {
            name: "Connected Papers",
            description: "Visual tool to explore academic papers.",
            icon: "fa-solid fa-project-diagram",
            url: "https://www.connectedpapers.com",
            scores: {
              education: 8,
              popularity: 7,
              complexity: 4
            },
            paidStatus: "Free tier; Pro plan available.",
            detailedDescription: "Connected Papers creates visual graphs showing the relationships between academic papers. It helps researchers discover relevant papers they might have missed through traditional search methods."
          }
        ]
      }
    ]
  }
];

// Define level names for consistency
const engineeringLevelNames = ["Engineering & Technical"];
const businessLevelNames = ["Business & Productivity"];
const contentLevelNames = ["Content & Media"];
const scienceLevelNames = ["Science & Literature"]; 