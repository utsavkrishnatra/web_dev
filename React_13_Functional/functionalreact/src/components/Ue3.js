import React,{useState,useEffect} from 'react'

function Ue3() {

    const [count,setCount]= useState(0);
    const [name,setName]= useState('Adam');
    useEffect(()=>{
        document.title=` This is my title ${count} ${name}`
    },[count,name])
  return (
    <div>
        <h1>This my counter at {count} and {name}</h1>
        <button onClick={()=>setCount(count+1)}>+1</button>
        <button onClick={()=>setName('mrinal')}>changeName</button>
    </div>
  )
}

export default Ue3