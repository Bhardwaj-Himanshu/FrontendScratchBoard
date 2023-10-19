import { useState } from 'react';

const App = () => {
  const [userData, setUserData] = useState([
    { name: 'Susan', age: 21 },
    { name: 'John', age: 19 },
    { name: 'Rohan', age: 18 },
    { name: 'Sohan', age: 17 },
  ]);

  return (
    <>
      <h1>These mfs have budday today</h1>
      {userData.map((item, index) => {
        return (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>{item.age}</p>
          </div>
        );
      })}
      <button
        className="btn"
        onClick={() => {
          setUserData([]);
        }}
      >
        Clear All
      </button>
    </>
  );
};
export default App;
