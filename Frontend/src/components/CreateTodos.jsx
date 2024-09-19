import "./CreateTodos.css"
import { useState } from "react"

export function CreateTodo() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div>
            <input type="text" placeholder="Title" className="input-field" id="title" onChange={(e) => {
                const newTitle = e.target.value
                setTitle(newTitle)
            }}/> <br />

            <input type="text" placeholder="Description" className="input-field" id="description" onChange={(e) => {
                const newDescription = e.target.value
                setDescription(newDescription)
            }}/> <br />

            <button onClick={() => {
                fetch("http://localhost:3000/todos", {
                    method: "POST",
                    body: JSON.stringify({
                        title,
                        description
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                .then(async (response) => {
                    const json = await response.json()
                    alert("Todo Added!")
                })
                .catch((err) => {
                    console.log(err)
                    alert("Todo adding failed!")
                })
            }} className="button">Add Todo</button>
        </div>
    )
}