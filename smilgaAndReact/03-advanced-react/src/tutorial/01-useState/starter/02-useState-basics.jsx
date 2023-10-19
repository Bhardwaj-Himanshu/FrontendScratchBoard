import { useState } from "react";

const UseStateBasics = () => {
  //using array destructuring
  const [count,setCount] = useState(0);
  
  // writing functions for the same
  const handleIncrement = ()=>{
    setCount(count+1);
  }
  const handleDecrement = ()=>{
    if(count>0){
      setCount(count-1);
    }
  }

  // handling onclick event
  return(
    <>
    <h4>You clicked {count} times</h4>
    <button className="btn" onClick={handleIncrement}>Increment</button>
    <button className="btn" onClick={handleDecrement}>Decrement</button>
    </>
    )
};

export default UseStateBasics;
