import './App.css'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cities from "./components/pages/Cities";
import About from "./components/pages/About";

function App() {

  return (
    <Router>
      <Header />
      <div className="search_bar">Search Bar</div>
      <div>Search Categories</div>
      <Routes>
        <Route path='/' element={<Cities />} />
        <Route path='/About' element={<About />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
