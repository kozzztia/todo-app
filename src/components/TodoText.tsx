import React, {useState} from 'react';
import {todoTextType} from "../types/type";

const TodoText = ({text,setTodos,todos ,id}:todoTextType) => {
    const [change ,setChange] = useState<boolean>(false)
    const [newValue , setNewValue] = useState<string>("")
    return (
        <>
            {
                !change?
                    <p
                        onClick={()=>{
                            setChange(true)
                        }}
                    >{text}</p>
                    :
                    <p style={{display:"flex", flexDirection:"row"}}>
                        <input type="text"

                            onChange={(e)=>{
                                setNewValue(e.target.value)
                                }
                            }
                            placeholder={text}
                            value={newValue}
                        />
                        <button
                            onClick={()=>{
                                setChange(false)
                                setTodos(todos.map(todo => todo.id === id?
                                    {id:todo.id ,todoTask:newValue, done:todo.done}
                                    :
                                    todo
                                ))
                                setNewValue("")
                            }
                        }
                        >ok</button>
                    </p>

            }
        </>
    );
};

export default TodoText;
