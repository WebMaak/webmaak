const prefixSelector = require("postcss-prefix-selector");
const path = require("path");

module.exports = {
  plugins: [
    // Process CSS
    prefixSelector({
      prefix: ".process-root", // Your unique wrapper class for Process.tsx
      transform: (prefix, selector, filePath) => {
        // Only apply to the specific CSS file
        if (filePath === path.join(__dirname, "src/styles/process.css")) {
          return `${prefix} ${selector}`;
        }
        return selector; // Leave other CSS files untouched
      },
    }),

    // Orbit CSS
    prefixSelector({
      prefix: ".orbit-root", // Unique wrapper for Orbit.tsx
      transform: (prefix, selector, filePath) => {
        if (filePath === path.join(__dirname, "src/styles/orbit.css")) {
          return `${prefix} ${selector}`;
        }
        return selector;
      },
    }),

    // WorkInteractive CSS
    prefixSelector({
      prefix: ".workinteractive-root",
      transform: (prefix, selector, filePath) => {
        if (
          filePath === path.join(__dirname, "src/styles/workinteractive.css")
        ) {
          return `${prefix} ${selector}`;
        }
        return selector;
      },
    }),

    // Add more CSS files here as needed
  ],
};
