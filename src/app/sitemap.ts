import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://araizona.com'

  const routes = [
    '',
    '/about',
    '/ai-chatbot',
    '/ai-marketing',
    '/career',
    '/contact',
    '/project',
    '/service',
    '/team',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return [...routes]
}
