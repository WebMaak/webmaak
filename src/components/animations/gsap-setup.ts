// Registers GSAP + plugins globally.
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function initGsap() {
  if (registered) return; // prevent double register
  if (typeof window === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}
