import { TextField } from "@mui/material";
import './TodoList.css'

export default function ({ value, removeTodo, editTodo, idx, checkBox, toggleTodo }) {
 
    return (
        <div className="todoItem">
            <input type="checkbox" checked={checkBox} onChange={toggleTodo} style={{ marginTop: '20px' }} />
            <TextField
                sx={{
                    fontWeight: 'bolder',
                    textAlign: 'center'
                }}
                className='item'
                value={value}
                onChange={(e) => editTodo(e, idx)}
            ></TextField>
            <button onClick={removeTodo}
                style={{
                    width: '20px',
                    textAlign: 'center',
                    paddingLeft: "15px",
                    backgroundColor: 'white',
                    fontSize: '28px'
                }}>&#128465;</button>
        </div >
    )
}