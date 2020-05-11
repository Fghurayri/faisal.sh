import { useEffect } from "react";

export default function useFathomAnalytics() {
  useEffect(() => {
    let tracker = window.document.createElement("script");
    let firstScript = window.document.getElementsByTagName("script")[0];
    tracker.defer = true;
    tracker.setAttribute("site", process.env.FATHOM_SITE_ID);
    tracker.setAttribute("spa", "auto");
    tracker.src = process.env.FATHOM_CUSTOM_DOMAIN;
    firstScript.parentNode.insertBefore(tracker, firstScript);
  }, []);
}
