import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Form } from 'react-bootstrap';

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
                <a href="#">
                  <img src={Arrow} alt="Back" />
                </a>
                <h2 className="text-align">إشتراك</h2>
              </div>
              {/* Start Heading */}
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
    </div>
  );
}

export default Subscription;
