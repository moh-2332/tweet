import React from "react";

import "./tweet.css";

const Tweet = () => {
  return (
    <div className="tweet">
      <div className="tweet-avatar">
        <img
          src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
          alt=""
        />
      </div>

      <div className="tweet-body">
        <div className="tweet-header">
          <div className="tweet-header-text">
            <h3>
              some text
              <span className="tweet-header-special">
                <span className="material-icons tweet-badge"> verified </span>
                @some tag
              </span>
            </h3>
          </div>
          <div className="tweet-header-description">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="tweet-footer">
          <span className="material-icons"> chat_bubble_outline </span>
          <span className="material-icons"> repeat </span>
          <span className="material-icons"> favorite_border </span>
          <span className="material-icons"> publish </span>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
