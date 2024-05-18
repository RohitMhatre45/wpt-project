import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import 'bootstrap/dist/css/bootstrap.min.css';

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Ho from './pages/Ho'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './pages/Footer';
import Viewbook from './pages/Viewbook';

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
              element={user ? <Home /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/home" 
              element={<Ho />  } 
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
          </Routes>
        </div>
      <Footer/>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
