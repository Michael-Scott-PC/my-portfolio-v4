import styles from '../css/blog-post.module.css';
import React, { Fragment } from 'react';
import Layout from '../components/layout/layout';
import Img from 'gatsby-image';
import SEO from '../components/layout/seo';
import Markdown from 'markdown-to-jsx';
import { GiAlarmClock } from 'react-icons/gi';

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
    readTime,
  } = blog;

  const imageData = blogCover.childImageSharp.fluid;

  return (
    <Layout>
      <SEO title={blogTitle} description={blogSubtitle} />
      <div className={`${styles.blogPostDiv} mb-5`}>
        <div className="text-center py-5">
          <Img
            fluid={imageData}
            alt={blogCoverAlt}
            className={`${styles.imgStyle} mt-5`}
          />
        </div>
        <h1 className="text-center mb-1">{blogTitle}</h1>
        <p className={`${styles.blogDate} mb-1 mt-5`}>{createdAt}</p>
        <p className={`${styles.readTime} mt-1`}>
          <GiAlarmClock className={'mr-2'} />
          {readTime} minute read
        </p>
        <h4>{blogSubtitle}</h4>
        <ul className={`${styles.ulCategories} ml-0 row`}>
          {categories.map(category => (
            <li
              key={category.categoryName}
              className={`${styles.category} mr-3`}
            >
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
                className={`${styles.imgStyle} my-4`}
              />
            )}

            {item.blogText && (
              <Markdown className={styles.blogText}>{item.blogText}</Markdown>
            )}
            {item.blogCodeSample && <Markdown>{item.blogCodeSample}</Markdown>}
          </Fragment>
        ))}
      </div>
    </Layout>
  );
};

export default blogPost;
