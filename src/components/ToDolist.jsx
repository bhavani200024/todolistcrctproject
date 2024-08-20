import React,{useState} from 'react';
import ToDoitem from './ToDoitem';
export default function ToDolist()
{
    const [tasks,setTasks]=useState([
        {id:1, text:"goingtocenter", iscompleted:false},
        {id:2, text:"learning and earning", iscompleted:false}
    ]);

    const [text,setText]=useState("");
    function addTask(text)
    {
        const newTask={id:Date.now(),text,iscompleted:false};
        setTasks([...tasks,newTask]);
        setText('');
    }
    function deleteTask(id)
    {
        setTasks(tasks.filter((task)=> task.id!==id))
    }
    function toggleCompleted(id)
    {
        setTasks(tasks.map((task)=>{
            if(task.id===id)
            {
                return {...tasks,iscompleted: !task.iscompleted}
            }
            else{
                return task;
            }
        }));
    }
    return(
        <div className='todolist'>
            <div className='inputbox'>
               <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
               <button value="add" onClick={()=>addTask(text)}>Add</button>
             </div>
            {tasks.map((task)=>
                      (<ToDoitem key={task.id} 
                                 task={task} 
                                 deleteTask={deleteTask}
                                 toggleCompleted={toggleCompleted}/>
            ))
        }
            </div>
    );

}