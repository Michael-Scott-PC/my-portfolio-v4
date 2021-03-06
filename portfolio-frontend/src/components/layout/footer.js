import footerStyles from '../../css/footer.module.css';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      {
        strapiProfile {
          instagram
          linkedin
          github
          user {
            email
          }
        }
      }
    `
  );

  const { strapiProfile } = data;

  return (
    <footer className={`${footerStyles.footer} container-fluid`}>
      <div className="row text-center pt-5" style={{ height: '100%' }}>
        <div className="col-sm-12 mt-4">
          {strapiProfile.github && (
            <a
              href={`${strapiProfile.github}`}
              aria-label="github icon"
              style={{ color: '#fff', fontSize: '1.5em' }}
              className="m-1 col-md-3"
            >
              <FaGithub />
            </a>
          )}
          {strapiProfile.linkedin && (
            <a
              href={`${strapiProfile.linkedin}`}
              aria-label="Linkedin icon"
              style={{ color: '#fff', fontSize: '1.5em' }}
              className="m-1 col-md-3"
            >
              <FaLinkedin />
            </a>
          )}
          {strapiProfile.twitter && (
            <a
              href={`${strapiProfile.twitter}`}
              aria-label="Twitter icon"
              style={{ color: '#fff', fontSize: '1.5em' }}
              className="m-1 col-md-3"
            >
              <FaTwitter />
            </a>
          )}
          {strapiProfile.instagram && (
            <a
              href={`${strapiProfile.instagram}`}
              aria-label="Instagram icon"
              style={{ color: '#fff', fontSize: '1.5em' }}
              className="m-1 col-md-3"
            >
              <FaInstagram />
            </a>
          )}
          {strapiProfile.user.email && (
            <a
              href={`mailto:${strapiProfile.user.email}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="email icon"
              style={{ color: '#fff', fontSize: '1.5em' }}
              className="m-1 col-md-3"
            >
              <FaEnvelope />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
