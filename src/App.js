import React, { useState } from 'react';
import './App.css';

function App () {
  const [todo, setTodo] = useState("");
  const [toDos,setTodos] = useState([]);

  const onSubmit =(e) => {
    e.preventDefault();
    if(todo === ""){
      return
    }
    setTodos((arr) => [todo, ...arr]);
    setTodo('');
  }
  
  const onChangeText = (e) => {
    setTodo(e.target.value);
  }
 
  console.log(toDos);

  return (
    <div className="wrapper">
      <form className="TodoInsert" onSubmit={onSubmit} >
      <input
        className='text'
        placeholder="할 일을 입력하세요"
        value={todo}
        onChange={onChangeText}
      />
      <button type="submit">
        추가하기
      </button>
    </form>
    <h1>
      Todo List
    </h1>
    <div className='TodoListItem'>
      {toDos.map((item)=><div className="body">{item}</div>)}
    </div>
    </div>
  );
}

export default App;
