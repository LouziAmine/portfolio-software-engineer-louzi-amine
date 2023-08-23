import React from 'react';
import './About.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import myImage from '../image/AboutMe.jpg';

const AboutMe = () => {
  return (



<Container className="AboutMe_Container">
      <Row>

           <Col xs={12} sm={12} md={12} className="">


           <div className='AboutMe_Line_Container' >
                    <div className='AboutMe_Line'>
                    <div className="AboutMe_Line_Description  About_Hi_FullNames">About Me :</div>
                   {/* <div className="AboutMe_Line_UI"> <hr class="new4"></hr></div>*/}
                  </div>
          </div>

           
            </Col>

        <Col xs={12} sm={6} md={6} className="About_Img_Contant">


             <img  src={myImage}  className='About_Img_hover_effect'  alt="" style={{ width: '350px', height: 'auto' ,   borderRadius: '25% 10%', }}  />

                        
       </Col>

        <Col xs={12} sm={6} md={6}>
          <div >
                    <div className='AboutMe_Left'>
                    <p className="About_Hi_TitleJobDescription">I am a passionate and self-taught Full-Stack Developer residing in Casablanca, Morocco. At the age of 28, I have dedicated myself to the exciting world of web development and have embarked on a journey of constant learning and growth.</p>
                    <p className="About_Hi_TitleJobDescription">From a young age, I was fascinated by technology and its ability to shape the world around us. This curiosity led me to explore programming and web development, where I quickly discovered my knack for creating dynamic and user-friendly applications.</p>
                    <p className="About_Hi_TitleJobDescription">As a Full-Stack Developer, I possess a diverse skill set that allows me to handle both the frontend and backend aspects of web development.</p>
               
                  </div>
          </div>
        </Col>
       
      </Row>
    </Container>



  

    



  );
};

export default AboutMe;
