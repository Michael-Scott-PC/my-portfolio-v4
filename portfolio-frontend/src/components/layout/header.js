import styles from '../../css/header.module.css';
import React from 'react';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(
    graphql`
      {
        file(relativePath: { eq: "portfolio-logo.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  const toggleCollapse = () => {
    document
      .getElementById('navbarToggleExternalContent')
      .classList.toggle('collapse');
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: '0',
        zIndex: '10000',
      }}
      className={styles.header}
    >
      <Container className={styles.headerContainer}>
        <Row className="pt-2">
          <Col xs={2} className="d-lg-none">
            <button
              id="navbar-toggler"
              className="navbar-toggler"
              style={{ height: '100%' }}
              type="button"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggleCollapse}
            >
              <div className={styles.navbarTogglerLine}></div>
              <div className={styles.navbarTogglerLine}></div>
              <div className={styles.navbarTogglerLine}></div>
            </button>
          </Col>

          <Col xs={8} lg={3} className="m-auto text-center">
            <h1 style={{ margin: 0, fontSize: '1.5em' }}>
              <Link to="/" className={`${styles.siteTitle}`}>
                {siteTitle}
              </Link>
            </h1>
          </Col>
          <Col xs={2} className="d-lg-none px-2 mb-2">
            <Img
              fluid={data.file.childImageSharp.fluid}
              style={{
                objectFit: 'contain !important',
              }}
              className=" mt-2"
            />
          </Col>
          <Col
            lg={9}
            className={`${styles.linkContainer} text-center collapse`}
            id="navbarToggleExternalContent"
          >
            <Img
              fluid={data.file.childImageSharp.fluid}
              style={{ width: '7%' }}
              className="d-none d-lg-inline mr-5"
            />
            <Link to="/" className={`${styles.dropDownItem}`}>
              Home
            </Link>
            <Link to="/projects" className={`${styles.dropDownItem}`}>
              Projects
            </Link>
            <Link to="/skills" className={`${styles.dropDownItem}`}>
              Skills
            </Link>
            <Link to="/hobbies" className={`${styles.dropDownItem}`}>
              Hobbies
            </Link>
            <Link to="/blogs" className={`${styles.dropDownItem}`}>
              Blog
            </Link>
            <Link to="/contact" className={`${styles.dropDownItem}`}>
              Contact
            </Link>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
