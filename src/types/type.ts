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
