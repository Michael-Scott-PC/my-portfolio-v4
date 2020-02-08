import React, { Fragment } from 'react';
import Layout from '../components/layout/layout';
import ContactForm from '../components/form/contactForm';
import SEO from '../components/layout/seo';

const contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="Contact form to communicate with Mike Enochs."
      />
      <Fragment>
        <ContactForm />
      </Fragment>
    </Layout>
  );
};

export default contact;
