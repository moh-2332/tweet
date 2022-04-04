import React, { useEffect, useReducer } from "react";
import { TweetDef } from "../models/TweetDef";

import { interval, merge } from "rxjs";
import { map } from "rxjs/operators";

import { v4 as uuid } from "uuid";

import TweetContext from "./tweet-context";

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

interface ITweet {
  tweets: TweetDef[];
  totalLikesCount: number;
  tweetsLikesCount: number;
}

const initialState: ITweet = {
  tweets: [],
  totalLikesCount: 0,
  tweetsLikesCount: 0,
};

const tweetReducer = (
  state: ITweet,
  action: { type: string; payload?: any }
) => {
  if (action.type === "ADD") {
    return {
      ...state,
      tweets: [
        action.payload.tweet,
        ...state.tweets.filter(
          (tweet) =>
            (Date.now() - tweet.timestamp) / 1000 <= action.payload.seconds
        ),
      ],
      tweetsLikesCount: state.tweets.filter((tweet) => tweet.isLiked).length,
    };
  }

  if (action.type === "SET_LIKE") {
    return {
      ...state,
      tweets: state.tweets.map((tweet) => {
        if (tweet.id === action.payload.id) {
          tweet.isLiked = action.payload.value;
        }

        return tweet;
      }),
      totalLikesCount: action.payload.value
        ? state.totalLikesCount + 1
        : state.totalLikesCount - 1,
      tweetsLikesCount: state.tweets.filter((tweet) => tweet.isLiked).length,
    };
  }

  if (action.type === "CLEAR") {
    return initialState;
  }

  return state;
};

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
