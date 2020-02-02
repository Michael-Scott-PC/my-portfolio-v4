import blogsStyles from './blogs.module.css';
import React, { Fragment } from 'react';
import Layout from '../components/layout/layout';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

const blogs = ({ data }) => {
  console.log(data);

  const { nodes } = data.allStrapiBlog;

  return (
    <Layout>
      <Fragment>
        <div className={`${blogsStyles.blogHeaderDiv}`}>
          <h1 className={`${blogsStyles.mainHeader} text-center mb-1 mt-5`}>
            My self-taught mistakes
          </h1>
          <h4 className={`${blogsStyles.subHeader} text-center mb-5`}>
            &#40;and successes&#41;
          </h4>
          {nodes.map(node => (
            <div key={node.id} className={`${blogsStyles.blogPreviewDiv} pt-5`}>
              <Img
                fluid={node.blogCover.childImageSharp.fluid}
                className="d-none d-lg"
              />
              <h3 className={`${blogsStyles.blogTitle} mb-1`}>
                {node.blogTitle}
              </h3>
              <p className={blogsStyles.blogDate}>{node.createdAt}</p>
              <p className={`${blogsStyles.blogSubtitle} mb-2`}>
                {node.blogSubtitle}
              </p>
              <Link to={`/${node.slug}`}>Read More</Link>
            </div>
          ))}
        </div>
      </Fragment>
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiBlog(
      filter: { publishBlog: { eq: true } }
      sort: { fields: dynamicBlog___createdAt, order: ASC }
    ) {
      nodes {
        blogTitle
        blogSubtitle
        blogCover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        categories {
          categoryName
        }
        id
        internal {
          type
        }
        dynamicBlog {
          blogText
          sectionTitle
          blogCodeSample
          blogImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        createdAt(formatString: "dddd, MMMM Do, YYYY")
        slug
      }
      totalCount
    }
  }
`;

export default blogs;
