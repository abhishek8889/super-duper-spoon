
import Header  from './Components/layouts/Header';
import Footer from './Components/layouts/footer';
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Chat from './Pages/Chat';
import Dashboard from './Pages/User/dashboard';

function App() {
  return (
    <>
    <Router >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chat-box" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
