module.exports = {
  siteMetadata: {
    title: `AKLR`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "syj698ug",
      "dataset": "production"
    }
  }, "gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/",
    },
    resolve:'gatsby-plugin-sharp',
    options: {
      defaults: {
        formats: [`auto`, `webp`],
        placeholder: `blurred`,
        quality: 50,
        breakpoints: [750, 1080, 1366, 1920],
        backgroundColor: `transparent`,
        tracedSVGOptions: {},
        blurredOptions: {},
        jpgOptions: {},
        pngOptions: {},
        webpOptions: {},
        avifOptions: {},
      }
    },
    __key: "images"
  }]
};