import React, { useContext } from "react";
import TweetContext from "../../../store/tweet-context";

import "./tweet-info.css";

const TweetInfo = () => {
  const tweetCtx = useContext(TweetContext);
  return (
    <div className="tweetbox">
      <p>Total Likes up to now: {tweetCtx.totalLikesCount}</p>
      <p>
        The number of likes in the current tweets: {tweetCtx.tweetsLikesCount}
      </p>
    </div>
  );
};

export default TweetInfo;
