import Script from "next/script";
import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/variables.css";
import "@/styles/animations.css";
import DevToolsGuard from "@/components/security/DevToolsGuard";

import { Sora, Inter, Lora } from "next/font/google";

import LenisProvider from "@/components/LenisProvider";
import ClientScroll from "@/components/ClientScroll";
import ScrollProgressBar from "@/components/progressbar/ProgressBar";
import GSAPInitializer from "@/components/GSAPInitializer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webmaak.com"),

  title: {
    default: "WebMaak | Full-Service IT & Media Agency",
    template: "%s — WebMaak",
  },

  description:
    "WebMaak Creative LLP is a premier full-service IT and Media agency specializing in web development, UI/UX design, Shopify solutions, and media production.",

  keywords: [
    "webmaak",
    "webmaak creative llp",
    "web development",
    "digital agency",
    "media production",
    "UI UX design",
    "shopify development",
    "video editing",
    "branding",
    "3D modeling",
    "Next.js development agency",
    "React development company",
    "Web development Kolkata",
    "Newtown web design agency",
    "Full stack development agency",
    "UI UX design agency India",
    "E-commerce development company",
    "Headless CMS development",
    "WordPress workflow development",
    "Mobile app development agency",
    "GSAP animation website",
    "Creative digital agency Kolkata",
    "3D animation studio India",
    "Motion graphics agency",
    "Architecture visualization studio",
  ],

  authors: [
    { name: "WebMaak Creative LLP", url: "https://webmaak.com" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/webmaak-creative/",
    },
    { name: "Instagram", url: "https://www.instagram.com/webmaak/" },
  ],
  creator: "WebMaak Creative LLP",
  publisher: "WebMaak Creative LLP",

  openGraph: {
    title: "WebMaak | Full-Service IT & Media Agency",
    description:
      "Expert web development, UI/UX design, and media production by WebMaak Creative LLP. Connect with us on LinkedIn and Instagram.",
    url: "https://webmaak.com",
    siteName: "WebMaak Creative LLP",
    images: [
      {
        url: "/company-logos/favicon.png",
        width: 1200,
        height: 630,
        alt: "WebMaak Creative LLP Agency Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/company-logos/favicon.png",
    apple: "/company-logos/favicon.png",
  },


  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },

  alternates: {
    canonical: "https://webmaak.com",
  },

  category: "technology",
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${inter.variable} ${lora.variable}`}>
        {/* ROOT PRELOADER */}
        <div id="root-preloader">
          <div className="loader-inner">
            <video
              src="https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772193888/loader-ezgif.com-video-to-gif-converter_wq4lg0.mp4"
              autoPlay
              muted
              playsInline
              className="loader-video"
            />
            <p className="loader-text" id="loader-text">
              Loading the experience…
            </p>
          </div>
        </div>

        {/* HIDE PRELOADER AFTER FULL LOAD */}
        <Script id="root-preloader-script" strategy="beforeInteractive">
          {`
            const messages = [
              "Loading the experience…",
              "Almost there…",
              "Preparing the interface…"
            ];

            let messageIndex = 0;
            let intervalId = null;

            window.addEventListener("DOMContentLoaded", () => {
              const textEl = document.getElementById("loader-text");

              if (!textEl) return;

              intervalId = setInterval(() => {
                messageIndex = (messageIndex + 1) % messages.length;
                textEl.textContent = messages[messageIndex];
              }, 2000);
            });

            window.addEventListener("load", () => {
              const loader = document.getElementById("root-preloader");

              if (intervalId) clearInterval(intervalId);

              if (loader) {
                loader.classList.add("hide");
                // Use display: none instead of remove() to avoid breaking React's DOM structure
                setTimeout(() => {
                  loader.style.display = "none";
                }, 600);
              }
            });
          `}
        </Script>
        <LenisProvider>
          <GSAPInitializer />
          <DevToolsGuard>
            {/* Components (Navbar, Footer, Navigator) will be added later */}
            <main>
              <ScrollProgressBar />
              <ClientScroll>{children}</ClientScroll>
            </main>
          </DevToolsGuard>
        </LenisProvider>
      </body>
    </html>
  );
}
