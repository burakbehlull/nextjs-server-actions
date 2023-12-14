import { NextResponse } from "next/server"
import connectMongo from "../config/mongodb"
import Todo from "../models/Todo"

export async function POST(request: any){
    const {title, description} = await request.json()
    await connectMongo()
    await Todo.create({title, description})
    return NextResponse.json({
        message:'Todo Yaratıldı'
    }, {status: 201})
}

export async function GET(){
    await connectMongo()
    const todos = await Todo.find({})
    return NextResponse.json({todos})
}

export async function PUT(request: any){
    await connectMongo()
    const {data} = await request.json()
    await Todo.findByIdAndUpdate(data.id, {
        title: data.title,
        description: data.description
    })
    return NextResponse.json({message: 'Veri Güncellendi'}, {status: 200})
}

