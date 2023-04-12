import TypeColors from "./TypeColors"

export default function ShowPokemon({ pokemon }) {
  return (
    <section className="show container">
      <div className="show-info">
        <h2>{pokemon.name} <span>#{pokemon.id}</span></h2>
        <div className="image">
          <img src={pokemon.img} alt="Pokemon sprite" />
        </div>
        <div className="types">
          <h3>Type:</h3>
          {pokemon.types.map(item => (
            <div className="type" style={{ backgroundColor: TypeColors[item.type.name] }} key={item.slot}>
              <p className="property">{item.type.name}</p>
            </div>
          ))}
        </div>
        <div className="size">
          <p>Weight: <span className="property">{(pokemon.weight * 0.1).toFixed(1)} kgs</span></p>
          <p>Height: <span className="property">{(pokemon.height * 0.1).toFixed(1)} m</span></p>
        </div>
        <div className="abilities">
          <h3>Abilities:</h3>
          {pokemon.abilities.map(item => (
            <div className="ability" key={item.slot}>
              <p className="property">{item.ability.name}</p>
            </div>
          ))}
        </div>
        <div className="stats">
          <h3>Base Stats:</h3>
          <div className="stats-list">
            {pokemon.stats.map(item => (
              <div className="stat" key={item.slot}>
                <p className="property">{item.stat.name}: {item.base_stat}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
