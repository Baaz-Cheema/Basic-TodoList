import { useTheme } from "@emotion/react"
import { TextField } from "@mui/material"
import TodoListForm from "./TodoListForm"
import TodoListItem from "./TodoListItem"
import { useState, useEffect } from "react"


const getTodos = () => {
    const data = JSON.parse(localStorage.getItem('todo'))
    return data ? data : []
}

export default function TodoList() {
    const [todo, setTodo] = useState(getTodos())
    const [isEmpty, setIsEmpty] = useState(false)

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo))
    }, [todo])

    function addTodo(text) {
        if (text) {
            setIsEmpty(false)
            setTodo((oldVals) => {
                return [...oldVals, { todo: text, toggled: false }]
            })
        } else {
            setIsEmpty(true)
        }

    }
    function remove(id) {
        setTodo((oldVals) => {
            return oldVals.filter((a, i) => (i !== id))
        })
    }
    function editTodo(e, id) {
        setTodo((oldVals) => (
            oldVals.map((a, i) => {
                if (id === i) {
                    return { ...a, todo: e.target.value }
                }
                return a
            })
        ))
        // if (!e.target.value) {
        //     remove(id)
        //     setIsEmpty(true)
        // }
    }
    function toggleTodo(id) {
        setTodo(oldvals => oldvals.map((a, i) => {
            if (i === id) {
                return { ...a, toggled: !a.toggled }
            }
            return a
        }))
    }



    return (
        <>
            <h1>Todo List</h1>
            {todo.map((a, i) => {
                return <TodoListItem
                    key={i}
                    idx={i}
                    value={a.todo}
                    checkBox={a.toggled}
                    removeTodo={() => remove(i)}
                    editTodo={editTodo}
                    toggleTodo={() => toggleTodo(i)} />
            })}
            {isEmpty && <p style={{ color: 'red' }}>Cant be empty!</p>}
            <TodoListForm addTodo={addTodo} />
        </>
    )
}
