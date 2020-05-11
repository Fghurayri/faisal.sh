import { DefaultSeo } from "next-seo";
import { ThemeProvider, ColorModeProvider } from "@chakra-ui/core";
import Prism from "prism-react-renderer/prism";
import { MDXProvider } from "@mdx-js/react";
import mdxComponents from "../components/mdx";
import BlogJsonLdSeo from "../components/common/blog-json-ld-seo";
import { GlobalStyle } from "../components/common/global-style";
import { initNprogress } from "../config/nprogress";
import { customTheme } from "../config/theme";
import SEOConfig from "../config/seo";

// workaround to get Gherkin syntax highlighting
(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-gherkin");

import "../../public/static/style.css";
import "nprogress/nprogress.css";
import { useEffect } from "react";

initNprogress();

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    let tracker = window.document.createElement("script");
    let firstScript = window.document.getElementsByTagName("script")[0];
    tracker.defer = true;
    tracker.setAttribute("site", process.env.FATHOM_SITE_ID);
    tracker.setAttribute("spa", "auto");
    tracker.src = "https://cdn.usefathom.com/script.js";
    firstScript.parentNode.insertBefore(tracker, firstScript);
  }, []);

  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider value="light">
        <GlobalStyle>
          <MDXProvider components={mdxComponents}>
            <DefaultSeo {...SEOConfig} />
            <BlogJsonLdSeo />
            <Component {...pageProps} />
          </MDXProvider>
        </GlobalStyle>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
