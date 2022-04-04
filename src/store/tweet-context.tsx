import React from "react";
import { TweetDef } from "../models/TweetDef";

const TweetContext = React.createContext<{
  tweets: TweetDef[];
  totalLikesCount: number;
  tweetsLikesCount: number;
  addToTweets: (tweet: TweetDef) => void;
  removeFromTweets: (timeStamp: number) => void;
  setLikeValue: (id: number, value: boolean) => void;
}>({
  tweets: [],
  totalLikesCount: 0,
  tweetsLikesCount: 0,
  addToTweets: (tweet: TweetDef) => {},
  removeFromTweets: (timeStamp: number) => {},
  setLikeValue: (id: number, value: boolean) => {},
});

export default TweetContext;
