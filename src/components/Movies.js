import classes from "./Movie.module.css";

const Movies = (props) => {
  return (
    <li key={props.id} className={classes.movie}>
      <h2>{props.movieTitle}</h2>
      <h3>{props.release}</h3>
      <p>{props.opening_crawl}</p>
    </li>
  );
};

export default Movies;
