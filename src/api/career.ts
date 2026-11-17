export interface ScreeningQuestion {
  id: string;
  question: string;
  type: "text" | "select" | "radio" | "number";
  options?: string[];
  placeholder?: string;
  required?: boolean;
  idealAnswer?: string;
}

export interface JobOpening {
  id: string;
  slug: string;
  title: string;
  company: string;
  department: string;
  category: string[];
  location: string;
  type: string;
  experience: string;
  salary: string;
  openings: string;
  deadline?: string;
  aboutRole: string;
  whatYouWillDo: string[];
  whatWeAreLookingFor: string[];
  goodToHave: string[];
  whatWeOffer: string[];
  howToApply: string;
  screeningQuestions: ScreeningQuestion[];
}

export const jobs: JobOpening[] = [
  {
    id: "1",
    slug: "react-native-developer",
    title: "React Native Developer (Mobile App)",
    company: "Araizona Simplesphere Global Private Limited",
    department: "Mobile Engineering",
    category: ["cat1"],
    location: "Wanwadi, Pune (On-site)",
    type: "Full-time",
    experience: "0–2 years",
    salary: "₹3.4 LPA",
    openings: "(2)",
    deadline: "Immediate",
    aboutRole:
      "We are building secure, scalable business applications for our clients. You will develop mobile apps for Android and iOS, working closely with our backend, design and AI teams.",
    whatYouWillDo: [
      "Build and maintain mobile apps in React Native with TypeScript, for both Android and iOS.",
      "Turn designs and requirements into clean, responsive screens for phones and tablets.",
      "Connect apps to REST APIs, with real-time updates over WebSockets.",
      "Integrate third-party SDKs and services such as calling, camera, media playback and file upload.",
      "Set up push notifications and in-app alerts.",
      "Follow secure coding practices: secure storage, certificate pinning, and no sensitive data in logs or on the device.",
      "Prepare Android and iOS builds and help with releases.",
      "Fix bugs, improve performance, and write clean code that is easy to maintain.",
    ],
    whatWeAreLookingFor: [
      "0–2 years of experience with React Native. Freshers with strong personal or internship projects are welcome.",
      "Good knowledge of JavaScript and TypeScript.",
      "Experience consuming REST APIs and handling loading, error and offline states.",
      "Familiarity with state management (Redux, Zustand or React Query).",
      "Basic use of Android Studio and Xcode, and running apps on real devices.",
      "Comfortable with Git.",
      "Clear communication, and willingness to learn and take ownership.",
    ],
    goodToHave: [
      "Native modules in Kotlin or Swift.",
      "Push notifications (Firebase Cloud Messaging, Apple Push Notification service).",
      "Camera, file upload or audio playback in an app.",
      "An app published on the Play Store or App Store.",
      "Interest in app security.",
    ],
    whatWeOffer: [
      "Work on live products with real users, from the first version onward.",
      "Exposure to AI features, third-party integrations and security practices.",
      "A small team where your work is visible and you learn fast.",
    ],
    howToApply:
      'Apply directly through our portal below, or email your resume and links to your GitHub or published apps to contact@araizona.com with the subject line "React Native Developer".',
    screeningQuestions: [
      {
        id: "education",
        question: "Have you completed Bachelor's Degree?",
        type: "select",
        options: ["Yes", "No", "In Progress / Final Year"],
        required: true,
        idealAnswer: "Yes",
      },
      {
        id: "mobile_exp",
        question: "How many years of work experience do you have with Mobile Application Development?",
        type: "select",
        options: ["Fresher / Strong Projects", "1 Year", "2 Years", "3+ Years"],
        required: true,
        idealAnswer: "2 Years",
      },
      {
        id: "engineering_exp",
        question: "How many years of Engineering experience do you currently have?",
        type: "select",
        options: ["Fresher", "1 Year", "2 Years", "3+ Years"],
        required: true,
        idealAnswer: "2 Years",
      },
      {
        id: "immediate_start",
        question: "We must fill this position urgently. Can you start immediately?",
        type: "radio",
        options: ["Yes, immediately (within 7 days)", "15 days", "30 days"],
        required: true,
        idealAnswer: "Yes, immediately (within 7 days)",
      },
      {
        id: "english_level",
        question: "What is your level of proficiency in English?",
        type: "select",
        options: ["Conversational", "Professional Working", "Fluent / Native"],
        required: true,
        idealAnswer: "Conversational",
      },
      {
        id: "wanwadi_commute",
        question: "Can you commute daily to Wanwadi, Pune Location?",
        type: "radio",
        options: ["Yes", "No"],
        required: true,
        idealAnswer: "Yes",
      },
    ],
  },
  {
    id: "2",
    slug: "ai-prompt-solutions-engineer",
    title: "AI & Prompt Solutions Engineer",
    company: "Araizona Simplesphere Global Private Limited",
    department: "AI & Innovation",
    category: ["cat1", "cat2"],
    location: "Pune / Hybrid",
    type: "Full-time",
    experience: "1–3 years",
    salary: "Competitive",
    openings: "(1)",
    deadline: "Open",
    aboutRole:
      "Design, build, and optimize custom AI agents, LLM tool-calling pipelines, and multimodal conversational experiences for enterprise automation.",
    whatYouWillDo: [
      "Develop custom LLM orchestration workflows and RAG pipelines.",
      "Collaborate with mobile and web frontend developers to embed AI assistants.",
      "Benchmark prompt accuracy, token latency, and hallucination guardrails.",
      "Integrate vector stores, semantic cache, and embedding APIs.",
    ],
    whatWeAreLookingFor: [
      "Hands-on experience with OpenAI, Anthropic, or Gemini APIs.",
      "Proficiency in Python or TypeScript.",
      "Understanding of embeddings, chunking strategies, and vector search.",
      "Passion for building practical, production-ready AI products.",
    ],
    goodToHave: [
      "Experience with LangChain, LlamaIndex, or AutoGen.",
      "Familiarity with fine-tuning or evaluation frameworks.",
    ],
    whatWeOffer: [
      "Access to cutting-edge AI model APIs and high-performance computing.",
      "Rapid shipping cycle and autonomy over AI feature design.",
      "Mentorship from experienced tech founders.",
    ],
    howToApply:
      'Apply through this portal or email contact@araizona.com with subject "AI & Prompt Solutions Engineer".',
    screeningQuestions: [
      {
        id: "education",
        question: "Have you completed Bachelor's Degree in CS/IT or related field?",
        type: "select",
        options: ["Yes", "No", "Self-Taught / Equivalent Experience"],
        required: true,
      },
      {
        id: "ai_exp",
        question: "Have you built projects integrating LLM APIs (OpenAI, Gemini, etc.)?",
        type: "radio",
        options: ["Yes, production apps", "Yes, personal/open source projects", "No, just started exploring"],
        required: true,
      },
      {
        id: "immediate_start",
        question: "Can you join within 15–30 days?",
        type: "radio",
        options: ["Yes", "No"],
        required: true,
      },
    ],
  },
  {
    id: "3",
    slug: "full-stack-engineer-nextjs-python",
    title: "Full Stack Engineer (Next.js & Python)",
    company: "Araizona Simplesphere Global Private Limited",
    department: "Core Engineering",
    category: ["cat1"],
    location: "Wanwadi, Pune (On-site/Hybrid)",
    type: "Full-time",
    experience: "1–3 years",
    salary: "Competitive",
    openings: "(2)",
    deadline: "Open",
    aboutRole:
      "Join our core engineering squad to develop performant web applications, admin portals, and robust backend microservices powering Araizona's AI platforms.",
    whatYouWillDo: [
      "Architect and build reactive web applications using Next.js App Router, React, and TypeScript.",
      "Develop secure, scalable REST and WebSocket endpoints in Python (FastAPI/Django).",
      "Ensure sub-second page performance, accessibility, and clean responsive layouts.",
      "Design PostgreSQL/MongoDB schemas and write optimized database queries.",
    ],
    whatWeAreLookingFor: [
      "Strong command of Next.js, React, TypeScript, and modern CSS/Tailwind.",
      "Experience building backend services in Python or Node.js.",
      "Solid understanding of relational and NoSQL databases.",
      "Familiarity with Docker, Git workflows, and CI/CD pipelines.",
    ],
    goodToHave: [
      "Experience with Redis caching, message brokers, or Celery.",
      "Understanding of WebSockets and real-time event streaming.",
    ],
    whatWeOffer: [
      "Work with high-impact production clients across diverse verticals.",
      "Continuous learning opportunities with modern tech stacks.",
      "Transparent engineering culture with zero bureaucracy.",
    ],
    howToApply:
      'Apply through this portal or email contact@araizona.com with subject "Full Stack Engineer".',
    screeningQuestions: [
      {
        id: "education",
        question: "Have you completed Bachelor's Degree?",
        type: "select",
        options: ["Yes", "No", "In Progress"],
        required: true,
      },
      {
        id: "fullstack_exp",
        question: "How many years of Next.js & React experience do you have?",
        type: "select",
        options: ["Less than 1 year", "1–2 years", "2–4 years", "4+ years"],
        required: true,
      },
      {
        id: "pune_commute",
        question: "Are you comfortable working in Pune?",
        type: "radio",
        options: ["Yes", "No"],
        required: true,
      },
    ],
  },
  {
    id: "4",
    slug: "performance-marketing-growth-specialist",
    title: "Performance Marketing & Growth Specialist",
    company: "Araizona Simplesphere Global Private Limited",
    department: "Marketing & Growth",
    category: ["cat3", "cat2"],
    location: "Wanwadi, Pune (On-site)",
    type: "Full-time",
    experience: "1–3 years",
    salary: "Competitive",
    openings: "(1)",
    deadline: "Open",
    aboutRole:
      "Drive customer acquisition, scale paid media campaigns (Meta, Google, LinkedIn), and collaborate with our AI-marketing product teams to test next-gen automated ad workflows.",
    whatYouWillDo: [
      "Plan, run, and optimize paid acquisition campaigns across Meta Ads, Google Ads, and LinkedIn.",
      "Analyze funnel metrics, CAC, ROAS, and conversion rate optimizations.",
      "Collaborate with design teams for high-converting creatives and landing pages.",
      "Leverage Araizona's proprietary AI marketing tools to automate campaign testing.",
    ],
    whatWeAreLookingFor: [
      "Proven track record managing paid advertising budgets.",
      "Deep understanding of analytics tools (Google Analytics 4, Meta Pixel, Tag Manager).",
      "Data-driven mindset with analytical problem-solving skills.",
    ],
    goodToHave: [
      "Experience marketing B2B SaaS or technology services.",
      "Basic understanding of SEO and content distribution.",
    ],
    whatWeOffer: [
      "Hands-on access to test cutting-edge AI marketing software.",
      "Performance incentives and direct growth trajectory.",
      "Collaborative and energizing work environment.",
    ],
    howToApply:
      'Apply through this portal or email contact@araizona.com with subject "Performance Marketing Specialist".',
    screeningQuestions: [
      {
        id: "marketing_exp",
        question: "How many years of digital ad campaign management experience do you have?",
        type: "select",
        options: ["0–1 year", "1–2 years", "2–4 years", "4+ years"],
        required: true,
      },
      {
        id: "wanwadi_commute",
        question: "Can you commute to Wanwadi, Pune for on-site collaboration?",
        type: "radio",
        options: ["Yes", "No"],
        required: true,
      },
    ],
  },
  {
    id: "5",
    slug: "technical-project-manager-ai",
    title: "Technical Project Manager (AI)",
    company: "Araizona Simplesphere Global Private Limited",
    department: "Product & Operations",
    category: ["cat4", "cat1"],
    location: "Pune / Hybrid",
    type: "Full-time",
    experience: "3–6 years",
    salary: "Competitive",
    openings: "(1)",
    deadline: "Open",
    aboutRole:
      "Lead cross-functional sprints across mobile, web, and AI engineering teams, driving agile delivery, stakeholder alignment, and product quality.",
    whatYouWillDo: [
      "Translate client vision and technical requirements into actionable sprint backlogs.",
      "Coordinate sprint ceremonies (planning, stand-ups, reviews, retrospectives).",
      "Identify blockers, mitigate technical risks, and maintain delivery timelines.",
      "Communicate project milestones and progress transparently with stakeholders.",
    ],
    whatWeAreLookingFor: [
      "Demonstrated experience managing software development lifecycles in Agile/Scrum.",
      "Technical background or fluency in discussing APIs, cloud infrastructure, and app releases.",
      "Strong empathy, leadership, and communication skills.",
    ],
    goodToHave: [
      "PMP, CSM, or Agile certifications.",
      "Experience with Jira, Linear, or ClickUp.",
    ],
    whatWeOffer: [
      "Direct leadership opportunity within a high-growth AI and software firm.",
      "Competitive compensation package and leadership incentives.",
      "Flexible hybrid working environment.",
    ],
    howToApply:
      'Apply through this portal or email contact@araizona.com with subject "Technical Project Manager".',
    screeningQuestions: [
      {
        id: "pm_exp",
        question: "How many years of technical project or product management experience do you have?",
        type: "select",
        options: ["1–2 years", "3–5 years", "5+ years"],
        required: true,
      },
      {
        id: "agile_tools",
        question: "Are you comfortable running sprints with Jira/Linear?",
        type: "radio",
        options: ["Yes", "No"],
        required: true,
      },
    ],
  },
];

export function getJobBySlug(slug: string): JobOpening | undefined {
  return jobs.find((j) => j.slug === slug);
}

export function getAllJobSlugs(): string[] {
  return jobs.map((j) => j.slug);
}
