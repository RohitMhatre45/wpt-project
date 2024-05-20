import React from 'react'
import { useState,useEffect } from "react"
import { useAuthContext } from '../hooks/useAuthContext'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link , useNavigate } from 'react-router-dom'
const Addbook = () => {
    const [title,settitle] = useState('')
    const [desc,setdesc] = useState('')
    const [price,setprice] = useState('')
    const [userBooks, setUserBooks] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState('');
    const [img,setimg] = useState('')
    const { user } = useAuthContext()
    const navigate = useNavigate();
   console.log(userBooks);
   console.log(user);

    useEffect(() => {
      // Fetch user's books after component mounts
      fetchUserBooks();
      console.log(userBooks);
    }, []);
  
    const fetchUserBooks = async () => {
      // const book = { title, desc, price };
      try {
        const response = await fetch("/api/book/"+user._id, {
          method: 'GET',
          
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`,
          },
        });
        const data = await response.json();
        console.log(data)
        setUserBooks(data);
      } catch (error) {
        console.error('Error fetching user books:', error);
      }
    };





    const handleSubmit = async (e) => {
      
      

      const formData = new FormData();
      formData.append('title', title);
      formData.append('desc', desc);
      formData.append('price', price);
      formData.append('img', img);
    

      console.log(formData);


    
      try {
        const response = await axios.post('/api/book', formData, {
          
          headers: {
            'Content-Type': 'multipart/form-data',
            
            'Authorization': `Bearer ${user.token}`
          }
        });
        console.log(response);
      
        if (response.status === 200) {
          console.log("done");
         
          settitle('');
          setdesc('');
          setprice('');
          setimg('');
          
          
        } else {
          console.error('Failed to add book');
        }
      } catch (error) {
        console.error('Error adding book:', error);
      }





      
    };

    const handleDelete = async (id) => {
      try {
          const response = await fetch(`/api/book/${id}`, {
              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json'
                  
              },
          });

          if (response.ok) {
              fetchUserBooks(); 
          } else {
              console.error('Failed to delete book');
          }
      } catch (error) {
          console.error('Error deleting book:', error);
      }
  };

  const handleEdit = async (id) => {
    
    setEditMode(true);
    setEditId(id);

    let data

   
    try {
        const response = await fetch(`/api/book/one/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                
            },
        });

        if (response.ok) {
             data = await response.json();
             console.log(data.img);
            
            console.log("here from add");
            console.log(data);
            settitle(data.title);
            console.log("end of add");
            setdesc(data.desc);
            setprice(data.price);
            setimg(data.img)
        } else {
            console.error('Failed to fetch book details for editing');
        }
    } catch (error) {
        console.error('Error fetching book details for editing:', error);
    }
};
  
  const handleUpdate = async () => {
   

    const formData = new FormData();
    formData.append('title', title);
    formData.append('desc', desc);
    formData.append('price', price);
    formData.append('img', img); 
  
    try {
      const response = await fetch(`/api/book/${editId}`, {
        method: 'PATCH',
        body: formData,
       
      });
  
      if (response.ok) {
        settitle('');
        setdesc('');
        setprice('');
        setEditMode(false);
        fetchUserBooks(); 
      } else {
        console.error('Failed to update book');
      }
    } catch (error) {
      console.error('Error updating book:', error);
    }












};


    return (
      <div>
        <div>


      <form onSubmit={editMode ? handleUpdate : handleSubmit} encType="multipart/form-data">
          <label>book title</label>
          <input 
              type="text"
              onChange={(e) => settitle(e.target.value)}
              value={title}
          />
          <label>book Description</label>
          <br/>
          <textarea
              type="text"
              onChange={(e) => setdesc(e.target.value)}
              value={desc}
              style={{ width: "90%", height: "100px", padding: "10px" }}
          />
            <br/>
          <label>Price</label>
          <br/>
          <input 
              type="number"
              onChange={(e) => setprice(e.target.value)}
              value={price}
          />
            <br/>
            <label>image</label>

            <input 
              type="file"
              
              onChange={(e) => setimg(e.target.files[0])}
              
          />
           <br/>
          <button>{editMode ? 'Update' : 'Publish'}</button>
        
      </form>
        </div>
        <br/>
      <div>
        


         

<Row>
    {userBooks.map((book) => (
      
        <Col key={book._id} md={4}> {/* Assuming you want 3 cards per row */}
            <Card style={{ marginBottom: '20px' }}>
                <Card.Img variant="top" src={book.img} alt={book.title} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                        Description: {book.desc}
                    </Card.Text>
                    <Card.Text>
                        Price: ₹{book.price}
                    </Card.Text>
                    <div className="d-flex">
                    <Button variant="primary" className="me-2" onClick={() => handleEdit(book._id)}>Edit</Button>
                    <Button variant="danger" onClick={() => handleDelete(book._id)}>Delete</Button>
                        
                    </div>


                </Card.Body>
            </Card>
        </Col>
    ))}
</Row>



      </div>
  </div>
    )
    }
   


export default Addbook