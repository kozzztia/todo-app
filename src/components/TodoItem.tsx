import React, {useState} from 'react';
import {todoItemType} from "../types/type";

const TodoItem = ({todos, setTodos ,task ,item , keys}:todoItemType) => {
    return (
        <li key={keys}
            style={task === item.todoTask?{textDecoration:"underline red"}:{textDecoration:"none"}}
        >
            <p>{item.id} :{item.todoTask}</p>
            <button
                disabled = {task === item.todoTask }
                onClick={()=>{
                    setTodos(todos.map(todo => todo.id===item.id?
                        {id:item.id , todoTask: item.todoTask , done : !item.done}
                        : todo))
                }}
            >V</button>

            <button
                disabled = {task === item.todoTask || !item.done}
                onClick={()=>{
                    setTodos(todos.filter(filteredItem => filteredItem.id !== item.id))
                }}
            >X</button>
        </li>
    );
};

export default TodoItem;
