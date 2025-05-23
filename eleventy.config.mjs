// from https://ulfschneider.io/2025-05-20-tailwind-css-and-11ty/
import { execSync } from "node:child_process";

export default function (eleventyConfig) {

  //run the CSS preparation before each Eleventy build
  eleventyConfig.on(
    "eleventy.before",
    ({ dir, results, runMode, outputMode }) => {
      prepareTailwind();
    },
  );

  //generate the actual CSS for the website
  function prepareTailwind() {
    console.log("Prepare Tailwind CSS");
    execSync("npm run build:css", {
      cwd: "./",
      encoding: "utf-8",
      stdio: "inherit",
    });
  }

  //Whenever the generated CSS changes, copy the CSS to its final destination
  eleventyConfig.addPassthroughCopy({ "_code/_css/style.css": "css/style.css" });

  // we .gitignored `_site/` but still want tailwind changes to trigger
  // browser page auto-refresh
  eleventyConfig.setUseGitIgnore(false);
}
