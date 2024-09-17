import "./Todos.css"

export function Todos({todos}) {
    return <div>
        {todos.map((todo) => {
            return <div id="todos">
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button id="button">{todo.completed == true ? "Completed!" : "Mark as Completed"}</button>
            </div>
        })}
    </div>
}