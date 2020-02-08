import styles from '../../css/contactForm.module.css';
import React, { Fragment } from 'react';
import { Formik } from 'formik';
import contactSchema from './schema/contactSchema';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { FaEnvelope } from 'react-icons/fa';

import { createContact } from '../../actions/contact';

const contactForm = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <Formik
          validationSchema={contactSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              createContact(values);
              setSubmitting(false);
              resetForm(true);
            }, 400);
          }}
          initialValues={{
            contactName: '',
            contactEmail: '',
            contactPhone: '',
            inquiry: '',
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row>
                <Col className="text-center">
                  <h1 className="mt-5 mx-auto get-in-touch">
                    Get in touch! <FaEnvelope />
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col className="col-8 col-lg-6 mx-auto text-center">
                  <Form.Group controlId="formGroupFirstName">
                    <Form.Label className={styles.formLabel}>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="contactName"
                      placeholder="enter full name"
                      className="text-center"
                      value={values.contactName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isValid={touched.contactName && !errors.contactName}
                      isInvalid={touched.contactName && errors.contactName}
                      required
                    />
                    {errors.contactName && touched.contactName ? (
                      <p style={{ color: 'red' }}>{errors.contactName}</p>
                    ) : null}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="col-8 col-lg-6 mx-auto text-center">
                  <Form.Group controlId="formGroupEmail">
                    <Form.Label className={styles.formLabel}>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="contactEmail"
                      placeholder="enter email"
                      className="text-center"
                      value={values.contactEmail}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.contactEmail && !errors.contactEmail}
                      isInvalid={touched.contactEmail && errors.contactEmail}
                      required
                    />
                    {errors.contactEmail && touched.contactEmail ? (
                      <p style={{ color: 'red' }}>{errors.contactEmail}</p>
                    ) : null}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="col-8 col-lg-6 mx-auto text-center">
                  <Form.Group controlId="formGroupPhoneNumber">
                    <Form.Label className={styles.formLabel}>Phone</Form.Label>
                    <Form.Control
                      className="text-center"
                      type="text"
                      name="contactPhone"
                      placeholder="enter phone (optional)"
                      value={values.contactPhone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.contactPhone && !errors.contactPhone}
                      isInvalid={touched.contactPhone && errors.contactPhone}
                    />
                    {errors.contactPhone && touched.contactPhone ? (
                      <p style={{ color: 'red' }}>{errors.contactPhone}</p>
                    ) : null}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="col-8 col-lg-6 mx-auto text-center">
                  <Form.Group controlId="formGroupContactPreference">
                    <Form.Label className={styles.formLabel}>
                      Contact Preference?
                    </Form.Label>
                    <Form.Control
                      as="select"
                      style={{ textAlignLast: 'center' }}
                      type="select"
                      name="contactPreference"
                      value={values.contactPreference}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={
                        touched.contactPreference && !errors.contactPreference
                      }
                      isInvalid={
                        touched.contactPreference && errors.contactPreference
                      }
                    >
                      <option>email</option>
                      <option>phone</option>
                    </Form.Control>
                    {errors.contactPreference && touched.contactPreference ? (
                      <p style={{ color: 'red' }}>{errors.contactPreference}</p>
                    ) : null}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="col-8 col-lg-6 mb-3 mx-auto text-center">
                  <Form.Group controlId="formGroupTextArea">
                    <Form.Label className={styles.formLabel}>
                      How may I help you?
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      name="inquiry"
                      value={values.inquiry}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.inquiry && !errors.inquiry}
                      isInvalid={touched.inquiry && errors.inquiry}
                      required
                    />
                    {errors.inquiry && touched.inquiry ? (
                      <p style={{ color: 'red' }}>{errors.inquiry}</p>
                    ) : null}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="col-11 col-md-4 col-lg-2 mb-3 mx-auto text-center">
                  <Button className="mt-4 mb-5 submit-inquiry" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </div>
    </Fragment>
  );
};

export default contactForm;
