const siteUrl = process.env.NEXT_PUBLIC_HOST;

if(siteUrl === "https://adanplata.com") {

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'Weekly',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    // additionalPaths: async (config) => [
    //   await config.transform(config, "/comments"),
    // ],
   
  },
};

} else {
  module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    changefreq: 'Weekly',
    robotsTxtOptions: {
      policies: [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
  
      // additionalPaths: async (config) => [
      //   await config.transform(config, "/comments"),
      // ],
     
    },
  };
}