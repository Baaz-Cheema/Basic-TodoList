import { TextField } from "@mui/material"
import { useState } from "react";
export default function TodoListForm({ addTodo }) {
    const [todo, setTodo] = useState('')
    const updateVal = (e) => {
        setTodo(e.target.value)
    }
    function sendTodo(e) {
        e.preventDefault();
        addTodo(todo)
        setTodo('')
    }
    return (
        <form action="submit" onSubmit={sendTodo}>
            <TextField
                sx={{ mt: 5, backgroundColor: 'rgb(246, 246, 246)' }}
                value={todo}
                id='addTodo'
                placeholder="Walk the dog"
                label='Add a todo'
                onChange={updateVal}
            >
            </TextField>
        </form>
    )
}