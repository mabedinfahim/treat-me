import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../assets/images/surgeons-interacting-with-each-other-operation-room.jpg'
import img2 from '../../../assets/images/doctor-diagnose-patient-symptoms-hospital.jpg'
import img3 from '../../../assets/images/doctor-nurses-special-equipment.jpg'


const Banner = () => {
    return (
        <div style={{marginTop:"-20px"}}>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height:"100vh"}}
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height:"100vh"}}
          src={img2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height:"100vh"}}
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Banner;