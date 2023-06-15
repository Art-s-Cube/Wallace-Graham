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
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `img`,
      path: `${__dirname}/src/data/img/`,
    },
  },
  {
    resolve: `gatsby-plugin-preload-fonts`,
    options: {
      crossOrigin: `use-credentials`,
      // OR
      crossOrigin: pathname =>
        pathname.match(/^\/elevated/) ? `use-credentials` : `anonymous`,
    },
  },
  {
    resolve: `gatsby-source-cloudinary`,
    options: {
      cloudName: `wallacegraham`,
      apiKey: `285297732771442`,
      apiSecret: `TtLWXD8OYIhR3S_yq0jAM-2up88`,
      // resourceType: `image`,
      // type: `twitter`,
      // maxResults: 22,
      // tags: true,
      // context: true,
      // prefix: `demo/animals`
    },
  },
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /\.inline\.svg$/,
      },
    },
  },
    'gatsby-background-image',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-eslint'
  ],
  trailingSlash: "always"
}