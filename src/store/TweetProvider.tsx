import React, { useEffect, useReducer } from "react";
import { TweetDef } from "../models/TweetDef";

import { interval, merge } from "rxjs";
import { map } from "rxjs/operators";

import { v4 as uuid } from "uuid";

import TweetContext from "./tweet-context";
import { initialState, tweetReducer } from "../reducers/tweet-reducer";

const createTweetSource = (
  frequency: number,
  account: string,
  attribute: string
) => {
  return interval(frequency).pipe(
    map((i) => ({
      account,
      timestamp: Date.now(),
      content: `${attribute} Tweet number ${i + 1}`,
    }))
  );
};
const tweets = merge(
  createTweetSource(5000, "AwardsDarwin", "Facepalm"),
  createTweetSource(3000, "iamdevloper", "Expert"),
  createTweetSource(5000, "CommitStrip", "Funny")
);

const TweetProvider: React.FC = ({ children }) => {
  const [tweetState, dispatchTweetAction] = useReducer(
    tweetReducer,
    initialState
  );

  useEffect(() => {
    tweets.subscribe((result) => {
      dispatchTweetAction({
        type: "ADD",
        payload: {
          tweet: { ...result, id: uuid(), isLiked: false },
          seconds: 30,
        },
      });
    });
  }, []);

  const addToTweetsHandler = (tweet: TweetDef, seconds: number) => {
    dispatchTweetAction({ type: "ADD", payload: { tweet, seconds } });
  };

  const setLikeHandler = (id: string, value: boolean) => {
    dispatchTweetAction({ type: "SET_LIKE", payload: { id, value } });
  };

  const clearTweetshandler = () => {
    dispatchTweetAction({ type: "CLEAR" });
  };

  const tweetContext = {
    tweets: tweetState.tweets,
    totalLikesCount: tweetState.totalLikesCount,
    tweetsLikesCount: tweetState.tweetsLikesCount,
    addToTweets: addToTweetsHandler,
    setLikeValue: setLikeHandler,
    clearTweets: clearTweetshandler,
  };

  return (
    <TweetContext.Provider value={tweetContext}>
      {children}
    </TweetContext.Provider>
  );
};

export default TweetProvider;
