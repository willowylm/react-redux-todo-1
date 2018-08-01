import React from 'react';

const Task =  ({tasks}) => {
  return <div>
    {tasks.map(task => {
      return <div key={task.id} className="row">
        <p className="offset-md-2 col-md-10">{task.content}</p>
      </div>
    })}
  </div>
}

export default Task;