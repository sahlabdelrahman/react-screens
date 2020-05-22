import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

// components
import NewsCard from '../components/NewsCard';

import Arrow from '../assets/images/blog/icons/arrow.svg';

function Blog() {
  return (
    <div className="blog-page">
          
          {/* Start Header */}
          <header>
            <Container>
              
              {/* Start Heading */}
              <div className="heading-page">
                <a href="#">
                  <img src={Arrow} alt="Back" />
                </a>
                <h2 className="text-align">المدونة</h2>
              </div>
              {/* End Heading */}

              {/* Start Nav */}
              <nav>
                <Row>
                  <Col xs={6} md={3}>
                    <a className="active" href="#">الكل</a>
                  </Col>
                  <Col xs={6} md={3}>
                    <a href="#">الاخبار</a>
                  </Col>
                  <Col xs={6} md={3}>
                    <a href="#">المقالات</a>
                  </Col>
                  <Col xs={6} md={3}>
                    <a href="#">المفضلة</a>
                  </Col>
                </Row>
              </nav>
              {/* End Nav */}

            </Container>
          </header>
          {/* End Header */}

          {/* Start Body */}
          
          {/* Start News cards */}
          <section className="news-cards">
              <Container>
                <Row>
                  <NewsCard />
                  <NewsCard />
                  <NewsCard />
                  <NewsCard />
                  <NewsCard />
                  <NewsCard />
                  <NewsCard />
                  <NewsCard />
                </Row>
              </Container>
            </section>
            {/* End News cards */}

            {/* Start Read more button */}
            <section className="read-more text-center">
              <Container>
                <a href="#">إقرا المزيد</a>
              </Container>
            </section>
            {/* End Read more button */}

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

export default Blog;