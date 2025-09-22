import { useEffect } from "react";

type UseSEOOptions = {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
};

/**
 * useSEO: Lightweight SEO helper without extra deps.
 * - Sets document.title
 * - Updates/creates meta description, keywords
 * - Injects/updates canonical link
 * - Injects JSON-LD structured data
 */
export function useSEO({ title, description, keywords, canonical, jsonLd }: UseSEOOptions) {
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

    if (description) {
      upsertMeta("name", "description", description);
    }

    if (keywords && keywords.length) {
      const unique = Array.from(new Set(keywords.map(k => k.trim()).filter(Boolean)));
      upsertMeta("name", "keywords", unique.join(", "));
    }

    // Canonical link
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
        elementsToCleanup.push(link);
      }
      link.setAttribute("href", canonical);
    }

    // JSON-LD structured data
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
      elementsToCleanup.push(script);
    }

    return () => {
      // Clean up only elements we created during this effect
      elementsToCleanup.forEach((el) => el.remove());
    };
  }, [title, description, canonical, JSON.stringify(keywords), JSON.stringify(jsonLd)]);
}

export default useSEO;
