// Before-footer CTA block.
import Link from "next/link";

export const metadata = {
  title: "WebMaak — Home",
  description: "Navigate to all pages during development.",
};

export default function RootDevelopmentPage() {
  return (
    <main
      style={{
        padding: "60px",
        maxWidth: "600px",
        margin: "0 auto",
        fontFamily: "Inter, sans-serif",
        lineHeight: 1.6,
      }}
    >
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        WebMaak Development Navigation
      </h1>

      <p style={{ marginBottom: "30px" }}>
        Temporary root page to access the full site while development is in
        progress.
      </p>

      <ul style={{ display: "grid", gap: "14px", fontSize: "18px" }}>
        <li>
          <Link href="/about">About Page →</Link>
        </li>
        <li>
          <Link href="/contact">Contact Page →</Link>
        </li>
        <li>
          <Link href="/policy">Policy Page →</Link>
        </li>
        <li>
          <Link href="/work">Work Page →</Link>
        </li>
        <li>
          <Link href="/">Homepage (empty for now) →</Link>
        </li>
      </ul>
    </main>
  );
}
