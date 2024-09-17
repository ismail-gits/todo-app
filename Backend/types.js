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

const createTodoSchema = zod.object({
    title: zod.string(),
    desription: zod.string()
})

const updateTodoSchema = zod.object({
    id: zod.string()
})

module.exports = {
    createTodoSchema,
    updateTodoSchema
}