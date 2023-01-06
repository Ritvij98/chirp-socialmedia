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
    fetch("http://www.mocky.io/v2/5d1ef97d310000552febe99d")
      .then((response) => response.json())
      .then((json) => {
        setTweets(json);
        setFilteredTweets(json);
      })
      .catch((err) => console.log(err));
  }, []);

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
