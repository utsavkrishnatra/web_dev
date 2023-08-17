import React, { Component } from 'react'



export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            tasks:[
            { task: "get Milk!", id: 1 },
            { task: "Attend the meeting", id: 2 }
        ],
            currTask:""
        }
    }

    onChangeHandler=(e)=>{
            console.log(e.target.value);
            this.setState({
                currTask: e.target.value
            })

    }

    onClickHandler=()=>{
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length+1}]
            ,currTask:""
        })

    }

    onDeleteHandler=(id)=>{
        
            let narr =this.state.tasks.filter((taskObj)=>{
                return taskObj.id!=id;
            });

            this.setState({
                tasks: narr
            })
        
    }



    render() {
        return (
            <div>
                <input type="text" value={this.state.currTask} onChange={this.onChangeHandler}></input>
                <button onClick={this.onClickHandler}>Add Task</button>

                <ul>
                    {
                        
                     this.state.tasks.map((taskObj)=>(
                         <li>
                             <p>{taskObj.task}</p>
                             <button onClick={()=>this.onDeleteHandler(taskObj.id)}>Delete</button>
                         </li>
                     ))
                       
                    }
                </ul>
            </div>
        )
    }
}