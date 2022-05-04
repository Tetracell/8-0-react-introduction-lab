import React from "react";
import Contacts from "./Components/Contacts.js";
import NavBar from "./Components/NavBar.js";
import Posts from "./Components/Posts.js";
import UserProfile from "./Components/UserProfile";import "./index.css";


const App = () => {
  return (
    <>
      <header id="header">
        <NavBar />
      </header>
      <div id="main-container">
        <div id="contacts">
          <Contacts />
        </div>
        <div id="posts">
          <Posts />
        </div>
        <div id="user-profile">
          <UserProfile />
        </div>
      </div>
    </>
  );
};

export default App;
