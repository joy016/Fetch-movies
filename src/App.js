import "./App.css";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import { useState, useEffect, useCallback } from "react";
import Spinner from "./components/Spinner";

function App() {
  const [fetchMovies, setFetchMovies] = useState();
  const [loadingState, setLoadingState] = useState(false);

  const fetchdataHandler = useCallback(() => {
    setLoadingState(true);
    fetch("https://react-http-16399-default-rtdb.firebaseio.com/movies.json")
      .then((response) => response.json())
      .then((data) => {
        const movieArray = Object.keys(data).map((key) => data[key]);
        setFetchMovies(movieArray);
        setLoadingState(false);
        console.log("fetch movies", movieArray.length);
      });
  }, []);

  // useEffect(() => {
  //   fetchdataHandler();
  // }, []);

  return (
    <>
      <section>
        <AddMovie />
      </section>
      <section>
        <button onClick={fetchdataHandler}>Fetch Movies</button>
      </section>

      <section>
        {!loadingState ? (
          fetchMovies ? (
            <MovieList movies={fetchMovies} />
          ) : (
            <p>No movies found</p>
          )
        ) : (
          <Spinner />
        )}
      </section>
    </>
  );
}

export default App;
