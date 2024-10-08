const express = require('express')
const { createTodoSchema, updateTodoSchema} = require('./validation')
const { Todos } = require('./db')
const cors = require('cors')

const app = express()

app.use(express.json())

// leave it empty to allow from everywhere
app.use(cors({
    origin: "http://localhost:5173"
}))

app.post('/todos', async (req, res) => {
    // Input validation using zod
    const input = req.body
    const inputValidation = createTodoSchema.safeParse(input)

    if (!inputValidation.success) {
        console.log(inputValidation.error.errors)
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
        console.log(inputValidation.error.errors)
        return res.status(400).json({message: "Invalid id"})
    }

    // updating todo on mongodb
    // await Todos.updateOne(
    //     {_id: req.body.id},
    //     {completed: true}
    // )

    // Another way of updateing todo on mongodb
    await Todos.findByIdAndUpdate(req.body.id, {
        completed: true
    })

    res.json({message: "Todo marked as completed"})
})

app.delete('/removeTodo', async (req, res) => {
    // Input validation using zod
    const inputValidation = updateTodoSchema.safeParse(req.body)

    if (!inputValidation.success) {
        console.log(inputValidation.error.errors)
        return res.status(400).json({message: "Invalid id"})
    }

    // delete todo from mongodb
    await Todos.findByIdAndDelete(req.body.id)

    res.json({message: "Todo removed"})
})

app.listen(3000, () => {
    console.log("App is listening on port 3000!")
})