function UserProfile({ user }) {
    return (
      <div className="user-profile">
        {}
        <img src={user.imgUrl} className="user-profile-image" alt={user.name} />
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    );
  }

  export default UserProfile