import { div, span } from 'framer-motion/client';
import React, { useState } from 'react'

const Test = () => {
    const [todoList,setTodoList] = useState([]);
    const [newTask, setNewTask] = useState([]);

    const handleInput = (event) =>{
        setNewTask(event.target.value);
    }

    const addTask = () =>{
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id +1,
            name: newTask
        }
        setTodoList([...todoList, task]);
    }

    const deleteTask = (id)=>{
        const newTodoList = todoList.filter((task)=>(
            task.id !== id
        ))
        setTodoList(newTodoList)
    }

    return (
        <div>
            <div>
                <input type="text" onChange={handleInput}/>
                <button onClick={addTask} className='border border-slate-100'>add task</button>
            </div>
            <div className='flex flex-col'>
                {
                    todoList.map((task)=>(
                        <div>
                            <span>{task.name}</span> <button onClick={()=>deleteTask(task.id)}>x</button>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Test
