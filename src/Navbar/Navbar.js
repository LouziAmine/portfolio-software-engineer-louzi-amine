import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import icon_Me_Nav from '../image/favicon.png';

const Navbar = () => {
  return (
   

   <Container >
                              <Row>
                              <Col xs={12} sm={12} md={12}>
                              <nav> 
                                <ul className='Nav_bar_Icon_left_element'>
                                    <li >
                                     <img  src={icon_Me_Nav}   alt="" style={{ width: '30px', height: 'auto' ,  }}  />
                                    </li>              
                                </ul> 
                              

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
                                  </Col>
                                  </Row>
                            </Container>
  );
};

export default Navbar;
