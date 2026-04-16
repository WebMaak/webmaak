// Full list of projects (IT + Media).
import { ProjectType } from "@/lib/types/project";
export const PROJECTS: ProjectType[] = [
  // -------------------------------------------------------
  // DIGITAL WORK (IT PROJECTS) — 10 ITEMS
  // -------------------------------------------------------

  // IT1: Fashion Brand E-commerce Redesign
  {
    id: "it1",
    slug: "ecommerce-redesign-fashion",
    category: "it",
    title: "Fashion Brand E-commerce Redesign",
    desc: "Complete redesign and conversion-optimized storefront for a growing fashion brand, leading to a 25% increase in mobile conversions.",
    tags: ["Frontend", "UI/UX", "E-commerce", "Backend"],
    thumbnail: "/projects/it/card/mockup-1.webp",
    hero: "/projects/it/card/mockup-2.webp",
    videoUrl: "",
    domain: "https://chamki.co.in/",
    websitePreview: "/projects/it/websites/chamki.png",
    slugOverview: [
      {
        heading: "Project Goals",
        text: "A full redesign focused on improving user flow, product visibility, and checkout efficiency on mobile devices. A full redesign focused on improving user flow, product visibility, and checkout efficiency on mobile devices. A full redesign focused on improving user flow, product visibility, and checkout efficiency on mobile devices. A full redesign focused on improving user flow, product visibility, and checkout efficiency on mobile devices. A full redesign focused on improving user flow, product visibility, and checkout efficiency on mobile devices.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/it/ecommerce-fashion-1.webp",
        text: "Tech Stack: Next.js, React, REST APIs, Node.js. Implemented server-side rendering for improved SEO performance.",
      },
    ],
    listBlock: [
      {
        heading: "Key Project Outcomes",
        points: [
          "Reduced page load time by 35%.",
          "Improved mobile conversion rate by 25%.",
          "Implemented a custom wish list feature.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "Development Questions",
        points: [
          {
            heading: "Which database was used?",
            text: "PostgreSQL was utilized for robust product and user data management.",
          },
          {
            heading: "How was performance optimized?",
            text: "Image optimization via Next.js and aggressive client-side caching were key strategies.",
          },
        ],
      },
    ],
  },

  // IT2: SaaS CRM Dashboard Development
  {
    id: "it2",
    slug: "saas-crm-dashboard",
    category: "it",
    title: "SaaS CRM Dashboard Development",
    desc: "A modern CRM dashboard built with real-time analytics, dynamic charting, and secure role-based access for sales and management teams.",
    tags: ["Frontend", "Backend", "App"],
    thumbnail: "/projects/it/card/mockup-2.webp",
    hero: "/projects/it/card/mockup-3.webp",
    videoUrl: "https://www.youtube.com/embed/5LS7dZQ1pEM?si=kY-01aJdKJmYcj53",
    domain: "https://riversidetownship.diongroup.in/",
    websitePreview: "/projects/it/websites/riversidetownship.png",
    slugOverview: [
      {
        heading: "Project Overview",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
    slugGallery: [
      {
        mainHeading:
          "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/card/mockup-3.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-3.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/card/mockup-3.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/card/mockup-3.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/it/card/mockup-2.webp",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
    listBlock: [
      {
        heading: "Project Deliverables",
        points: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ceiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboe magna aliqua.",
          "Lorem ipsum dolor sit adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "Technical Implementation",
        points: [
          {
            heading: "Data Visualization",
            text: "Used a custom React library integrated with D3.js for complex data visualizations.",
          },
          {
            heading: "Security",
            text: "Implemented strict role-based access control (RBAC) across all endpoints.",
          },
          {
            heading: "Data Visualization",
            text: "Used a custom React library integrated with D3.js for complex data visualizations.",
          },
          {
            heading: "Security",
            text: "Implemented strict role-based access control (RBAC) across all endpoints.",
          },
        ],
      },
    ],
  },

  // IT3: Restaurant Online Ordering System
  {
    id: "it3",
    slug: "restaurant-ordering-system",
    category: "it",
    title: "Restaurant Online Ordering System",
    desc: "End-to-end ordering platform with menu management, cart logic, and integrated payment processing via Stripe.",
    tags: ["Frontend", "Backend", "App"],
    thumbnail: "/projects/it/card/mockup-3.webp",
    hero: "/projects/it/card/mockup-3.webp",
    videoUrl: "https://www.youtube.com/embed/xxxx03",
    slugOverview: [
      {
        heading: "Objective",
        text: "Digitize restaurant ordering with a user-friendly interface to handle high-volume takeout and delivery requests.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/it/restaurant-1.webp",
        text: "Tech Used: Next.js, Express API, Stripe. Integrated precise time slot scheduling for order fulfillment.",
      },
    ],
    listBlock: [
      {
        heading: "Core Features",
        points: [
          "Real-time order confirmation via web sockets.",
          "Inventory and menu synchronization.",
          "Secure payment gateway integration.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "System Architecture",
        points: [
          {
            heading: "How is the menu managed?",
            text: "A separate admin panel allows staff to update prices, availability, and item details instantly.",
          },
          {
            heading: "Payment security?",
            text: "All transactions are handled securely via Stripe, ensuring PCI compliance.",
          },
        ],
      },
    ],
  },

  // IT4: Portfolio Website Revamp
  {
    id: "it4",
    slug: "portfolio-website-redesign",
    category: "it",
    title: "Portfolio Website Revamp",
    desc: "A clean, fast, and highly SEO-optimized personal portfolio website designed to showcase projects with exceptional load times.",
    tags: ["Frontend", "UI/UX"],
    thumbnail: "/projects/it/card/mockup-4.webp",
    hero: "/projects/it/card/mockup-4.webp",
    videoUrl: "https://www.youtube.com/embed/xxxx04",
    slugOverview: [
      {
        heading: "Overview",
        text: "A modern minimal UI with optimized performance scores, focusing on smooth transitions and accessibility standards.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/it/portfolio-redesign-1.webp",
        text: "Tech Stack: Built using Next.js for superior static site generation and Tailwind CSS for rapid styling.",
      },
    ],
    listBlock: [
      {
        heading: "Performance Metrics",
        points: [
          "Lighthouse score of 98+ across all categories.",
          "Semantic HTML for improved accessibility (A11Y).",
          "Minimized JavaScript bundle size.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "Design Philosophy",
        points: [
          {
            heading: "Why a minimal approach?",
            text: "To ensure the focus remains purely on the content and projects, reducing visual distraction.",
          },
          {
            heading: "Animation usage?",
            text: "Subtle, non-distracting animations were added to enhance perceived speed and professionalism.",
          },
        ],
      },
    ],
  },

  // IT5: Real Estate Listing Web App
  {
    id: "it5",
    slug: "real-estate-web-app",
    category: "it",
    title: "Real Estate Listing Web App",
    desc: "A search-optimized listing platform with dynamic filtering, map integration, and detailed property pages for seamless browsing.",
    tags: ["Frontend", "Next.js", "E-commerce"],
    thumbnail: "/projects/it/card/mockup-5.webp",
    hero: "/projects/it/card/mockup-5.webp",
    videoUrl: "https://www.youtube.com/embed/xxxx05",
    slugOverview: [
      {
        heading: "Goal",
        text: "Provide a seamless browsing experience for property seekers, with high-speed search functionality across thousands of listings.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/it/real-estate-1.webp",
        text: "The platform integrates with a centralized MLS feed, utilizing dynamic routing to generate unique, SEO-friendly pages for every property.",
      },
    ],
    listBlock: [
      {
        heading: "Technical Highlights",
        points: [
          "Dynamic routing for SEO optimization.",
          "High-speed, faceted search implementation.",
          "Secured lead capture and routing.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "Integration & Data",
        points: [
          {
            heading: "Data source?",
            text: "Data is pulled from a REST API provided by the client's internal listing service.",
          },
          {
            heading: "Scalability for listings?",
            text: "Designed using a serverless architecture to handle rapid growth up to 100k active listings.",
          },
        ],
      },
    ],
  },

  // IT6: FinTech Analytics Dashboard
  {
    id: "it6",
    slug: "fintech-dashboard",
    category: "it",
    title: "FinTech Analytics Dashboard",
    desc: "Interactive, secure dashboard for monitoring real-time transactions, financial metrics, and user behavior trends.",
    tags: ["Frontend", "Backend", "App"],
    thumbnail: "/projects/it/card/mockup-6.webp",
    hero: "/projects/it/card/mockup-6.webp",
    videoUrl: "https://www.youtube.com/embed/xxxx06",
    slugOverview: [
      {
        heading: "Objective",
        text: "Visualize real-time financial data with secure endpoints, providing management with instantaneous, accurate insights.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/it/fintech-dashboard-1.webp",
        text: "The dashboard features custom graphing libraries to handle high-frequency data streams without performance degradation.",
      },
    ],
    listBlock: [
      {
        heading: "Security & Compliance",
        points: [
          "Full data encryption in transit (TLS 1.3).",
          "Multi-factor authentication (MFA) enforcement.",
          "Audit logging for all critical user actions.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "Data Handling",
        points: [
          {
            heading: "Data source?",
            text: "Integrated with Kafka for high-throughput, low-latency data streaming from core financial services.",
          },
          {
            heading: "Refresh Rate?",
            text: "Data is refreshed asynchronously every 500 milliseconds to provide a near real-time experience.",
          },
        ],
      },
    ],
  },

  // IT7: Shopify Custom Theme
  {
    id: "it7",
    slug: "shopify-custom-theme",
    category: "it",
    title: "Shopify Custom Theme",
    desc: "A bespoke, fast custom Shopify theme designed and optimized for high product volumes and large-scale sales events.",
    tags: ["Frontend", "E-commerce"],
    thumbnail: "/projects/it/card/mockup-7.webp",
    hero: "/projects/it/card/mockup-7.webp",
    videoUrl: "https://www.youtube.com/embed/xxxx07",
    slugOverview: [
      {
        heading: "Tech Used",
        text: "Shopify Liquid, Next.js, Custom Cart Logic. Leveraged the Headless Shopify approach for maximum frontend control.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/it/shopify-theme-1.webp",
        text: "The custom theme prioritized minimal Liquid rendering and optimized image lazy-loading for industry-leading load times.",
      },
    ],
    listBlock: [
      {
        heading: "Theme Optimization Focus",
        points: [
          "Minimizing API calls to the storefront.",
          "Customization for high-conversion sections.",
          "Mobile-first design approach.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "Development Tools",
        points: [
          {
            heading: "Custom logic?",
            text: "Used JavaScript for custom cart manipulation that goes beyond standard Shopify functionality.",
          },
          {
            heading: "Future maintenance?",
            text: "Built with modular sections allowing for easy updates and future content changes by the client.",
          },
        ],
      },
    ],
  },

  // IT8: Event Ticketing Platform
  {
    id: "it8",
    slug: "event-ticketing-platform",
    category: "it",
    title: "Event Ticketing Platform",
    desc: "Complete, scalable ticketing system featuring secure QR code generation, real-time scanning validation, and user profiles.",
    tags: ["Frontend", "Backend", "App"],
    thumbnail: "/projects/it/card/mockup-8.webp",
    hero: "/projects/it/card/mockup-8.webp",
    videoUrl: "https://www.youtube.com/embed/xxxx08",
    slugOverview: [
      {
        heading: "Overview",
        text: "Secure QR-code based ticket validations, ensuring quick entry scanning and preventing fraudulent ticket duplication.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/it/event-ticket-1.webp",
        text: "The backend is designed for high concurrency, able to handle thousands of ticket purchases per minute during peak sales times.",
      },
    ],
    listBlock: [
      {
        heading: "System Capabilities",
        points: [
          "Dynamic pricing and seating algorithms.",
          "Email and SMS ticket delivery.",
          "Real-time fraud detection and prevention.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "Scalability and Security",
        points: [
          {
            heading: "How is ticket fraud prevented?",
            text: "Each ticket uses a unique, cryptographically secure QR code linked to a single database entry, validated instantly upon scan.",
          },
          {
            heading: "Load testing?",
            text: "The system was stress-tested to comfortably handle 1500 concurrent users without service degradation.",
          },
        ],
      },
    ],
  },

  // IT9: Mobile App Landing Page
  {
    id: "it9",
    slug: "mobile-app-landing-page",
    category: "it",
    title: "Mobile App Landing Page",
    desc: "High-conversion landing page optimized for performance and SEO, designed to drive downloads for a new mobile application launch.",
    tags: ["Frontend", "UI/UX"],
    thumbnail: "/projects/it/card/mockup-9.webp",
    hero: "/projects/it/card/mockup-9.webp",
    videoUrl: "https://www.youtube.com/embed/xxxx09",
    slugOverview: [
      {
        heading: "Goal",
        text: "Establish strong branding for the mobile app and clearly communicate its core value proposition to maximize download conversions.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/it/mobile-landing-1.webp",
        text: "The design utilizes clear visual hierarchy and compelling copywriting, following best practices for driving Clicks-to-Install.",
      },
    ],
    listBlock: [
      {
        heading: "Conversion Focus",
        points: [
          "A/B testing on call-to-action (CTA) button copy.",
          "Optimized for high scores on mobile performance.",
          "Integrated Google Analytics tracking for funnel analysis.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "Design and Technology",
        points: [
          {
            heading: "Technology stack?",
            text: "Built using Gatsby/React for speed and superior image optimization.",
          },
          {
            heading: "Conversion elements?",
            text: "Sticky navigation bar and clear, contrasting CTA buttons were used throughout the page.",
          },
        ],
      },
    ],
  },

  // IT10: Healthcare Appointment Platform

  {
    id: "it10",
    slug: "healthcare-web-app",
    category: "it",
    title: "Healthcare Appointment Platform",
    desc: "HIPAA-compliant online appointment booking system for clinics, featuring physician scheduling and patient record access.",
    tags: ["Frontend", "Backend", "App"],
    thumbnail: "/projects/it/card/mockup-11.webp",
    hero: "/projects/it/card/mockup-11.webp",
    videoUrl: "https://www.youtube.com/embed/xxxx10",
    slugOverview: [
      {
        heading: "Tech Stack",
        text: "Next.js, PostgreSQL, API Routes. Focused heavily on data encryption and user authentication to meet strict compliance requirements.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/it/healthcare-1.webp",
        text: "The platform features complex scheduling logic to handle overlapping appointments and different physician working hours.",
      },
    ],
    listBlock: [
      {
        heading: "Compliance and Security",
        points: [
          "End-to-end data encryption for patient records.",
          "Secure user authentication for both staff and patients.",
          "Integration with legacy electronic health record (EHR) systems.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "Regulatory Compliance",
        points: [
          {
            heading: "HIPAA compliance?",
            text: "The entire infrastructure and data handling processes were architected specifically to comply with HIPAA technical safeguards.",
          },
          {
            heading: "Integration with other systems?",
            text: "Built a dedicated API layer to safely interface with existing clinic management software.",
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // MEDIA WORK — 10 ITEMS
  // -------------------------------------------------------

  // M1: 3D Product Animation (TRANSFORMED)
  {
    id: "m1",
    slug: "3d-product-animation",
    category: "media",
    title: "High-Quality 3D Product Animation",
    desc: "Detailed 3D product rotation and feature demonstration animation for a luxury technology client.",
    tags: ["3D", "Motion"],
    thumbnail: "/projects/media/card/mockup-1.webp",
    hero: "/projects/media/card/mockup-1.webp",
    videoUrl: "https://www.youtube.com/embed/xxxx11",
    slugOverview: [
      {
        heading: "Concept & Focus",
        text: "Showcase material fidelity and subtle design elements using dynamic, high-contrast studio lighting techniques.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/media/3d-product-1.webp",
        text: "Rendered in **Blender Cycles**, utilizing highly detailed mesh modeling and procedural textures for realism.",
      },
    ],
    listBlock: [
      {
        heading: "Production Workflow",
        points: [
          "Detailed CAD model import and clean-up.",
          "Rigging and animation for product assembly/disassembly.",
          "High-resolution 4K final output.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "Software & Techniques",
        points: [
          {
            heading: "Primary software?",
            text: "Blender 3D was used for all modeling, texturing, and rendering processes.",
          },
          {
            heading: "Rendering time?",
            text: "Total final rendering time was approximately 48 hours utilizing cloud compute resources.",
          },
        ],
      },
    ],
  },

  // M2: Brand Logo Animation (TRANSFORMED)
  {
    id: "m2",
    slug: "brand-logo-animation",
    category: "media",
    title: "Cinematic Brand Logo Animation",
    desc: "An impactful, cinematic logo animation designed to be used for all brand video intros and outros.",
    tags: ["Branding", "Motion"],
    thumbnail: "/projects/media/card/mockup-2.webp",
    hero: "/projects/media/card/mockup-2.webp",
    videoUrl: "https://www.youtube.com/embed/xxxx12",
    slugOverview: [
      {
        heading: "Goal",
        text: "Create an impactful, short-form introduction (under 5 seconds) that enhances brand recall and professionalism.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/media/logo-animation-1.webp",
        text: "Animated in **After Effects** with dynamic camera movements and high-fidelity particle effects.",
      },
    ],
    listBlock: [
      {
        heading: "Technical Specs",
        points: [
          "Delivered in multiple aspect ratios (16:9, 1:1, 9:16).",
          "Includes 5.1 surround sound mix for cinema use.",
          "Seamless looping version for web applications.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "Motion Design",
        points: [
          {
            heading: "How long was the animation?",
            text: "The final animation was precisely 4.5 seconds to meet fast-paced social media standards.",
          },
          {
            heading: "Font and color adherence?",
            text: "Strict adherence to the client’s brand guidelines was maintained for all colors and typography.",
          },
        ],
      },
    ],
  },

  // M3: Corporate Video Editing (TRANSFORMED)
  {
    id: "m3",
    slug: "corporate-video-editing",
    category: "media",
    title: "Executive Corporate Video Editing",
    desc: "Professional editing and post-production for a comprehensive corporate brand promotional video targeting B2B audiences.",
    tags: ["Editing", "Branding"],
    thumbnail: "/projects/media/card/mockup-3.webp",
    hero: "/projects/media/card/mockup-3.webp",
    videoUrl: "https://www.youtube.com/embed/xxxx13",
    slugOverview: [
      {
        heading: "Process",
        text: "Clean storytelling with high-quality transitions, focusing on aligning visual pacing with the executive voiceover.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/media/corporate-edit-1.webp",
        text: "The edit aimed to distill complex company initiatives into a clear, engaging 3-minute presentation.",
      },
    ],
    listBlock: [
      {
        heading: "Post-Production Services",
        points: [
          "Dialogue clean-up and noise reduction.",
          "Custom lower-third graphics creation.",
          "Exporting multiple versions for global use.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "Workflow Details",
        points: [
          {
            heading: "Editing software?",
            text: "Adobe Premiere Pro and Audition were the primary tools used for the video and audio editing phases.",
          },
          {
            heading: "Color Profile?",
            text: "A consistent, neutral color profile was applied to all footage to maintain a professional, unified look.",
          },
        ],
      },
    ],
  },

  // M4: Ad Promo Video (TRANSFORMED)
  {
    id: "m4",
    slug: "ad-promo-video",
    category: "media",
    title: "High-Conversion Social Media Ad Promo Video",
    desc: "A short, engaging promotional ad designed specifically for high-frequency social media campaigns across various platforms.",
    tags: ["Motion", "Editing"],
    thumbnail: "/projects/media/card/mockup-0.webp",
    hero: "/projects/media/card/mockup-0.webp",
    videoUrl: "https://www.youtube.com/embed/xxxx14",
    slugOverview: [
      {
        heading: "Campaign Focus",
        text: "Designed for YouTube, Instagram, and Reels, focusing on strong visual hooks within the first 3 seconds.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/media/ad-promo-1.webp",
        text: "Delivered in multiple aspect ratios (9:16, 4:5, 1:1) to ensure native performance on all target platforms.",
      },
    ],
    listBlock: [
      {
        heading: "Optimization Strategy",
        points: [
          "Optimized for silent viewing (on-screen text/captions).",
          "High visual density and fast pacing.",
          "Targeted CTA placement.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "Production Metrics",
        points: [
          {
            heading: "Total duration?",
            text: "The main creative was 15 seconds, with a 6-second bumper cut for shorter placement opportunities.",
          },
          {
            heading: "How was visual impact prioritized?",
            text: "Used high-contrast colors and large, easily readable text overlays.",
          },
        ],
      },
    ],
  },

  // M5: Product Photoshoot Editing (TRANSFORMED)
  {
    id: "m5",
    slug: "product-photoshoot-editing",
    category: "media",
    title: "E-commerce Product Photoshoot Retouching",
    desc: "Professional retouching, color grading, and clean-up for a product catalog of over 100 high-resolution images.",
    tags: ["Graphic Design", "Branding"],
    thumbnail: "/projects/media/card/mockup-5.webp",
    hero: "/projects/media/card/mockup-5.webp",
    videoUrl: "https://www.youtube.com/embed/xxxx15",
    slugOverview: [
      {
        heading: "Workflow",
        text: "Color correction, background clean-up, material enhancement, and final preparation for catalog and web use.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/media/photoshoot-1.webp",
        text: "Ensured precise white balance and color fidelity across the entire batch to match the physical product exactly.",
      },
    ],
    listBlock: [
      {
        heading: "Retouching Services",
        points: [
          "Non-destructive workflow using layered files.",
          "High-end frequency separation techniques.",
          "Output sizing for Amazon, Shopify, and print.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "Quality Control",
        points: [
          {
            heading: "Software used?",
            text: "Adobe Photoshop and Capture One for raw image processing and advanced retouching.",
          },
          {
            heading: "Consistency check?",
            text: "Used a custom color profile applied across all 100+ images for absolute uniformity.",
          },
        ],
      },
    ],
  },

  // M6: Motion Graphics Pack (TRANSFORMED)
  {
    id: "m6",
    slug: "motion-graphics-pack",
    category: "media",
    title: "Reusable Corporate Motion Graphics Asset Pack",
    desc: "A comprehensive pack of animated lower-thirds, transitions, and backgrounds for quick video production use.",
    tags: ["Motion", "Graphic Design"],
    thumbnail: "/projects/media/card/mockup-6.webp",
    hero: "/projects/media/card/mockup-6.webp",
    videoUrl: "https://www.youtube.com/embed/xxxx16",
    slugOverview: [
      {
        heading: "Design Approach",
        text: "Clean, high-energy animations designed to be customizable in color and text for fast deployment across brand campaigns.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/media/motion-pack-1.webp",
        text: "Delivered as modular **After Effects templates (.AET files)** with clear instructions for easy editing by the client's internal team.",
      },
    ],
    listBlock: [
      {
        heading: "Pack Contents",
        points: [
          "20 unique, resolution-independent animated elements.",
          "Customizable primary and secondary brand colors.",
          "Video tutorial guides for implementation.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "Usability and Licensing",
        points: [
          {
            heading: "Software compatibility?",
            text: "Compatible with Adobe After Effects CS6 and newer versions.",
          },
          {
            heading: "Can colors be changed?",
            text: "Yes, all primary elements are controlled via universal color sliders for quick brand adaptation.",
          },
        ],
      },
    ],
  },

  // M7: App Promo Video (TRANSFORMED)
  {
    id: "m7",
    slug: "app-promo-video",
    category: "media",
    title: "Dynamic Mobile App Feature Showcase Video",
    desc: "Promotional video showcasing core app features and user flows with dynamic motion graphics and screen captures.",
    tags: ["Motion", "Editing"],
    thumbnail: "/projects/media/card/mockup-7.webp",
    hero: "/projects/media/card/mockup-7.webp",
    videoUrl: "https://www.youtube.com/embed/xxxx17",
    slugOverview: [
      {
        heading: "Storyboard",
        text: "Scenes arranged logically to highlight the key user experience and core value propositions of the app within 60 seconds.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/media/app-promo-1.webp",
        text: "All screen captures were smoothed and stylized with motion blur to enhance the illusion of interaction.",
      },
    ],
    listBlock: [
      {
        heading: "Production Goals",
        points: [
          "Clear visual communication of the app's functionality.",
          "High-energy pacing suitable for YouTube ads.",
          "Inclusion of custom sound effects for key actions.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "Technical Specs",
        points: [
          {
            heading: "Source Material?",
            text: "Used high-fidelity screen recordings provided by the client's development team.",
          },
          {
            heading: "Delivery format?",
            text: "Delivered in 4K resolution optimized for YouTube and various social platforms.",
          },
        ],
      },
    ],
  },

  // M8: 3D Architecture Visualization (TRANSFORMED & CONTENT REFINED)
  {
    id: "m8",
    slug: "3d-architecture-visualization",
    category: "media",
    title: "Photorealistic 3D Architecture Visualization",
    desc: "High-fidelity interior and exterior rendering package for a modern residential complex showcase.",
    tags: ["3D", "Graphic Design"],
    thumbnail: "/projects/media/card/mockup-8.webp",
    hero: "/projects/media/card/mockup-8.webp",
    videoUrl: "https://www.youtube.com/embed/xxxx18",
    slugOverview: [
      {
        heading: "Project Scope",
        text: "Deliver a set of photorealistic interior and exterior renders with focus on material accuracy and lighting contrast for investor presentation.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/media/card/mockup-8.webp",
        text: "Utilized realistic lighting scenarios to enhance the spatial perception and material textures in all renderings.",
      },
    ],
    listBlock: [
      {
        heading: "Deliverable Features",
        points: [
          "Accurate representation of material spec sheets.",
          "Daylight and night-time rendering variations.",
          "Post-production focused on atmospheric effects.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "Visualization Process",
        points: [
          {
            heading: "What software was used?",
            text: "3ds Max and V-Ray for rendering, with Photoshop for final post-production.",
          },
          {
            heading: "Source Material?",
            text: "CAD files and mood boards provided the foundation for model creation and texturing.",
          },
        ],
      },
    ],
  },

  // M9: Brand Identity Design (TRANSFORMED)
  {
    id: "m9",
    slug: "brand-identity-design",
    category: "media",
    title: "Comprehensive Brand Identity Design",
    desc: "Full brand identity design including logo suite, custom color palette, typography hierarchy, and brand usage guidelines.",
    tags: ["Branding", "Graphic Design"],
    thumbnail: "/projects/media/card/mockup-9.webp",
    hero: "/projects/media/card/mockup-9.webp",
    videoUrl: "https://www.youtube.com/embed/xxxx19",
    slugOverview: [
      {
        heading: "Brand Philosophy",
        text: "Creation of a clean and memorable identity system that reflects the client's values and targets their ideal audience.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/media/brand-identity-1.webp",
        text: "Delivered a comprehensive style guide detailing font usage, spacing, and application on various mediums.",
      },
    ],
    listBlock: [
      {
        heading: "Core Deliverables",
        points: [
          "Primary, secondary, and tertiary logo marks (vector files).",
          "Defined color codes (CMYK, RGB, HEX).",
          "Social media profile kit.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "Design Process",
        points: [
          {
            heading: "Initial phase?",
            text: "Conducted a discovery workshop and competitive analysis before sketching initial concepts.",
          },
          {
            heading: "What makes it scalable?",
            text: "The logo was designed to remain clear and effective even at small sizes for mobile applications.",
          },
        ],
      },
    ],
  },

  // M10: Short Film Editing (TRANSFORMED)
  {
    id: "m10",
    slug: "short-film-editing",
    category: "media",
    title: "Feature-Quality Short Film Editorial",
    desc: "Full post-production edit for a short cinematic film, focusing on narrative impact and emotional pacing.",
    tags: ["Editing"],
    thumbnail: "/projects/media/card/mockup-10.webp",
    hero: "/projects/media/card/mockup-10.webp",
    videoUrl: "https://www.youtube.com/embed/xxxx20",
    slugOverview: [
      {
        heading: "Editorial Direction",
        text: "Focus on narrative flow and pacing, utilizing selective sound design to build tension and enhance character development.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/media/short-film-1.webp",
        text: "The final edit was designed to meet strict film festival length requirements and technical specifications.",
      },
    ],
    listBlock: [
      {
        heading: "Post-Production Milestones",
        points: [
          "Completed rough, fine, and final cuts.",
          "ADR/Foley recording and integration.",
          "Final delivery in DCP format for theatrical screenings.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "Technical Workflow",
        points: [
          {
            heading: "What was the final length?",
            text: "The final cut ran for 18 minutes and 30 seconds, adhering to the client's creative brief.",
          },
          {
            heading: "Used software?",
            text: "Avid Media Composer was used for the principal editing process.",
          },
        ],
      },
    ],
  },

  // IT11: AI-Powered Recommendation Engine
  {
    id: "it11",
    slug: "ai-recommendation-engine",
    category: "it",
    title: "AI-Powered Product Recommendation Engine",
    desc: "Development of a personalized machine learning model to improve cross-selling and drive customer engagement on an e-commerce platform.",
    tags: ["AI", "Machine Learning", "Backend", "Data Science"],
    thumbnail: "/projects/it/card/mockup-5.webp", // Reused Image
    hero: "/projects/it/card/mockup-5.webp",
    videoUrl: "https://www.youtube.com/embed/gen11a",
    slugOverview: [
      {
        heading: "Architecture",
        text: "Implemented a collaborative filtering model deployed via serverless functions, achieving a 12% lift in recommended product clicks.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/it/ecommerce-fashion-1.webp",
        text: "Technologies include Python/Pandas, TensorFlow, and AWS Lambda for model deployment.",
      },
    ],
    listBlock: [
      {
        heading: "Key Results",
        points: [
          "12% increase in cross-sell conversion rate.",
          "Real-time recommendation generation (<50ms).",
          "Automated model retraining pipeline.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "ML Details",
        points: [
          {
            heading: "What dataset was used?",
            text: "Utilized historical user interaction data (clicks, views, purchases) for training the initial model.",
          },
          {
            heading: "What is collaborative filtering?",
            text: "A method that makes predictions about a user's interests by collecting preferences from many users.",
          },
        ],
      },
    ],
  },

  // IT12: Serverless Backend for High-Traffic App
  {
    id: "it12",
    slug: "serverless-backend-app",
    category: "it",
    title: "Scalable Serverless Backend for High-Traffic App",
    desc: "Migration of a monolithic application to a serverless architecture to ensure auto-scaling and significant reduction in hosting costs.",
    tags: ["Backend", "Cloud", "Architecture", "DevOps"],
    thumbnail: "/projects/it/card/mockup-8.webp", // Reused Image
    hero: "/projects/it/card/mockup-8.webp",
    videoUrl: "https://www.youtube.com/embed/gen12b",
    slugOverview: [
      {
        heading: "Goal",
        text: "Achieve near-infinite scalability during peak traffic events while optimizing infrastructure costs via pay-per-use billing.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/it/event-ticket-2.webp",
        text: "Used **AWS Lambda** and **DynamoDB** to create a highly available, fault-tolerant, and zero-maintenance backend.",
      },
    ],
    listBlock: [
      {
        heading: "Migration Benefits",
        points: [
          "99.99% uptime guarantee achieved.",
          "Infrastructure costs reduced by 45%.",
          "Zero operational maintenance required for scaling.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "Implementation Details",
        points: [
          {
            heading: "How was the database migrated?",
            text: "Data was moved from a relational database to NoSQL (DynamoDB) to better support function-based access patterns.",
          },
          {
            heading: "What tools managed deployment?",
            text: "The Serverless Framework was used to manage the deployment of all cloud resources.",
          },
        ],
      },
    ],
  },

  // IT13: Custom DevOps CI/CD Pipeline
  {
    id: "it13",
    slug: "custom-ci-cd-pipeline",
    category: "it",
    title: "Custom Automated CI/CD Pipeline for SaaS",
    desc: "Designed and implemented a continuous integration/continuous delivery pipeline, reducing deployment time from 2 hours to 5 minutes.",
    tags: ["DevOps", "Automation", "CI/CD", "Cloud"],
    thumbnail: "/projects/it/card/mockup-1.webp", // Reused Image
    hero: "/projects/it/card/mockup-1.webp",
    videoUrl: "https://www.youtube.com/embed/gen13c",
    slugOverview: [
      {
        heading: "Core Challenge",
        text: "Automate testing, build, and deployment processes across development, staging, and production environments using Kubernetes.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/it/card/mockup-1.webp",
        text: "Utilized **GitLab CI** coupled with **Kubernetes** deployments, implementing blue/green deployment strategies for zero-downtime releases.",
      },
    ],
    listBlock: [
      {
        heading: "Pipeline Components",
        points: [
          "Automated unit and integration testing.",
          "Static code analysis (SonarQube).",
          "Containerization via Docker and deployment via Helm.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "Tools & Tech",
        points: [
          {
            heading: "Why GitLab CI?",
            text: "Chosen for its deep integration with the source control repository and built-in container registry.",
          },
          {
            heading: "Rollback Strategy?",
            text: "Implemented automated rollbacks if post-deployment health checks fail.",
          },
        ],
      },
    ],
  },

  // IT14: Blockchain-Based Supply Chain Tracker
  {
    id: "it14",
    slug: "blockchain-supply-chain",
    category: "it",
    title: "Blockchain-Based Supply Chain Tracker",
    desc: "A secure, immutable distributed ledger system for tracking high-value goods and verifying provenance from source to consumer.",
    tags: ["Blockchain", "Web3", "Backend", "Security"],
    thumbnail: "/projects/it/card/mockup-4.webp", // Reused Image
    hero: "/projects/it/card/mockup-4.webp",
    videoUrl: "https://www.youtube.com/embed/gen14d",
    slugOverview: [
      {
        heading: "Security Focus",
        text: "Ensuring every transfer of ownership and status change is recorded as an immutable transaction on a private blockchain network.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/it/mobile-landing-2.webp",
        text: "Built on **Hyperledger Fabric** to ensure a permissioned network, utilizing **Solidity** for custom smart contracts.",
      },
    ],
    listBlock: [
      {
        heading: "System Features",
        points: [
          "Cryptographically secured transaction history.",
          "API for integration with existing logistics software.",
          "Real-time alerts on supply chain deviations.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "Blockchain Questions",
        points: [
          {
            heading: "Public or Private?",
            text: "A private, permissioned blockchain was chosen for enterprise control and transaction speed.",
          },
          {
            heading: "Data storage?",
            text: "Only transaction hashes and critical event data are stored on the ledger; detailed payloads reside off-chain.",
          },
        ],
      },
    ],
  },

  // IT15: Cybersecurity Audit & Penetration Testing Report
  {
    id: "it15",
    slug: "cybersecurity-audit-pentest",
    category: "it",
    title: "Comprehensive Cybersecurity Audit & Penetration Test",
    desc: "Full security review of the client’s public-facing application and internal network, culminating in a detailed remediation report.",
    tags: ["Security", "Testing", "Audit", "Consulting"],
    thumbnail: "/projects/it/card/mockup-7.webp", // Reused Image
    hero: "/projects/it/shopify-theme-1.webp",
    videoUrl: "https://www.youtube.com/embed/gen15e",
    slugOverview: [
      {
        heading: "Methodology",
        text: "Executed a blend of automated and manual testing, adhering to OWASP Top 10 guidelines and industry best practices.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/it/shopify-theme-1.webp",
        text: "Deliverables included a high-level executive summary and a technical report detailing exploit paths and mitigation steps.",
      },
    ],
    listBlock: [
      {
        heading: "Areas Tested",
        points: [
          "Authentication and Authorization flaws.",
          "Input validation and injection vulnerabilities.",
          "Configuration management and server hardening.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "Testing Approach",
        points: [
          {
            heading: "Scope of the test?",
            text: "Included both black-box (external) and white-box (internal, with source code access) testing.",
          },
          {
            heading: "Tools utilized?",
            text: "Kali Linux, Burp Suite Professional, Nmap, and proprietary scanning tools were utilized.",
          },
        ],
      },
    ],
  },

  // IT16: IoT Fleet Management Dashboard
  {
    id: "it16",
    slug: "iot-fleet-management",
    category: "it",
    title: "Real-Time IoT Fleet Management Dashboard",
    desc: "Web application for monitoring and controlling a large fleet of geographically dispersed IoT devices using MQTT protocol.",
    tags: ["IoT", "Real-Time", "Backend", "Data Visualization"],
    thumbnail: "/projects/it/card/mockup-9.webp", // Reused Image
    hero: "/projects/it/mobile-landing-1.webp",
    videoUrl: "https://www.youtube.com/embed/gen16f",
    slugOverview: [
      {
        heading: "Challenge",
        text: "Processing high-volume, continuous data streams from thousands of sensors in real-time without bottlenecks.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/it/mobile-landing-1.webp",
        text: "Used a **Kafka** stream processing pipeline combined with a **Time-Series Database (InfluxDB)** for efficient storage and retrieval.",
      },
    ],
    listBlock: [
      {
        heading: "Dashboard Features",
        points: [
          "Bi-directional communication with remote devices.",
          "Historical data playback and analysis.",
          "Customizable threshold alerting.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "Data Handling",
        points: [
          {
            heading: "What protocol is used?",
            text: "MQTT (Message Queuing Telemetry Transport) was utilized for its lightweight and low-bandwidth capabilities.",
          },
          {
            heading: "How is real-time achieved?",
            text: "WebSockets are used to push instant updates from the MQTT broker directly to the user interface.",
          },
        ],
      },
    ],
  },

  // IT17: Data Warehouse & ETL Implementation
  {
    id: "it17",
    slug: "data-warehouse-etl",
    category: "it",
    title: "Enterprise Data Warehouse and ETL Implementation",
    desc: "Design and creation of a centralized data warehouse and automated ETL (Extract, Transform, Load) processes for unified business reporting.",
    tags: ["Data Science", "ETL", "Cloud", "Business Intelligence"],
    thumbnail: "/projects/it/card/mockup-2.webp", // Reused Image
    hero: "/projects/it/saas-crm-1.webp",
    videoUrl: "https://www.youtube.com/embed/gen17g",
    slugOverview: [
      {
        heading: "Objective",
        text: "Consolidate data from CRM, ERP, and marketing sources into a single, highly performant analytical database.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/it/saas-crm-1.webp",
        text: "Built on **Google BigQuery** (or Snowflake/Redshift) for its analytical processing power and serverless scaling capabilities.",
      },
    ],
    listBlock: [
      {
        heading: "Implementation Highlights",
        points: [
          "Star schema dimensional modeling.",
          "Daily automated incremental load processes.",
          "Improved query performance for reporting by 90%.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "Data Modeling",
        points: [
          {
            heading: "What is a Star Schema?",
            text: "A simplified dimensional model used in data warehousing, consisting of one central fact table surrounded by dimension tables.",
          },
          {
            heading: "ETL orchestration tool?",
            text: "Apache Airflow was used to schedule, monitor, and manage the complex dependencies of the ETL jobs.",
          },
        ],
      },
    ],
  },

  // IT18: Bespoke HR Management System (HRMS)
  {
    id: "it18",
    slug: "custom-hrms-system",
    category: "it",
    title: "Bespoke HR Management System (HRMS) Portal",
    desc: "A custom web portal for employee self-service, leave management, and performance reviews, replacing three disparate legacy systems.",
    tags: ["App", "Frontend", "Backend", "SaaS"],
    thumbnail: "/projects/it/card/mockup-11.webp", // Reused Image
    hero: "/projects/it/healthcare-1.webp",
    videoUrl: "https://www.youtube.com/embed/gen18h",
    slugOverview: [
      {
        heading: "User Focus",
        text: "Designed a clean, intuitive UI to reduce employee support requests regarding payroll and benefits enrollment.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/it/healthcare-1.webp",
        text: "Utilized **Microservices architecture** (using Spring Boot) for modular development, allowing independent updates to payroll and review modules.",
      },
    ],
    listBlock: [
      {
        heading: "Core Modules",
        points: [
          "Self-service onboarding and documentation.",
          "Hierarchical approval workflow for managers.",
          "Secure document storage for sensitive HR files.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "Security & Compliance",
        points: [
          {
            heading: "Data encryption?",
            text: "All personally identifiable information (PII) is encrypted at rest using AES-256.",
          },
          {
            heading: "Authentication?",
            text: "Integrated with the client’s existing SAML identity provider for single sign-on (SSO).",
          },
        ],
      },
    ],
  },

  // IT19: Microservices Migration Strategy
  {
    id: "it19",
    slug: "microservices-migration",
    category: "it",
    title: "Monolith to Microservices Migration Strategy",
    desc: "Consulting and implementation strategy for breaking down a legacy monolithic application into scalable, independent microservices.",
    tags: ["Architecture", "Consulting", "Cloud", "DevOps"],
    thumbnail: "/projects/it/card/mockup-3.webp", // Reused Image
    hero: "/projects/it/restaurant-2.webp",
    videoUrl: "https://www.youtube.com/embed/gen19i",
    slugOverview: [
      {
        heading: "Strategy",
        text: "Employed the 'Strangler Fig Pattern' to gradually replace legacy functions with new services, minimizing disruption to end-users.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/it/restaurant-2.webp",
        text: "Utilized a **service mesh (Istio)** for inter-service communication, traffic management, and observability.",
      },
    ],
    listBlock: [
      {
        heading: "Key Project Phases",
        points: [
          "Domain-driven design workshops.",
          "Setup of central logging and tracing (ELK/Grafana).",
          "Pilot migration of the authentication module.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "Migration Questions",
        points: [
          {
            heading: "What are the biggest benefits?",
            text: "Improved resilience (failure in one service doesn't crash the whole app) and faster development cycles for small teams.",
          },
          {
            heading: "How long did it take?",
            text: "The initial consulting and strategy phase took 3 months, with phased migration planned over 18 months.",
          },
        ],
      },
    ],
  },

  // IT20: Accessibility (A11Y) Remediation Project
  {
    id: "it20",
    slug: "accessibility-remediation",
    category: "it",
    title: "WCAG 2.1 Accessibility (A11Y) Remediation Project",
    desc: "Full audit and remediation of an existing large-scale web platform to achieve compliance with WCAG 2.1 AA standards.",
    tags: ["Frontend", "UI/UX", "Accessibility", "Compliance"],
    thumbnail: "/projects/it/card/mockup-6.webp", // Reused Image
    hero: "/projects/it/fintech-dashboard-2.webp",
    videoUrl: "https://www.youtube.com/embed/gen20j",
    slugOverview: [
      {
        heading: "Goal",
        text: "Ensure equal access for all users, including those relying on screen readers, keyboard navigation, and alternative input devices.",
      },
    ],
    slugGallery: [
      {
        mainHeading: "User Management Module",
        images: [
          {
            headingOne: "Sales Pipeline View",
            link: "/projects/it/saas-crm-2.webp",
          },
          {
            headingTwo: "Real-time Metrics",
            link: "/projects/it/card/mockup-2.webp",
          },
          {
            headingThree: "User Management Module",
            link: "/projects/it/saas-crm-1.webp",
          },
          {
            headingFour: "Custom Report Builder",
            link: "/projects/it/saas-crm-2.webp",
          },
        ],
      },
    ],
    slugDetailBlock: [
      {
        link: "/projects/it/fintech-dashboard-2.webp",
        text: "Focused heavily on correcting semantic HTML, proper ARIA attribute usage, and ensuring logical tab order.",
      },
    ],
    listBlock: [
      {
        heading: "Remediation Steps",
        points: [
          "Correction of all insufficient color contrast issues.",
          "Implementation of Skip Navigation links.",
          "Ensuring all form elements have visible, associated labels.",
        ],
      },
    ],
    FaQ: [
      {
        heading: "Testing & Standards",
        points: [
          {
            heading: "What WCAG level achieved?",
            text: "The project successfully achieved compliance with WCAG 2.1 Level AA.",
          },
          {
            heading: "Testing methods?",
            text: "Used a combination of automated tools (Axe, Lighthouse) and manual testing with screen readers (NVDA, VoiceOver).",
          },
        ],
      },
    ],
  },
];
