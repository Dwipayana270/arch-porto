import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import {captionStyle4, wrapper} from './Image.module.css'

class BlogRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className='columns is-multiline px-0 mx-0 pt-3'>
        {posts &&
          posts.map(({ node: post }) => (
            // <div >
              <div className='column is-half-tablet is-thirds-widescreen' key={post.id} style={{padding: 0}}>
                {post.frontmatter.featuredimage ? (
                  <div className={captionStyle4}> 
                    <li>
                    
                      <Link to={post.fields.slug}>
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                            width:
                              post.frontmatter.featuredimage.childImageSharp
                                .gatsbyImageData.width,
                            height:
                              post.frontmatter.featuredimage.childImageSharp
                                .gatsbyImageData.height,
                          }}
                        />
                      </Link>
                      <p>{post.frontmatter.title}</p>
                    </li>
                  </div>  
                ) : null}

              </div>
                
                  /* <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                  </p> */
              /* <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
              </article> */
            
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function BlogRoll() {
  return (
    <StaticQuery
      query={graphql`
      query UrbanQuery {
        allMarkdownRemark(
          sort: {order: DESC, fields: [frontmatter___date]}
          filter: {frontmatter: {templateKey: {eq: "blog-post"}, tags: {eq: "Urban"}}}
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                featuredpost
                featuredimage {
                  childImageSharp {
                    gatsbyImageData(height: 500, quality: 100, layout: CONSTRAINED)
                  }
                }
              }
            }
          }
        }
      }
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  );
}
