"use client"
import axios from "axios"
import { useState } from "react"
import HeaderText from '../utils/HeaderText'
export default function Create(){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    async function handleSubmit(e:any){
        e.preventDefault()
        if(title && description) {
            try {
                const res = await axios.post('/api', {
                    title,
                    description
                })
                if(res.data) console.log(res.data)
            } catch (err) {
                console.log('hata: ', err)
            }
        } else {
            alert('Alanları boş bırakmayınız.')
        }

    }
    return(
        <>
            <HeaderText>Todo Create Page</HeaderText>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="title..." />
                <input type="text" value={description} onChange={(e)=> setDescription(e.target.value)} placeholder="description" />
                <button type="submit">Yarat</button>
            </form>
        </>
    )
}