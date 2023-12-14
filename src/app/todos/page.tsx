"use client"
import axios from "axios"
import { useState, useEffect } from "react"
import HeaderText from "../utils/HeaderText"
import {useTodos} from '../context/TodosContext'
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function page(){
    const router = useRouter()
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

    function remove(_id:any){
        axios.delete(`/api?id=${_id}`).then(()=> {
            router.refresh()
        }).catch((err) => {
            console.log(err)
        })
    }

    return(
        <>
            <HeaderText>Todos</HeaderText>
            {todos?.map((item, key)=><div key={key} className="border-2 border-gray-400 max-w-[40vw] m-6">
                <h2>{item?.title}</h2>
                <p> {item?.description} </p>
                <Link href={`update/${item?._id}`}>Düzenle</Link>
                <button onClick={()=> remove(item?._id)}>Sil</button>
            </div>
            )}
        </>
    )
}