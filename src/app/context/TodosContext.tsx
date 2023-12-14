"use client"
import React, { useState,createContext, ReactNode, useContext } from "react";
import { TodoHookProps } from "../interfaces/TodoHookProps";


const TodosContext = createContext<TodoHookProps>({} as TodoHookProps)

export const TodosProvider : React.FC<{children: ReactNode}> = ({ children }) => {
    const [todos, setTodos] = useState<[]>([])

    const values : TodoHookProps = {
        todos, setTodos
    }

    return <TodosContext.Provider value={values}>{children}</TodosContext.Provider>
}

export const useTodos = ()=> useContext<TodoHookProps>(TodosContext)
