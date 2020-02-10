import styles from '../css/projects.module.css';
import React from 'react';
import Layout from '../components/layout/layout';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/layout/seo';

const projects = ({ data }) => {
  const { nodes } = data.allStrapiProject;
  return (
    <Layout>
      <SEO
        title="Projects"
        description="Full-stack development projects for Mike Enochs"
      />
      <div>
        <h1 className="text-center my-5">Projects</h1>
        <div className={`${styles.projectsContainer} py-5`}>
          {nodes.map(node => (
            <div
              key={node.id}
              className={`${styles.singleProjectContainer} mb-5`}
            >
              {/* TODO: dynamically create page slugs */}
              <Link to={`${node.slug}`}>
                <h3 className="text-center mt-4">{node.projectTitle}</h3>
                <Img
                  fluid={node.coverPhoto.childImageSharp.fluid}
                  alt={node.coverAltText}
                  style={{ maxHeight: '250px' }}
                  className={`${styles.projImg} m-3`}
                />
              </Link>
              {/* <p className="text-justify pt-3 pb-5">
                {node.projectDescription}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiProject(
      filter: { publishProject: { eq: true } }
      sort: { order: DESC, fields: createdAt }
    ) {
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
        slug
      }
    }
  }
`;

export default projects;
