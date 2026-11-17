import { MetadataRoute } from 'next';
import { getAllJobSlugs } from '@/api/career';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://araizona.com';

  const routes = [
    '',
    '/about',
    '/ai-chatbot',
    '/ai-marketing',
    '/career',
    '/career-details',
    '/contact',
    '/project',
    '/service',
    '/team',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const jobRoutes = getAllJobSlugs().map((slug) => ({
    url: `${baseUrl}/career/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  return [...routes, ...jobRoutes];
}
