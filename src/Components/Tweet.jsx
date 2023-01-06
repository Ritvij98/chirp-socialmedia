import React from "react";


// SINGLE TWEET COMPONENT
export default function Tweet({ tweetData }) {
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
        <img
          className="tweet-image"
          src={tweetData.imageUrl}
          alt=""
        />
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
          <div className="tweet-action">
            <i className="fa-solid fa-heart"></i>
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
