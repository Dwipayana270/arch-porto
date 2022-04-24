import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
// import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
// import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
// import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  title,
  heading,
  description,
}) => {
  // const heroImage = getImage(image) || image;

  return (
    <div>
      {/* <FullWidthImage img={heroImage} title={title} subheading={subheading} /> */}
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="column is-12">
                    <div style={{marginBottom: "120px", marginTop: "30px"}}>
                      <p style={{whiteSpace:"nowrap"}}><span className="title is-size-1" style={{marginLeft: "-3px"}}>awa</span><span className="is-size-1" style={{fontWeight: "300"}}>architect</span></p>
                      <h1 className="title is-size-1" style={{marginLeft: "-3px"}}></h1>
                      <h2 className="subtitle is-6">{heading}</h2>
                      <p className="description">{description}</p>
                    </div>
                    <h3 className="title">
                      Latest Projects
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
