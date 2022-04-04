import React, { useContext } from "react";

import TweetContext from "../../store/tweet-context";
import TweetInfo from "./NewTweet/TweetInfo";
import Tweet from "./Tweet/Tweet";

const TweetsList = () => {
  const tweetCtx = useContext(TweetContext);

  const changeLikeHandler = (id: string, value: boolean) => {
    tweetCtx.setLikeValue(id, value);
  };

  return (
    <React.Fragment>
      <TweetInfo />
      {tweetCtx.tweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          tweetInfo={tweet}
          onLikeToggle={changeLikeHandler}
        />
      ))}
    </React.Fragment>
  );
};

export default TweetsList;
