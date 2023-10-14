import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Himanshu',
    age: 20,
    hobby: 'Does absolutely nothing',
  });

  function someFunction() {
    setPerson({
      name: function () {
        let randomStr = '';
        for (let i = 0; i < 8; i++) {
          let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          let randomInt = Math.floor(Math.random() * str.length);

          randomStr += str[randomInt];
        }
        return randomStr;
      },
      age: 22,
      hobby: 'none',
    });
  }
  return (
    <>
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <h4>{person.age}</h4>
      <p>{person.hobby}</p>
      <button className="btn" onClick={someFunction}>
        New Person
      </button>
    </>
  );
};

export default UseStateObject;
