## Overview

This web app serves as a blogging platform to share my knowledge and to document my learnings. 👨‍💻

I have built it using the following technologies:

- [Next JS](https://nextjs.org/)
- [Vercel](https://vercel.com/)
- [MDX](https://mdxjs.com)
- [Chakra UI](https://chakra-ui.com/)

## Folder Structure

```bash
├── README.md
├── next.config.js
├── package.json
├── public
│   ├── favicons
│   └── static
├── src
│   ├── components
│   ├── config
│   │   ├── seo.js
│   │   └── theme.js
│   ├── layouts
│   ├── pages
│   │   ├── _app.js
│   │   ├── _document.js
│   │   ├── blog
│   │   └── index.js
│   └── utils
└── yarn.lock
```

- All assets like images and fonts can be placed under the `public/static` directory.
- All blog posts are placed under the `src/pages/blog` directory.
- Special customization for SEO and the theme are placed under the `src/config` directory

## How to run it locally

Please feel free to fork this blog and customize it to your liking!

```bash
$ git clone https://github.com/fghurayri/faisal.sh.git
$ cd faisal.sh
$ yarn
$ yarn dev
```

Please note I'm using [Fathom](https://usefathom.com/) for analytics. If you don't want such functionality, you can remove the following lines in `src/pages/_app.js`

```diff
import { DefaultSeo } from "next-seo";
.....

function MyApp({ Component, pageProps }) {
-  useEffect(() => {
-   let tracker = window.document.createElement("script");
-    let firstScript = window.document.getElementsByTagName("script")[0];
-    tracker.defer = true;
-    tracker.setAttribute("site", process.env.FATHOM_SITE_ID);
-    tracker.setAttribute("spa", "auto");
-    tracker.src = "https://cdn.usefathom.com/script.js";
-    firstScript.parentNode.insertBefore(tracker, firstScript);
-  }, []);

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
```

## Acknowledgment

The tooling/stack of this blog was heavily inspired from [Lee Robinson](https://github.com/leerob/leerob.io) 🙏
