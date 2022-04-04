import React from "react";
import { TweetDef } from "../../../models/TweetDef";
import LikeButton from "../../UI/LikeButton/LikeButton";

import "./tweet.css";

const AVATARS: { [key: string]: string } = {
  AwardsDarwin:
    "https://pbs.twimg.com/profile_images/1419007842498097156/Q9ZGH20f_400x400.jpg",
  iamdevloper:
    "https://pbs.twimg.com/profile_images/1178631635606151168/yIlrcg4o_400x400.jpg",
  CommitStrip:
    "https://pbs.twimg.com/profile_images/799176331623800832/ggd6_JbJ_400x400.jpg",
};

const Tweet: React.FC<{
  tweetInfo: TweetDef;
  onLikeToggle: (id: string, value: boolean) => void;
}> = ({ tweetInfo, onLikeToggle }) => {
  const changeLikeHandler = (value: boolean) => {
    onLikeToggle(tweetInfo.id, value);
  };

  return (
    <div className="tweet">
      <div className="tweet-avatar">
        <img src={AVATARS[tweetInfo.account]} alt={tweetInfo.account} />
      </div>

      <div className="tweet-body">
        <div className="tweet-header">
          <div className="tweet-header-text">
            <h3>
              {tweetInfo.account}
              <span className="tweet-header-time">
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
