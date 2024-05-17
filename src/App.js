import './App.css';
import { useState } from 'react';
import TodoList from './List.js';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [addInput, setAddInput] = useState('');

  function handleAddInput(e) {
    setAddInput(e.target.value);
  }

  function handleAdd() {
    setAddInput('');
    const id = uuidv4();
    setTodos([
      ...todos,
      {
        id: id,
        text: addInput,
        done: false
      }
    ])
  }

  function handleChange(todo) {
    setTodos(todos.map(t => {
      if (t.id === todo.id) {
        return todo;
      } else {
        return t;
      }
    }));
  }

  function handleDelete(todoId) {
    setTodos(todos.filter(t => t.id !== todoId));
  }

  return (
    <div className='App'>
      <form>
        <h1>Todo List:</h1>
        <input 
          type='text'
          value={addInput}
          onChange={handleAddInput}
        />
        <input 
          type='submit'
          value='Add Todo'
          onClick={e => {
            e.preventDefault()
            handleAdd()
          }}
        />
      </form>
      <TodoList 
        todos={todos} 
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
    </div>
  );
}


