import React from "react";
import Profile from "./profile/Profile";
import "./App.css";

function App() {
  const handleName = () => {
    alert("Hello Hamza Zahmoul");
  };
  return (
    <div className="App" style={{ display: "flex", justifyContent: "center" }}>
      <Profile
        fullName={"Hamza Zahmoul"}
        bio={"something here"}
        profession={"Developper"}
        handleName={handleName}
      >
        <hr />
        <div>
          <img src="/profile.png" alt="profile.jpeg" />
        </div>
      </Profile>
    </div>
  );
}

export default App;
