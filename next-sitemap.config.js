module.exports = {
  siteUrl: 'https://hvboutsourcing.com', // ✅ YAHAN CHANGE KAREIN
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }
    ]
  },
  exclude: ['/admin/*', '/private/*'], // Agar koi private pages hain toh
}