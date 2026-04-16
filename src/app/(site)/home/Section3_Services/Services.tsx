// "4 cards" feature section.
import type { Metadata } from "next";
import SectionTitleBlock from "@/components/sectionsShared/SectionTitleBlock";
import ScrollableProjects from "./ScrollableProjects";

export const metadata: Metadata = {
  title: "WebMaak — Development Navigation",
  description:
    "Temporary development navigation to access all pages during the build process.",
};

const WebServices = [
  {
    id: 1,
    title: "UI/UX Design",
    image:
      "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772192891/services-card_9_ajyojp.jpg",
    tags: ["Figma", "Design", "UI/UX"],
    link: "/contact",
    description:
      "Modern and intuitive UI/UX designs built to improve usability and engagement.",
  },
  {
    id: 2,
    title: "CMS Development",
    image:
      "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772192892/services-card_7_wchsuy.jpg",
    link: "/contact",
    tags: ["WordPress", "Webflow", "Shopify"],
    description:
      "Easy content management solutions designed for efficiency, control, growth.",
  },
  {
    id: 4,
    title: "E-Commerce Solutions",
    image:
      "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772192933/services-card_8_eb5fyc.jpg",
    link: "/contact",
    tags: ["Shopify", "WooCommerce", "Custom Stores"],
    description:
      "Secure, fast, and sales-driven platforms designed to boost growth and trust.",
  },
  {
    id: 5,
    title: "Web Applications",
    image:
      "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772192891/services-card_10_famie6.jpg",
    link: "/contact",
    tags: ["Next.js", "React.js", "Node.js"],
    description:
      "Custom apps that scale businesses. Powerful, seamless, user-focused apps.",
  },
  {
    id: 3,
    title: "Website Development",
    image:
      "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772193005/services-card_11_xaztxp.jpg",
    link: "/contact",
    tags: ["React.js", "Next.js", "Node.js"],
    description:
      "Responsive, scalable websites built for performance and strong SEO results.",
  },
  {
    id: 6,
    title: "App Development",
    image:
      "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772193005/services-card_2_jpcg1e.jpg",
    link: "/contact",
    tags: ["React Native", "Mobile", "iOS/Android"],
    description:
      "iOS & Android, native & hybrid. Engaging apps with intuitive UX.",
  },
];

const MediaServices = [
  {
    id: 1,
    title: "Video Editing",
    link: "/contact",
    image:
      "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772193007/services-card_12_vras7y.jpg",
    tags: ["Premiere Pro", "DaVinci", "After Effects"],
    description:
      "Crafting stories by shaping raw footage into engaging content.",
  },
  {
    id: 2,
    title: "Motion Graphics",
    link: "/contact",
    image:
      "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772193007/services-card_13_n4dz4n.jpg",
    tags: ["DaVinci", "After Effects"],
    description:
      "Bringing visuals to life with animated design and dynamic effects.",
  },
  {
    id: 3,
    title: "3D Modelling",
    link: "/contacta",
    image:
      "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772193009/services-card_15_ixqgx2.jpg",
    tags: ["Blender", "Unreal Engine"],
    description: "Creating realistic objects and environments in 3D space.",
  },
  {
    id: 4,
    title: "3D Animation",
    link: "/contact",
    image:
      "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772193007/services-card_16_atlz1q.jpg",
    tags: ["Blender", "Unreal Engine"],
    description: "Precise, detailed, and dynamic 3D animation.",
  },
  {
    id: 5,
    title: "Architectural Visualisation",
    link: "/contact",
    image:
      "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772193008/services-card_14_qbch8v.jpg",
    tags: ["Unreal Engine", "Blender"],
    description:
      "Turning 2D architectural plans into realistic 3D visuals and walkthroughs.",
  },
];

export default function RootDevelopmentPage() {
  return (
    <>
      <div data-theme="light" id="it-services">
        <SectionTitleBlock
          normal1="Building"
          italic1="Websites & Web Apps"
          normal2="That Scales Business"
          description="From responsive websites to robust web applications, we craft digital solutions that deliver performance, scalability, and seamless user experiences."
          theme="light"
        />
        <ScrollableProjects projects={WebServices} />
      </div>
      <div data-theme="light" id="media-services">
        <SectionTitleBlock
          normal1="From"
          italic1="Trimming Clips"
          normal2="To Building"
          italic2="3D Experiences"
          description="We bring stories to life with high-quality video production, 3D animations, and post-production that captivate audiences and drive engagement."
          theme="light"
        />
        <ScrollableProjects projects={MediaServices} />
      </div>
    </>
  );
}
