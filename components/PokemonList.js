import styles from '../styles/Home.module.css';

import PokemonItem from './PokemonItem';

const PokemonList = ({ pokemons }) => {
    return (
        <div className={styles.grid}>
            {pokemons.results.map(pokemon => (
                <PokemonItem key={pokemon.name} pokemon={pokemon} />
            ))}
        </div>
    );
};

export default PokemonList;
