const url = 'https://api.github.com/users';

// first let's fetch some data
function fetchUserData() {
  fetch('https://api.github.com/users')
    .then((firstResponse) => {
      firstResponse = firstResponse.json();
      return firstResponse;
    })
    .then((secondResponse) => {
      console.log(secondResponse);
      return secondResponse;
    })
    .catch((err) => {
      console.log(err);
    });
}
const newArray = await fetchUserData();

const FetchData = () => {
  {
    newArray.map((item, index) => {
      return (
        <>
          <h5>{item.login}</h5>
          <p>{item.id}</p>;
        </>
      );
    });
  }
};
export default FetchData;
