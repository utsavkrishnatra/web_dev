import React,{useState,useEffect} from 'react'

function Ue2() {

    const [count,setCount]=useState(0);

    useEffect(()=>{
        document.title=`this is my title ${count}`
    },[]) //componentdidMount.If we pass parameters in dependency array, it will only update on those values.
  return (
    <div>
        <h1> this is my counter {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>+1</button>

    </div>
  )
}

export default Ue2