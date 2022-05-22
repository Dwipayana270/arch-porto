import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { Carousel } from 'react-responsive-carousel';

import PreviewCompatibleImage from './PreviewCompatibleImage'

class Thumbnails extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <>
      <div style={{height: '100vh'}}>
      <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                      
                    </div>
       <Carousel showThumbs={false} showStatus={false} animationHandler={"fade"} swipeable={false} transitionTime={1000} autoPlay={true} interval={3000} infiniteLoop={true}>
                
       {posts &&
          posts.map(({ node: post }) => (
            <>
                <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '99'}}>
                <p style={{whiteSpace:"nowrap", color: 'white'}}><span className="is-size-4" style={{fontWeight: "300"}}>project:</span></p>

                      <h2 style={{color: 'white'}} className="subtitle is-size-1">{post.frontmatter.title}</h2>
                    </div>
              <div>
                {post.frontmatter.featuredimage ? (
                         <div key={post.id} style={{height: '92vh'}}>
                         {/* <img style={{
                               height: '100%',
                               width: '100%',
                               objectFit: 'cover'
                         }} src={post.frontmatter.featuredimage} /> */}
                         <div style={{
                               height: '100%',
                               width: '100%',
                               objectFit: 'cover'
                         }}>

                          <PreviewCompatibleImage style={{
                               height: '100% !important',
                               width: '100% !important',
                               objectFit: 'cover !important'
                         }}
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
                         </div>
                     </div>
                ) : null}

              </div>
            </>
            
          ))}

               
            </Carousel>

      </div>
        
      </>
  )}
}

Hero.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function Hero() {
  return (
    <StaticQuery
      query={graphql`
        query ThumbnailsQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
                      gatsbyImageData(
                        height: 800
                        width: 1200
                        quality: 100
                        layout: CONSTRAINED
                      )
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <Thumbnails data={data} count={count} />}
    />
  );
}
