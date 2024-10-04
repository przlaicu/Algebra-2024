import { useState } from "react";

export default function TaskManager() {

    const [tasks, setTask] = useState();
    const [newTask, setNewTask] = useState();

    function AddTask() {
        newTask = {
            checked: this.checked,
            description: this.description
        }

        return (
            <div>
                <input type="radio" checked={newTask.checked}></input>
                <p>{newTask.description}</p>
                <button>Remove</button>
            </div>
        );
    }

    return (
        <div>
            <h1>Task Manager</h1>
            <input type="text" onChange={(e) => setNewTask(e.target.value)}></input>
            <button onClick={() => AddTask}>Add</button>
        </div>
    );
}