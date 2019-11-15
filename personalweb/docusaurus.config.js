
module.exports = {
  title: 'Felipe Melo Moura | Personal HomePage',
  tagline: 'My Personal Home Page',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook',
  projectName: 'docusaurus',
  themeConfig: {
    navbar: {
      title: 'Felipe',
      links: [
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/fmmMelo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Professional',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/fmmMelo',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/felipe-melo-a17b39196/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Instagram',
              to: 'blog',
            },
            {
              label: 'Facebook',
              to: 'blog',
            },
            
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
       
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
