const express = require('express')
const { createTodoSchema, updateTodoSchema} = require('./types')
const Todo = require('./database/index')

const app = express()

app.use(express.json())

app.post('/todos', (req, res) => {
    const inputValidation = createTodoSchema.safeParse(req.body)

    if (!inputValidation.success) {
        return res.status(400).json({message: "Invalid inputs"})
    }

    // push data into mongodb
})

app.get('/todos', (req, res) => {

})

app.put('/completed', (req, res) => {
    const inputValidation = updateTodoSchema.safeParse(req.body)

    if (!inputValidation.success) {
        return res.status(400).json({message: "Invalid inputs"})
    }
})