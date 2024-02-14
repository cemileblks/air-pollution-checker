import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Pages components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cities from "./components/pages/Cities";
import About from "./components/pages/About";
import SearchButton from "./components/pages/Search";
import Category from "./components/pages/Category";
import SearchCity from './components/pages/SearchResult';
import Status from "./Status";
import CityIndividual from "./components/pages/CityIndividual";
import Breadcrumb from './components/pages/Breadcrumbs';

// Features map component 
import 'maplibre-gl/dist/maplibre-gl.css';
import CityMap from './components/Features/CityMap/CityMap';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [cityName, setCityName] = useState('');

  const handleSearch = (city) => {
    setCityName(city);
    console.log("setcityname works")
  };


  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      {/* Show only in the individual page */}
      <Breadcrumb />
      <SearchButton onSearch={handleSearch}/>
      <Category />
      <Routes>
        <Route path='/' element={<Cities />} />
        <Route path='/home' element={<Cities />} />
        <Route path='/city/:cityName' element={<CityIndividual />} />
        <Route path='/about' element={<About />}/>
      </Routes>
      <Footer />
      </ThemeProvider>
    </Router>
  )
}



export default App
