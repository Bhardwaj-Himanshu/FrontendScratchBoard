import { useState } from 'react';

const BgChanger = () => {
  let [color, setColor] = useState('black');
  document.querySelector('body').style.backgroundColor = color;

  return (
    <>
      <button className="bg-red-600" onClick={() => setColor('red')}>
        Red
      </button>
      <button className="bg-blue-600" onClick={() => setColor('blue')}>
        Blue
      </button>
      <button className="bg-green-600" onClick={() => setColor('green')}>
        Green
      </button>
      <button className="bg-yellow-600" onClick={() => setColor('yellow')}>
        Yellow
      </button>
    </>
  );
};
export default BgChanger;
