import { useState } from "react"
import { CreateTodo } from "./components/CreateTodos"
import { Todos } from "./components/Todos"

function App() {
    const [todos, setTodos] = useState()

    return (
        <div>
            <CreateTodo />
            <Todos />
        </div>
    )
}

export default App