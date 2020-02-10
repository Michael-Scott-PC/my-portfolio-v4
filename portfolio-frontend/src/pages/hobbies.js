import styles from '../css/hobbies.module.css';
import React, { Fragment } from 'react';
import Layout from '../components/layout/layout';
import { graphql } from 'gatsby';
// import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import SEO from '../components/layout/seo';
import { Row, Col } from 'react-bootstrap';

const hobbies = ({ data }) => {
  const { nodes } = data.allStrapiHobby;
  console.log(nodes);
  return (
    <Layout>
      <SEO
        title="Hobbies"
        description="Hobbies and interests for Mike Enochs."
      />
      {nodes.map(node => (
        <Fragment key={node.id}>
          <Row className={`${styles.backgroundImageContainer} my-5 ml-0 mr-0`}>
            <Col xs={12} lg={6} className="pl-0 pr-0">
              <Img
                fluid={node.hobbyCover.childImageSharp.fluid}
                style={{
                  height: '25vh !important',
                  width: '100% !important',
                  backgroundSize: 'contain !important',
                  backgroundAttachment: 'fixed !important',
                  backgroundPosition: 'unset !important',
                  backgroundPositionY: '10vh !important',
                }}
              />
            </Col>
            <Col xs={12} lg={6}>
              <div
                className={`${styles.hobbyInfoContainer} container-fluid my-5`}
              >
                <h3 className={`${styles.hobbyHeaders} mt-3`}>
                  {node.hobbyName}
                </h3>
                <p className={styles.hobbyInfo}>{node.hobbyInfo}</p>
              </div>
            </Col>
          </Row>
        </Fragment>
      ))}
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiHobby(sort: { order: DESC, fields: createdAt }) {
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
