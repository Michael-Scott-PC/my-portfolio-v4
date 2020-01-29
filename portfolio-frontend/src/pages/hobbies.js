import hobbiesStyles from './hobbies.module.css';
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
        <Fragment>
          <BackgroundImage
            fluid={node.hobbyCover.childImageSharp.fluid}
            style={{
              height: '25vh',
              width: '100%',
              backgroundPosition: 'unset !important',
              backgroundAttachment: 'fixed',
              zIndex: '-100',
              backgroundSize: 'contain',
            }}
          />

          <div className="container-fluid">
            <h3 className={`${hobbiesStyles.hobbyHeaders} mt-3`}>
              {node.hobbyName}
            </h3>
            <p>{node.hobbyInfo}</p>
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
      }
    }
  }
`;

export default hobbies;
