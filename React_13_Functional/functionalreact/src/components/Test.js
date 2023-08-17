import React, { useState } from 'react'


function Test() {

  
  const [count, setCount] = useState(0);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  let [arr,setArr]=useState([]);

  function handleListArr(e){
    if(e.target.value!='')
    {
      setArr([...arr,text2]); e.target.value=''; setText2('');
    }
  }
 
  return (
    <div>
      <h1>This is a counter {count}</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <input type='text' onChange={(e) => { setText1(e.target.value) }} />
      <h1>{text1}</h1>
      <div>
        <input type='text' onMouseLeave={(e)=>{
            handleListArr(e)
          }} 
           onChange={(e)=>{setText2(e.target.value)}}
           />
       
        
        <ol>
            {
              
               arr.map((arrElm)=>{
                
                return (<li>{arrElm}</li>)
                
               })
            
            }

          

        </ol>
      </div>
      
    </div>
  )
}

export default Test