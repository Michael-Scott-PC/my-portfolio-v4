import styles from '../css/hobbies.module.css';
import React, { Fragment } from 'react';
import Layout from '../components/layout/layout';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const hobbies = ({ data }) => {
  console.log(data);
  const { nodes } = data.allStrapiHobby;
  return (
    <Layout>
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
    allStrapiHobby {
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
