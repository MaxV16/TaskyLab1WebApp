import React from 'react';

const Tasks = (props) => {
    
    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
        <p className="title">{props.title}</p>
       <p><b>{props.priority}</b></p>
       <p> Due: {props.deadline}</p>
       {props.description !== "" && <p className="task-description">{props.description}</p>}
       <button onClick={props.markDone} className='doneButton'>Done</button>

       </div>
       
    )
}

export default Tasks;
