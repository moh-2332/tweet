import React, { useReducer } from "react";
import { TweetDef } from "../models/TweetDef";

import TweetContext from "./tweet-context";

interface ITweet {
  tweets: TweetDef[];
  totalLikesCount: number;
  tweetsLikesCount: number;
}

const initialState: ITweet = {
  tweets: [
    {
      id: 1,
      account: "realDonaldTrump",
      timestamp: 1649074915524,
      content: "Stupid Tweet number 3",
      isLiked: false,
    },
    {
      id: 2,
      account: "realDonaldTrump",
      timestamp: 1649070696601,
      content: "Stupid Tweet number 3",
      isLiked: false,
    },
  ],
  totalLikesCount: 0,
  tweetsLikesCount: 0,
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

  if (action.type === "SET_LIKE") {
    let likesCounter = 0;
    return {
      ...state,
      tweets: state.tweets.map((tweet) => {
        if (tweet.id === action.payload.id) {
          tweet.isLiked = action.payload.value;
        }

        if (tweet.isLiked) {
          likesCounter++;
        }

        return tweet;
      }),
      totalLikesCount: action.payload.value
        ? state.totalLikesCount + 1
        : state.totalLikesCount - 1,
      tweetsLikesCount: likesCounter,
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

  const removeFromTweetsHandler = (timeStamp: number) => {
    dispatchTweetAction({ type: "REMOVE", payload: timeStamp });
  };

  const setLikeHandler = (id: number, value: boolean) => {
    dispatchTweetAction({ type: "SET_LIKE", payload: { id, value } });
  };

  const tweetContext = {
    tweets: tweetState.tweets,
    totalLikesCount: tweetState.totalLikesCount,
    tweetsLikesCount: tweetState.tweetsLikesCount,
    addToTweets: addToTweetsHandler,
    removeFromTweets: removeFromTweetsHandler,
    setLikeValue: setLikeHandler,
  };

  return (
    <TweetContext.Provider value={tweetContext}>
      {children}
    </TweetContext.Provider>
  );
};

export default TweetProvider;
