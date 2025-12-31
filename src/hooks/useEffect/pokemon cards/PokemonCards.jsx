import React from 'react';

export default function PokemonCards({ pokemonData }) {
    return (
        <li className="card">
            <figure>
                <img src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name} />
                <h2>{pokemonData.name}</h2>
                <p>Height: {pokemonData.height}</p>
                <p>Weight: {pokemonData.weight}</p>
            </figure>

            <div className="pokemon-info pokemon-highlight">
                <p>
                    Types: {pokemonData.types.map((typeInfo) => typeInfo.type.name).join(', ')}
                </p>

            </div>
        </li>
    )

}  