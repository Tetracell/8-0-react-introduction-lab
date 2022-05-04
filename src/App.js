import React from "react";
import "./index.css";
import Contacts from "./Components/Contacts.js";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";

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
