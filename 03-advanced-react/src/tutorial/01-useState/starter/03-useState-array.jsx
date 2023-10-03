import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people,setPeople] = useState(data);

  const MapPeople = ()=>{
      return people.map((person)=>{
         const {id,name} = person;
         return (
              <div key={id}>
              <h1>{name}</h1>
              <button onClick={()=>removeOne(id)}>Remove me</button>
              </div>
         )
      })
  }
  
  const removeOne = (id)=>{
    console.log(`${data[id-1].name} was removed.`); 
    const newPeople = people.filter((person)=>{
     return person.id != id;
    })
    setPeople(newPeople);
  }
  const removeAll = ()=>{
    setPeople([]);
  }
  
  return (
    <div>
      <MapPeople />
      <button className = "btn" onClick={removeAll} style={{marginTop:'2rem'}}>Remove All</button>
    </div>
  )
};

export default UseStateArray;
