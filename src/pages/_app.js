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

import useFathomAnalytics from "../hooks/useFathomAnalytics";

// workaround to get Gherkin syntax highlighting
(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-gherkin");

import "../../public/static/style.css";
import "nprogress/nprogress.css";

initNprogress();

function MyApp({ Component, pageProps }) {
  useFathomAnalytics();

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
