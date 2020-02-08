import styles from '../css/index.module.css';
import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';
// import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import SEO from '../components/layout/seo';

const IndexPage = ({ data }) => {
  const { strapiProfile } = data;
  const { nodes } = data.allStrapiBackgroundImage;

  const imageDataXs = nodes[0].backgroundImage.childImageSharp.fluid;
  const imageDataSm = nodes[1].backgroundImage.childImageSharp.fluid;

  return (
    <Fragment>
      <Layout>
        <SEO title="Home" description={data.strapiProfile.jobTitle} />
        {/* xs screen */}
        <Img
          style={{ width: '100%', height: '60vh', top: '-1px' }}
          Tag="section"
          fluid={imageDataXs}
          className={`${styles.backgroundImgXs} d-sm-none`}
        />
        <div className={`${styles.welcomeContainer} text-center`}>
          <h2 className={`${styles.myName}`}>
            Hi, I'm {data.strapiProfile.name}.
          </h2>
          <h5 className={styles.welcome}>Welcome to my</h5>
          <h2 className={styles.portfolio}>portfolio</h2>
        </div>

        {/* sm screen & above */}
        <div className="d-none d-sm-block">
          <Img
            style={{ width: '100%', height: '60vh', top: '-1px' }}
            Tag="section"
            fluid={imageDataSm}
          />
          <div className={`${styles.welcomeContainer} text-center mt-5`}>
            <h5 className={styles.welcome}>Welcome to my</h5>
            <h2 className={styles.portfolio}>portfolio</h2>
          </div>
        </div>

        <div
          id="container-home"
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 2rem 1.45rem`,
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
            <p id="about-me" className={`${styles.aboutMe} text-justify`}>
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
  {
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
    allStrapiBackgroundImage {
      nodes {
        backgroundImage {
          childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
              base64
              srcWebp
              sizes
            }
          }
        }
        imageLocation
      }
    }
  }
`;

export default IndexPage;
