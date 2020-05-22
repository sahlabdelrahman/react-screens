import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';

import Counter from '../components/Counter';

import Arrow from '../assets/images/blog/icons/arrow.svg';
import Background from '../assets/images/add-account/logotype.svg';

function Subscription() {
  return (
    <div className="subscription">
        {/* Start Header */}
        <header>
            <Container>
              {/* Start Heading */}
              <div className="heading-page">
                <Link to="/add-account">
                  <img src={Arrow} alt="Back" />
                </Link>
                <h2 className="text-align">إشتراك</h2>
              </div>
              {/* End Heading */}
              {/* Start Nav */}
              <nav className="d-none d-md-block text-center">
                      <Row>
                        <Col md={4}>
                        <Link to="/" >الرئيسية </Link>
                        </Col>
                        <Col md={4}>
                        <Link to="/add-account">إضافة حساب </Link>
                        </Col>
                        <Col md={4}>
                        <Link to="/subscription" className="active">إشتراك</Link>
                        </Col>
                      </Row>
                </nav>
                {/* End Nav */}
            </Container>
          </header>
          {/* End Header */}

          {/* Start Body */}
          <section className="subscription-body text-center">
            <Container>
              <div className="subscription-form">
                <img src={Background} alt="background" />
              </div>
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
          <Counter number={'3'} />
    </div>
  );
}

export default Subscription;
