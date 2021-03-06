import React from 'react'
import Helmet from 'react-helmet'

class pageTemplate extends React.Component {
  render() {
    const post = this.props.data.wordpressPost
    const slug = this.props.data.wordpressPost.slug

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    )
  }
}

export default pageTemplate

export const query = graphql`
  query currentPost($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      slug
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
