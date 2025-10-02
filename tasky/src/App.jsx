import './App.css';
import Task from './components/Tasks';
import React, { useState } from 'react';



function App() {
    const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today", priority: "high" },
     { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priority: "medium" },
     { id: 3, title: "Tidy up", deadline: "Today", priority: "low" }
    ]
  });

  return (
    <div className="container">
      <h1>Tasky</h1>
    {taskState.tasks.map((task) => (              
    <Task 
      title={task.title}
      description={task.description}
      deadline={task.deadline}
      priority={task.priority}
      key={task.id}
    />
  ))}
    </div>
  );
}


export default App;