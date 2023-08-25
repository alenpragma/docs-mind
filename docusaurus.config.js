require('dotenv').config()

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'MINDCHAIN Docs',
    url: 'https://docs.dogechain.dog',
    baseUrl: '/',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'https://i.postimg.cc/wTNbsthM/image.png',
    organizationName: 'dogechain-lab',
    projectName: 'dogechain-docs',
    
    themes: [
        [
          require.resolve("@easyops-cn/docusaurus-search-local"),
          {
            hashed: true,
            language: ["en"],
          },
        ],
    ],
    themeConfig: {
        colorMode: {
            defaultMode: 'dark'
        },
        prism: {
            defaultLanguage: 'go'
        },
        navbar: {
            hideOnScroll: true,
            title: 'Mindchain',
            logo: {
                alt: 'Mindchain Logo',
                src: 'https://i.postimg.cc/wTNbsthM/image.png',
                href: 'docs/overview'
            },
            items: [
                {
                    to: 'docs/overview',
                    activeBasePath: 'docs/',
                    label: 'Developers',
                    position: 'left'
                },
                // {
                //     to: 'docs/tokenomics/overview',
                //     activeBasePath: 'docs/',
                //     label: 'Tokenomics',
                //     position: 'left'
                // },
                {
                    href: 'https://github.com/Mind-chain',
                    position: 'right',
                    className: 'header-github-link',
                    'aria-label': 'GitHub repository',
                },
            ]
        },
        footer: {
            style: 'dark',
            copyright: `Made by mind mic`
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    showLastUpdateAuthor: false,
                    showLastUpdateTime: false
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            }
        ]
    ],
   
};
