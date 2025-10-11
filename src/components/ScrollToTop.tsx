import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If navigating to an in-page anchor (hash), let the browser handle it
    if (hash) return;
    // Scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
