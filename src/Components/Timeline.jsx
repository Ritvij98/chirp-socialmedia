import React, { useEffect } from "react";
import Tweet from "./Tweet";

// TWITTER TIMELINE UI COMPONENT
export default function Timeline({tweets,selectTweet,clearTweet}) {
  let likedTweets = localStorage.getItem("likedTweets");
  let likedTweetsArray = likedTweets ? JSON.parse(likedTweets) : [];

  useEffect(() => {
    clearTweet();
  }, [clearTweet]);

  return (
    <div className="timeline">
      {tweets
        ? tweets.map((tweet) => {
            return (
                <div key={tweet._id}>
                    <Tweet tweetData={tweet} selectTweet={selectTweet} likedTweetsArray={likedTweetsArray}/>
                </div>
            );
          })
        : "loading..."}
    </div>
  );
}
