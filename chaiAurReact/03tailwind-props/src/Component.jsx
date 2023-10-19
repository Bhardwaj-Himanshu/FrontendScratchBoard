// import React, { useState, useEffect } from 'react';

// function getRandomUser() {
//   // Fetch a random user from the RandomUser API
//   return fetch('https://randomuser.me/api/')
//     .then((response) => response.json())
//     .then((data) => {
//       return data.results[0];
//     });
// }

// function Component() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     getRandomUser().then((randomUser) => {
//       console.log(randomUser);
//       setUser(randomUser);
//     });
//   }, []);

//   return (
//     <>
//       <div className="max-w-sm rounded overflow-hidden shadow-lg">
//         {user && (
//           <img
//             src={user.picture.medium}
//             alt={`${user.name.first} ${user.name.last}`}
//             className="w-full"
//           />
//         )}
//         <div className="px-6 py-4">
//           {user && (
//             <div className="font-bold text-xl mb-2">
//               {user.name.first} {user.name.last}
//             </div>
//           )}
//           {user && <p className="text-gray-700 text-base">{user.email}</p>}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Component;

const Component = (props) => {
  const { src, name, p } = props;

  return (
    <>
      <div>
        <img src={src}></img>
        <h4>{name}</h4>
        <p>{p}</p>
      </div>
    </>
  );
};
export default Component;
