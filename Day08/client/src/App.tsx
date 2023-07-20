import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import {Route, Routes} from 'react-router-dom';
import Main from './Pages/Main';
import Form from './Pages/Form';

function App() {
  return (
    <ChakraProvider>
      <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='*' element={<Main/>}/>
      </Routes>
    </ChakraProvider>
  );
}

export default App;