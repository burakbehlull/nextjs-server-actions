"use client"
import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/navigation"

import { useTodos } from "@/app/context/TodosContext"
import HeaderText from "@/app/utils/HeaderText"

export default function Update(id:any){
    const router = useRouter()
    const id_parameter = id['params'].id ? id['params'].id : ''
    
    const {todos} = useTodos()
    const [form, setForm] = useState({title: '', description: ''})
    
    const todoFilter = todos.find((todo)=> todo?._id === id_parameter )
    function handleChange(e:any){
        setForm({...form, [e.target.name]: e.target.value})
        console.log(form)
    }

    function handleSubmit(e:any){
        e.preventDefault()
        if(form.title || form.description){
            axios.put('/api', {
                method: 'PUT',
                data: {
                    title: form?.title,
                    description: form?.description,
                    id: id_parameter
                }    
            }).then((res)=>{
                console.log(res.data)
                router.push('/todos')
            }).catch((err)=> {
                console.log('hata: ', err)
            })
        } else {
            alert('Lütfen alanları doldurunuz.')
        }
    }
    return(
        <>
            <HeaderText>Todo Update</HeaderText>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={form?.title} onChange={handleChange} placeholder={todoFilter?.title} />
                <input type="text" name="description" value={form?.description} onChange={handleChange} placeholder={todoFilter?.description} />
                <input type="hidden" name="id" value={id_parameter} />
                <button type="submit">Güncelle</button>
            </form>
        </>
    )
}