// "4 cards" feature section.
import Link from "next/link";

export default function GeneralNavigation() {
  return (
    <main
      style={{
        padding: "80px 20px",
        maxWidth: "620px",
        margin: "0 auto",
        fontFamily: "var(--font-inter)",
        lineHeight: 1.7,
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-sora)",
          fontSize: "2.2rem",
          fontWeight: 600,
          marginBottom: "24px",
          color: "#111",
        }}
      >
        WebMaak Development Navigation
      </h1>

      <p
        style={{
          marginBottom: "36px",
          color: "#4b5563",
          fontSize: "1rem",
          maxWidth: "520px",
        }}
      >
        This is a temporary root index to help you quickly access pages while
        building the new WebMaak website. Delete this page once the homepage is
        completed.
      </p>

      <ul
        style={{
          display: "grid",
          gap: "14px",
          fontSize: "1.1rem",
          fontFamily: "var(--font-inter)",
        }}
      >
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
