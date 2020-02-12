import styles from '../../css/project-detail-modal.module.css';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import Img from 'gatsby-image';

const projectDetailModal = props => {
  return (
    <div>
      <Modal {...props}>
        <Modal.Header closeButton>
          <h3 className={`${styles.h3Title} text-center`}> {props.title} </h3>
        </Modal.Header>
        <Modal.Body>
          <Carousel interval="50000">
            {props.projectdetails.map(detail => (
              <Carousel.Item key={detail.id}>
                <h3 className="text-center">{detail.projectImageTitle}</h3>
                <Img
                  fluid={detail.projectDetailPhoto.childImageSharp.fluid}
                  className={styles.imgModal}
                />
                <p className={`${styles.description} mt-4`}>
                  {detail.projectImageDescription}
                </p>
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default projectDetailModal;
