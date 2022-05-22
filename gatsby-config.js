module.exports = {
  siteMetadata: {
    title: `Kendall Whitman Photography`,
    description: `Kendall Whitman is a photographer based in the Dallas Fort Worth metroplex specializing in actor headshots, professional headshots, and lifestyle portraits.`,
    author: `Kendall Whitman`,
    siteUrl: `https://kendallwhitman.photography`,
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: '/',
        serialize: ({ path }) => {
          let entry = {
            url: path,
            changefreq: 'daily',
            priority: 0.9,
          }

          if (path === '/') {
            entry.priority = 1.0
          }

          return entry
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kendall-whitman-photography`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Oswald",
              variants: ["300", "400", "500"],
            },
            {
              family: "Roboto",
              variants: ["300", "400", "500"],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-D7GMKX04DH",
          "UA-120756713-2",
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
          send_page_view: true,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
