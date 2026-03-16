import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.ascendralai.com";

  const routes = [
    "",
    "/about",
    "/services",
    "/case-studies",
    "/process",
    "/demo",
    "/demo/leads",
    "/demo/email",
    "/demo/documents",
    "/demo/workflows",
    "/demo/strategy",
    "/demo/custom",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/demo" ? 0.9 : 0.8,
  }));
}
