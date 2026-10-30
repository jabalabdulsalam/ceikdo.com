import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { articles, profile } from "../data/portfolio.js";

const siteUrl = "https://ceikdo.com";
const defaultImage = `${siteUrl}${profile.photo}`;

const pageMetadata = {
  "/": {
    title: "Jabal Abdul Salam | Full-Stack Web Developer",
    description:
      "Jabal Abdul Salam is a full-stack web developer based in Aceh, Indonesia, specializing in WordPress, React, Laravel, and professional business websites.",
  },
  "/about": {
    title: "About Jabal Abdul Salam | Full-Stack Web Developer",
    description:
      "Learn about Jabal Abdul Salam, a full-stack web developer from Aceh, Indonesia, building modern websites and web applications.",
  },
  "/projects": {
    title: "Web Development Projects | Jabal Abdul Salam",
    description:
      "Explore websites and web applications built by Jabal Abdul Salam using WordPress, React, Laravel, and modern web technologies.",
  },
  "/service": {
    title: "Website Development Services | WordPress, React & Laravel",
    description:
      "Professional website development services for businesses and organizations, including WordPress, React, Laravel, and company profile websites.",
  },
  "/articles": {
    title: "Web Development & AI Articles | Jabal Abdul Salam",
    description:
      "Practical articles about web development, software engineering, artificial intelligence, WordPress, React, Laravel, and Edge AI.",
  },
  "/contact": {
    title: "Contact a Full-Stack Web Developer in Indonesia",
    description:
      "Contact Jabal Abdul Salam for professional website development, WordPress, React, Laravel, and custom web application projects.",
  },
};

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function setStructuredData(data) {
  let element = document.head.querySelector("#structured-data");

  if (!element) {
    element = document.createElement("script");
    element.id = "structured-data";
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

function createPersonSchema() {
  return {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: profile.name,
    jobTitle: profile.role,
    description: profile.summary,
    image: defaultImage,
    url: siteUrl,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nagan Raya",
      addressRegion: "Aceh",
      addressCountry: "ID",
    },
    sameAs: profile.socials.map((social) => social.href),
  };
}

export default function Seo() {
  const { pathname } = useLocation();
  const slug = pathname.startsWith("/articles/") ? pathname.split("/")[2] : null;
  const article = pathname.startsWith("/articles/") ? articles.find((item) => item.slug === slug) : null;
  const metadata =
    article
      ? {
          title: `${article.title} | Jabal Abdul Salam`,
          description: article.excerpt,
        }
      : pageMetadata[pathname] || {
          title: "Page Not Found | Jabal Abdul Salam",
          description: "The requested page could not be found.",
        };
  const canonicalUrl = `${siteUrl}${pathname === "/" ? "/" : pathname.replace(/\/$/, "")}`;

  useEffect(() => {
    document.documentElement.lang = "en";
    document.title = metadata.title;

    setMeta("name", "description", metadata.description);
    setMeta("name", "author", profile.name);
    setMeta("name", "robots", article || pageMetadata[pathname] ? "index, follow" : "noindex, nofollow");
    setMeta("property", "og:type", article ? "article" : "website");
    setMeta("property", "og:locale", "en_US");
    setMeta("property", "og:site_name", "Jabal Abdul Salam");
    setMeta("property", "og:title", metadata.title);
    setMeta("property", "og:description", metadata.description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", defaultImage);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", metadata.title);
    setMeta("name", "twitter:description", metadata.description);
    setMeta("name", "twitter:image", defaultImage);
    setLink("canonical", canonicalUrl);

    const graph = [
      { "@type": "WebSite", "@id": `${siteUrl}/#website`, name: "Jabal Abdul Salam", url: siteUrl },
      createPersonSchema(),
    ];

    if (pathname === "/service") {
      graph.push({
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#professional-service`,
        name: "Jabal Abdul Salam Web Development Services",
        url: `${siteUrl}/service`,
        image: defaultImage,
        description: metadata.description,
        areaServed: ["Aceh", "Indonesia", "Worldwide"],
        provider: { "@id": `${siteUrl}/#person` },
      });
    }

    if (article) {
      graph.push({
        "@type": "Article",
        "@id": `${canonicalUrl}/#article`,
        headline: article.title,
        description: article.excerpt,
        datePublished: new Date(article.date).toISOString().slice(0, 10),
        author: { "@id": `${siteUrl}/#person` },
        mainEntityOfPage: canonicalUrl,
        image: defaultImage,
      });
    }

    const breadcrumbItems = [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }];
    if (article) {
      breadcrumbItems.push(
        { "@type": "ListItem", position: 2, name: "Articles", item: `${siteUrl}/articles` },
        { "@type": "ListItem", position: 3, name: article.title, item: canonicalUrl },
      );
    } else if (pathname !== "/") {
      breadcrumbItems.push({
        "@type": "ListItem",
        position: 2,
        name: metadata.title.split(" | ")[0],
        item: canonicalUrl,
      });
    }

    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}/#breadcrumb`,
      itemListElement: breadcrumbItems,
    });

    setStructuredData({ "@context": "https://schema.org", "@graph": graph });
  }, [article, canonicalUrl, metadata.description, metadata.title, pathname]);

  return null;
}
