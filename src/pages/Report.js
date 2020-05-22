import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Form } from 'react-bootstrap';

import Arrow from '../assets/images/blog/icons/arrow.svg';
import Background from '../assets/images/add-account/logotype.svg';

function Report() {
  return (
    <div className="report">
        {/* Start Header */}
        <header>
            <Container>
              {/* Start Heading */}
              <div className="heading-page">
                <Link to="/">
                  <img src={Arrow} alt="Back" />
                </Link>
                <h2 className="text-align">ابلاغ</h2>
              </div>
              {/* End Heading */}
            </Container>
          </header>
          {/* End Header */}

          {/* Start Body */}
          <section className="report-body text-center">
            <Container>
              <div className="report-form">
                <img src={Background} alt="background" />
                <Form>
                <Form.Group>
                  <Form.Label>الاسم</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                <Form.Group>
                  <Form.Label> رقم الجوال</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
                <Form.Group controlId=".ControlTextarea1">
                  <Form.Label>سبب البلاغ</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
                </Form>
              </div>
              <a href="#">ابلاغ</a>
            </Container>
          </section>
          {/* End Body */}

          <section className="pages-controls d-md-none">
              <Container>
              <Link to="/add-account" className="active">إضافة حساب </Link>
              <Link to="/" className="hover">الرئيسية </Link>
              <Link to="/subscription" className="premium">إشتراك</Link>
              </Container>
          </section>
    </div>
  );
}

export default Report;
