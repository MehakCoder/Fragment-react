import { useState } from "react";
import Child from "./Child";

export default function Parent(){
    const[parentcount, setParentCount] = useState(0)
    const[childcount, setChildCount] = useState(0)
    const changeParentCount=()=>{
        setParentCount(parentcount+1);
    }
    const changeChildCount=()=>{
        setChildCount(childcount+1);
    }
    return(
        <div>
            This is a parent component.
            <h1>Parent count is {parentcount}</h1>
            <Child count={childcount} />
            <button onClick={changeParentCount}>Increment parentcount</button>
            <button onClick={changeChildCount}>Increment childcount</button>
        </div>
    )
}