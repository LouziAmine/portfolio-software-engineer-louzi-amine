import React from 'react';
import '../Navbar/Navbar.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import myImage from '../image/About.png';

const About = () => {
  return (



<Container className="About">
      <Row>
        <Col xs={12} sm={6} md={6}>
          <div >

            <div className="About_Left">
                <h1 className="About_Hi">Hi, My Name is</h1>
                <h1 className="About_Hi_FullNames">Amine Louzi</h1>
                <p className="About_Hi_TitleJob">I build things for the Web and Mobile.</p>
                <p className="About_Hi_TitleJobDescription">I'm a Full-Stack Developer based in casablanca, Moroco. I enjoy working on every aspect of web development, from the user interface to the server logic.</p>
               
               <div className="About_Resume About_Img_Contant">
                  <a href="/Resume.pdf"    className="About_Resume_Resume" download="" target="_blank" ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18.944 11.112C18.507 7.67 15.56 5 12 5 9.244 5 6.85 6.61 5.757 9.149 3.609 9.792 2 11.82 2 14c0 2.657 2.089 4.815 4.708 4.971V19H17.99v-.003L18 19c2.206 0 4-1.794 4-4a4.008 4.008 0 0 0-3.056-3.888zM8 12h3V9h2v3h3l-4 5-4-5z"></path></svg><button type="button" class="">Resume</button></a>

               </div>
               
                    </div>

          </div>
        </Col>
        <Col xs={12} sm={6} md={6} className="About_Img_Contant">


        <img  src={myImage}  style={{ width: '300px', height: 'auto' }}  />

                             {/* <Container >
                              <Row>
                              <Col xs={12} sm={12} md={12}>
                                  <div >
                                  
                                            <img  src={myImage} alt="Description of the image" style={{ width: '300px', height: 'auto' }}  />
                                                     
                                  </div>
                                  </Col>
                                  </Row>
                            </Container>*/}
        </Col>
      </Row>
    </Container>



  

    



  );
};

export default About;
