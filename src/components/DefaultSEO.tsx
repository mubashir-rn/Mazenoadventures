import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useSEO } from "@/hooks/use-seo";
import { SEO_CONFIG } from "@/lib/seo";

const DefaultSEO = () => {
  const location = useLocation();

  const canonical = useMemo(() => {
    const base = SEO_CONFIG.baseUrl.replace(/\/$/, "");
    return `${base}${location.pathname}`;
  }, [location.pathname]);

  const imageAbs = useMemo(() => {
    const img = SEO_CONFIG.defaultImage || "/placeholder.svg";
    if (/^https?:\/\//i.test(img)) return img;
    const base = SEO_CONFIG.baseUrl.replace(/\/$/, "");
    return `${base}${img.startsWith("/") ? img : `/${img}`}`;
  }, []);

  useSEO({
    title: SEO_CONFIG.siteName,
    description: SEO_CONFIG.defaultDescription,
    siteName: SEO_CONFIG.siteName,
    canonical,
    image: imageAbs,
    robots: SEO_CONFIG.robots,
    type: "website",
  });

  return null;
};

export default DefaultSEO;



//Seo