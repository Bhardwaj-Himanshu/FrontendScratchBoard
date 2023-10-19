import { useState } from 'react';

const Count = () => {
  let [Counter, setCounter] = useState(0);

  function increaseCount() {
    if (Counter <= 19) {
      setCounter(Counter + 1);
      console.log(Counter);
    }
  }
  function decreaseCount() {
    if (Counter > 0) {
      setCounter(Counter - 1);
      console.log(Counter);
    }
  }

  return (
    <>
      <p>{Counter}</p>
      <button onClick={increaseCount}>Increase {Counter}</button>
      <button onClick={decreaseCount}>decrease {Counter}</button>
    </>
  );
};
export default Count;
