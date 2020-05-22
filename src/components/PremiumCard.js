import React from 'react';

import { Col } from 'react-bootstrap';


function PremiumCard(props) {
  return (
         <Col xs={6} md={4} lg={3}>
          <div className="premium-card text-center">
            <div className="item">
                <div className="image-container">
                  <img src={props.Image} alt="Profile" />
                </div>
                <h3>{props.name}</h3>
                <a href="/#">
                  <img src={props.ImageIcon} alt="Icon" />
                  <span>{props.nameLink}</span> 
                </a>
            </div>
          </div>
        </Col>
  );
}

export default PremiumCard;
