import React from 'react';
import {todoListTypes} from "../types/type";
import TodoItem from "./TodoItem";

const TodoList = ({todos, setTodos ,task}:todoListTypes) => {

    return (
        <ul className="todoList"
        >
            {
                todos.length!==0?todos.map((item) =>
                    <TodoItem
                        keys={item.id}
                        item={item}
                        setTodos={setTodos}
                        todos={todos}
                        task={task}
                    />
                    )
                    :
                    <li key={0}>todoList is empty, now</li>

            }
        </ul>
    );
};

export default TodoList;
