import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import {Route, Routes} from 'react-router-dom';
import Main from './Pages/Main';

function App() {
  return (
    <ChakraProvider>
      <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='*' element={<Main/>}/>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
