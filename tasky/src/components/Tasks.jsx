import React from 'react';

const Tasks = (props) => {
    
    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
        <p className="title">{props.title}</p>
       <p><b>Priority:</b> <span style={{ backgroundColor: props.priority === 'High' ? 'red' : props.priority === 'Medium' ? 'yellow' : 'green', padding: '2px 5px', borderRadius: '3px' }}>{props.priority}</span></p>
       <p> Due: {props.deadline}</p>
       {props.description !== "" && <p className="task-description">{props.description}</p>}
       <button onClick={props.markDone} className='doneButton'>Done</button>
       <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
       </div>
       
    )
}

export default Tasks;
