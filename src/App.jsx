// import React from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React, {useState} from 'react';

const App = () => {
  const[value, setValue] = useState("");
  const[todolist, setTodolist]=useState([]);
  const addTodo = ()=>{
    if(!value)
    {
      alert("You shoudn't be empty");
      return;

    }
    setTodolist([...todolist,value])
      alert("Add is success")
      setValue("")
    

  }
  return (
    <div>
      <h1>Tinder</h1>
      <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <div>
        {
          todolist.map((todo)=>(
            <h3>{todo}</h3>
          ))
        }
      </div>
      </div>
    
  )
}

export default App