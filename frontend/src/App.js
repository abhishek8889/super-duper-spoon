import React , {useContext} from 'react';
import Header  from './Components/layouts/Header';
import Footer from './Components/layouts/footer';
import { BrowserRouter as Router, Route , Routes  } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Chat from './Pages/Chat';
import Dashboard from './Pages/Loggedin/Dashboard';
import ProtectedRoute from './Utils/protectedRoute';
import { AuthContext } from './Context/AuthContext';
function App() {
  const {authState} = useContext(AuthContext);
  console.log(authState.isLoggedIn);
  return (
    <>
    <Router >
      <Header />
        <Routes>
          <Route path="/" element={authState.isLoggedIn?<Dashboard />:<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/chat-box" 
            element={
              <ProtectedRoute isAdmin={false}>
                <Chat />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Login />} />
        </Routes>
        <Footer />
    </Router>
    </>
  );
}

export default App;
