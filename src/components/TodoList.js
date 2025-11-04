import React, { useState } from 'react'

function TodoList() {
    const [allTasks, setAllTasks] = useState([])
    const [input, setInput] = useState("")


    function addTodo() {
        setAllTasks((prev) => [...prev, input])
        setInput("")
    }

    function deleteTodo(index) {
        const newTaskArr = allTasks.filter((_, i) => i !== index)
        setAllTasks(newTaskArr)
    }
    return (
        <div className='flex justify-center items-center p-3.5 bg-gray-800 text-white h-screen w-screen'>
            <div className="flex flex-col w-[80vw] gap-4 justify-center items-center">
                <h3 className='text-2xl font-semibold'>To-Do List</h3>
                <div className="">
                    <input
                        type="text"
                        placeholder='Add your Task'
                        className='border-black bg-white text-black mr-5'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        onClick={() => addTodo()}
                        className='p-2.5 bg-blue-600 cursor-pointer rounded-2xl'>Add Todo</button>
                </div>

                <ul className="displayTasks w-full">
                    {allTasks.map((task, index) => {
                        return <li key={index} className="w-full flex justify-center items-center">
                            <p className="p-4 text-center">{task}</p>
                            <button className='p-2.5 bg-blue-600 cursor-pointer rounded-2xl' onClick={() => deleteTodo(index)}>Delete</button>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default TodoList