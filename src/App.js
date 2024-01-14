import React, { useState, useEffect } from "react";
import "./App.css";
import Timeline from "./Components/Timeline";
import OriginalTweet from "./Components/OriginalTweet";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import DateFilter from "./Components/DateFilter";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  const [tweets, setTweets] = useState([]);
  const [filteredTweets, setFilteredTweets] = useState([]);
  const [selectedTweet, setSelectedTweet] = useState(null);

  useEffect(() => {
        setTweets({
  "tweets": [
    {
      "_id": "tweet1",
      "author": "Alice Johnson",
      "text": "Just saw the most beautiful sunset!",
      "imageUrl": "http://example.com/image1.jpg",
      "url": "http://example.com/tweet1",
      "publishedDate": "2024-01-10T17:00:00Z",
      "replies": 3,
      "retweets": 5,
      "likes": 10
    },
    {
      "_id": "tweet2",
      "author": "Bob Smith",
      "text": "Loving the new coffee shop downtown.",
      "imageUrl": "http://example.com/image2.jpg",
      "url": "http://example.com/tweet2",
      "publishedDate": "2024-01-11T08:30:00Z",
      "replies": 2,
      "retweets": 3,
      "likes": 8
    },
 {
      "_id": "tweet3",
      "author": "Carol White",
      "text": "Excited to start my new project!",
      "imageUrl": "http://example.com/image3.jpg",
      "url": "http://example.com/tweet3",
      "publishedDate": "2024-01-12T09:20:00Z",
      "replies": 4,
      "retweets": 6,
      "likes": 12
    },
    {
      "_id": "tweet4",
      "author": "Daniel Green",
      "text": "Great workout at the gym today!",
      "imageUrl": "http://example.com/image4.jpg",
      "url": "http://example.com/tweet4",
      "publishedDate": "2024-01-13T11:45:00Z",
      "replies": 5,
      "retweets": 2,
      "likes": 9
    },
    {
      "_id": "tweet5",
      "author": "Eva Brown",
      "text": "Can't wait for the weekend!",
      "imageUrl": "http://example.com/image5.jpg",
      "url": "http://example.com/tweet5",
      "publishedDate": "2024-01-14T13:30:00Z",
      "replies": 1,
      "retweets": 4,
      "likes": 7
    },
    {
      "_id": "tweet6",
      "author": "Frank Jones",
      "text": "Reading a fascinating book about space.",
      "imageUrl": "http://example.com/image6.jpg",
      "url": "http://example.com/tweet6",
      "publishedDate": "2024-01-15T15:15:00Z",
      "replies": 3,
      "retweets": 5,
      "likes": 11
    },
    {
      "_id": "tweet7",
      "author": "Grace Lee",
      "text": "Just completed a painting I'm really proud of.",
      "imageUrl": "http://example.com/image7.jpg",
      "url": "http://example.com/tweet7",
      "publishedDate": "2024-01-16T17:50:00Z",
      "replies": 6,
      "retweets": 7,
      "likes": 14
    },
    {
      "_id": "tweet8",
      "author": "Henry Martinez",
      "text": "Exploring the city's hidden gems.",
      "imageUrl": "http://example.com/image8.jpg",
      "url": "http://example.com/tweet8",
      "publishedDate": "2024-01-17T19:05:00Z",
      "replies": 2,
      "retweets": 3,
      "likes": 6
    },
    {
      "_id": "tweet9",
      "author": "Isla Davis",
      "text": "Just adopted a new kitten!",
      "imageUrl": "http://example.com/image9.jpg",
      "url": "http://example.com/tweet9",
      "publishedDate": "2024-01-18T20:30:00Z",
      "replies": 4,
      "retweets": 8,
      "likes": 15
    }
  ]
});
        setFilteredTweets(json);
  }, []);
  
  // useEffect(() => {
  //   fetch("https://www.mocky.io/v2/5d1ef97d310000552febe99d")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setTweets(json);
  //       setFilteredTweets(json);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // FILTERING TWEETS BY RANGE
  const filterByDate = (fromDate, toDate) => {
    setFilteredTweets(
      tweets.filter((tweet) => {
        return tweet.publishedDate >= fromDate && tweet.publishedDate <= toDate;
      })
    );
    alert("Filtered Tweets!");
  };
  const removeFilter = () => {
    setFilteredTweets(tweets);
    alert("Filter Removed!");
  };

  // SELECTING TWEET TO DISPLAY SINGLE ORIGINAL TWEET
  const selectTweet = (tweet) => {
    setSelectedTweet(tweet);
    let path = tweet._id.split(".com/")[1];
    history.push(`/${path}`);
  };
  const clearTweet = () => {
    setSelectedTweet(null);
  };


  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <Header selectedTweet={selectedTweet} />
        <div className="wrapper">
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route
              path="/home"
              children={
                <Timeline
                  tweets={filteredTweets}
                  selectTweet={selectTweet}
                  clearTweet={clearTweet}
                />
              }
            />
            <Route
              path="/:id"
              children={
                <OriginalTweet
                  tweetData={selectedTweet}
                />
              }
            />
          </Switch>
        </div>
      </div>
      <DateFilter filterByDate={filterByDate} removeFilter={removeFilter} />
    </div>
  );
}

export default App;
