import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface Istate{
  student:{
    name: string,
    age: number,
    url:string,
    note?: string
  }[]
}


function App() {
  const [student, setStudent] = useState<Istate['student']>([
    {
      name:"Maya Parker",
      url: "https://images.pexels.com/photos/3662874/pexels-photo-3662874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      age: 6,
      note: "Allergic to peanuts"
    }
  ]);



  return (
    <div className="App">
      <h1> Students Details</h1>
      <List  student ={student}/>
      <AddToList student={student} setStudent={setStudent}/>
    </div>
  );
}

export default App;
