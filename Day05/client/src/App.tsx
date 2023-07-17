import React from 'react';
import { Route, Routes } from "react-router-dom"
import './App.css';
import Main from "./Pages/Main"
import UserMatch from './Pages/UserMatch';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/usermatch" element={<UserMatch/>}/>
      </Routes>
    </div>
  );
}

export default App;
