import { BlogJsonLd } from "next-seo";
import seo, { fullName } from "../../config/seo";

export default function BlogJsonLdSeo() {
  return (
    <BlogJsonLd
      url={seo.openGraph.url}
      title={seo.title}
      authorName={fullName}
      description={seo.description}
    />
  );
}
