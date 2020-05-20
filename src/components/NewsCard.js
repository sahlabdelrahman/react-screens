import React from 'react';
import { Col, Row } from 'react-bootstrap';

import LogoType from '../assets/images/blog/logotype.svg';
import Arrow from '../assets/images/blog/icons/arrow.svg';
import Facebook from '../assets/images/blog/icons/facebook.svg';
import Twitter from '../assets/images/blog/icons/twitter.svg';
import Instagram from '../assets/images/blog/icons/instagram.svg';
import Linkedin from '../assets/images/blog/icons/linkedin.svg';
import Save from '../assets/images/blog/icons/save.svg';

function NewsCard() {
  return (
    
      <Col xs={12} lg={6}>
          <div className="news-card">
            <Row className="main-row">
              <Col xs={4}>
                <div className="card-image">
                  <img src={LogoType} alt="LogoType" />
                </div>
              </Col>
              <Col xs={8}>
                <div className="card-info">
                  <div className="info-header">
                    <span className="history">
                      <a href="#"><img src={Arrow} alt="Arrow"/></a> 5 إبريل 2020
                    </span>
                    <span className="news">الأخبار</span>
                  </div>
                  <div className="info-desc">
                    <h5>نصائح للوقاية من فيروس كرونا</h5>
                    <p>منزلك حاليًا هو واحد من أكثر الأماكن أمانًا لتجنب فيروس كورونا لا تتركه إلا إذا كان هناك خطر وشيك بحدوث أذى جسدي أو عنف تجاهك أو ضد الأطفال  ...</p>
                  </div>
                  <div className="info-footer">
                    <a className="reading" href="#">إقرا المزيد</a>
                    <span>مشاركة : </span>
                    <ul className="list-unstyled">
                      <li><a href="#"><img src={Facebook} alt="Facebook" /></a></li>
                      <li><a href="#"><img src={Twitter} alt="Twitter" /></a></li>
                      <li><a href="#"><img src={Instagram} alt="Instagram" /></a></li>
                      <li><a href="#"><img src={Linkedin} alt="Linkedin" /></a></li>
                    </ul>
                  </div>
                </div>
              </Col>
              <img className="save" src={Save} alt="save" />
            </Row>
          </div>
      </Col>
    
  );
}

export default NewsCard;
