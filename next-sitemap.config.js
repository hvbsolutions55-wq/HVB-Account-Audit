/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.hvboutsourcing.com',
  generateRobotsTxt: true,
  // outDir: 'public',  // by default public hi hota hai
}