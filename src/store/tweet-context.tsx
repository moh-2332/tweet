import React from "react";
import { TweetDef } from "../models/TweetDef";

const TweetContext = React.createContext<{
  tweets: TweetDef[];
  likesCount: number;
  addToTweets: (tweet: TweetDef) => void;
  removeFromTweets: (timeStamp: Date) => void;
}>({
  tweets: [],
  likesCount: 0,
  addToTweets: (tweet: TweetDef) => {},
  removeFromTweets: (timeStamp: Date) => {},
});

export default TweetContext;
