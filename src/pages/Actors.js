import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actor, setActor] = useState([]);
  const url = "http://localhost:4000/actors";

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network issues");
        }
        const data = await response.json();
        setActor(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchActors();
  }, []);

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar key={"Actors"} />

      </header>
      <main>
        <h1>Actors Page</h1>
        {actor &&
          actor.map((direc) => (
            <article key={direc.id}>
              <h2 key={direc.name}>{direc.name}</h2>
              <ul key={direc.name + "l"}>
                {direc.movies.map((movie) => (
                  <li key={movie}>{movie}</li>
                ))}
              </ul>
            </article>
          ))}
        {/* actor info here! */}
      </main>
    </>
  );
}

export default Actors;
