import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import SimpleReactLightbox from "simple-react-lightbox";
import favicon from "../img/favicon-32x32.png";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <div>
      <SimpleReactLightbox>
        <Helmet link={[{ rel: "icon", type: "image/png", href: favicon }]}>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
          <meta
            property="og:image"
            content={`${withPrefix("/")}img/og-image.jpg`}
          />
        </Helmet>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </SimpleReactLightbox>
    </div>
  );
};

export default TemplateWrapper;
