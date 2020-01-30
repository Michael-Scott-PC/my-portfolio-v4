import React, { Fragment } from 'react';
import Layout from '../components/layout/layout';
import ContactForm from '../components/form/contactForm';

const contact = () => {
  return (
    <Layout>
      <Fragment>
        <ContactForm />
      </Fragment>
    </Layout>
  );
};

export default contact;
