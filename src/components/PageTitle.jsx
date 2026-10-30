import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageTitles = {
  "/": "Jabal Abdul Salam | Full-Stack Web Developer",
  "/about": "About Me",
  "/projects": "Projects",
  "/service": "Services",
  "/articles": "Articles",
  "/contact": "Contact",
};

export default function PageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      document.title = pageTitles["/"];
      return;
    }

    if (pathname.startsWith("/articles/")) {
      document.title = "Article | Jabal Abdul Salam";
      return;
    }

    const title = pageTitles[pathname] || "Page Not Found";
    document.title = `${title} | Jabal Abdul Salam`;
  }, [pathname]);

  return null;
}
