import React from 'react'
import {useState,useEffect} from 'react';

function FunctionalTodo() {

const [list, setList] = useState([]);

const addNewTask =(task)=>{
    let copyOfList = [...list]
    copyOfList.push({task:task,id:copyOfList.length+1});
    setList(copyOfList);
}

const deleteTask=(task)=>{
    let filteredTaskList =list.filter((taskObj)=>{
        return taskObj.task != task;
    })

    setList(filteredTaskList);
}

  return (
    <div>
     <Counter></Counter>
     <InputField addNewTask={addNewTask} ></InputField>
     <TaskList list={list} deleteTask={deleteTask}> </TaskList>
    </div>
  )
}


function Counter(){
    const [count,setCount]=useState(0);

    useEffect(function(){
        console.log(`Timer changed to ${count} only once after return`);
    },[])

    console.log('This stamement is printed before return ');
    return(
        
        <div>
            <button onClick={()=>{setCount(count+1)}}>++</button>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count-1)}}>--</button>
        </div>
       )

       
}

function InputField(props){
   
    const addNewTask = props.addNewTask;
    const [cVal,setVal]=useState('');

    const setInput =(e)=>{
        setVal(e.target.value)
    }

    const setFinalTask =(task)=>{
        addNewTask(task);
        setVal("")
    }
    return (
        <>
        <input type='text' value={cVal} onChange={setInput}></input>
        <button type='button' onClick={()=>{setFinalTask(cVal)}}> Add Task</button>
        </>
    )

}


function TaskList({list,deleteTask}){

    console.log(list);
  return(
        list.map((liObj)=>{
            return (
                <ListItem liObj={liObj} deleteTask={deleteTask}></ListItem>
            )
        })
    
  )

}

function ListItem({liObj, deleteTask}){

    console.log(liObj);
    return(
        <>
         <h2>{liObj.id}</h2>
         <h2>{liObj.task}</h2>

         <button onClick={()=>{deleteTask(liObj.task)}}>Delete Task</button>
        </>
    )
}



export default FunctionalTodo