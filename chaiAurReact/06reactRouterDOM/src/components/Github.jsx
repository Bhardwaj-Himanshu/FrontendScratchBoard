import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Github = ({ defaultId }) => {
  const { userId } = useParams();
  const [data, setData] = useState(null);

  let url = `https://api.github.com/users/${defaultId}`;
  if (userId) {
    url = `https://api.github.com/users/${userId}`;
  }

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // Empty dependency array ensures this effect runs once

  return (
    <div>
      {data ? (
        <div>
          <img src={data.avatar_url} alt="User Avatar" className="w-50 h-50" />
          <h4>{data.name}</h4>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Github;
