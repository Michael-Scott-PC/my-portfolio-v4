/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// const { createFilePath } = require(`gatsby-source-filesystem`);

const path = require(`path`);

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const getProjects = await graphql(`
    {
      allStrapiProject(filter: { publishProject: { eq: true } }) {
        edges {
          node {
            coverAltText
            id
            projectDescription
            projectTitle
            coverPhoto {
              childImageSharp {
                fluid {
                  base64
                  aspectRatio
                  sizes
                  src
                  srcSet
                }
              }
            }
            dynamicProjectDetail {
              id
              projectDetailPhoto {
                childImageSharp {
                  fluid(maxHeight: 700, maxWidth: 500, fit: CONTAIN) {
                    base64
                    aspectRatio
                    sizes
                    src
                    srcSet
                  }
                  fixed(width: 125, height: 125) {
                    aspectRatio
                    base64
                    src
                    srcSet
                    srcSetWebp
                    srcWebp
                    tracedSVG
                    height
                    width
                  }
                }
              }
              projectImageDescription
              projectImageTitle
            }
            dynamicTechStack {
              techUsed
              id
            }
            slug
          }
        }
      }
    }
  `);
  // Create pages for each project.
  getProjects.data.allStrapiProject.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve(`./src/templates/project-detail.js`),
      // Data passed to context is available
      // in page queries as GraphQL variables.
      context: {
        slug: node.slug,
        projectData: node,
      },
    });
  });

  const getBlogs = await graphql(
    `
      {
        allStrapiBlog(filter: { publishBlog: { eq: true } }) {
          edges {
            node {
              blogTitle
              blogSubtitle
              id
              slug
              blogCover {
                childImageSharp {
                  fluid {
                    src
                    base64
                    aspectRatio
                    srcSet
                    sizes
                  }
                }
              }
              categories {
                categoryName
              }
              dynamicBlog {
                blogCodeSample
                blogText
                sectionTitle
                id
                blogImage {
                  childImageSharp {
                    fluid {
                      src
                      base64
                      aspectRatio
                      srcSet
                      sizes
                    }
                  }
                }
                blogImageAlt
              }
              blogCoverAlt
              createdAt(formatString: "dddd, MMMM Do, YYYY")
              readTime
            }
          }
        }
      }
    `
  );
  // Create pages for each blog.
  getBlogs.data.allStrapiBlog.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      // Data passed to context is available
      // in page queries as GraphQL variables.
      context: {
        slug: node.slug,
        blogData: node,
      },
    });
  });
};
