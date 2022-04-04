import React, { useCallback, useContext, useState } from "react";

import TweetContext from "../../store/tweet-context";
import TweetInfo from "./TweetInfo/TweetInfo";
import Tweet from "./Tweet/Tweet";

const TweetsList = () => {
  const tweetCtx = useContext(TweetContext);
  const [isFiltered, setIsFiltered] = useState(false);

  const changeLikeHandler = (id: string, value: boolean) => {
    tweetCtx.setLikeValue(id, value);
  };

  const filterHandler = useCallback((filter: boolean) => {
    setIsFiltered(filter);
  }, []);

  const filteredList = isFiltered
    ? tweetCtx.tweets.filter((tweet) => tweet.isLiked)
    : tweetCtx.tweets;

  return (
    <React.Fragment>
      <TweetInfo onFilter={filterHandler} isFiltered={isFiltered} />
      {!filteredList.length && (
        <p style={{ padding: 8 }}>There is not any tweets</p>
      )}
      {filteredList.map((tweet) => (
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
