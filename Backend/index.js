const express = require('express')
const { createTodoSchema, updateTodoSchema} = require('./types')
const { Todos } = require('./db')

const app = express()

app.use(express.json())

app.post('/todos', async (req, res) => {
    // Input validation using zod
    const inputValidation = createTodoSchema.safeParse(req.body)

    if (!inputValidation.success) {
        return res.status(400).json({message: "Invalid inputs"})
    }

    const { title, description} = req.body

    // pushing data to mongodb
    await Todos.create({
        title,
        description,
        completed: false
    })

    res.json({message: "Todo created"})
})

app.get('/todos', async (req, res) => {
    const todos = await Todos.find()

    res.json({todos})
})

app.put('/completed', async (req, res) => {
    // Input validation using zod
    const inputValidation = updateTodoSchema.safeParse(req.body)

    if (!inputValidation.success) {
        return res.status(400).json({message: "Invalid inputs"})
    }

    // updating todo on mongodb
    await Todos.update(
        {_id: req.body.id},
        {completed: true}
    )

    res.json({message: "Todo marked as completed"})
})