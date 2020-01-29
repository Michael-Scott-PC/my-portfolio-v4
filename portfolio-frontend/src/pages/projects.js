import React from 'react';
import Layout from '../components/layout/layout';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

const projects = ({ data }) => {
  const { nodes } = data.allStrapiProject;
  console.log(nodes);
  return (
    <Layout>
      <div>
        <h1 className="text-center my-5">Projects</h1>
        <div
          className="py-5"
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          {nodes.map(node => (
            <div key={node.id}>
              {/* TODO: dynamically create page slugs */}
              <Link to="/">
                <h3 className="text-center">{node.projectTitle}</h3>
                <Img
                  fluid={node.coverPhoto.childImageSharp.fluid}
                  alt={node.coverAltText}
                  style={{ maxHeight: '250px' }}
                  className="m-3"
                />
              </Link>
              <p className="text-justify pt-3 pb-5">
                {node.projectDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiProject(filter: { publishProject: { eq: true } }) {
      nodes {
        coverAltText
        coverPhoto {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
            fixed(height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        projectTitle
        projectDescription
        dynamicTechStack {
          techUsed
        }
        dynamicProjectDetail {
          projectImageDescription
          projectImageTitle
          projectDetailPhoto {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        publishProject
        id
      }
    }
  }
`;

export default projects;
