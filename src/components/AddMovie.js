import classes from "./AddMovie.module.css";
import { useRef } from "react";
import Swal from "sweetalert2";

const AddMovie = () => {
  const title = useRef();
  const openingText = useRef();
  const releaseDate = useRef();
  const episode_id = Math.floor(Math.random() * 100);

  // Enable CORS using the cors middleware
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      episode_id: episode_id,
      title: title.current.value,
      openingText: openingText.current.value,
      releaseDate: releaseDate.current.value,
    };

    if (!data.title && !data.openingText && !data.releaseDate) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fields cannot be empty!",
      });
      return;
    }
    fetch("https://react-http-16399-default-rtdb.firebaseio.com/movies.json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json)
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    title.current.value = "";
    openingText.current.value = "";
    releaseDate.current.value = "";
    Swal.fire("Good job!", "You Successfully Added Movies!", "success");
  };

  return (
    <form className={classes.control} onSubmit={onSubmitHandler}>
      <label>Title</label>
      <input type="text" ref={title} />
      <label>Opening Text</label>
      <textarea ref={openingText} name="openingText" />
      <label>ReleaseDate</label>
      <input ref={releaseDate} type="date" />
      <button>Add Movie</button>
    </form>
  );
};

export default AddMovie;
