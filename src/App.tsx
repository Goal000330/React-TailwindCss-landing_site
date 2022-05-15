import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import MainBody from "./components/MainBody/MainBody";
import ProfileCard from "./components/Base/ProfileCard/ProfileCard";
import DiscoverCard from "./components/Base/DiscoverCard/DiscoverCard";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="c-space"></div>
      <div className="c-standardRoot">
        <div>
          <ProfileCard
            connectionCnt={51}
            followerCnt={25}
            className="c-profileCard"
          />
          <DiscoverCard />
        </div>
      </div>
      <MainBody />
    </div>
  );
}

export default App;
