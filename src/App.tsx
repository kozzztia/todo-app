import React, {FC, useEffect, useState} from 'react';
import './App.css';
import {todoType} from "./types/type";
import {createId} from "./support/support";




const  App:FC = () => {

    const [task , setTask] = useState<string>("")
    const [todos , setTodos] = useState<todoType[] | []>([])
    useEffect(()=>{
        console.log(todos)
    },[todos])
  return (
        <div className="App">
            <form className="header"
                onSubmit={(e)=>{
                e.preventDefault()
                setTodos([...todos, {id: createId() , todoTask : task , done: false}])
                setTask("")
                }}
                >
                <input type="text"
                   placeholder="insert your task"
                   onChange={(e)=>{
                       setTask(e.target.value)
                   }}
                   value={task}
                />
                <button
                    disabled={task.length<5}
                    type="submit">
                    add
                </button>
            </form>

            <ul className="todoList">
                {
                    todos.map((item) =>
                        <li key={item.id}>
                            {item.id} :
                            {item.todoTask}
                        </li>)
                }
            </ul>
        </div>
  );
}

export default App;
