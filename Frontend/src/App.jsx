import { useState } from "react"
import { CreateTodo } from "./components/CreateTodos"
import { Todos } from "./components/Todos"

function App() {
    const [todos, setTodos] = useState([]);

    fetch("http://localhost:3000/todos")
    .then(async (response) => {
        const json = await response.json()
        setTodos(json.todos)
    })

    return (
        <div>
            <CreateTodo />
            <Todos todos={todos}/>
        </div>
    )
}

export default App