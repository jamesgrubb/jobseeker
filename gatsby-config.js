module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'jobseekers414242226.wordpress.com',
        protocol: 'https',
        hostingWPCOM: true,
        useACF: false,
        auth: {
          wpcom_app_clientSecret:
            'n6uyMiqPV8ezdXK45jP9WGLheNupZj71HCPyErmeq1983rtkgvBzrguY2Qw29nxA',
          wpcom_app_clientId: '58621',
          wpcom_user: 'james@jamesgrubb.co.uk',
          wpcom_pass: 'capdewordpress',
        },
        verboseOutput: false,
      },
    },
  ],
}
