import React from "react"

export type todoType = {
    id : number,
    todoTask : string,
    done : boolean,
}
export type todoListTypes={
    task: string,
    todos : todoType[] | [],
    setTodos : React.Dispatch<React.SetStateAction<[] | todoType[]>>,
}
export type todoItemType ={
    keys:number,
    item:todoType,
    setTodos: React.Dispatch<React.SetStateAction<[] | todoType[]>>,
    todos: todoType[] | [],
    task:string;
}
export type todoTextType={
    id:number,
    todos : todoType[] | [],
    text: string,
    setTodos: React.Dispatch<React.SetStateAction<[] | todoType[]>>,
}
