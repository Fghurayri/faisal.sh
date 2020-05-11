const withMdxEnhanced = require("next-mdx-enhanced");
const readingTime = require("reading-time");

module.exports = withMdxEnhanced({
  layoutPath: "src/layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  remarkPlugins: [],
  rehypePlugins: [],
  extendFrontMatter: {
    process: (mdxContent) => ({
      readingTime: readingTime(mdxContent),
    }),
  },
})({
  env: {
    FATHOM_SITE_ID: process.env.FATHOM_SITE_ID,
    FATHOM_CUSTOM_DOMAIN: process.env.FATHOM_CUSTOM_DOMAIN,
  },
});
