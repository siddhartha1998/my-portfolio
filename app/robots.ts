import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://siddhiganeshjoshi.com.np';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/login/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
