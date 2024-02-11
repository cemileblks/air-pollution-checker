import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Pages components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cities from "./components/pages/Cities";
import About from "./components/pages/About";
import Search from "./components/pages/Search";
import Category from "./components/pages/Category";
import SearchCity from './components/pages/SearchCity';
import Status from "./Status";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Search />
      <SearchCity />
      <Status />
      <Category />
      <Routes>
        <Route path='/' element={<Cities />} />
        <Route path='/HOME' element={<Cities />} />
        <Route path='/About' element={<About />}/>
      </Routes>
      <Footer />
      </ThemeProvider>
    </Router>
  )
}



export default App
