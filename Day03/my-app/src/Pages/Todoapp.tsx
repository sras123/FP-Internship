import React from 'react'
import { useState } from "react";
import InputField from '../componets/InputField';
import { Todo } from "./model"
const Todoapp = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos, {id:Date.now(), todo, isDone: false}]);
      setTodo("");
    }
  };
console.log(todos);

  return (
    <div>
      <h1> Task </h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {todos.map((t)=>(
        <li>{t.todo}</li>
      ))}
    </div>
  )
}

export default Todoapp;