import React, {useState} from 'react';
import {todoTextType} from "../types/type";

const TodoText = ({text,setTodos}:todoTextType) => {
    const [change ,setChange] = useState<boolean>(false)
    return (
        <>
            {
                !change?
                    <p
                        onClick={()=>{
                            setChange(true)
                            console.log(change)
                        }}

                    >{text}</p>
                    :
                    <p>
                        <input type="text"/>
                        <button
                            onClick={()=>{
                                setChange(false)
                            }
                        }
                        >ok</button>
                    </p>

            }
        </>
    );
};

export default TodoText;
