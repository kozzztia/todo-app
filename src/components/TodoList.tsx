import React from 'react';
import {todoListTypes, todoType} from "../types/type";

const TodoList = ({todos,setTodos ,task }:todoListTypes) => {
    return (
        <ul className="todoList"
        >
            {
                todos.length!==0?todos.map((item) =>
                    <li key={item.id}
                        style={task === item.todoTask?{color:"red"}:{color:"green"}}
                    >
                        {item.id} :
                        {item.todoTask}
                        <button
                            disabled = {task === item.todoTask}
                            onClick={()=>{
                                setTodos(todos.filter(filteredItem => filteredItem.id !== item.id))
                            }}

                        >done</button>
                    </li>)
                    :
                    <li key={1}>Empty to do list, now</li>

            }
        </ul>
    );
};

export default TodoList;
