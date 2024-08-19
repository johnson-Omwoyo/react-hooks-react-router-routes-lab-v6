import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState([]);
  const url = "http://localhost:4000/movies/";
  const { id } = useParams();
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(url + id);
        if (!response.ok) {
          throw new Error("Network issue");
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, []);
  const { title, genres, time } = movie;

  return (
    <>
      
        {/* What component should go here? */}

        <NavBar/>
        <h1>{title}</h1>
        <p>{time}</p>
        {genres && genres.map((gerne) => <span key={gerne}>{gerne}</span>)}
     
    </>
  );
}

export default Movie;
