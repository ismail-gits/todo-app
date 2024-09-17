const mongoose = require('mongoose')

mongoose.connect("")
.then(() => console.log("Connected to mongodb successfully!"))
.catch(() => console.log("Failed to connect to mongodb!"))

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const Todo = mongoose.model(todo, todoSchema)

module.exports = Todo