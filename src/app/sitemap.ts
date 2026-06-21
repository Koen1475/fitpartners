import type { MetadataRoute } from "next";

const base = "https://fit-partners.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/wat-bieden-wij/functional-training`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/wat-bieden-wij/crossbox`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/wat-bieden-wij/voedingsadvies`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/wat-bieden-wij/sportonderzoeken`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/rooster/functional-training`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/rooster/crossbox`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/over-ons/wie-zijn-we`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/over-ons/team`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/over-ons/missie-visie`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/kennisbank`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/kennisbank/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/kennisbank/wat-is-vo2max`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/kennisbank/functional-training-voordelen`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/kennisbank/voeding-en-sport`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  ];
}
