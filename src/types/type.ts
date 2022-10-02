import React from "react"

export type todoType = {
    id : number,
    todoTask : string,
    done : boolean,
}
export type todoListTypes={
    todos : todoType[] | []
    setTodos : React.Dispatch<React.SetStateAction<[] | todoType[]>>
}
