const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:smile72425@cluster0.el80i.mongodb.net/todos-database")
.then(() => console.log("Connected to mongodb successfully!"))
.catch(() => console.log("Failed to connect to mongodb!"))

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const Todos = mongoose.model('todos', todoSchema)

module.exports = {
    Todos
}