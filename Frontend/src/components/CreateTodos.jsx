import "./CreateTodos.css"

export function CreateTodo() {
    return (
        <div>
            <input type="text" placeholder="Title" className="input-field" id="title"/> <br />
            <input type="text" placeholder="Description" className="input-field" id="description"/> <br />
            <button className="button">Add Todo</button>
        </div>
    )
}