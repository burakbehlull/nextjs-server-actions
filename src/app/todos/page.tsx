"use client"
import axios from "axios"
import { useState, useEffect } from "react"
import HeaderText from "../utils/HeaderText"
import {useTodos} from '../context/TodosContext'
export default function page(){
    const {todos, setTodos} = useTodos()
    useEffect(()=> {
        async function getTodos(){
            try {
                const Todos = await axios.get('/api')
                setTodos(Todos.data['todos'])   
            } catch (err) {
                console.log('hata: ', err)
            }

        }
        getTodos()
    }, [])
    console.log(todos)
    return(
        <>
            <HeaderText>Todos</HeaderText>
            {todos?.map((item, key)=><div key={key} className="border-2 border-gray-400 max-w-[40vw] m-6">
                <h2>{item?.title}</h2>
                <p> {item?.description} </p>
            </div>
            )}
        </>
    )
}