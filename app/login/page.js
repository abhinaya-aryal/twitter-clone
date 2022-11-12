// # Here, folder will represent a specific route of folder name so every folder need page.js file in it to render something in browser.
const fetchUsers = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const LogInPage = async () => {
  let users = await fetchUsers();
  console.log(users);
  return (
    <>
      {users.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </>
  );
};

export default LogInPage;
