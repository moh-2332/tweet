import React, { useReducer } from "react";
import { TweetDef } from "../models/TweetDef";

import TweetContext from "./tweet-context";

interface ITweet {
  tweets: TweetDef[];
  likesCount: number;
}

const initialState: ITweet = {
  tweets: [],
  likesCount: 0,
};

const tweetReducer = (
  state: ITweet,
  action: { type: string; payload: any }
) => {
  if (action.type === "ADD") {
    return {
      ...state,
      tweets: [action.payload, ...state.tweets],
    };
  }

  return state;
};

const TweetProvider: React.FC = ({ children }) => {
  const [tweetState, dispatchTweetAction] = useReducer(
    tweetReducer,
    initialState
  );

  const addToTweetsHandler = (tweet: TweetDef) => {
    dispatchTweetAction({ type: "ADD", payload: tweet });
  };

  const removeFromTweetsHandler = (timeStamp: Date) => {
    dispatchTweetAction({ type: "REMOVE", payload: timeStamp });
  };

  const tweetContext = {
    tweets: tweetState.tweets,
    likesCount: tweetState.likesCount,
    addToTweets: addToTweetsHandler,
    removeFromTweets: removeFromTweetsHandler,
  };

  return (
    <TweetContext.Provider value={tweetContext}>
      {children}
    </TweetContext.Provider>
  );
};

export default TweetProvider;
