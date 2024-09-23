
import Header  from './Components/layouts/Header';
import Footer from './Components/layouts/footer';
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <>
    <Router >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
