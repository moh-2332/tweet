import React from "react";
import { TweetDef } from "../models/TweetDef";

const TweetContext = React.createContext<{
  tweets: TweetDef[];
  totalLikesCount: number;
  tweetsLikesCount: number;
  addToTweets: (tweet: TweetDef, seconds: number) => void;
  setLikeValue: (id: string, value: boolean) => void;
}>({
  tweets: [],
  totalLikesCount: 0,
  tweetsLikesCount: 0,
  addToTweets: (tweet: TweetDef, seconds: number) => {},
  setLikeValue: (id: string, value: boolean) => {},
});

export default TweetContext;
