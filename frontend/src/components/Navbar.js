import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import Ho from '../pages/Ho'
import About from '../pages/About'
import Contact from '../pages/Contact'
import { useState,useEffect } from "react"

const Navbar = () => {
  const { logout } = useLogout()
  const {  user } = useAuthContext()
  console.log(user); 

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="container" >
        <Link to="/home">
          <h1>Books</h1>
        </Link>
        <Link to="/home">
        <h4>Home</h4>
        </Link>
        <Link to="/aboutus">
        <h4>About us</h4>
        </Link>
        <Link to="/contactus">
        <h4>Contact us</h4>
        </Link>
        <nav>
          {user && (
            <div>
               <Link to="/">
              <span>Welcome {user.fname}</span>
          
            </Link>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar