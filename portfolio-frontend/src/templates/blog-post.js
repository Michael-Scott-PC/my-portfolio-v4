import styles from '../css/blog-post.module.css';
import React, { Fragment } from 'react';
import Layout from '../components/layout/layout';
import Img from 'gatsby-image';
import SEO from '../components/layout/seo';

const blogPost = data => {
  const blog = data.pageContext.blogData;

  const {
    blogTitle,
    blogSubtitle,
    blogCover,
    categories,
    dynamicBlog,
    blogCoverAlt,
    createdAt,
  } = blog;

  const imageData = blogCover.childImageSharp.fluid;

  return (
    <Layout>
      <SEO title={blogTitle} description={blogSubtitle} />
      <div className={styles.blogPostDiv}>
        <Img fluid={imageData} alt={blogCoverAlt} className="mt-5" />
        <h1 className="text-center mb-1">{blogTitle}</h1>
        <p className={`${styles.blogDate} text-center`}>{createdAt}</p>
        <h4>{blogSubtitle}</h4>
        <ul className={`${styles.ulCategories} ml-0 row`}>
          {categories.map(category => (
            <li key={category.categoryName} className="mr-3">
              {category.categoryName === 'Content Management System (CMS)'
                ? 'CMS'
                : category.categoryName === 'Search Engine Optimization (SEO)'
                ? 'SEO'
                : category.categoryName}
            </li>
          ))}
        </ul>
        {dynamicBlog.map(item => (
          <Fragment key={item.id}>
            {item.sectionTitle && <h3 className="mt-5">{item.sectionTitle}</h3>}

            {item.blogImage && (
              <Img
                fluid={item.blogImage.childImageSharp.fluid}
                alt={item.blogImageAlt}
                className="mb-4"
              />
            )}

            {item.blogText && <p>{item.blogText}</p>}
            {item.blogCodeSample && <p>{item.blogCodeSample}</p>}
          </Fragment>
        ))}
      </div>
    </Layout>
  );
};

export default blogPost;
