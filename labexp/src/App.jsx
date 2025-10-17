// App.js
import React from "react";
import UserCard from "./UserCard";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>User Profile</h1>
      <UserCard
        name="Vignesh"
        age={18}
        bio="A passionate web developer who loves React and UI design."
      />
    </div>
  );
}

export default App;
