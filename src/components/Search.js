import { ReactComponent as SearchIcon } from "../assets/search-icon.svg";

export default function Search({ name, setName, search }) {
  return (
    <div className="search container">
      <div className="search-content">
        <div className="text-box">
          <p>Search for a Pokémon by name or using its National Pokédex number.</p>
        </div>
        <div className="search-form">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={search}><SearchIcon /><span>Search</span></button>
        </div>
      </div>
    </div>
  )
}
