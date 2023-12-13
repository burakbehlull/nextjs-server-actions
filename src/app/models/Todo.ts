import mongoose, {Schema} from 'mongoose'

const TodoSchema = new Schema({
    title: String,
    description: String,
}, {timestamps: true})

const TodoModel = mongoose.model('Todo', TodoSchema)

export default TodoModel