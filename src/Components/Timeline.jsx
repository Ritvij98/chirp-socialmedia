import React, { useEffect } from "react";
import Tweet from "./Tweet";

// TWITTER TIMELINE UI COMPONENT
export default function Timeline({tweets,selectTweet,clearTweet}) {

  useEffect(() => {
    clearTweet();
  },[])

  return (
    <div className="timeline">
      {tweets
        ? tweets.map((tweet) => {
            return (
                <div onClick={()=>selectTweet(tweet)} key={tweet._id}>
                    <Tweet tweetData={tweet} />
                </div>
            );
          })
        : "loading..."}
    </div>
  );
}
