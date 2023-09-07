
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/About" element={<About />}>
          </Route>
          <Route exact path="/Service" element={<Service />}>
          </Route>
          <Route exact path="/Contact" element={<Contact />}>
          </Route>
          <Route exact path="*" element={<Error />}>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
