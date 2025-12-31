import react, { useState, useEffect } from 'react';
import './Pokemon.css';
import PokemonCards from './PokemonCards.jsx';

export default function Pokemon() {
    const [pokemon, setPokemon] = useState([]);
    const [search, setSearch] = useState("");


    const API = "https://pokeapi.co/api/v2/pokemon/";

    const fetchPokemon = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            // console.log(data);

            const detailedPokemonData = data.results.map(async (curPokemon) => {
                const res = await fetch(curPokemon.url);
                const data = await res.json();
                return data;
            })
            // console.log(detailedPokemonData);

            const allPokemonData = await Promise.all(detailedPokemonData);
            setPokemon(allPokemonData);
            console.log(allPokemonData);
        }
        catch (err) {
            console.error("Fetch error:", err);
        }
    }

    useEffect(() => {
        fetchPokemon();
    }, []);

    // search functionality

    const searchData = pokemon.filter((curPokemon) => {
        return curPokemon.name.toLowerCase().includes(search.toLowerCase());
    });

    return (

        <>
            <section className='container'>
                <header>
                    <h1>lets catch pokemon</h1>
                </header>
                <div className='search'>
                    <input type="text" placeholder="search pokemon" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <ul className='cards'>
                    {searchData.map((curPokemon) => {
                        return <li key={curPokemon.id}>

                            <PokemonCards pokemonData={curPokemon} />
                        </li>
                    })}
                </ul>
            </section>
        </>
    )
};