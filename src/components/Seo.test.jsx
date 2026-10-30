import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it } from "vitest";
import Seo from "./Seo.jsx";

afterEach(() => {
  document.head.querySelector("#structured-data")?.remove();
});

describe("Seo", () => {
  it("updates metadata for a known page", () => {
    render(
      <MemoryRouter initialEntries={["/projects"]}>
        <Seo />
      </MemoryRouter>,
    );

    expect(document.title).toBe("Web Development Projects | Jabal Abdul Salam");
    expect(document.head.querySelector('meta[name="robots"]')).toHaveAttribute(
      "content",
      "index, follow",
    );
    expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://ceikdo.com/projects",
    );
  });

  it("marks unknown routes as noindex", () => {
    render(
      <MemoryRouter initialEntries={["/missing"]}>
        <Seo />
      </MemoryRouter>,
    );

    expect(document.title).toBe("Page Not Found | Jabal Abdul Salam");
    expect(document.head.querySelector('meta[name="robots"]')).toHaveAttribute(
      "content",
      "noindex, nofollow",
    );
  });
});
