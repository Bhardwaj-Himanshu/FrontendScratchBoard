// Example of an Error thrown when not using useState()

const ErrorExample = () => {
  let count = 0;

  const incrementCount = ()=>{
    count=count+1;
    console.log(count);
  }
  const decrementCount = ()=>{
    if(count>0){
      count = count-1;
      console.log(count);
      // updates value in console
    }
  }
  return (
    <>
    <p>{count}</p>{/* but the value never gets updated here */}
    <button onClick={incrementCount} className="btn">+</button>
    <button onClick={decrementCount} className="btn">-</button>
    </>
  )
};

export default ErrorExample;
