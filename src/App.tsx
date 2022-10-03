import React, {FC, useEffect, useState} from 'react';
import './App.css';
import {todoType} from "./types/type";
import {createId} from "./support/support";
import TodoList from "./components/TodoList";

const  App:FC = () => {

    const [task , setTask] = useState<string>("")
    const [todos , setTodos] = useState<todoType[] | []>([])
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
                    disabled={
                        task.length<3||todos.some(item => item.todoTask === task)
                }
                    type="submit">
                    add
                </button>
            </form>
            <TodoList
                task={task}
                setTodos={setTodos}
                todos={todos}
            />
        </div>
  );
}

export default App;
