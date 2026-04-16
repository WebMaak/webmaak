export interface ProjectType {
  id: string;
  slug: string;
  category: "it" | "media";
  title: string;
  desc: string;
  tags: string[];
  thumbnail: string;
  hero: string;
  videoUrl?: string;
  domain?: string;
  websitePreview?: string;

  slugOverview: {
    heading: string;
    text: string;
  }[];

  slugGallery: {
    mainHeading: string;
    images: {
      headingOne?: string;
      headingTwo?: string;
      headingThree?: string;
      headingFour?: string;
      link: string;
    }[];
  }[];

  slugDetailBlock: {
    link: string;
    text: string;
  }[];

  listBlock: {
    heading: string;
    points: string[];
  }[];

  FaQ: {
    heading: string;
    points: {
      heading: string;
      text: string;
    }[];
  }[];
}
