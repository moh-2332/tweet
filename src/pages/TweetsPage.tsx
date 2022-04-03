import React from "react";
import AppBar from "../components/layout/AppBar/AppBar";
import TweetsList from "../components/Tweets/TweetsList";

const TweetsPage = () => {
  return (
    <div className="content">
      <AppBar title={"Home"} />
      <TweetsList />
    </div>
  );
};

export default TweetsPage;
