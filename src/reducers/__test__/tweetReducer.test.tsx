import "@testing-library/jest-dom";

import { initialState, tweetReducer } from "../tweet-reducer";

const TWEET_ONE = {
  id: "1",
  account: "account 1",
  content: "content 1",
  timestamp: 25000,
  isLiked: false,
};

const TWEET_TWO = {
  id: "2",
  account: "account 2",
  content: "content 2",
  timestamp: 0,
  isLiked: false,
};

const CLEAR_ACTION = { type: "CLEAR" };
const ADD_ACTION = { type: "ADD", payload: { tweet: TWEET_ONE }, seconds: 30 };
const SET_LIKE_ACTION = {
  type: "SET_LIKE",
  payload: { id: "1", value: true },
};

describe("TweetReducer tests", () => {
  it("should return the initial state", () => {
    const result = tweetReducer(initialState, CLEAR_ACTION);
    expect(result).toMatchObject(initialState);
  });

  it("should add the new tweet", () => {
    Date.now = jest.fn(() => 30000);
    const result = tweetReducer(initialState, ADD_ACTION);
    expect(result.tweets).not.toHaveLength(0);
    expect(result.tweets).toContainEqual(TWEET_ONE);
  });

  it("should change the like value", () => {
    initialState.tweets.push(TWEET_ONE);
    const result = tweetReducer(initialState, SET_LIKE_ACTION);
    expect(result.totalLikesCount).toEqual(1);
  });

  it("should remove the tweet from the list, because it is expired", () => {
    Date.now = jest.fn(() => 50000);
    initialState.tweets.push(TWEET_TWO);
    const result = tweetReducer(initialState, ADD_ACTION);
    expect(result.tweets).toHaveLength(1);
    expect(result.tweets).not.toContainEqual(TWEET_TWO);
  });
});
