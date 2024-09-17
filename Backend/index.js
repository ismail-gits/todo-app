const express = require('express')
const Todo = require('./database/index')

const app = express()

app.use(express.json())

app.post('/todos', (req, res) => {
    
})

app.get('/todos', (req, res) => {

})

app.put('/completed', (req, res) => {

})