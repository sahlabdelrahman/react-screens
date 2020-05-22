import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Form, Row, Col } from 'react-bootstrap';

import Counter from '../components/Counter';

import Arrow from '../assets/images/blog/icons/arrow.svg';
import ArrowDown from '../assets/images/add-account/arrow-down.svg';
import Background from '../assets/images/add-account/logotype.svg';

function AddAccount() {
  return (
    <div className="add-account">
        {/* Start Header */}
        <header>
            <Container>
              {/* Start Heading */}
              <div className="heading-page">
                <Link to="/">
                  <img src={Arrow} alt="Back" />
                </Link>
                <h2 className="text-align">أضف بياناتك</h2>
              </div>
              {/* End Heading */}
              {/* Start Nav */}
              <nav className="d-none d-md-block text-center">
                      <Row>
                        <Col md={4}>
                        <Link to="/">الرئيسية </Link>
                        </Col>
                        <Col md={4}>
                        <Link to="/add-account" className="active">إضافة حساب </Link>
                        </Col>
                        <Col md={4}>
                        <Link to="/subscription">إشتراك</Link>
                        </Col>
                      </Row>
                </nav>
                {/* End Nav */}
            </Container>
          </header>
          {/* End Header */}

          {/* Start Body */}
          <section className="add-body text-center">
            <Container>
              <div className="add-form">
                <img src={Background} alt="background" />
                <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>أسم الحساب</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                <Form.Group >
                  <Form.Label>أسم المستخدم</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="formGridState">
                  <Form.Label>الدولة</Form.Label>
                  <select className="form-control">
                    <img src={ArrowDown} />
                    <option>...</option>
                  </select>
                </Form.Group>
                <Form.Group controlId="formGridState">
                  <Form.Label>المدينة</Form.Label>
                  <Form.Control as="select" value="Choose...">
                    <option>...</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formGridState">
                  <Form.Label>الجنس</Form.Label>
                  <Form.Control as="select" value="Choose...">
                    <option>...</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formGridState">
                  <Form.Label>العمر</Form.Label>
                  <Form.Control as="select" value="Choose...">
                    <option>...</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group >
                  <Form.Label>الرسالة</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                </Form>
              </div>
              <a href="#">أضف حسابك</a>
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
          <Counter number={'2'} />
    </div>
  );
}

export default AddAccount;
