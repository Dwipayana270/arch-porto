import * as React from "react";

import Layout from "../../components/Layout";
import Urban from "../../components/Urban";

export default class DesignBlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div>
        {/* <FullWidthImage img={heroImage} title={title} subheading={subheading} /> */}
        <section className="section section--gradient">
          <div className="container">
            <div className="section">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <div className="content">
                    <div className="column is-12">
                      <h3 className="title">
                        Urban
                      </h3>
                      <Urban />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </Layout>
    );
  }
}
