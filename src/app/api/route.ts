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