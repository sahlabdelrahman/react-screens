import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import { PersonConsumer } from '../Context';

import HeadingImage from '../assets/images/home/logotype.svg';
import PremiumCard from '../components/PremiumCard';
import PersonsFilter from '../components/PersonsFilter';
import LarestGhost from '../components/LarestGhost';

import ProfileImage from '../assets/images/home/profile-image.svg';
import GhostIcon from '../assets/images/home/ghost-icon.svg';
import AddIcon from '../assets/images/home/icons/add.svg';

function Home() {
  return (
         <PersonConsumer>
           {(value) => {
             const {loading, persons, sortedPersons } = value;
             return(
               <div className="home-page text-center">
              
                {/* Start Header */}
                <header>
                  <Container>
                    {/* Start Heading */}
                    <div className="heading-page">
                      <img src={HeadingImage} alt="heading" />
                      <h2>الرئيسية</h2>
                    </div>
                    {/* Start Heading */}
                  </Container>
                </header>
                {/* End Header */}
      
                {/* Start Body */}
                
                {/* Start Premium Ghosts */}
                <section className="premium-ghosts">
                  <Container>
                    <div className="main-heading">
                      <h4>أشباحنا المميزين</h4>
                    </div>
      
                    <Row>
                      <PremiumCard name={'أحمد حازم'} nameLink={'إضافة'} Image={ProfileImage} ImageIcon={AddIcon}/>
                      <PremiumCard name={'أحمد حازم'} nameLink={'إضافة'} Image={ProfileImage} ImageIcon={AddIcon}/>
                      <PremiumCard name={'أحمد حازم'} nameLink={'إضافة'} Image={ProfileImage} ImageIcon={AddIcon}/>
                      <Col xs={6} md={4} lg={3}>
                      <div className="premium-card text-center">
                        <div className="item last">
                            <div className="image-container">
                              <img src={GhostIcon} alt="Profile" />
                            </div>
                            <h3>بدون إسم</h3>
                            <a href="#">
                              <span>متاح للإشتراك</span> 
                            </a>
                        </div>
                      </div>
                    </Col>
                    </Row>
                  </Container>
                </section>
                {/* End Premium Ghosts */}
      
                {/* Start Search */}
                <section className="search">
                  <Container>
                    <div className="main-heading">
                      <h4>إبحث عن الأشباح</h4>
                    </div>
                    <PersonsFilter persons={persons}/>
                  </Container>
                </section>
                {/* End Search */}
      
                {/* Latest Ghosts */}
                <section className="latest-ghosts">
                  <Container>
                    <div className="main-heading">
                      <h4>آخر الأشباح</h4>
                    </div>
                    <Row>
                      <LarestGhost persons={sortedPersons}/>
                    </Row>
                  </Container>
                </section>
                {/* End Ghosts */}
      
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
           }}
         </PersonConsumer>
  );
}

export default Home;
