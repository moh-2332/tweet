import React, { useState } from "react";
import { TweetDef } from "../../../models/TweetDef";
import LikeButton from "../../UI/LikeButton/LikeButton";

import "./tweet.css";

const Tweet: React.FC<{
  tweetInfo: TweetDef;
  onLikeToggle: (id: number, value: boolean) => void;
}> = ({ tweetInfo, onLikeToggle }) => {
  const changeLikeHandler = (value: boolean) => {
    onLikeToggle(tweetInfo.id, value);
  };

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
              {tweetInfo.account}
              <span className="tweet-header-special">
                <span className="material-icons tweet-badge"> verified </span>
                {Math.floor((Date.now() - tweetInfo.timestamp) / 1000)} seconds
                ago
              </span>
            </h3>
          </div>
          <div className="tweet-header-description">
            <p>{tweetInfo.content}</p>
          </div>
        </div>
        <div className="tweet-footer">
          <span className="material-icons"> chat_bubble_outline </span>
          <span className="material-icons"> repeat </span>
          <LikeButton
            isFavorite={tweetInfo.isLiked}
            onToggle={changeLikeHandler}
          />
          <span className="material-icons"> publish </span>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
