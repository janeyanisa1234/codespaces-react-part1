import {useState} from 'react';

export default function Counter(){
    const [count,setCount]=useState(0);
    const [value,setValue]=useState("Type here!");
    return(<>
    <input type="text"
    value={value}
    onChange={(event)=>{setValue(event.target.value)}}
    />
    <p>You type {value.length} chars</p>
    <button onClick={()=>setCount(count+1)}>Clicke me!</button>
    <button onClick={()=>setCount(0)}>Reset!</button>
    <p>You clicked{count} times</p>
    
    </>);
}