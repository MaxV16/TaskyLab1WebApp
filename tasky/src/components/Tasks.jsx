import React from 'react';

const Tasks = (props) => {
    
    return (
        <div className="card"> 
        <p className="title">{props.title}</p>
        <p> Due: {props.deadline}</p>
        {props.description && <p className="task-description">{props.description}</p>}
        </div>
       
    )
}

export default Tasks;
