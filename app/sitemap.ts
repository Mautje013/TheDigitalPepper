import { MetadataRoute } from "next";
import { baseUrl } from "../lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookiebeleid`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    // Voeg hier meer routes toe als je die hebt
    // {
    //   url: `${baseUrl}/services/digital-foundations`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly" as const,
    //   priority: 0.7,
    // },
  ];

  return routes;
}

