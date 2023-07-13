import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Typescript from './Pages/Typescript';
import Todoapp from './Pages/Todoapp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/ts' element={<Typescript/>}/>
        <Route path='/' element={<Todoapp/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
