module.exports = {
  siteMetadata: {
    title: 'Wallace & Graham',
    description: 'North Carolina Attorneys',
    author: 'Arts Cube',
    siteUrl: "https://wallace-graham.onrender.com/"
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "TDDiAm34WutjU0YBsZFA75QbKRsacxzRdHE9-ah6pGU",
      "spaceId": "qek284u2824f"
    }
  },
  'gatsby-transformer-json',
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `data`,
      path: `${__dirname}/src/data/`, // Adjust this path to where your JSON file is located
    },
  },
    
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-eslint'
  ],
  trailingSlash: "always"
}