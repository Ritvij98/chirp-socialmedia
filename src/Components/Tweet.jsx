import React, { useState, useEffect } from "react";

// SINGLE TWEET COMPONENT
export default function Tweet({ tweetData, selectTweet, likedTweetsArray }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    likedTweetsArray.forEach((id) => {
      if (tweetData._id === id) setLiked(true);
    });
  }, []);

  // STORING TWEET IN LOCALSTORAGE ON LIKING ORIGINAL TWEET

  const likeTweet = () => {
    if (liked) {
      var removeTweet = likedTweetsArray.indexOf(tweetData._id);
      likedTweetsArray.splice(removeTweet, 1);
      localStorage.setItem("likedTweets", JSON.stringify(likedTweetsArray));
      setLiked(false);
    } else {
      likedTweetsArray.push(tweetData._id);
      localStorage.setItem("likedTweets", JSON.stringify(likedTweetsArray));
      setLiked(true);
    }
  };
  
  return (
    <div className="tweet">
      <div className="tweet-avatar">
        <img src={tweetData.imageUrl} alt="" />
      </div>
      <div className="tweet-body">
        <div onClick={() => selectTweet(tweetData)}>
          <a className="author" href={tweetData.url}>
            {tweetData.author}
          </a>
          <p className="text">{tweetData.text}</p>
          <img className="tweet-image" src={tweetData.imageUrl} alt="" />
        </div>
        <div className="tweet-actions">
          <div className="tweet-action">
            <i className="fa-solid fa-chart-simple"></i>
          </div>
          <div className="tweet-action">
            <i className="fa-regular fa-comment"></i>
            {tweetData.replies}
          </div>
          <div className="tweet-action">
            <i className="fa-solid fa-retweet"></i>
            {tweetData.retweets}
          </div>
          <div className="tweet-action" onClick={likeTweet}>
            <i
              className={
                liked
                  ? "fa-solid fa-heart like-button liked"
                  : "fa-solid fa-heart like-button"
              }
            ></i>
          </div>
          <div className="tweet-action">
            <i className="fa-solid fa-upload"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
