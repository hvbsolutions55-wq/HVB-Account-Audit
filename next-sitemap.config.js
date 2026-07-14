/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://hvboutsourcing.com',
  generateRobotsTxt: true,
  // outDir: 'public',  // by default public hi hota hai
}