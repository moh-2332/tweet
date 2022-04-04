import React, { useEffect, useContext } from "react";

import { interval, merge } from "rxjs";
import { map } from "rxjs/operators";

import TweetContext from "../../store/tweet-context";
import TweetInfo from "./NewTweet/TweetInfo";
import Tweet from "./Tweet/Tweet";

const TweetsList = () => {
  const tweetCtx = useContext(TweetContext);

  const changeLikeHandler = (id: number, value: boolean) => {
    tweetCtx.setLikeValue(id, value);
  };

  useEffect(() => {
    // const createTweetSource = (
    //   frequency: number,
    //   account: string,
    //   attribute: string
    // ) => {
    //   return interval(frequency).pipe(
    //     map((i) => ({
    //       account,
    //       timestamp: Date.now(),
    //       content: `${attribute} Tweet number ${i + 1}`,
    //     }))
    //   );
    // };
    // const tweets = merge(
    //   createTweetSource(5000, "AwardsDarwin", "Facepalm"),
    //   createTweetSource(3000, "realDonaldTrump", "Stupid"),
    //   createTweetSource(5000, "CommitStrip", "Funny")
    // );
    // tweets.subscribe((result) => {
    //   tweetCtx.addToTweets(result);
    // });
  }, [tweetCtx]);

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
