import React from "react";
import { NextSeo, ArticleJsonLd } from "next-seo";
import { fullName } from "../../config/seo";

export default function PostSEO({ title, summary, publishedAt, url }) {
  const date = new Date(publishedAt).toISOString();

  return (
    <>
      <NextSeo
        title={`${title} – ${fullName}`}
        description={summary}
        canonical={url}
        openGraph={{
          type: "article",
          article: {
            publishedTime: date,
          },
          url,
          title,
          description: summary,
        }}
      />
      <ArticleJsonLd
        authorName={fullName}
        dateModified={date}
        datePublished={date}
        description={summary}
        publisherLogo="/favicons/android-chrome-192x192.png"
        publisherName={fullName}
        title={title}
        url={url}
      />
    </>
  );
}
