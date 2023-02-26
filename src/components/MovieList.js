import classes from "./MoviesList.module.css";
import Movies from "./Movies";

const MovieList = (props) => {
  const listOfMovies = props.movies;
  return (
    <ul className={classes["movies-list"]}>
      {listOfMovies.map(({ episode_id, title, openingText, releaseDate }) => (
        <Movies
          key={episode_id}
          id={episode_id}
          movieTitle={title}
          opening_crawl={openingText}
          release={releaseDate}
        />
      ))}
    </ul>
  );
};

export default MovieList;
