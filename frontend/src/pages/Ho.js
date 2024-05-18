// import React from 'react'
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col  } from 'react-bootstrap';
import Cardss from './Cardss'
import { Link , useNavigate } from 'react-router-dom'
import Footer from './Footer';
const Ho = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);


  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('/api/book');
        if (!response.ok) {
          throw new Error('Failed to fetch bookings');
        }
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();

    return () => {
      // Clean up function if needed
    };
  }, []);

  console.log(bookings);


  const handleView = async (id) => {
    let data;

    try {
        const response = await fetch(`/api/book/one/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            data = await response.json();
            console.log("Fetched Data:", data);

            // Navigate to viewbook and pass the data
            navigate('/viewbook', { state: { data } });
        } else {
            console.error('Failed to fetch booking details');
        }
    } catch (error) {
        console.error('Error fetching booking details:', error);
    }
};


  
  return (
    <>
    <div>
      <Cardss/>
       <div>
      <h1>Available books</h1>
      {/* <ul>
        {bookings.map(booking => (
          <li key={booking._id}>
            <strong>Location:</strong> {booking.title}<br />
            <strong>Description:</strong> {booking.desc}<br />
            <strong>price:</strong> {booking.price}<br />
          </li>
        ))}
      </ul> */}



      {/* <Row>
    {bookings.map(booking => (
        <Col key={booking._id} md={4}> 
            <div key={booking._id}>
                <img src={booking.imageUrl} alt={booking.title} style={{ maxWidth: '100%' }} />
                <strong>Location:</strong> {booking.title}<br />
                <strong>Description:</strong> {booking.desc}<br />
                <strong>Price:</strong> {booking.price}<br />
               
            </div>
        </Col>
    ))}
</Row> */}


<Row>
    {bookings.map(booking => (
        <Col key={booking._id} md={4}> {/* Assuming you want 3 bookings per row */}
            <Card style={{ marginBottom: '20px' }}>
                <Card.Img variant="top" src={booking.img} alt={booking.title} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                    <Card.Title>{booking.title}</Card.Title>
                    <Card.Text>
                        <strong>Description:</strong> {booking.desc}<br />
                        <strong>Price:</strong> {booking.price}<br />
                    </Card.Text>
                    {/* You can add buttons or other actions related to the booking here */}

                    <div className="d-flex">
                        <Button variant="primary" className="me-2">Pay</Button>
                        <Link to='/viewbook'>
                        <Button variant="secondary" onClick={() => handleView(booking._id)}>View</Button>
                        </Link>
                    </div>
                    
                    
                </Card.Body>
            </Card>
        </Col>
    ))}
</Row>

    </div>
    </div>
    
    </>
  )
}

export default Ho