import React, { useState, useEffect } from "react";
import "./App.css";
import requests from "./requests";
import axios from "./axios";
//COMPONENTS
import Card from "./Card/Card";
import BPagination from "./Pagination/Pagination";

function App() {
  let fetchUrl = requests.fetchNetflixOriginals;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  //original movies
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      setLoading(false);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //Get current posts
  const indexOfLastPage = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPage - postsPerPage;
  const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPage);

  //changepage
  const paginate = (items) => {
    return setCurrentPage(items);
  };

  return (
    <div className="app">
      <div className="home__section">
        {currentPosts.map((movie) => (
          <Card key={movie.id} {...movie} loading={loading} type="Originals" />
        ))}
      </div>
      <BPagination
        postsPerPage={postsPerPage}
        totalPosts={movies.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
