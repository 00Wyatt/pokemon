import { ReactComponent as SearchIcon } from "../assets/search-icon.svg";

export default function SearchPokemon({ name, setName, getData, getRandomId, clear }) {
  return (
    <div className="search container">
      <div className="search-content">
        <div className="text-box">
          <p>Search for a Pokémon by name or using its National Pokédex number.</p>
        </div>
        <form className="search-form" onSubmit={(e) => { e.preventDefault() }}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <button type="submit" onClick={() => { getData(name) }}><SearchIcon /><span>Search</span></button>
        </form>
        <div className="options">
          <div className="random">
            <button onClick={getRandomId}>Surprise Me!</button>
          </div>
          <div className="clear">
            <button onClick={clear}>Clear</button>
          </div>
        </div>
      </div>
    </div>
  )
}
