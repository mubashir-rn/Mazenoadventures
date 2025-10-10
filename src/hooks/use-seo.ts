import { useEffect } from "react";

type UseSEOOptions = {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  image?: string; // absolute URL preferred for social preview
  type?: string; // og:type, e.g., "website", "article"
  robots?: string; // e.g., "index,follow"
  siteName?: string; // og:site_name override
  jsonLd?: Record<string, any> | Record<string, any>[];
};

/**
 * useSEO: Lightweight SEO helper without extra deps.
 * - Sets document.title
 * - Updates/creates meta description, keywords
 * - Injects/updates canonical link
 * - Injects JSON-LD structured data
 * - Adds Open Graph/Twitter/robots meta tags
 */
export function useSEO({ title, description, keywords, canonical, image, type = "website", robots, siteName, jsonLd }: UseSEOOptions) {
  useEffect(() => {
    const elementsToCleanup: HTMLElement[] = [];

    // Title
    if (title) {
      document.title = title;
    }

    // Meta helper
    const upsertMeta = (attrName: string, attrValue: string, content: string) => {
      let tag = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attrName, attrValue);
        document.head.appendChild(tag);
        elementsToCleanup.push(tag);
      }
      tag.setAttribute("content", content);
    };

    const upsertLink = (rel: string, href: string, attrs: Record<string, string> = {}) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        document.head.appendChild(link);
        elementsToCleanup.push(link);
      }
      link.setAttribute("href", href);
      Object.entries(attrs).forEach(([k, v]) => link!.setAttribute(k, v));
    };

    if (description) {
      upsertMeta("name", "description", description);
    }

    if (keywords && keywords.length) {
      const unique = Array.from(new Set(keywords.map(k => k.trim()).filter(Boolean)));
      upsertMeta("name", "keywords", unique.join(", "));
    }

    // Canonical link
    if (canonical) {
      upsertLink("canonical", canonical);
    }

    // JSON-LD structured data
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
      elementsToCleanup.push(script);
    }

    // Robots
    if (robots) {
      upsertMeta("name", "robots", robots);
      upsertMeta("name", "googlebot", robots);
    }

    // Open Graph & Twitter
    const url = typeof window !== "undefined" ? window.location.href : canonical || "";
    if (title) {
      upsertMeta("property", "og:title", title);
      upsertMeta("name", "twitter:title", title);
    }
    if (description) {
      upsertMeta("property", "og:description", description);
      upsertMeta("name", "twitter:description", description);
    }
    if (siteName) {
      upsertMeta("property", "og:site_name", siteName);
    }
    if (url) {
      upsertMeta("property", "og:url", url);
    }
    if (image) {
      upsertMeta("property", "og:image", image);
      upsertMeta("name", "twitter:image", image);
      upsertMeta("name", "twitter:card", "summary_large_image");
    }
    if (type) {
      upsertMeta("property", "og:type", type);
    }

    return () => {
      // Clean up only elements we created during this effect
      elementsToCleanup.forEach((el) => el.remove());
    };
  }, [
    title,
    description,
    canonical,
    image,
    type,
    robots,
    siteName,
    JSON.stringify(keywords),
    JSON.stringify(jsonLd),
  ]);
}

export default useSEO;
