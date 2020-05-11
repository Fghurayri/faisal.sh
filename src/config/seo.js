const title = "Faisal Alghurayri - Software Engineer";
const description =
  "Full stack engineer based in Riyadh, Saudi Arabia. I enjoy building in React and Node JS.";

export const url = "https://faisal.sh";
const locale = "ar";
const twitterHandle = "@fghurayri";

const firstName = "Faisal";
const lastName = "Alghurayri";
export const fullName = `${firstName} ${lastName}`;

export default {
  title,
  description,
  canonical: url,
  openGraph: {
    type: "website",
    locale,
    url,
    site_name: fullName,
    title,
    description,
    profile: {
      firstName,
      lastName,
    },
  },
  twitter: {
    handle: twitterHandle,
    site: twitterHandle,
    cardType: "summary_large_image",
  },
};
