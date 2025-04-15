import { useState } from 'react';
import './App.css'
import Button from './components/Button';
import Todos from './components/Todos';7
import { TODOS } from './data/data';

function App() {

  const [todos, setTodos] = useState(TODOS);

  console.log(todos);
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    
    const formData = new FormData(e.target);
    const todoText = formData.get('todo');

    const newTodo = {
      id: todos.length + 1,
      text: todoText,
      completed: false
    }
    setTodos([...todos, newTodo]);
    e.target.reset();
    console.log(newTodo);
  }


  return (
   <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" />
        <button type='submit'>Add Todo</button>
      </form>

      <h2>My todos</h2>
      <Todos todos={todos} setTodos={setTodos} />
      <Button />
      <Button greeting="jambo" />
      <Button greeting="konichiwa" />

   </div>
  )
}

export default App
