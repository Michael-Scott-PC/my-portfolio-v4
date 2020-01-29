import indexStyles from './index.module.css';
import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import SEO from '../components/layout/seo';

const IndexPage = ({ data }) => {
  console.log(data);
  const { strapiProfile } = data;
  const { strapiBackgroundImage } = data;
  const imageData = strapiBackgroundImage.backgroundImage.childImageSharp.fluid;
  console.log(strapiProfile);
  console.log(strapiProfile.headShot);
  return (
    <Fragment>
      <Layout>
        <SEO title="Home" />
        <BackgroundImage
          style={{ width: '100%', height: '60vh', top: '-1px' }}
          Tag="section"
          fluid={imageData}
        >
          <div className={`${indexStyles.welcomeContainer} text-center`}>
            <h2 className={indexStyles.myName}>
              Hi, I'm {data.strapiProfile.name}.
            </h2>
            <h5 className={indexStyles.welcome}>Welcome to my</h5>
            <h2 className={indexStyles.portfolio}>portfolio</h2>
          </div>
        </BackgroundImage>
        <div
          id="container-home"
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <div id="about-me-container" className="mt-5 mb-5">
            <Img
              id="headshot"
              fluid={strapiProfile.headShot.childImageSharp.fluid}
              alt="A head shot photograph of me by the Detroit River"
              style={{ zIndex: '-1', width: '50%', height: 'auto' }}
              className="m-auto"
            />
            <h3 className="text-center mt-3">{strapiProfile.jobTitle}</h3>
            <p id="about-me" className="text-justify">
              {' '}
              {strapiProfile.aboutMe}{' '}
            </p>
          </div>
        </div>
      </Layout>
    </Fragment>
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
    strapiBackgroundImage {
      backgroundImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageLocation
    }
  }
`;

export default IndexPage;
