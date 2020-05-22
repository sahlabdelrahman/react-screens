import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col } from 'react-bootstrap';

import Country from '../assets/images/home/icons/country.svg';
import City from '../assets/images/home/icons/city.svg';
import Cal from '../assets/images/home/icons/cal.svg';
import Age from '../assets/images/home/icons/age.svg';
import Sex from '../assets/images/home/icons/sex.svg';
import Clock from '../assets/images/home/icons/clock.svg';

function LatestGhost({persons}) {

    if(persons.length === 0){
        return(
            <div className='empty-search'>
                <h3>لا توجد نتائج</h3>
            </div>
        );
    }

  return(
      <>
        {persons.map(person => {
            return(
                    <Col lg={4} key={person.id}>
                    <div className="ghost-item">
                        <div className="heading-item">
                            <h2>{person.username}</h2>
                        </div>
                        <div className="content-item">
                            <Row>
                                <Col xs={4}>
                                <h4> <img src={Country } />&nbsp;  الدولة</h4>
                                </Col>
                                <Col xs={4}>
                                    <h4> <img src={City } />&nbsp;  المدينة</h4>
                                </Col>
                                <Col xs={4}>
                                <h4> <img src={Age } />&nbsp;  العمر</h4>
                                </Col>
                                <Col xs={4}>
                                    <h5>{person.country}</h5>
                                </Col>
                                <Col xs={4}>
                                    <h5>{person.city}</h5>
                                </Col>
                                <Col xs={4}>
                                    <h5>{person.age}</h5>
                                </Col> 
                            </Row>
                            <Row>
                                <Col xs={4}>
                                <h4> <img src={Sex } width="20px" height="15px" />&nbsp;  النوع</h4>
                                </Col>
                                <Col xs={4}>
                                <h4> <img src={Cal } />&nbsp;  التاريخ</h4>
                                </Col>
                                <Col xs={4}>
                                <h4> <img src={Clock } width="20px" height="15px" />&nbsp;  الوقت</h4>
                                </Col>
                                <Col xs={4}>
                                    <h5>{person.sex}</h5>
                                </Col>
                                <Col xs={4}>
                                    <h5>{person.history}</h5>
                                </Col>
                                <Col xs={4}>
                                    <h5>{person.time}</h5>
                                </Col> 
                            </Row>
                            <Row className="d-flex justify-content-center">
                                <Col xs={12}>
                                    <a className="button-bg" href="#">الرسالة</a>
                                </Col>
                                <Col xs={4}>
                                    <Link to="/report" className="button-sm text-danger">التبليغ</Link>
                                </Col>
                                <Col  xs={4}>
                                    <a className="button-sm" href="#">الإضافة</a>
                                </Col>
                            </Row>
                        </div>
                        <div className="footer-item">
                            <ul className="list-unstyled">
                                <li><a href="#">تاقز</a></li>
                            </ul>
                        </div>
                    </div>
                </Col>
            );
        })}
      </>
  );
}

export default LatestGhost;
