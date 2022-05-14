import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
// import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
// import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// eslint-disable-next-line
export const IndexPageTemplate = ({
  title,
  heading,
  description,
}) => {
  // const heroImage = getImage(image) || image;

  return (
    <div>
      <div style={{height: '100vh'}}>
      <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                      <p style={{whiteSpace:"nowrap"}}><span className="title is-size-1" style={{marginLeft: "-3px"}}>awa</span><span className="is-size-1" style={{fontWeight: "300"}}>architect</span></p>
                      <h1 className="title is-size-1" style={{marginLeft: "-3px"}}></h1>
                      <h2 className="subtitle is-6">{heading}</h2>
                      <p className="description">{description}</p>
                    </div>
       <Carousel showThumbs={false} showStatus={false} animationHandler={"fade"} swipeable={false} transitionTime={1000} autoPlay={true} interval={3000} infiniteLoop={true}>
                <div style={{height: '92vh'}}>
                    <img style={{
                          height: '100%',
                          width: '100%',
                          objectFit: 'cover'
                    }} src="https://picsum.photos/seed/picsum/600/200" />
                </div>
                <div style={{height: '92vh'}}>
                    <img style={{
                          height: '100%',
                          width: '100%',
                          objectFit: 'cover'
                    }} src="https://picsum.photos/seed/picsum/600/200" />
                </div>
            </Carousel>

      </div>
      {/* <FullWidthImage img={heroImage} title={title} subheading={subheading} /> */}
      {/* <section className="section section--gradient"> */}
        <div style={{display: 'block', margin: '0 auto 10rem', width: 'clamp(300px, 100%, 1000px)', padding: '0 1rem'}}>
          {/* <div className="section"> */}
            {/* <div className="columns"> */}
              {/* <div className="column is-12 is-offset-1"> */}
                {/* <div className="content"> */}
                  {/* <div className="column is-12"> */}
                    <p style={{paddingLeft: '0.5rem'}}>
                      Latest Projects
                    </p>
                    <BlogRoll />
                    {/* <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        More
                      </Link>
                    </div> */}
                  {/* </div> */}
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
          {/* </div> */}
        </div>
      {/* </section> */}
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        description
        
      }
    }
  }
`;
