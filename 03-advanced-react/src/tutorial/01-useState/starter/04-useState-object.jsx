import { useState } from 'react';

const UseStateObject = () => {
  
  const [name,setName] = useState('Himanshu')
  const [age,setAge] = useState(22)
  const [hobby,setHobby] = useState('Sleeps all day')

  const updatePerson = ()=>{
      setName("Rohan")
      setAge(16)
      setHobby("Sleeps All day.")
  }

  return (
    <>
    <h2>useState object example</h2>
    <h3>{name}</h3>
    <h4>{age}</h4>
    <p>{hobby}</p>
    <button className='btn' onClick={updatePerson}>New Person</button>
    </>
  )

};

export default UseStateObject;
