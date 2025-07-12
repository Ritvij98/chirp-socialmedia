import React, { useEffect, useState } from "react";
import moment from "moment";
// ORIGINAL TWEET PAGE COMPONENT
export default function OriginalTweet({ tweetData }) {
  const [liked, setLiked] = useState(false);
  let likedTweets = localStorage.getItem("likedTweets");
  let likedTweetsArray = likedTweets ? JSON.parse(likedTweets) : [];

  useEffect(() => {
    if (!likedTweetsArray?.length) return;
    likedTweetsArray.forEach((id) => {
      if (tweetData._id === id) setLiked(true);
      console.log(id);
    });
  }, [likedTweetsArray]);

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
        <a className="author" href={tweetData.url}>
          {tweetData.author}
        </a>
        <p className="text">{tweetData.text}</p>
        <img className="tweet-image" src={tweetData.imageUrl} alt="" />
        <p className="text">{moment(tweetData.publishedDate).format("LLL")}</p>
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
            {tweetData.likes}
          </div>
          <div className="tweet-action">
            <i className="fa-solid fa-upload"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
