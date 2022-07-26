module.exports = {
  pathPrefix: '',
  siteMetadata: {
    author: 'The Hesketh Lab @ Dalhousie University',
    description: 'Lysosomal control of cellular anabolic-catabolic balance',
    siteUrl: 'https://lysosome.ca',
    title: 'The Hesketh Lab',
    // List of link buttons to include on the landing image. Delete this field
    // and/or all entires if you do not want these links.
    // options: 'contact', 'opportunities', 'people', 'publications', 'research'
    primaryLinks: [
      'research',
      'opportunities',
      'contact',
    ],
    // List of PubMed IDs to include on the publication page. Delete this field
    // and/or all entires if you do not want the publication page.
    publications: [
      35794005,
      35780247,
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
      21421555,
      20167932,
      19961855,
      19797425,
      19701097,
      19237662,
      19122180,
      17434978,
      12089186,
    ],
    // An array of links to display in the page footer. Include as many as you like
    // (not just the ones here). If either the link or text is missing,
    // it will not be shown. Delete this field and/or all entires to disable
    // footer links.
    footerLinks: [
      { text: 'Google Scholar', link: 'https://scholar.google.ca/citations?user=tMBrIG4AAAAJ&hl=en' },
      { text: 'Twitter', link: 'https://twitter.com/lysosomeDOTca' },
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
