import styles from '../../css/header.module.css';
import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

const Header = ({ siteTitle }) => {
  const toggleCollapse = () => {
    document
      .getElementById('navbarToggleExternalContent')
      .classList.toggle('collapse');
  };

  return (
    <header
      style={{
        // marginBottom: `1.45rem`,
        position: 'sticky',
        top: '0',
        zIndex: '10000',
      }}
      className={styles.header}
    >
      <Container className={styles.headerContainer}>
        <Row className="pt-2">
          <Col xs={3} className="d-lg-none">
            <button
              id="navbar-toggler"
              className="navbar-toggler"
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

          <Col xs={9} lg={3} className="m-auto">
            <h1 style={{ margin: 0, fontSize: '1.5em' }}>
              <Link to="/" className={`${styles.siteTitle}`}>
                {siteTitle}
              </Link>
            </h1>
          </Col>
          <Col
            lg={9}
            className={`${styles.linkContainer} text-center collapse`}
            id="navbarToggleExternalContent"
          >
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
