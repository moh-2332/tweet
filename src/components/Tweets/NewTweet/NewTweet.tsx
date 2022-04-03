import React from "react";

import "./new-tweet.css";

const NewTweet = () => {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox-input">
          <img
            src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
            alt=""
          />
          <input type="text" placeholder="What's happening?" />
        </div>
        <button className="tweetbox-button">Tweet</button>
      </form>
    </div>
  );
};

export default NewTweet;
