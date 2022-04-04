import React, { FormEvent, useContext } from "react";
import TweetContext from "../../../store/tweet-context";

import "./tweet-info.css";

const TweetInfo: React.FC<{
  isFiltered: boolean;
  onFilter: (value: boolean) => void;
}> = ({ onFilter, isFiltered }) => {
  const tweetCtx = useContext(TweetContext);

  const filterHandler = (e: FormEvent) => {
    e.preventDefault();
    onFilter(!isFiltered);
  };

  return (
    <div className="tweetbox">
      <p>The number of liked tweets up to now: {tweetCtx.totalLikesCount}</p>
      <p>
        The number of liked tweets contained within the list:
        {tweetCtx.tweetsLikesCount}
      </p>
      <div className="actions">
        <button onClick={filterHandler}>
          {isFiltered ? "All Tweets" : "Liked Tweets"}
        </button>
      </div>
    </div>
  );
};

export default TweetInfo;
