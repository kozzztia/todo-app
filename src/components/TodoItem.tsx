import React, {useState} from 'react';
import {todoItemType} from "../types/type";
import TodoText from "./TodoText";

const TodoItem = ({todos, setTodos ,task ,item , keys}:todoItemType) => {
    return (
        <li key={keys}
            style={task === item.todoTask?{textDecoration:"underline red"}:{textDecoration:"none"}}
        >
            {item.id + ':'}
            <TodoText
                text ={item.todoTask}
                setTodos={setTodos}
                todos={todos}
                id={item.id}
            />
            <button
                style={{backgroundColor: "green"}}
                disabled = {task === item.todoTask }
                onClick={()=>{
                    setTodos(todos.map(todo => todo.id===item.id?
                        {id:item.id , todoTask: item.todoTask , done : !item.done}
                        : todo))
                }}
            >V</button>

            <button
                style={{backgroundColor: "red"}}
                disabled = {task === item.todoTask || !item.done}
                onClick={()=>{
                    setTodos(todos.filter(filteredItem => filteredItem.id !== item.id))
                }}
            >X</button>
        </li>
    );
};

export default TodoItem;
