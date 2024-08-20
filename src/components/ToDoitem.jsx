import React from "react";
export default function ToDoitem({task,deleteTask,toggleCompleted})
{
    function handleChange()
    {
        toggleCompleted(task.id);
    }
return(
<div className="todoitem">
      
      <input type="checkbox" checked={task.iscompleted} onChange={handleChange}/>
       <input type="text" value={task.text}/>
      <button onClick={()=>deleteTask(task.id)}>X</button>

</div>)    
}