import { ReactComponent as SearchIcon } from "../assets/search-icon.svg";

export default function SearchPokemon({ name, setName, getData, getRandomId }) {
  return (
    <div className="search container">
      <div className="search-content">
        <div className="text-box">
          <p>Search for a Pokémon by name or using its National Pokédex number.</p>
        </div>
        <div className="search-form">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={() => { getData(name) }}><SearchIcon /><span>Search</span></button>
        </div>
        <div className="random">
          <button onClick={getRandomId}>Suprise Me!</button>
        </div>
      </div>
    </div>
  )
}
