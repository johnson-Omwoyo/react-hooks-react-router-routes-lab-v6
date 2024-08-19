import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [director, setDirector] = useState([]);
  const url = "http://localhost:4000/directors";

  useEffect(() => {
    const fetchDirectors = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network issues");
        }
        const data = await response.json();
        setDirector(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDirectors();
  }, []);

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar  />
        <h1>Directors Page</h1>
      </header>
      <main>
        {director &&
          director.map((direc) => (
            <article key={direc.id}>
              <h2 key={direc.name}>{direc.name}</h2>
              <ul key={direc.name + "l"}>
                {direc.movies.map((movie) => (
                  <li key={movie}>{movie}</li>
                ))}
              </ul>
            </article>
          ))}
        {/* Director info here! */}
      </main>
    </>
  );
}

export default Directors;
