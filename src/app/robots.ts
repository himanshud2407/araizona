import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'], // Optional: Disallow any private pages
    },
    sitemap: 'https://araizona.com/sitemap.xml',
  }
}
