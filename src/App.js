import { useState, useEffect } from "react";
import Axios from "axios";
import Header from "./components/Header";
import Search from "./components/Search";
import ShowPokemon from "./components/ShowPokemon";
import Footer from "./components/Footer";

export default function App() {
  const URL = "https://pokeapi.co/api/v2/pokemon/"
  const [loading, setLoading] = useState(false);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [foundPokemon, setFoundPokemon] = useState(false);

  const searchPokemon = async () => {
    setLoading(true);
    await Axios.get(URL + pokemonName)
      .then((res) => {
        setPokemon({
          name: pokemonName,
          species: res.data.species.name,
          img: res.data.sprites.front_default
        });
        setFoundPokemon(true);
      })
      .catch((error) => console.error(error));
    setLoading(false);
  }

  return (
    <div className="app">
      <Header />
      <main>
        <Search
          name={pokemonName}
          setName={setPokemonName}
          search={searchPokemon}
        />
        {loading ? (
          <section className="loading">
            <h2>Loading...</h2>
          </section>
        ) : (
          <>
            {foundPokemon && <ShowPokemon pokemon={pokemon} />}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
