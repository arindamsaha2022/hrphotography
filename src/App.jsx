
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import "./styles/app.scss";
import "./styles/Header.scss";
import About from "./pages/About";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />          
        <Route path="/about" element={<About/>} />          
        <Route path="/contact" element={<Contact/>} />          
        <Route path="/Services" element={<Services/>} />          
        <Route path="/work" element={<Work/>} />          
      </Routes>
      <footer>
        <p>made by Arindam Saha. Phone:  <a href="tel:9775169334">9775169334</a></p>
      </footer>
    </Router>
  )
}

export default App
