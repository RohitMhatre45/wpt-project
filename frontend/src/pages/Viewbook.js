import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
const Viewbook = () => {
    const location = useLocation();
    const data = location.state ? location.state.data : null;
    if (!data) {
        console.log("rohit");
        return <p>No booking data available.</p>;
      }
    const imagePath = `/${data.img}`;
  
  return (
    <div>
        

       
        <Container className="d-flex flex-column align-items-center">
      <Row className="mt-4">
        <Col>
          <Link to='/home'>
            <Button variant="primary">Back</Button>
          </Link>
        </Col>
      </Row>
      <Row className="mt-4 justify-content-center">
        <Col md={6} className="text-center">
          <Image src={imagePath} alt={data.title} fluid style={{ height: '100', width: '100%' }} />
        </Col>
      </Row>
      <Row className="mt-4 justify-content-center">
        <Col md={6} className="text-center">
          <h2>{data.title}</h2>
          <p><strong>Description:</strong> {data.desc}</p>
          <p><strong>Price:</strong> ₹{data.price}</p>
        </Col>
      </Row>
    </Container>
            
        

    </div>
  )
}

export default Viewbook