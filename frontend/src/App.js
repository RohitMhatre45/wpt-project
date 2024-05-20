import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import 'bootstrap/dist/css/bootstrap.min.css';


import Deatails from './pages/Deatails'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './pages/Footer';
import Viewbook from './pages/Viewbook';
import Pay from './pages/Pay';

function App() {
  const { user } = useAuthContext()

  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={user ? <Deatails /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/home" 
              element={<Home />  } 
            />
            <Route 
              path="/aboutus" 
              element={<About />  } 
            />
            <Route 
              path="/contactus" 
              element={<Contact />  } 
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
             <Route 
              path="/viewbook" 
              element={<Viewbook/>} 
            />

<Route 
              path="/pay" 
              element={<Pay/>} 
            />
          </Routes>
        </div>
      <Footer/>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
