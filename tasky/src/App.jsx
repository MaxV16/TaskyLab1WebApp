import { v4 as uuidv4 } from 'uuid';
import AddTaskForm from './components/Form';
import './App.css';
import Task from './components/Tasks';
import React, { useState, useEffect } from 'react';
import {getTasks, addTask, deleteTask, updateTask} from "./api/tasky-api";



function App() {
  const [ taskState, setTaskState ] = useState({tasks: []});

  useEffect(() => {
    getTasks().then(tasks => {
      setTaskState({tasks: tasks});
    });
  }, []);
    const [ formState, setFormState ] = useState({
    title: "",
    description: "",
    deadline: "",
    priority: "Low"
  });

     const doneHandler = (taskIndex) => {
      const tasks = [...taskState.tasks];
      tasks[taskIndex].done = !tasks[taskIndex].done;
      updateTask(tasks[taskIndex]);
      setTaskState({tasks});
    }

  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    const id=tasks[taskIndex]._id;
    tasks.splice(taskIndex, 1);
    deleteTask(id);
    setTaskState({tasks});
  }

  const formChangeHandler = (event) => {
    let form = {...formState};

    switch(event.target.name) {
      case "title":
          form.title = event.target.value;
          break;
      case "description":
          form.description = event.target.value;
         break;
      case "deadline":
         form.deadline = event.target.value;
         break;
      case "priority":
         form.priority = event.target.value;
         break;
      default:
         form = formState;
   }
   setFormState(form);
 }
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const tasks = taskState.tasks?[...taskState.tasks]:[];
    const form = {...formState};
    const newTask = await addTask(form);
    tasks.push(newTask);
    setTaskState({tasks});
  }


 return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task, index) => (
        <Task
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          priority={task.priority}
          key={task.id}
          done={task.done}
          markDone={() => doneHandler(index)}
          deleteTask = {() => deleteHandler(index)}
        />
      ))}
      <AddTaskForm submit={formSubmitHandler} change={formChangeHandler} />
    </div>
  );
}


export default App;