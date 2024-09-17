const zod = require('zod')

/*
    {
        title: String,
        description: String
    }

    {
        id: String
    }
*/

const createTodo = zod.object({
    title: zod.string(),
    desription: zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
})

module.exports = {
    createTodo,
    updateTodo
}