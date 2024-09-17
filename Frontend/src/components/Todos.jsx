import { useState } from "react"
import "./Todos.css"

export function Todos({todos}) {
    return <div>
        {todos.map((todo) => {
            return <div id="todos">
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>

                <button onClick={() => {
                    fetch("http://localhost:3000/completed", {
                        method: "PUT",
                        body: JSON.stringify({
                            id: todo._id
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                    .then(async (response) => {
                        const json = response.json()
                        alert("Todo Updated!")
                    })
                    .catch((err) => {
                        console.log(err)
                        alert("Todo Update failed")
                    })
                }} id="button">{todo.completed ? "Completed!" : "Mark as Completed"}</button>
            </div>
        })}
    </div>
}