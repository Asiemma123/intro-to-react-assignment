import "./styles/App.css";
import UserProfile from "./UserProfile";
function App() {
  //The array of users to render in the assignment
  const users = [
    {
      name: "John Doe",
      email: "john@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    },
    {
      name: "Michael Johnson",
      email: "michael@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      name: "Emily Brown",
      email: "emily@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    },
    {
      name: "David Wilson",
      email: "david@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      name: "Sarah Davis",
      email: "sarah@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    },
    {
      name: "Daniel Thompson",
      email: "daniel@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      name: "Olivia Martinez",
      email: "olivia@example.com",
      imgUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    },
  ];
  return (
    <div className="App">
      <header >
        <h1 className="">User Profiles:</h1>
      </header>
      <div className="user-profile-wrapper">
        {/* 
        For each user in our array, we will return a UserProfile
        component that takes in the index as a key so the VDOM can
        keep track of this particular component and the user object
        as the value of a custom 'user' prop that we defined.
        */}
        {users.map((user, index) => (
          <UserProfile key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;