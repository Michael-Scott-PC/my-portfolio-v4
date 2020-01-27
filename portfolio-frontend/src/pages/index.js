import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
// import Image from "../components/image";
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  console.log(data);
  const { strapiProfile } = data;
  console.log(strapiProfile);
  return (
    <Layout>
      <SEO title="Home" />
      <div id="container-home">
        <div class="welcome-container">
          <h5 class="welcome">Welcome to my</h5>
          <h2 class="portfolio">portfolio</h2>
        </div>
        <div id="about-me-container">
          <h2 class="my-name">Hi, I'm {strapiProfile.name}.</h2>
          <img
            id="headshot"
            src={strapiProfile.headShot.fluid}
            alt="A head shot photograph of me by the Detroit River"
          />
          <h3>{strapiProfile.jobTitle}</h3>
          <p id="about-me"> {strapiProfile.aboutMe} </p>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    strapiProfile {
      aboutMe
      name
      jobTitle
      headShot {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

export default IndexPage;
