import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Pay = () => {
    const handlePaytmPayment = () => {
       
        const paytmUrl = "https://paytm.com/login";
        window.open(paytmUrl, '_blank');
      };
    
  return (
  
    <Container className="d-flex vh-100">
    <Row className="m-auto align-items-center justify-content-center text-center">
      <Col md="12">
        <Link to='/home'>
          <Button variant="primary" className="mb-3">Back</Button>
        </Link>
      </Col>
      <Col md="12">
        <h2>Payment</h2>
        <p>Click the button below to pay with Paytm.</p>
        <Button variant="primary" onClick={handlePaytmPayment}>
          Pay with Paytm
        </Button>
      </Col>
    </Row>
  </Container>
  )
}

export default Pay