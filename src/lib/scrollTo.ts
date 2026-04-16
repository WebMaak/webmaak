export function smoothScrollTo(selector: string) {
  if (typeof window === "undefined") return; // prevents SSR crash

  const lenis = (window as any).__lenis;
  const target = document.querySelector(selector);
  if (!target) return;

  if (lenis?.scrollTo) {
    lenis.scrollTo(target, {
      offset: 0,
      immediate: false,
    });
  } else {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

// Usage: import { smoothScrollTo } from "@/lib/scrollTo";
// Usage: onClick={(e) => { e.preventDefault(); smoothScrollTo("#about"); }}
// Usage: <Link href="/#about" onClick={(e) => {
//   e.preventDefault();
//   smoothScrollTo("#about");
// }}>
//   About
// </Link>
