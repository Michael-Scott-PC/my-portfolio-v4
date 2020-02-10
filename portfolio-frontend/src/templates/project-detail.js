import styles from '../css/project-detail.module.css';
import React, { useState } from 'react';
import Layout from '../components/layout/layout';
import Img from 'gatsby-image';
import SEO from '../components/layout/seo';
import { Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ProjModal from '../components/modal/project-detail-modal';

const ProjectDetail = data => {
  const [showProjModal, setShowProjModal] = useState(false);

  const {
    projectData: {
      projectTitle,
      projectDescription,
      coverAltText,
      coverPhoto: {
        childImageSharp: { fluid: imageData },
      },
      dynamicProjectDetail,
      dynamicTechStack,
    },
  } = data.pageContext;

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 10,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 3,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <Layout>
      <SEO title={projectTitle} description={projectDescription} />
      <div className={styles.divContainer}>
        <h2 className="text-center pt-5">{projectTitle} </h2>
        <Row className="m-0" onClick={() => console.log('click')}>
          <Col xs={12} lg={6} className="text-center my-5">
            {' '}
            <Img
              className={`${styles.imgStyle}`}
              fluid={imageData}
              alt={coverAltText}
            />
          </Col>
          <Col lg={6} className="p-0">
            <h3 className="text-center">Environment</h3>
            <ul className={styles.ulTech}>
              <Row>
                {dynamicTechStack.map(stack => (
                  <Col key={stack.id}>
                    <li className={styles.liTech} key={stack.id}>
                      {' '}
                      {stack.techUsed}{' '}
                    </li>
                  </Col>
                ))}
              </Row>
            </ul>
          </Col>
        </Row>
        <h3>Project Description</h3>
        <Row>
          <Col>{projectDescription}</Col>
        </Row>
      </div>

      <Carousel
        className="react-multi-carousel-list mt-3"
        responsive={responsive}
      >
        {dynamicProjectDetail.map(detail => (
          <Img
            key={detail.id}
            fixed={detail.projectDetailPhoto.childImageSharp.fixed}
            alt={detail.projectImageDescription}
            className={styles.reactMultiCarouselItem}
          />
        ))}
      </Carousel>
      <div className="text-center mt-3 mb-5">
        <button
          onClick={() => setShowProjModal(!showProjModal)}
          className="btn btn-primary "
        >
          Image Details
        </button>
      </div>
      <ProjModal
        projectdetails={dynamicProjectDetail}
        show={showProjModal}
        onHide={() => setShowProjModal(false)}
        title={projectTitle}
      />
    </Layout>
  );
};

export default ProjectDetail;
