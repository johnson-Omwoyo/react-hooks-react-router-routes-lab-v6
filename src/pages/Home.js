import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  const url = "http://localhost:4000/movies";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Poor Network response");
        }
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
     <div>
        <NavBar />
        {/* What component should go here? */}
    
        <h1>Home Page</h1>
        {movies.map((movie) => (
          <MovieCard key={movie.id} title={movie.title} id={movie.id} />
        ))}
      </div>
    </>
  );
}

export default Home;
