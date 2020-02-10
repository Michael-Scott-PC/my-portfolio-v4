import styles from '../css/hobbies.module.css';
import React, { Fragment } from 'react';
import Layout from '../components/layout/layout';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import SEO from '../components/layout/seo';

const hobbies = ({ data }) => {
  const { nodes } = data.allStrapiHobby;
  return (
    <Layout>
      <SEO
        title="Hobbies"
        description="Hobbies and interests for Mike Enochs."
      />
      {nodes.map(node => (
        <Fragment key={node.id}>
          <BackgroundImage
            fluid={node.hobbyCover.childImageSharp.fluid}
            className={styles.backgroundImages}
          />
          <div className={`${styles.hobbyInfoContainer} container-fluid my-5`}>
            <h3 className={`${styles.hobbyHeaders} mt-3`}>{node.hobbyName}</h3>
            <p className={styles.hobbyInfo}>{node.hobbyInfo}</p>
          </div>
        </Fragment>
      ))}
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiHobby(sort: { order: DESC }) {
      nodes {
        hobbyName
        hobbyInfo
        hobbyCover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        id
      }
    }
  }
`;

export default hobbies;
