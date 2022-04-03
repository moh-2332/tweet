import React, { useEffect, useContext } from "react";

import { interval, merge } from "rxjs";
import { map } from "rxjs/operators";

import TweetContext from "../../store/tweet-context";
import AppBar from "../layout/AppBar/AppBar";
import NewTweet from "./NewTweet/NewTweet";
import Tweet from "./Tweet/Tweet";

const TweetsList = () => {
  const tweetCtx = useContext(TweetContext);

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
      <NewTweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </React.Fragment>
  );
};

export default TweetsList;
