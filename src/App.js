import React, { useState, useEffect } from "react";
import "./App.css";
import requests from "./requests";
import axios from "./axios";
//COMPONENTS
import Card from "./Card/Card";
function App() {
  const [movies, setMovies] = useState([]);
  let fetchUrl = requests.fetchNetflixOriginals;
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div className="app">
      <div className="home__section">
        {movies.slice(0, 3).map((movie) => (
          <Card key={movie.id} {...movie} price="Free" />
        ))}
      </div>
      <div className="home__section">
        {movies.slice(3, 6).map((movie) => (
          <Card key={movie.id} {...movie} price="Free" />
        ))}
      </div>
    </div>
  );
}

export default App;
// src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
// title="Netflix Originals"
// fetchUrl={requests.fetchNetflixOriginals}
// price="Free"
// description="September 11 | 9pm"
