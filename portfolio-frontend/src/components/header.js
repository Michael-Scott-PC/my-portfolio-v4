import headerStyles from './header.module.css';
import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

const Header = ({ siteTitle }) => {
  const toggleCollapse = () => {
    document
      .getElementById('navbarToggleExternalContent')
      .classList.toggle('collapse');
  };

  const data = useStaticQuery(
    graphql`
      query {
        strapiBackgroundImage {
          backgroundImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imageLocation
        }
      }
    `
  );
  console.log(data);
  console.log(data.strapiBackgroundImage.backgroundImage.childImageSharp.fluid);
  const imageData =
    data.strapiBackgroundImage.backgroundImage.childImageSharp.fluid;

  return (
    <BackgroundImage
      style={{ width: '100%', height: '60vh' }}
      Tag="section"
      fluid={imageData}
    >
      <header
        style={{
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            // padding: `1.45rem 1.0875rem`,
          }}
        >
          <Container>
            <Row className="pt-2">
              <Col xs={3}>
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
                  <div className={headerStyles.navbarTogglerLine}></div>
                  <div className={headerStyles.navbarTogglerLine}></div>
                  <div className={headerStyles.navbarTogglerLine}></div>
                </button>
              </Col>

              <Col xs={9} className="m-auto">
                <h1 style={{ margin: 0, fontSize: '1.5em' }}>
                  <Link
                    to="/"
                    style={{
                      color: `white`,
                      textDecoration: `none`,
                    }}
                  >
                    {siteTitle}
                  </Link>
                </h1>
              </Col>
              <div
                className={`${headerStyles.linkContainer} col-12 col-lg-10 text-center collapse`}
                id="navbarToggleExternalContent"
              >
                <Link
                  to="/"
                  className="dropdown-item"
                  style={{ color: '#fff' }}
                >
                  Home
                </Link>
                <Link to="" className="dropdown-item" style={{ color: '#fff' }}>
                  Projects
                </Link>
                <Link to="" className="dropdown-item" style={{ color: '#fff' }}>
                  Skills
                </Link>
                <Link to="" className="dropdown-item" style={{ color: '#fff' }}>
                  Hobbies
                </Link>
                <Link to="" className="dropdown-item" style={{ color: '#fff' }}>
                  Blog
                </Link>
                <Link to="" className="dropdown-item" style={{ color: '#fff' }}>
                  Contact
                </Link>
              </div>
            </Row>
          </Container>
        </div>
      </header>
    </BackgroundImage>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
