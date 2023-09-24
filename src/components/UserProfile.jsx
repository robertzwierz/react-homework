import React from "react";

function ProfilePicture({ src }) {
  return <img src={src} alt="Profile" />;
}

function ProfileDetails({ name, email }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
    </div>
  );
}

function UserProfile({ name, email, src }) {
  return (
    <div>
      <ProfilePicture src={src} />
      <ProfileDetails name={name} email={email} />
    </div>
  );
}

export default UserProfile;
