const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:smile72425@cluster0.el80i.mongodb.net/todo-database")
.then(() => console.log("Connected to mongodb successfully!"))
.catch(() => console.log("Failed to connect to mongodb!"))

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const Todos = mongoose.model(todos, todoSchema)

module.exports = Todos