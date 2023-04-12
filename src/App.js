import { useState, useEffect } from "react";
import Axios from "axios";
import Header from "./components/Header";
import SearchPokemon from "./components/SearchPokemon";
import ShowPokemon from "./components/ShowPokemon";
import Footer from "./components/Footer";

export default function App() {
  const URL = "https://pokeapi.co/api/v2/pokemon/";
  const HighestId = 1008;
  const [loading, setLoading] = useState(false);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [foundPokemon, setFoundPokemon] = useState(false);
  const [randId, setRandId] = useState("")

  const getPokemonData = async (pokeName) => {
    setLoading(true);
    await Axios.get(URL + pokeName.toLowerCase())
      .then((res) => {
        console.log(res)
        setPokemon({
          name: res.data.name,
          id: res.data.id,
          img: res.data.sprites.other["official-artwork"].front_default,
          types: res.data.types,
          weight: res.data.weight,
          height: res.data.height,
          abilities: res.data.abilities,
          stats: res.data.stats,
        });
        setFoundPokemon(true);
        setPokemonName(capitalise(res.data.name))
      })
      .catch((error) => console.error(error));
    setLoading(false);
  }

  const getRandomId = () => {
    let randomNum = (Math.floor(Math.random() * HighestId) + 1).toString()
    setRandId(randomNum)
  }

  useEffect(() => {
    getPokemonData(randId)
    // eslint-disable-next-line
  }, [randId])

  const capitalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const clearPokemon = () => {
    setFoundPokemon(false);
    setPokemonName("");
    setPokemon({});
  }

  const previous = () => {
    if (pokemon.id > 1) {
      getPokemonData((pokemon.id - 1).toString())
    }
  }

  const next = () => {
    if (pokemon.id !== HighestId) {
      getPokemonData((pokemon.id + 1).toString())
    }
  }

  return (
    <div className="app">
      <Header />
      <main>
        <SearchPokemon
          name={pokemonName}
          setName={setPokemonName}
          getData={getPokemonData}
          getRandomId={getRandomId}
          clear={clearPokemon}
        />
        {loading ? (
          <section className="loading">
            <h2>Loading...</h2>
          </section>
        ) : (
          <>
            {foundPokemon &&
              <ShowPokemon
                pokemon={pokemon}
                previous={previous}
                next={next}
              />
            }
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
