"use client"
import axios from "axios"
import { useState } from "react"
import HeaderText from '../utils/HeaderText'
export default function Create(){
    const [choose, setChoose] = useState({title: '', description: ''})
    function changeHandle(e:any){
        console.log(choose)
        setChoose({...choose, [e.target.name]: e.target.value})
    }
    async function handleSubmit(e:any){
        e.preventDefault()
        if(choose.title && choose.description) {
            try {
                const res = await axios.post('/api', {
                    title: choose?.title,
                    description: choose?.description,
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
                <input type="text" name="title" value={choose?.title} onChange={changeHandle} placeholder="title..." />
                <input type="text" name="description" value={choose?.description} onChange={changeHandle} placeholder="description" />
                <button type="submit">Yarat</button>
            </form>
        </>
    )
}