export default function ShowPokemon({ pokemon }) {
  return (
    <section className="display">
      <div className="info">
        <h2>{pokemon.name}</h2>
        <img src={pokemon.img} alt="Pokemon sprite" />
        <p>Species: {pokemon.species}</p>
      </div>
    </section>
  )
}
