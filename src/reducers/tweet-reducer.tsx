import { TweetDef } from "../models/TweetDef";

interface ITweet {
  tweets: TweetDef[];
  totalLikesCount: number;
  tweetsLikesCount: number;
}

export const initialState: ITweet = {
  tweets: [],
  totalLikesCount: 0,
  tweetsLikesCount: 0,
};

export const tweetReducer = (
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
