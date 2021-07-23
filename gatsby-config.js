module.exports = {
  pathPrefix: '/gatsby-starter-scientist',
  siteMetadata: {
    author: 'Geoffrey Hesketh',
    description: 'Lysosomal control of anabolic-catabolic balance',
    siteUrl: 'https://gghesketh.github.io/science-site',
    title: 'Geoffrey Hesketh PhD',
    // List of link buttons to include on the landing image. Delete this field
    // and/or all entires if you do not want these links.
    // options: 'contact', 'opportunities', 'people', 'publications', 'research'
    primaryLinks: [
      'research',
      'opportunities',
    ],
    // List of PubMed IDs to include on the publication page. Delete this field
    // and/or all entires if you do not want the publication page.
    publications: [
      34079125,
      33464297,
      33340489,
      33060361,
      30251625,
      30065114,
      29778605,
      29412140,
      30097775,
      29048482,
      28487484,
      28096472,
      28188527,
      27482051,
      24856514,
      24795344,
      24612377,
      24643499,
      23650309,
      23104059,
    ],
    // An array of links to display in the page footer. Include as many as you like
    // (not just the ones here). If either the link or text is missing,
    // it will not be shown. Delete this field and/or all entires to disable
    // footer links.
    footerLinks: [
      { text: 'GitHub', link: 'https://github.com/knightjdr' },
      { text: 'Google Scholar', link: 'https://scholar.google.ca/citations?user=M6Y_Y5cAAAAJ' },
      { text: 'LinkedIn', link: 'https://www.linkedin.com/in/james-knight-174996156' },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-scientist',
        short_name: 'scientist',
        start_url: '/',
        background_color: '#3d8183',
        theme_color: '#3d8183',
        display: 'standalone',
        icon: 'src/images/favicon.png',
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown',
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameDark: 'dark-mode',
        classNameLight: 'light-mode',
        storageKey: 'darkMode',
        minify: true,
      },
    },
  ],
};
