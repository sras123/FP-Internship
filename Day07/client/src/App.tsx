import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import {Route, Routes} from 'react-router-dom';
import Main from './Pages/Main';
import Categories from './components/Categories';
import BestProducts from './components/BestProducts';
import Contact from './components/Contact';
import Slogan from './components/Slogan';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';

function App() {
  return (
    <ChakraProvider>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/categories' element={<Categories/>}/>
      <Route path='/bestproducts' element={<BestProducts/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/slogan' element={<Slogan/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='*' element={<Main/>}/>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
